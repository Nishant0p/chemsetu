import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Float, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Bubble = ({ position, color, size = 0.5 }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhysicalMaterial 
        color={color} 
        roughness={0} 
        metalness={0} 
        transmission={1} 
        thickness={0.02} // Extremely thin like a soap bubble
        ior={1.1} // Air-like index of refraction
        clearcoat={1}
        clearcoatRoughness={0}
        transparent={true}
        opacity={1}
        side={THREE.DoubleSide}
        envMapIntensity={2}
      />
    </mesh>
  );
};

const DynamicBond = ({ targetRef }) => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current && targetRef.current) {
      const end = targetRef.current.position;
      const length = end.length();
      
      meshRef.current.position.copy(end).multiplyScalar(0.5);
      meshRef.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.clone().normalize());
      meshRef.current.scale.set(1, length, 1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
      <meshPhysicalMaterial 
        color="#ffffff" 
        transmission={0.8} 
        opacity={0.3} 
        transparent 
        roughness={0} 
        clearcoat={1} 
      />
    </mesh>
  );
};

const DynamicBubble = ({ color, speed, offset, radius }) => {
  const bubbleRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    // Complex orbit to simulate "bonding" activity
    const x = Math.sin(t) * radius * Math.cos(t * 0.7);
    const y = Math.cos(t * 0.8) * radius * Math.sin(t * 0.5);
    const z = Math.sin(t * 0.6) * radius;
    
    if (bubbleRef.current) {
      bubbleRef.current.position.set(x, y, z);
    }
  });

  return (
    <>
      <group ref={bubbleRef}>
        <Bubble color={color} />
      </group>
      <DynamicBond targetRef={bubbleRef} />
    </>
  );
};

const LogoMolecule = () => {
  const texture = useLoader(TextureLoader, '/chemsetu-logo.png');
  const groupRef = useRef();

  // Gentle floating for the whole molecule
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Logo Plane */}
      <mesh position={[0, 0, 0]} renderOrder={1}>
        <planeGeometry args={[1.8, 1.8]} />
        <meshBasicMaterial 
          map={texture} 
          transparent={true} 
          side={THREE.DoubleSide}
          toneMapped={false}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
    </group>
  );
};

const BrandSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 w-1 bg-primary rounded-full"></div>
              <p className="text-lg text-gray-700 font-medium">
                Your trusted partner for high-purity API Impurities and Custom Synthesis.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Established in <span className="font-semibold text-gray-900">2023 in Pune, Maharashtra</span>, ChemSetu has rapidly evolved into a premier provider of complex chemical solutions. We specialize in bridging the gap between research requirements and industrial-scale manufacturing.
            </p>
            

          </motion.div>

          {/* Right Side - 3D Molecule Logo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-inner"
          >
             <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="#2E3192" intensity={0.5} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                   <LogoMolecule />
                </Float>
                <OrbitControls enableZoom={false} autoRotate={false} />
                <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
             </Canvas>
             
             {/* Overlay Text */}
             <div className="absolute bottom-4 right-6 text-xs text-gray-400 font-mono">
                Interactive 3D Model
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BrandSection;
