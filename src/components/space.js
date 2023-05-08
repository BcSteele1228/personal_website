import React from 'react';
import Particles from 'react-tsparticles';
import './space.css';
import cockpitImage from '../assets/cockpit.png';

const Space = () => {
    return (
      <div className="space">
        <Particles
          params={{
            particles: {
              number: {
                value: 5000,
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
                speed: 1,
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
                  distance: 200,
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
        <img src={cockpitImage} alt="Cockpit" />
          {/* <h1>Brady Steele's Portfolio</h1> */}
        </div>
      </div>
    );
};

export default Space;
