import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader, Mesh, Color, Vector3 } from 'three';
import jupiterTexture from '../assets/mars.jpeg';
import { Html } from '@react-three/drei';

const Mars = () => {
    const meshRef = useRef();
    const [textureLoaded, setTextureLoaded] = useState(false);
    const textureDay = useRef();
  
    useEffect(() => {
      const textureLoader = new TextureLoader();
      textureLoader.load(jupiterTexture, (dayTexture) => {
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
      <group position={[0, 0.85, 0]}> {/* Adjust the position here */}
        <ambientLight intensity={0.2} />
        <directionalLight color={new Color(0xffffff)} intensity={0} position={[5, 3, 5]} castShadow />
        {textureLoaded && (
          <mesh ref={meshRef} rotation={[0, Math.PI, 0]} scale={new Vector3(2, 2, 2)}> {/* Adjust the scale here */}
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial map={textureDay.current} />
          </mesh>
        )}
        {textureLoaded && (
        <Html position={[-1, 0, 0]}>
          <div className="text-3xl text-white bg-black px-2 py-1 rounded cursor-pointer">
            <a href="<PlaceHolder>">Experience</a>
          </div>
        </Html>
      )}
      </group>
    );
  };
  
  export default Mars;
  