import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './transition.css';

function Transition({ onComplete }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 10000;

    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const depth = 10000;

    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * window.innerWidth - window.innerWidth / 2;
      const y = Math.random() * window.innerHeight - window.innerHeight / 2;
      const z = Math.random() * depth - depth / 2;

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      const color = new THREE.Color();
      color.setHSL(Math.random(), 1.0, 0.5);

      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);

      // Animate stars
      stars.rotation.y += 0.000;

      if (camera.position.z > -3000) {
        camera.position.z -= 15;
      } else {
        onComplete();
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.remove(stars);
      renderer.dispose();
    };
  }, [onComplete]);

  return (
    <>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
      <div className="transition-background"></div>
    </>
  );
}

export default Transition;
