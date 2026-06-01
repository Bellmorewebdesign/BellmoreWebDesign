'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Panels() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.25;
    // gentle mouse parallax
    const px = state.pointer.x * 0.35;
    const py = state.pointer.y * 0.25;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py, 0.05);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, px, 0.05);
  });

  const levels = [
    { y: 1.15, color: '#22d3ee', emissive: '#0e7490' },
    { y: 0, color: '#3b82f6', emissive: '#1e3a8a' },
    { y: -1.15, color: '#8b5cf6', emissive: '#4c1d95' },
  ];

  return (
    <group ref={group}>
      {levels.map((l, i) => (
        <Float key={i} speed={2} rotationIntensity={0.15} floatIntensity={0.6}>
          <RoundedBox args={[2.6, 0.55, 2.6]} radius={0.12} smoothness={4} position={[0, l.y, 0]}>
            <meshStandardMaterial
              color={l.color}
              emissive={l.emissive}
              emissiveIntensity={0.55}
              metalness={0.6}
              roughness={0.25}
            />
          </RoundedBox>
        </Float>
      ))}
    </group>
  );
}

function Particles({ count = 60 }: { count?: number }) {
  const ref = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr.push([
        r * Math.sin(phi) * Math.cos(theta),
        (Math.random() - 0.5) * 5,
        r * Math.sin(phi) * Math.sin(theta),
      ]);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.06;
  });

  return (
    <group ref={ref}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#67e8f9' : '#a78bfa'} />
        </mesh>
      ))}
    </group>
  );
}

export default function HighEndTechScene({ reduced = false }: { reduced?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      frameloop={reduced ? 'demand' : 'always'}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={120} color="#22d3ee" />
      <pointLight position={[-5, -3, 4]} intensity={90} color="#8b5cf6" />
      <pointLight position={[0, 4, -5]} intensity={70} color="#3b82f6" />
      <Panels />
      {!reduced && <Particles />}
    </Canvas>
  );
}
