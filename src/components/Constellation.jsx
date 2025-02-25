import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Star({ position, color }) {
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Constellation({ stars }) {
  return (
    <Canvas style={{ height: '300px', width: '300px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {stars.map((star, index) => (
        <Star key={index} position={star.position} color={star.color} />
      ))}
    </Canvas>
  );
}
