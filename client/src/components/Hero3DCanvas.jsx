import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleFlow() {
  const pointsRef = useRef(null);

  // Generate particles along logistics route paths
  const particleCount = 400;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Create logistics network flow lines
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 8;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      // Rotation and wave motion
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.05;

      // Mouse interactive sway
      const targetX = state.pointer.x * 0.35;
      const targetY = state.pointer.y * 0.25;
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.04;
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.04;
    }
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions} stride={3} limit={particleCount}>
        <PointMaterial
          transparent
          color="#F57C00" // Brand Orange
          size={0.075}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <ParticleFlow />
      </Canvas>
    </div>
  );
}
