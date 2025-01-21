import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

const ModelViewer = () => {
  // Load the 3D model
  const model = useLoader(OBJLoader, '/portfolio/codingrobot.obj');

  // Load the textures
  const albedo = useLoader(THREE.TextureLoader, '/portfolio/coding_robot_with_lap_0121074756_stylize_albedo.jpg');
  const ao = useLoader(THREE.TextureLoader, '/portfolio/coding_robot_with_lap_0121074756_stylize_ao.jpg');
  const normal = useLoader(THREE.TextureLoader, '/portfolio/coding_robot_with_lap_0121074756_stylize_normal.jpg');
  const roughness = useLoader(THREE.TextureLoader, '/portfolio/coding_robot_with_lap_0121074756_stylize_roughness.jpg');

  return (
    <Canvas
      camera={{
        position: [0, 2.5, 7], // Camera position
        fov: 45,
      }}
      style={{ height: '500px', background: '#000' }}
    >
      {/* Add Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />

      {/* Render the Model */}
      <Suspense fallback={<div>Loading 3D Model...</div>}>
        <primitive
          object={model}
          scale={3.5} // Maintain size
          position={[0, -0.5, 0]} // Center position
          rotation={[0, Math.PI / 6, 0]} // Rotate more clockwise on the Y-axis
          onUpdate={(self) => {
            // Apply textures and materials to the model
            self.traverse((child) => {
              if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                  map: albedo, // Base color texture
                  aoMap: ao, // Ambient occlusion texture
                  normalMap: normal, // Normal map texture
                  roughnessMap: roughness, // Roughness texture
                });
              }
            });
          }}
        />
      </Suspense>

      {/* Camera Controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ModelViewer;
