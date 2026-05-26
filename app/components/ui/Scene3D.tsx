import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Environment, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function MorphingShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[1.6, 4]}>
        <MeshDistortMaterial
          color="#5eead4"
          emissive="#0d9488"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.85}
          distort={0.45}
          speed={1.8}
        />
      </Icosahedron>
    </Float>
  );
}

function OrbitingRing() {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.z = s.clock.elapsedTime * 0.3;
    ref.current.rotation.x = Math.PI / 2.5;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.6, 0.015, 16, 100]} />
      <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.6} />
    </mesh>
  );
}

export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#5eead4" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#a78bfa" />
        <pointLight position={[5, -3, 2]} intensity={1} color="#fbbf24" />
        <MorphingShape />
        <OrbitingRing />
        <Sparkles count={80} scale={6} size={2} speed={0.4} color="#5eead4" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
