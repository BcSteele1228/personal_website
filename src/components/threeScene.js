import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import Cube from './cube';

function ThreeScene() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

function Scene() {
  const { gl, camera } = useThree();

  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    const renderScene = () => {
      gl.render(<Cube ref={cubeRef} />, camera);
    };

    renderScene();

    const resizeHandler = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
      renderScene();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [gl, camera]);

  return null;
}

export default ThreeScene;
