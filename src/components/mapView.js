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

  useFrame(() => {
    const rotationSpeed = 0.002;
    earthRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={earthRef} position={[20, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(earthTexture)} />
    </mesh>
  );
};

const Jupiter = () => {
  const jupiterRef = useRef();

  useFrame(() => {
    const rotationSpeed = 0.001;
    jupiterRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={jupiterRef} position={[40, 0, 0]}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(jupiterTexture)} />
    </mesh>
  );
};

const Mars = () => {
  const marsRef = useRef();

  useFrame(() => {
    const rotationSpeed = 0.0025;
    marsRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={marsRef} position={[60, 0, 0]}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(marsTexture)} />
    </mesh>
  );
};

const Mercury = () => {
  const mercuryRef = useRef();

  useFrame(() => {
    const rotationSpeed = 0.003;
    mercuryRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={mercuryRef} position={[80, 0, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(mercuryTexture)} />
    </mesh>
  );
};

const Moon = () => {
  const moonRef = useRef();

  useFrame(() => {
    const rotationSpeed = 0.002;
    moonRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={moonRef} position={[21, 0, 0]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(moonTexture)} />
    </mesh>
  );
};

const Neptune = () => {
  const neptuneRef = useRef();

  useFrame(() => {
    const rotationSpeed = 0.0007;
    neptuneRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={neptuneRef} position={[100, 0, 0]}>
      <sphereGeometry args={[2.7, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(neptuneTexture)} />
    </mesh>
  );
};

const Saturn = () => {
  const saturnRef = useRef();

  useFrame(() => {
    const rotationSpeed = 0.0012;
    saturnRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={saturnRef} position={[120, 0, 0]}>
      <sphereGeometry args={[2.8, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(saturnTexture)} />
      <mesh>
        <ringGeometry args={[3.5, 4.5, 64]} />
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
      <sphereGeometry args={[100, 32, 32]} />
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
      <sphereGeometry args={[4, 64, 64]} />
      <meshBasicMaterial map={new THREE.TextureLoader().load(sunTexture)} />
    </mesh>
  );
};

const Uranus = () => {
  const uranusRef = useRef();

  useFrame(() => {
    const rotationSpeed = 0.0009;
    uranusRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={uranusRef} position={[140, 0, 0]}>
      <sphereGeometry args={[2.2, 32, 32]} />
      <meshLambertMaterial map={new THREE.TextureLoader().load(uranusTexture)} />
    </mesh>
  );
};

const Venus = () => {
  const venusRef = useRef();

  useFrame(() => {
    const rotationSpeed = 0.0023;
    venusRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={venusRef} position={[160, 0, 0]}>
      <sphereGeometry args={[1.7, 32, 32]} />
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
          <Moon />
        </group>
      </Canvas>
    </div>
  );
};

export default MapView;
