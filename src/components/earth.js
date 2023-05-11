import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader, Mesh, Color, Vector3 } from 'three';
import earthTexture from '../assets/earth.jpeg';

const Earth = () => {
  const meshRef = useRef();
  const [textureLoaded, setTextureLoaded] = useState(false);
  const textureDay = useRef();

  useEffect(() => {
    const textureLoader = new TextureLoader();
    textureLoader.load(earthTexture, (dayTexture) => {
      textureDay.current = dayTexture;
      setTextureLoaded(true);
    });

    return () => {
      // Clean up textures
      if (textureDay.current) textureDay.current.dispose();
    };
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001; // Adjust the rotation speed here
    }
  });

  return (
    <group position={[0, 1, 0]}>
      <ambientLight intensity={0.2} />
      <directionalLight color={new Color(0xffffff)} intensity={0} position={[5, 3, 5]} castShadow />
      {textureLoaded && (
        <mesh ref={meshRef} rotation={[0, Math.PI, 0]} scale={new Vector3(1.2, 1.2, 1.2)}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial map={textureDay.current} />
        </mesh>
      )}
    </group>
  );
};

export default Earth;
