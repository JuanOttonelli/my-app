
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/untitled.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pieza_Micro_v2.geometry}
        material={materials['Steel_-_Satin']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/untitled.glb')