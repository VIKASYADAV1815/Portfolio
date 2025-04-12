import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';

function Model({ onLoaded }) {
  const { scene } = useGLTF('/Portfolio/models/model.glb', true, (error) => {
    if (error) {
      console.error('Error loading GLB model:', error);
    }
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (scene) {
      console.log('Model loaded:', scene);
      setLoaded(true);
      onLoaded();
    }
  }, [scene, onLoaded]);

  return <primitive object={scene} />;
}

function CameraAnimation({ onEnd }) {
  const cameraRef = useRef();
  const { position } = useSpring({
    from: { position: [0, 0, 10] },
    to: { position: [0, 0, 1] },
    config: { duration: 3000 },
    onRest: onEnd,
  });

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.lerp(position.get(), 0.1);
    }
  });

  return <a.perspectiveCamera ref={cameraRef} position={position} />;
}

export default function Preloader({ onEnd }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Model onLoaded={() => setLoaded(true)} />
      {loaded && <CameraAnimation onEnd={onEnd} />}
      <OrbitControls />
    </Canvas>
  );
}