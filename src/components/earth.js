import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader, Mesh, Color } from 'three';
import earthTexture from '../assets/earth.jpeg';
import earthTextureNight from '../assets/earthNight.jpeg';

const Earth = () => {
  const meshRef = useRef();
  const [texturesLoaded, setTexturesLoaded] = useState(false);
  const textureDay = useRef();
  const textureNight = useRef();

  useEffect(() => {
    const textureLoader = new TextureLoader();
    textureLoader.load(earthTexture, (dayTexture) => {
      textureDay.current = dayTexture;
      textureLoader.load(earthTextureNight, (nightTexture) => {
        textureNight.current = nightTexture;
        setTexturesLoaded(true);
      });
    });

    return () => {
      // Clean up textures
      if (textureDay.current) textureDay.current.dispose();
      if (textureNight.current) textureNight.current.dispose();
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.2} />
      <directionalLight color={new Color(0xffffff)} intensity={0} position={[5, 3, 5]} castShadow />
      {texturesLoaded && (
        <mesh ref={meshRef} rotation={[0, Math.PI, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial map={textureDay.current} />
          <shaderMaterial
            vertexShader={`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `}
            fragmentShader={`
              uniform sampler2D textureDay;
              uniform sampler2D textureNight;
              varying vec2 vUv;
              void main() {
                vec4 colorDay = texture2D(textureDay, vUv);
                vec4 colorNight = texture2D(textureNight, vec2(1.0 - vUv.x, vUv.y));
                vec4 finalColor;
                if (vUv.x < 0.5) {
                  finalColor = colorDay;
                } else {
                  float mixFactor = smoothstep(0.5, 0.55, vUv.x);
                  finalColor = mix(colorDay, colorNight, mixFactor);
                }
                gl_FragColor = finalColor;
              }
            `}
            uniforms={{
              textureDay: { value: textureDay.current },
              textureNight: { value: textureNight.current },
            }}
          />
        </mesh>
      )}
    </group>
  );
};

export default Earth;
