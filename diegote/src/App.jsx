import React, { useRef } from 'react'
import './style.css';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { OrbitControls } from '@react-three/drei';
import { PointLight, SpotLight } from 'three';

function App() {
  const controlsRef = useRef();
  
  return (
    <Canvas style={{ width: '100%', height: '97vh'}} camera={{ position: [0,0,40]}} >
      {/* Luz principal */}
      <spotLight position={[10, 10, 20]} angle={0.5} penumbra={0.2} intensity={1} castShadow />
      
      {/* Luz de ambiente */}
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Luz de relleno */}
      <pointLight position={[0, 0, 10]} intensity={0.5} />
      
      <OrbitControls ref={controlsRef} />
      <Model position={[0,0,0]} />
    </Canvas>
  );
}

export default App;
