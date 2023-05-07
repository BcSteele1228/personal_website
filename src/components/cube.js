import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import texture from '../assets/BS.png';

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.meshRef = React.createRef();
    this.textureLoader = new THREE.TextureLoader();
    this.time = performance.now(); // initialize time to current time
    this.isAnimating = true;
    this.state = {
      canvasSize: new THREE.Vector2(window.innerWidth, window.innerHeight),
    };
  }

  componentDidMount() {
    this.startAnimation();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.stopAnimation();
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const canvas = document.querySelector('canvas');
    this.setState({
      canvasSize: new THREE.Vector2(
        canvas.clientWidth,
        canvas.clientHeight
      ),
    });
  };

  startAnimation = () => {
    this.isAnimating = true;
    this.animate(performance.now()); // pass current time to animate method
  };

  stopAnimation = () => {
    this.isAnimating = false;
  };

  animate = (time) => {
    const meshRef = this.meshRef.current;
    if (meshRef) {
      // rotate box
      meshRef.rotation.x += 0.01;
      meshRef.rotation.y += 0.01;
    }

    if (this.isAnimating) {
      requestAnimationFrame(this.animate);
    }
  };

  render() {
    return (
      <div style={{ width: '80px', height: '80px', position: 'absolute' }}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} intensity={0.3} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minDistance={10}
            maxDistance={20}
            target={[0, 0, 0]}
          />
          <Box
            ref={this.meshRef}
            scale={[8, 8, 8]}
            position={[0, 0, 0]} // center the box
          >
            <meshStandardMaterial
              attach="material"
              map={this.textureLoader.load(texture)}
              color="white"
              roughness={0.3}
              metalness={0.5}
            />
          </Box>
        </Canvas>
      </div>
    );
  }
}

export default Cube;
