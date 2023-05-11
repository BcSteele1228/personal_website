import React from 'react';
import Particles from 'react-tsparticles';
import './space.css';
import cockpitImage from '../assets/cockpit.png';
import Earth from './earth';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';

const Space = () => {
  return (
    <div className="space">
      <Particles
        params={{
          particles: {
            number: {
              value: 7500,
              density: {
                enable: true,
                value_area: 8000,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 0.08,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 0.5,
                },
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="words">
        <img src={cockpitImage} alt="Cockpit" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
        {/* <h1>Brady Steele's Portfolio</h1> */}
      </div>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <OrbitControls enablePan={false} enableZoom={false} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Earth />
      </Canvas>
    </div>
  );
};

export default Space;
