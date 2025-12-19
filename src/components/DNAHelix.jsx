import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const DNAStrand = () => {
  const groupRef = useRef();
  
  // Generate DNA structure data
  const dnaData = useMemo(() => {
    const count = 30; // Number of base pairs
    const radius = 1.5;
    const height = 7;
    const turns = 2.5; // Number of full rotations
    const items = [];

    for (let i = 0; i < count; i++) {
      // Calculate position along the helix
      const progress = i / count;
      const angle = progress * Math.PI * 2 * turns;
      const y = (progress * height) - (height / 2);
      
      // Coordinates for Strand A
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      
      // Coordinates for Strand B (180 degrees offset)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      items.push({
        id: i,
        y,
        rotation: -angle, // Rotation for the connecting rung
        strandA: [x1, y, z1],
        strandB: [x2, y, z2],
        colorA: '#60A5FA', // Light Blue
        colorB: '#4ADE80', // Light Green
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // 1. Auto-rotation
      groupRef.current.rotation.y += 0.004;

      // 2. Mouse Interaction (Tilt)
      // state.mouse.x/y are normalized coordinates (-1 to 1)
      const targetRotationX = state.mouse.y * 0.2; // Tilt up/down
      const targetRotationZ = -state.mouse.x * 0.2; // Tilt left/right
      
      // Smoothly interpolate current rotation to target
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.1);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotationZ, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      {dnaData.map((item) => (
        <React.Fragment key={item.id}>
          {/* Strand A Atom */}
          <mesh position={item.strandA} castShadow receiveShadow>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial 
              color={item.colorA} 
              roughness={0.2} 
              metalness={0.8} 
              transparent 
              opacity={0.6} 
            />
          </mesh>

          {/* Strand B Atom */}
          <mesh position={item.strandB} castShadow receiveShadow>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial 
              color={item.colorB} 
              roughness={0.2} 
              metalness={0.8} 
              transparent 
              opacity={0.6} 
            />
          </mesh>

          {/* Connecting Rung (Cylinder) */}
          <mesh position={[0, item.y, 0]} rotation={[0, item.rotation, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 3, 8]} />
            <meshStandardMaterial color="#e2e8f0" transparent opacity={0.3} roughness={0.1} metalness={0.5} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
};

const DNAHelix = () => {
  return (
    <div className="w-full h-[500px] lg:h-full min-h-[500px]">
      <Canvas 
        shadows
        camera={{ position: [0, 0, 8], fov: 45 }} 
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]} // Handle high DPI screens
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#60A5FA" />
        <pointLight position={[10, -5, 5]} intensity={1} color="#4ADE80" />
        
        {/* The DNA Component */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DNAStrand />
        </Float>

        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default DNAHelix;
