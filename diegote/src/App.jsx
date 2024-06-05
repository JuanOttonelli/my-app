import React, { useRef } from 'react'
import './style.css';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { OrbitControls, CameraControls } from '@react-three/drei';
import { PointLight } from 'three';

function App() {
  const controlsRef = useRef();
  
  return (
    <Canvas style={{ width: '100%', height: '97vh'}} camera={{ position: [0,0,40]}} >
      {/* Agregar luces internas */}
      <pointLight color={0xFFFFFF} intensity={1} position={[0, 0, 0]} />
      
      {/* Otros tipos de luces */}
      {/* <pointLight position={[-10,-7,0]} distance={20} decay={2} /> */}
      {/* <spotLight color={0xFFFFFF} position={[0, 0, 0]} angle={Math.PI / 4} attenuation={1} anglePower={4} penumbra={1} distance={30} castShadow power={0} /> */}
      {/* <spotLight color={0xffffff} position={[0,0,0]} angle={Math.PI / 2} penumbra={0.1} distance={20} castShadow/> */}
      {/* <spotLight color={0xffffff} position={[0,0,0]} angle={Math.PI / 2} penumbra={0.1} distance={200} castShadow/> */}
      
      <OrbitControls ref={controlsRef} />
      <Model position={[0,0,0]} />
    </Canvas>
  );
}

export default App;
