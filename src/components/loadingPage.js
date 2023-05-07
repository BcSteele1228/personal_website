import React, { useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import characterImage from '../assets/character.png';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function LoadingPage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    let interval;
    let progress = 0;

    const updateProgress = () => {
      progress += 0.01;
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
      <div className="particles-container">
        <Particles options={particleOptions} init={particlesInit} loaded={onParticlesLoaded} />
      </div>
      <div className="relative z-10" style={{ display: particlesLoaded ? 'flex' : 'none' }}>
        {loading ? (
          <div className="flex flex-col justify-center items-center w-full h-full">
            <img src={characterImage} alt="Character" className="h-64 animate-bounce" />
            <p className="text-lg mt-4" style={{ color: "white" }}>Loading...</p>
            <div className="w-1/2 h-2 bg-gray-200 mt-4 rounded-full">
              <div className="h-2 bg-pink-400 rounded-full" style={{ width: `${progress * 100}%` }}></div>
            </div>
            <div className="text-white mt-2">{Math.round(progress * 100)}%</div>
          </div>
        ) : (
          <Canvas className="w-full h-full">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh position={[0, 0, 0]}>
              <sphereBufferGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          </Canvas>
        )}
      </div>
    </div>
  );
  
  
}

export default LoadingPage;
