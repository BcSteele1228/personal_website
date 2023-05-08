import React from 'react';
import Particles from 'react-tsparticles';
import './space.css';

const Space = () => {
    return (
      <Particles
        className="space"
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
            // Make some particles static to spell out the word "SPACE"
            // Set their position so that they form the letters of the word
            // The position is relative to the center of the canvas, which is at (x: 0, y: 0)
            // You can adjust the position values to change the layout
            array: [
              {
                position: {
                  x: -80,
                  y: 0,
                },
                size: {
                  value: 10,
                },
                move: {
                  enable: false,
                },
              },
              {
                position: {
                  x: -40,
                  y: 0,
                },
                size: {
                  value: 10,
                },
                move: {
                  enable: false,
                },
              },
              {
                position: {
                  x: 0,
                  y: 0,
                },
                size: {
                  value: 10,
                },
                move: {
                  enable: false,
                },
              },
              {
                position: {
                  x: 40,
                  y: 0,
                },
                size: {
                  value: 10,
                },
                move: {
                  enable: false,
                },
              },
              {
                position: {
                  x: 80,
                  y: 0,
                },
                size: {
                  value: 10,
                },
                move: {
                  enable: false,
                },
              },
            ],
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
      >
    </Particles>
  );
};

export default Space;
