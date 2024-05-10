import React, { useRef } from 'react'
import './style.css';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { OrbitControls, CameraControls } from '@react-three/drei';


function App() {
  const controlsRef = useRef();
  return (
    <Canvas style={{ width: '100%', height: '97vh'}} camera={{ position: [0,0,20]}} >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls ref={controlsRef} />
      <Model position={[0,0,0]} />
    </Canvas>
  );
}

export default App;