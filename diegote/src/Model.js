import React, { useRef, useState } from 'react'
import { useGLTF, useScroll} from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { SimpleShaderMaterial} from './BgShader';
import { MeshStandardMaterial } from 'three';
import { vec3 } from 'three/examples/jsm/nodes/Nodes.js';
import * as THREE from "three";

export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/MIDI_blend.glb')

  const [translucentMaterialOpacity, setTranslucentMaterialOpacity] = useState(0.5); // Define la opacidad deseada
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_1.geometry}
          material={materials['Opaque(26,26,26)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_2.geometry}
          material={materials['Opaque(166,158,150)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_3.geometry}
          material={materials['Opaque(166,158,150)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_4.geometry}
          material={materials['Opaque(255,255,255)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_5.geometry}
          material={materials['Opaque(192,192,192)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_6.geometry}
          material={materials['Opaque(202,209,238)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_7.geometry}
          material={materials['Opaque(255,0,0)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_8.geometry}
          material={materials['Opaque(212,171,33)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_9.geometry}
          material={materials['Opaque(64,64,64)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_10.geometry}
          material={materials['Opaque(51,51,51)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_11.geometry}
          material={materials['Opaque(176,156,135)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_12.geometry}
          material={new MeshStandardMaterial({
            color: 'green', // Color del material
            transparent: true, // Hacer el material translúcido
            opacity: translucentMaterialOpacity // Opacidad del material translúcido
          })
        }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_13.geometry}
          material={materials['Powder_Coat_-_Rough_(Black)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_14.geometry}
          material={
            new MeshStandardMaterial({
              color: 'yellow', // Color del material
              transparent: true, // Hacer el material translúcido
              opacity: translucentMaterialOpacity // Opacidad del material translúcido
            })
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_15.geometry}
          material={new MeshStandardMaterial({
            color: 'blue', // Color del material
            transparent: true, // Hacer el material translúcido
            opacity: translucentMaterialOpacity // Opacidad del material translúcido
          })
        }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_16.geometry}
          material={materials['Steel_-_Satin']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_17.geometry}
          material={new MeshStandardMaterial({
            color: 'red', // Color del material
            transparent: true, // Hacer el material translúcido
            opacity: translucentMaterialOpacity // Opacidad del material translúcido
          })
        }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_18.geometry}
          material={new MeshStandardMaterial({
            color: 'clear', // Color del material
            transparent: true, // Hacer el material translúcido
            opacity: translucentMaterialOpacity // Opacidad del material translúcido
          })
        }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MIDI_modelo_19.geometry}
          material={materials['3D_Walnut_-_Stained_dark_semigloss']}
        />
      </group>
      
    </group>
  )
}

useGLTF.preload('/MIDI_blend.glb')
