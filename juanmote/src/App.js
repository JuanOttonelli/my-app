import React, { useRef, useState, useEffect } from 'react'
import './style.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Model } from './Model.jsx';
import { OrbitControls } from '@react-three/drei';
import WaveMesh from './BgShader.js';
import { useGLTF, SpotLight, useDepthBuffer, PerspectiveCamera } from '@react-three/drei'
import * as THREE from "three";
import { Bloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card }
  from 'react-bootstrap';
import { Resizable } from 'react-resizable';
import { MathUtils } from 'three';

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
  const light7Ref = useRef();
  const light8Ref = useRef();

  const [hasExecuted, setHasExecuted] = useState(false);
  const [targetPositions, setTargetPositions] = useState({ light1X: 20, light2X: -20 });
  const [hasExecutedI, setHasExecutedI] = useState(false);
  const [targetIntensities, setTargetIntensities] = useState({ light1I: 0, light2I: 0, light3I: 0, light4I: 0, light5I: 0, light6I: 0, light7I: 0, light8I: 0 });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (t > 2 && !hasExecutedI) {
      setTargetIntensities({ light1I: 0, light2I: 0, light3I: 7000, light4I: 7000, light5I: 7000, light6I: 5000, light7I: 3000, light8I: 3000 });
      setHasExecutedI(true);
    }
    // Update light positions over time
    if (t > 5 && !hasExecuted) {
      setTargetIntensities({ light1I: 1500, light2I: 1000, light3I: 7000, light4I: 7000, light5I: 7000, light6I: 5000, light7I: 3000, light8I: 3000 });
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
    if (light7Ref.current) {
      light7Ref.current.intensity = lerp(light7Ref.current.intensity, targetIntensities.light7I, 0.01);
    }
    if (light8Ref.current) {
      light8Ref.current.intensity = lerp(light8Ref.current.intensity, targetIntensities.light8I, 0.01);
    }
  });

  const recorteColor = new THREE.Color("rgb(255, 255, 0)");

  return (
    <>
      <spotLight ref={light1Ref} color={0xFFFFFF} position={[20, 0, 15]} angle={Math.PI / 4} attenuation={1} anglePower={4} penumbra={1} distance={30} castShadow power={0} />
      <spotLight ref={light2Ref} color={0xFFFFFF} position={[-20, 0, 15]} angle={Math.PI / 4} attenuation={1} anglePower={4} penumbra={1} distance={20} castShadow power={0} />
      <SpotLight ref={light3Ref} color={0xFFFFFF} position={[0, 10, -7]} angle={Math.PI} attenuation={1} anglePower={4} penumbra={1} distance={20} castShadow power={0} />
      <SpotLight ref={light7Ref} color={0xFFFFFF} position={[-11, 10, -9]} angle={Math.PI} attenuation={1} anglePower={4} penumbra={1} distance={20} castShadow power={0} />
      <SpotLight ref={light8Ref} color={0xFFFFFF} position={[11, 10, -9]} angle={Math.PI} attenuation={1} anglePower={4} penumbra={1} distance={20} castShadow power={0} />
      <SpotLight ref={light4Ref} color={recorteColor} position={[0, -17, 6]} angle={Math.PI} attenuation={1} anglePower={20} penumbra={1} distance={20} castShadow power={0} />
      <SpotLight ref={light5Ref} color={recorteColor} position={[23, -9, 5]} angle={Math.PI / 4} attenuation={1} anglePower={20} penumbra={1} distance={20} castShadow power={0} />
      <SpotLight ref={light6Ref} color={recorteColor} position={[-23, -9, 5]} angle={Math.PI / 4} attenuation={1} anglePower={20} penumbra={1} distance={20} castShadow power={0} />
    </>
  );
}




function App() {
  const canvasRef = useRef();
  const [aspect, setAspect] = useState(1);
  const camera = new THREE.PerspectiveCamera();
  const fov = 50;
  const planeAspectRatio = 16 / 9;
  const calculateAspect = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const value = 35 * (1 / (width/800 ))
    
    
    
    return value;
  };

  useEffect(() => {
    // Calcular el aspecto inicial al cargar la página
    const initialAspect = calculateAspect();
    
    setAspect(initialAspect);

    const handleResize = () => {
      // Calcular el aspecto al redimensionar la ventana
      const newAspect = calculateAspect();
      
      setAspect(newAspect);
    };

    // Suscribirse al evento de redimensionamiento de la ventana
    window.addEventListener('resize', handleResize);

    // Limpia el evento de redimensionamiento cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (

    <Canvas
      className='canvasRef'
      shadows
      dpr={[1, 1.5]}
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 35], fov: 50, near: 1 }}
    >
      <PerspectiveCamera makeDefault={true} position={[0,0,aspect]} fov={50}/>
      <OrbitControls />
      <MovingLights />
      <ambientLight intensity={0.35} />
      <WaveMesh />

      <Model position={[0, 0, 0]} />


    </Canvas>

  );

}

export default App;