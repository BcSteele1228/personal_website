import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import characterImage from '../assets/astronaut.png';

function Character({ speed }) {
  const meshRef = useRef();
  const [upward, setUpward] = useState(true);
  const [position, setPosition] = useState(0);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const mesh = meshRef.current;

    if (upward) {
      setPosition((prevPosition) => prevPosition + speed);
      mesh.position.y = position;
      if (position >= 0.5) {
        setUpward(false);
      }
    } else {
      setPosition((prevPosition) => prevPosition - speed);
      mesh.position.y = position;
      if (position <= -0.5) {
        setUpward(true);
      }
    }
  });

  const texture = useLoader(TextureLoader, characterImage);

  return (
    <group>
      <mesh ref={meshRef}>
        <boxBufferGeometry args={[5, 5, 0.1]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    </group>
  );
}

function LoadingPage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    let interval;
    let progress = 0;

    const updateProgress = () => {
      progress += 0.006;
      setProgress(progress);

      if (progress >= 1) {
        clearInterval(interval);
        setLoading(false);
      }
    };

    interval = setInterval(updateProgress, 39);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const onParticlesLoaded = useCallback(() => {
    setParticlesLoaded(true);
  }, []);

  const particleOptions = {
    background: {
      color: {
        value: '#ffffff',
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ['#aa73ff', '#f8c210', '#83d238', '#33b1f8'],
      },
      links: {
        color: 'random',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        bounce: false,
        direction: 'none',
        enable: true,
        outModes: {
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out',
        },
        speed: 2,
        trail: {
          enable: true,
          fillColor: '#000',
          length: 10,
        },
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: true,
        value: 5,
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="particles-container" style={{ display: particlesLoaded ? 'block' : 'none' }}>
        <Particles options={particleOptions} init={particlesInit} loaded={onParticlesLoaded} />
      </div>
      {loading ? (
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <Canvas className="w-full h-full">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <group>
              <mesh className="animate-float motion-safe">
                <Character speed={0.01} />
              </mesh>
            </group>
          </Canvas>
          <p className="text-lg mt-4" style={{ color: 'white' }}>
            Loading Brady's Portfolio...
          </p>
          <div className="w-1/4 h-2 bg-gray-200 mt-4 rounded-full">
            <div className="h-2 bg-pink-400 rounded-full" style={{ width: `${progress * 100}%` }}></div>
          </div>
          <div className="text-white mt-2">{Math.round(progress * 100)}%</div>
        </div>
      ) : (
        <div className="w-full h-full" style={{ position: 'absolute' }}>
          <Canvas className="w-full h-full">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
          </Canvas>
        </div>
      )}
    </div>
  );
}

export default LoadingPage;
