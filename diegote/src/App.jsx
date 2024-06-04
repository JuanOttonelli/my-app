import React, { useRef } from 'react'
import './style.css';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { OrbitControls, CameraControls } from '@react-three/drei';



function App() {
  const controlsRef = useRef();
  return (
    <Canvas style={{ width: '100%', height: '97vh'}} camera={{ position: [0,0,40]}} >
      <hemisphereLight color = {0xffffff} groundColor={0x000000} intensity={1} />
      <pointLight position={[0,0,10]} distance={20} decay={2} />
      <spotLight color={0xffffff} position={[0,0,5]} angle={Math.PI / 2} penumbra={0.1} distance={20} castShadow/>
      <spotLight color={0xffffff} position={[0,0,0]} angle={Math.PI / 2} penumbra={0.1} distance={20} castShadow/>
      <OrbitControls ref={controlsRef} />
      <Model position={[-10,0,0]} />
    </Canvas>
  );
}

export default App;