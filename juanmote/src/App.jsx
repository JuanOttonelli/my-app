import * as THREE from "three";
import React, { useRef, Suspense } from 'react'
import './style.css';
import { Canvas , extend, useFrame} from '@react-three/fiber';
import { Model } from './Model';
import { OrbitControls, 
         CameraControls,
         shaderMaterial } from '@react-three/drei';
import glsl from "babel-plugin-glsl/macro";



const WaveShaderMaterial = shaderMaterial(
  // Uniform
  { uTime:0, uColor: new THREE.Color(1.0,0.0,0.0), iResolution: new THREE.Vector2(1.0, 1.0)},
  // Vertex Shader
  glsl`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }` ,
  // Fragment Shader
  glsl`
  uniform float uTime;
    uniform vec2 iResolution;
    varying vec2 vUv;

    float hash(vec3 p) {
      return fract(sin(dot(p, vec3(1.0, 57.0, 113.0))) * 43758.5453);
    }

    float noise3(vec3 x) {
      vec3 p = floor(x);
      vec3 f = fract(x);
      f = f*f*(3.0 - 2.0*f); // Smoothstep

      #define hash3(p) fract(sin(1e3*dot(p,vec3(1,57,-13.7)))*4375.5453)

      return mix(
        mix(
          mix(hash3(p + vec3(0, 0, 0)), hash3(p + vec3(1, 0, 0)), f.x),
          mix(hash3(p + vec3(0, 1, 0)), hash3(p + vec3(1, 1, 0)), f.x), f.y),
        mix(
          mix(hash3(p + vec3(0, 0, 1)), hash3(p + vec3(1, 0, 1)), f.x),
          mix(hash3(p + vec3(0, 1, 1)), hash3(p + vec3(1, 1, 1)), f.x), f.y), f.z);
    }

    #define noise(x) (noise3(x) + noise3(x + 11.5)) / 2.0

    void main() {
      vec2 U = vUv * iResolution;
      float n = noise(vec3(U * 8.0 / iResolution.y, 0.1 * uTime));
      float v = sin(6.28 * 10.0 * n);
      
      v = smoothstep(1.0, 0.0, 0.5 * abs(v) / fwidth(v));
      
      vec3 color = vec3(0.0, 0.8, 0.0);
      vec3 colorete = mix(vec3(0.0), color, v); // Interpolate between black and uColor based on v

      

      gl_FragColor = vec4(vec3(sin((vUv.y + uTime )*colorete)), 1.0);
    }`
);

extend({WaveShaderMaterial});

function WaveMesh() {
  const materialRef = useRef();
  
  // Actualiza el tiempo uniformemente en cada frame
  useFrame((state, delta) => {
    materialRef.current.uTime += delta;
    materialRef.current.iResolution.set(window.innerWidth, window.innerHeight);
  });

  return (
    <mesh>
      <planeGeometry args={[60, 50]} />
      <waveShaderMaterial ref={materialRef}  />
    </mesh>
  );
}

function App() {
  const controlsRef = useRef();
  return (
    <Canvas style={{ width: '100%', height: '97vh'}} camera={{ position: [0,0,20]}} >
      <hemisphereLight color = {0xffffff} groundColor={0x000000} intensity={0.6} />
      <pointLight position={[0,0,10]} distance={20} decay={2} />
      <spotLight color={0xffffff} position={[0,0,5]} angle={Math.PI / 2} penumbra={0.1} distance={20} castShadow/>
      <OrbitControls ref={controlsRef} />
      <WaveMesh />
      <Model position={[0,0,0]} />
    </Canvas>
  );
}

export default App;