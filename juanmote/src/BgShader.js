import * as THREE from "three";
import React, { useRef, useEffect } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { 
         shaderMaterial } from '@react-three/drei';

import glsl from "babel-plugin-glsl/macro";

export const SimpleShaderMaterial = shaderMaterial(
  { 
    uColor: new THREE.Color(0.2, 1.0, 0.5),
    iTime: 0.0,
    
  }, // Uniforms
  // Vertex shader
  glsl`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  glsl`
  varying vec2 vUv;
  void main() {
    // Definir el tamaño de los píxeles
    float pixelSize = 0.8;

    // Coordenadas de los píxeles centrados alrededor de (0, 0)
    vec2 centeredUV = vUv -0.6  ;

    // Convertir las coordenadas de fragmento a coordenadas de píxel
    vec2 pixelCoord = floor(centeredUV / pixelSize) * pixelSize;

    // Crear una grilla para definir dónde van los números
    float grid = step(0.25, mod(abs(pixelCoord.y), 0.5)) * step(0.15, mod(abs(pixelCoord.x), 0.5));
    vec3 bgColor = vec3(0.0, 0.2, 0.8);
    // Color de fondo base (negro)
    vec3 baseColor = mix(bgColor, vec3(1.0), grid); // Interpolate between black and uColor based on v
    

    gl_FragColor = vec4(baseColor, 1.0);
  }
  `
  );

  
  // Registrar el material en Three.js
extend({ SimpleShaderMaterial });

export const WaveShaderMaterial = shaderMaterial(
    /*glsl*/
    // Uniform
    { uTime:0, uColor: new THREE.Color(1.0,0.0,0.0), iResolution: new THREE.Vector2(1.0, 1.0)},
    // Vertex Shader
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
        vUv = uv;
        vec2 U2 = vUv * iResolution;
        float n2 = noise(vec3(U2 * 8.0 / iResolution.y, 0.1 * uTime));
        float v2 = sin(6.28 * 10.0 * n2);
        v2 = smoothstep(1.0, 0.0, 0.5 * abs(v2) );
        float displacement = v2 * 0.8; // Adjust the multiplier for desired height effect
  
        vec3 displacedPosition = position;
        displacedPosition.z += mix(0.8 , 0.0, v2) ; // Apply displacement to the Z position
  
  
        gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
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
        
        vec3 color = vec3(0.28, 0.16, 0.76);
        vec3 colorete = mix(vec3(0.0), color, v); // Interpolate between black and uColor based on v
  
        
  
        gl_FragColor +=  vec4(vec3(sin(colorete  )) , 1.0);
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
        <sphereGeometry attach="geometry"  args={[30, 100, 100, 1.5, Math.PI * 2]} />
        
        <waveShaderMaterial ref={materialRef} side={THREE.BackSide} emissiveIntensity={1}  />
      </mesh>
    );
  }

  export default WaveMesh;