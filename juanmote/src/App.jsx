import React, {useRef, useState} from 'react'
import './style.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { Model } from './Model';
import { OrbitControls} from '@react-three/drei';
import WaveMesh from './BgShader.js';
import { useGLTF, SpotLight, useDepthBuffer } from '@react-three/drei'
import * as THREE from "three";
import { Bloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'

function lerp(from, to, speed) {
  const r = (1 - speed) * from + speed * to
  return Math.abs(from - to) < 0.001 ? to : r
}

function MovingLights() {
  const light1Ref = useRef();
  const light2Ref = useRef();
  const light3Ref = useRef();
  const light4Ref = useRef();
  const light5Ref = useRef();
  const light6Ref = useRef();
  const [hasExecuted, setHasExecuted] = useState(false);
  const [targetPositions, setTargetPositions] = useState({ light1X: 20, light2X: -20 });
  const [hasExecutedI, setHasExecutedI] = useState(false);
  const [targetIntensities, setTargetIntensities] = useState({light1I: 0, light2I: 0, light3I: 0, light4I: 0,light5I: 0, light6I: 0 });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (t > 2 && !hasExecutedI) {
      setTargetIntensities({light1I: 0, light2I: 0, light3I: 7000, light4I: 7000,light5I: 7000, light6I: 7000  });
      setHasExecutedI(true);
    }
    // Update light positions over time
    if (t > 5 && !hasExecuted) {
      setTargetIntensities({light1I: 1500, light2I: 1000, light3I: 7000, light4I: 7000,light5I: 7000, light6I: 7000  });
      setTargetPositions({ light1X: -7, light2X: 0 });
      setHasExecuted(true);
    }

    // Interpolate positions over time
    if (light1Ref.current) {
      light1Ref.current.position.x = lerp(light1Ref.current.position.x, targetPositions.light1X, 0.01);
      light1Ref.current.intensity = lerp(light1Ref.current.intensity, targetIntensities.light1I, 0.01);

    }

    if (light2Ref.current) {
      light2Ref.current.position.x = lerp(light2Ref.current.position.x, targetPositions.light2X, 0.01);
      light2Ref.current.intensity = lerp(light1Ref.current.intensity, targetIntensities.light2I, 0.01);
    }
    if (light3Ref.current) {
      light3Ref.current.intensity = lerp(light3Ref.current.intensity, targetIntensities.light3I, 0.01);
    }
    if (light4Ref.current) {
      light4Ref.current.intensity = lerp(light4Ref.current.intensity, targetIntensities.light4I, 0.01);
    }
    if (light5Ref.current) {
      light5Ref.current.intensity = lerp(light5Ref.current.intensity, targetIntensities.light5I, 0.01);
    }
    if (light6Ref.current) {
      light6Ref.current.intensity = lerp(light6Ref.current.intensity, targetIntensities.light6I, 0.01);
    }
  });

  const recorteColor = new THREE.Color("rgb(255, 0, 0)");

  return (
    <>
      <spotLight ref={light1Ref} color={0xFFFFFF} position={[20, 0, 15]} angle={Math.PI / 4} attenuation={1} anglePower={4} penumbra={1} distance={30} castShadow power={0} />
      <spotLight ref={light2Ref} color={0xFFFFFF} position={[-20, 0, 15]} angle={Math.PI / 4} attenuation={1} anglePower={4} penumbra={1} distance={20} castShadow power={0} />
      <spotLight ref={light3Ref} color={recorteColor} position={[0, 10, -15]} angle={Math.PI / 4} attenuation={1} anglePower={4} penumbra={1} distance={20} castShadow power={0} />
      <spotLight ref={light4Ref} color={recorteColor} position={[0, -17, 6]} angle={Math.PI} attenuation={1} anglePower={4} penumbra={1} distance={20} castShadow power={0} />
      <spotLight ref={light5Ref} color={recorteColor} position={[23, 0, 7]} angle={Math.PI / 4} attenuation={1} anglePower={4} penumbra={1} distance={20} castShadow power={0} />
      <spotLight ref={light6Ref} color={recorteColor} position={[-23, 0, 7]} angle={Math.PI / 4} attenuation={1} anglePower={4} penumbra={1} distance={20} castShadow power={0} />
    </>
  );
}
  

function App() {
  
  const recorteColor = new THREE.Color("rgb(200, 0, 0)");
  return (
    <Canvas shadows dpr={[1, 1.5]} style={{ width: '100%', height: '97vh'}} camera={{  position: [0,0,40], fov: 50, near: 1, far: 200}} >
      <fog attach="fog" args={['#202020', 5, 200]} />

      <MovingLights/>
      <ambientLight intensity={0.15} />
      <OrbitControls />
      <WaveMesh />
      <Bloom intensity={1.0} // The bloom intensity.
    blurPass={undefined} // A blur pass.
    kernelSize={KernelSize.LARGE} // blur kernel size
    luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.025} 
    mipmapBlur={false} // Enables or disables mipmap blur.
    resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
    resolutionY={Resolution.AUTO_SIZE} />
      <Model position={[0,0,0]} />
    </Canvas>
  );
}

export default App;