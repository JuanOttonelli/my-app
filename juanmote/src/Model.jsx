
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { SimpleShaderMaterial} from './BgShader';
import { MeshStandardMaterial } from 'three';
import { vec3 } from 'three/examples/jsm/nodes/Nodes.js';
import * as THREE from "three";

export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/denadamakina.glb')

  const [switchesArray, setSwitchesArray] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
   

  const springProps = {
    1: useSpring({ springs: switchesArray[1] ? -0.1 : 0.0, config: { tension: 170, friction: 26 } }),
    2: useSpring({ springs: switchesArray[2] ? -0.1 : 0.0, config: { tension: 170, friction: 26 } }),
    3: useSpring({ springs: switchesArray[3] ? -0.1 : 0.0, config: { tension: 170, friction: 26 } }),
    4: useSpring({ springs: switchesArray[4] ? -0.1 : 0.0, config: { tension: 170, friction: 26 } }),
    5: useSpring({ springs: switchesArray[5] ? -0.1 : 0.0, config: { tension: 170, friction: 26 } }),
    6: useSpring({ springs: switchesArray[6] ? -0.1 : 0.0, config: { tension: 170, friction: 26 } }),
  
  };

  const handyHandle = (state, ido) => {
    setSwitchesArray(prevState => ({
      ...prevState,
      [ido]: state,
    }));
  };

  const material = new MeshStandardMaterial({ color: "Indigo" });
  const materialLCD = new MeshStandardMaterial({ color: new THREE.Color("Black") });
  /*
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = 0.5*Math.sin(0.1*clock.getElapsedTime())
  })*/

  return (
    <group {...props}  ref={groupRef} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button.geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Button_(1)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Button_(1)_(1)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Button_(1)_(1)_(1)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Button_(1)_(2)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Button_(2)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Knob_2.geometry}
        material={materialLCD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Knob_2_(1)'].geometry}
        material={materialLCD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Knob_2_(1)_(1)'].geometry}
        material={materialLCD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Knob_2_(2)'].geometry}
        material={materialLCD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Knob_2_(2)_(1)'].geometry}
        material={materialLCD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LCD_ASM_1.geometry}
          scale={1}
        ><simpleShaderMaterial /> </mesh>
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LCD_ASM_2.geometry}
          material={materialLCD}
        />
      </group>
      <group>
          <animated.mesh
            castShadow
            geometry={nodes.SwitchKeycap_v6.geometry}
            material={material}
            rotation={[Math.PI / 2, 0, 0]}
            
            position-z={springProps[1].springs}
            onPointerDown={() => handyHandle(true, 1)}
            onPointerUp={() => handyHandle(false, 1)}
          />
          <animated.mesh
            castShadow
            geometry={nodes['SwitchKeycap_v6_(1)'].geometry}
            material={material}
            rotation={[Math.PI / 2, 0, 0]}
            
            position-z={springProps[2].springs}
            onPointerDown={() => handyHandle(true, 2)}
            onPointerUp={() => handyHandle(false, 2)}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes['SwitchKeycap_v6_(1)_(1)'].geometry}
            material={material}            
            rotation={[Math.PI / 2, 0, 0]}
            position-z={springProps[3].springs}
            onPointerDown={() => handyHandle(true, 3)}
            onPointerUp={() => handyHandle(false, 3)}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes['SwitchKeycap_v6_(1)_(1)_(1)'].geometry}
            material={material}
            rotation={[Math.PI / 2, 0, 0]}
            position-z={springProps[4].springs}
            onPointerDown={() => handyHandle(true, 4)}
            onPointerUp={() => handyHandle(false, 4)}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes['SwitchKeycap_v6_(1)_(2)'].geometry}
            material={material}
            rotation={[Math.PI / 2, 0, 0]}
            position-z={springProps[5].springs}
            onPointerDown={() => handyHandle(true, 5)}
            onPointerUp={() => handyHandle(false, 5)}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes['SwitchKeycap_v6_(2)'].geometry}
            material={material}
            rotation={[Math.PI / 2, 0, 0]}
            position-z={springProps[6].springs}
            onPointerDown={() => handyHandle(true, 6)}
            onPointerUp={() => handyHandle(false, 6)}
          />
      </group>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tapa.geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      
    </group>
  )
}



useGLTF.preload('/denadamakina.glb')