import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import helvetiker_regular from './fonts/helvetiker_regular.typeface.json';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { useTransition } from 'react';


const Cube = () => {
  const font = useLoader(FontLoader, helvetiker_regular);
  const [isTransitioning, startTransition] = useTransition({ timeoutMs: 1000 });

  const textMaterial = startTransition(() => new THREE.MeshBasicMaterial({ color: 0xffffff }));

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshFaceMaterial
        args={[
          new THREE.MeshBasicMaterial({ color: 0xff0000 }), // front
          new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // back
          new THREE.MeshBasicMaterial({ color: 0x0000ff }), // top
          new THREE.MeshBasicMaterial({ color: 0xffff00 }), // bottom
          new THREE.MeshBasicMaterial({ color: 0xff00ff }), // right
          new THREE.MeshBasicMaterial({ color: 0x00ffff }) // left
        ]}
      />
      {isTransitioning ? null : (
        <>
          {startTransition(() => (
            <Text
              font={font}
              size={0.15}
              height={0.05}
              curveSegments={12}
              position={[-0.45, 0.3, 0.51]}
              material={textMaterial}
            >
              About Me
            </Text>
          ))}
          {startTransition(() => (
            <Text
              font={font}
              size={0.15}
              height={0.05}
              curveSegments={12}
              position={[-0.45, -0.3, 0.51]}
              material={textMaterial}
            >
              Projects
            </Text>
          ))}
          {startTransition(() => (
            <Text
              font={font}
              size={0.15}
              height={0.05}
              curveSegments={12}
              position={[0.51, 0.3, -0.45]}
              rotation={[0, Math.PI / 2, 0]}
              material={textMaterial}
            >
              Contact Me
            </Text>
          ))}
          {startTransition(() => (
            <Text
              font={font}
              size={0.15}
              height={0.05}
              curveSegments={12}
              position={[-0.51, 0.3, -0.45]}
              rotation={[0, Math.PI / 2, 0]}
              material={textMaterial}
            >
              Resume
            </Text>
          ))}
          {startTransition(() => (
            <Text
              font={font}
              size={0.15}
              height={0.05}
              curveSegments={12}
              position={[0.51, -0.3, -0.45]}
              rotation={[0, Math.PI / 2, 0]}
              material={textMaterial}
      >
        Skills
      </Text>
    ))}
  </>
)}

    </mesh>
  );
};

export default Cube;
