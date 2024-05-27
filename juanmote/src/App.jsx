import React from 'react'
import './style.css';
import { Canvas } from '@react-three/fiber';
import { Model } from './Model';
import { OrbitControls} from '@react-three/drei';
import WaveMesh from './BgShader.js';




function App() {
  return (
    <Canvas style={{ width: '100%', height: '97vh'}} camera={{ position: [0,0,20]}} >
      <hemisphereLight color = {0xffffff} groundColor={0x000000} intensity={0.3} />
      <spotLight color={0xffffff} position={[5,0,7]} angle={Math.PI *5 } penumbra={0.1} distance={20} castShadow power={50}/>
      <spotLight color={0xffffff} position={[-5,0,7]} angle={Math.PI *5 } penumbra={0.1} distance={20} castShadow power={50}/>
      
      <OrbitControls />
      <WaveMesh />
      <Model position={[0,0,0]} />
    </Canvas>
  );
}

export default App;