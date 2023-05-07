import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import texture from '../assets/BS.svg';

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.meshRef = React.createRef();
    this.textureLoader = new THREE.TextureLoader();
    this.time = performance.now(); // initialize time to current time
    this.isAnimating = true;
    this.direction = new THREE.Vector3(0, 0, 0);
    this.speed = 0.01;
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
    this.setState({
      canvasSize: new THREE.Vector2(
        this.gl.domElement.clientWidth,
        this.gl.domElement.clientHeight
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

    // update position
    const position = meshRef.position;
    const halfWidth = meshRef.scale.x;
    const halfHeight = meshRef.scale.y;
    const canvasHalfWidth = this.state.canvasSize.x / 2;
    const canvasHalfHeight = this.state.canvasSize.y / 2;

    // // calculate new position
    // position.addScaledVector(this.direction, this.speed);

    // // check if cube hits screen edge
    // if (position.x + halfWidth >= canvasHalfWidth) {
    //   position.x = canvasHalfWidth - halfWidth;
    //   this.direction.setX(-Math.abs(this.direction.x)); // bounce off right edge
    // } else if (position.x - halfWidth <= -canvasHalfWidth) {
    //   position.x = -canvasHalfWidth + halfWidth;
    //   this.direction.setX(Math.abs(this.direction.x)); // bounce off left edge
    // }
    // if (position.y + halfHeight >= canvasHalfHeight) {
    //   position.y = canvasHalfHeight - halfHeight;
    //   this.direction.setY(-Math.abs(this.direction.y)); // bounce off top edge
    // } else if (position.y - halfHeight <= -canvasHalfHeight) {
    //   position.y = -canvasHalfHeight + halfHeight;
    //   this.direction.setY(Math.abs(this.direction.y)); // bounce off bottom edge
    // }

    // // update direction vector
    // if (position.x + halfWidth >= canvasHalfWidth || position.x - halfWidth <= -canvasHalfWidth) {
    //   this.direction.setX(-Math.abs(this.direction.x)); // bounce off edge
    // }
    // if (position.y + halfHeight >= canvasHalfHeight || position.y - halfHeight <= -canvasHalfHeight) {
    //   this.direction.setY(-Math.abs(this.direction.y)); // bounce off edge
    // }
  }

  if (this.isAnimating) {
    requestAnimationFrame(this.animate);
  }
};

  
    
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} intensity={0.3} />
          <Box ref={this.meshRef} scale={[2, 2, 2]} position={[0, 2, 0]}>
            <meshStandardMaterial
              attach="material"
              map={this.textureLoader.load(texture)}
              color="white"
              roughness={0.3}
              metalness={0.5}
            />
          </Box>
          <OrbitControls />
        </Canvas>
      </div>
    );
  }
}

export default Cube;
