import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthTexture from '../assets/earth.jpeg';
import jupiterTexture from '../assets/jupiter.png';
import marsTexture from '../assets/mars.jpeg';
import mercuryTexture from '../assets/mercury.png';
import moonTexture from '../assets/moon.jpeg';
import neptuneTexture from '../assets/neptune.jpeg';
import saturnTexture from '../assets/saturn.jpeg';
import saturnRingsTexture from '../assets/saturnRings.png';
import starsTexture from '../assets/stars.jpeg';
import sunTexture from '../assets/sun.jpeg';
import uranusTexture from '../assets/uranus.jpeg';
import venusTexture from '../assets/venus.jpeg';
import './mapView.css';

extend({ OrbitControls });

const Earth = () => {
  const earthRef = useRef();

  useFrame(({ clock }) => {
    const orbitRadius = 30;
    const orbitSpeed = 0.012;
    const rotationSpeed = 0.003;

    const angle = clock.getElapsedTime() * orbitSpeed;
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;

    earthRef.current.position.set(x, 0, z);
    earthRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(earthTexture)} />
    </mesh>
  );
};

const Jupiter = () => {
  const jupiterRef = useRef();

  useFrame(({ clock }) => {
    const orbitRadius = 45;
    const orbitSpeed = 0.01;
    const rotationSpeed = 0.0015;

    const angle = clock.getElapsedTime() * orbitSpeed;
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;

    jupiterRef.current.position.set(x, 0, z);
    jupiterRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={jupiterRef}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(jupiterTexture)} />
    </mesh>
  );
};

const Mars = () => {
  const marsRef = useRef();

  useFrame(({ clock }) => {
    const orbitRadius = 55;
    const orbitSpeed = 0.017;
    const rotationSpeed = 0.003;

    const angle = clock.getElapsedTime() * orbitSpeed;
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;

    marsRef.current.position.set(x, 0, z);
    marsRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={marsRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(marsTexture)} />
    </mesh>
  );
};

const Mercury = () => {
  const mercuryRef = useRef();

  useFrame(({ clock }) => {
    const orbitRadius = 20;
    const orbitSpeed = 0.02;
    const rotationSpeed = 0.004;

    const angle = clock.getElapsedTime() * orbitSpeed;
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;

    mercuryRef.current.position.set(x, 0, z);
    mercuryRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={mercuryRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(mercuryTexture)} />
    </mesh>
  );
};

// const Moon = () => {
//   const moonRef = useRef();

//   useFrame(({ clock }) => {
//     const orbitRadius = 15;
//     const orbitSpeed = 0.02;
//     const rotationSpeed = 0.004;

//     const angle = clock.getElapsedTime() * orbitSpeed;
//     const x = Math.cos(angle) * orbitRadius;
//     const z = Math.sin(angle) * orbitRadius;

//     moonRef.current.position.set(x, 0, z);
//     moonRef.current.rotation.y += rotationSpeed;
//   });

//   return (
//     <mesh ref={moonRef}>
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshLambertMaterial map={new THREE.TextureLoader().load(moonTexture)} />
//     </mesh>
//   );
// };

const Neptune = () => {
  const neptuneRef = useRef();

  useFrame(({ clock }) => {
    const orbitRadius = 85;
    const orbitSpeed = 0.005;
    const rotationSpeed = 0.0008;

    const angle = clock.getElapsedTime() * orbitSpeed;
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;

    neptuneRef.current.position.set(x, 0, z);
    neptuneRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={neptuneRef}>
      <sphereGeometry args={[4.5, 64, 64]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(neptuneTexture)} />
    </mesh>
  );
};

const Saturn = () => {
  const saturnRef = useRef();

  useFrame(({ clock }) => {
    const orbitRadius = 105;
    const orbitSpeed = 0.008;
    const rotationSpeed = 0.001;

    const angle = clock.getElapsedTime() * orbitSpeed;
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;

    saturnRef.current.position.set(x, 0, z);
    saturnRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={saturnRef}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(saturnTexture)} />
      <mesh>
        <ringGeometry args={[6, 8, 64]} />
        <meshLambertMaterial
          map={new THREE.TextureLoader().load(saturnRingsTexture)}
          side={THREE.DoubleSide}
          transparent
          opacity={0.8}
        />
      </mesh>
    </mesh>
  );
};

const Stars = () => {
  const starsRef = useRef();

  useFrame(() => {
    starsRef.current.rotation.y += 0.0005;
  });

  return (
    <mesh ref={starsRef}>
      <sphereGeometry args={[200, 64, 64]} />
      <meshBasicMaterial map={new THREE.TextureLoader().load(starsTexture)} side={THREE.BackSide} />
    </mesh>
  );
};

const Sun = () => {
  const sunRef = useRef();

  useFrame(() => {
    sunRef.current.rotation.y += 0.0008;
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[10, 64, 64]} />
      <meshBasicMaterial map={new THREE.TextureLoader().load(sunTexture)} />
    </mesh>
  );
};

const Uranus = () => {
  const uranusRef = useRef();

  useFrame(({ clock }) => {
    const orbitRadius = 145;
    const orbitSpeed = 0.006;
    const rotationSpeed = 0.0009;

    const angle = clock.getElapsedTime() * orbitSpeed;
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;

    uranusRef.current.position.set(x, 0, z);
    uranusRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={uranusRef}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(uranusTexture)} />
    </mesh>
  );
};

const Venus = () => {
  const venusRef = useRef();

  useFrame(({ clock }) => {
    const orbitRadius = 160;
    const orbitSpeed = 0.016;
    const rotationSpeed = 0.003;

    const angle = clock.getElapsedTime() * orbitSpeed;
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;

    venusRef.current.position.set(x, 0, z);
    venusRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={venusRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(venusTexture)} />
    </mesh>
  );
};

const MapView = () => {
  const controlsRef = useRef();

  return (
    <div className="mapView-container">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 180], fov: 60 }}
        onCreated={({ gl, scene, camera }) => {
          gl.setClearColor(new THREE.Color('#000000'));
          const controls = new OrbitControls(camera, gl.domElement);
          controls.target.set(0, 0, 0);
          controlsRef.current = controls;
          controlsRef.current.update();
          scene.add(controlsRef.current);
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />

        <group>
          <Stars />
          <Sun />
          <Mercury />
          <Venus />
          <Earth />
          <Mars />
          <Jupiter />
          <Saturn />
          <Uranus />
          <Neptune />
          {/* <Moon /> */}
        </group>
      </Canvas>
    </div>
  );
};

export default MapView;
