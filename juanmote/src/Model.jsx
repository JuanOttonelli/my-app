
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three'


export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/denadamakina.glb')
  const [active, setActive] = useState(false)
  const { position } = useSpring({ to: { position: active ? [0,0,-0.1] : [0,0,0] } })
  
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = 0.5*Math.sin(0.1*clock.getElapsedTime())
  })

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials['HP_3D_HR_CB_PA_12_(con_impresora_3D_en_color_HP_Jet_Fusion_.001']}
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
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Knob_2_(1)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Knob_2_(1)_(1)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Knob_2_(2)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Knob_2_(2)_(1)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LCD_ASM_1.geometry}
          material={materials['Pantalla_-_4x20_-_LCD_(blanco_sobre_azul).002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LCD_ASM_2.geometry}
          material={materials['Aluminio_-_Anodizado_brillante_(gris).002']}
        />
      </group>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.SwitchKeycap_v6.geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
        position={position} 
        onPointerDown={() => setActive(true)}
        onPointerUp={() => setActive(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(1)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
        position={position} 
        onPointerDown={() => setActive(true)}
        onPointerUp={() => setActive(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(1)_(1)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
        position={position} 
        onPointerDown={() => setActive(true)}
        onPointerUp={() => setActive(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(1)_(1)_(1)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
        position={position} 
        onPointerDown={() => setActive(true)}
        onPointerUp={() => setActive(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(1)_(2)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
        position={position} 
        onPointerDown={() => setActive(true)}
        onPointerUp={() => setActive(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(2)'].geometry}
        material={materials['Acero_-_Satinado.002']}
        rotation={[Math.PI / 2, 0, 0]}
        position={position} 
        onPointerDown={() => setActive(true)}
        onPointerUp={() => setActive(false)}
        position={position} 
        onPointerDown={() => setActive(true)}
        onPointerUp={() => setActive(false)}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tapa.geometry}
        material={materials['HP_3D_HR_CB_PA_12_(con_impresora_3D_en_color_HP_Jet_Fusion_.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      
    </group>
  )
}



useGLTF.preload('/denadamakina.glb')
