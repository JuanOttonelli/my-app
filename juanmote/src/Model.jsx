
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { SimpleShaderMaterial} from './BgShader';

export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/denadamakina.glb')
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  const spring1 = useSpring({ to: { z: active1 ? -0.1 : 0 } });
  const spring2 = useSpring({ to: { z: active2 ? -0.1 : 0 } });
  const spring3 = useSpring({ to: { z: active3 ? -0.1 : 0 } });
  const spring4 = useSpring({ to: { z: active4 ? -0.1 : 0 } });
  const spring5 = useSpring({ to: { z: active5 ? -0.1 : 0 } });
  const spring6 = useSpring({ to: { z: active6 ? -0.1 : 0 } });
  
  
  /*
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = 0.5*Math.sin(0.1*clock.getElapsedTime())
  })*/

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
          scale={1}
        ><simpleShaderMaterial /> </mesh>
        
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
        material={materials['HP_3D_HR_CB_PA_12_(con_impresora_3D_en_color_HP_Jet_Fusion_.001']}
        rotation={[Math.PI / 2, 0, 0]}
        position-z={spring1.z} 
        onPointerDown={() => setActive1(true)}
        onPointerUp={() => setActive1(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(1)'].geometry}
        material={materials['HP_3D_HR_CB_PA_12_(con_impresora_3D_en_color_HP_Jet_Fusion_.001']}
        rotation={[Math.PI / 2, 0, 0]}
        position-z={spring2.z}  
        onPointerDown={() => setActive2(true)}
        onPointerUp={() => setActive2(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(1)_(1)'].geometry}
        material={materials['HP_3D_HR_CB_PA_12_(con_impresora_3D_en_color_HP_Jet_Fusion_.001']}
        rotation={[Math.PI / 2, 0, 0]}
        position-z={spring3.z}  
        onPointerDown={() => setActive3(true)}
        onPointerUp={() => setActive3(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(1)_(1)_(1)'].geometry}
        material={materials['HP_3D_HR_CB_PA_12_(con_impresora_3D_en_color_HP_Jet_Fusion_.001']}
        rotation={[Math.PI / 2, 0, 0]}
        position-z={spring4.z}  
        onPointerDown={() => setActive4(true)}
        onPointerUp={() => setActive4(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(1)_(2)'].geometry}
        material={materials['HP_3D_HR_CB_PA_12_(con_impresora_3D_en_color_HP_Jet_Fusion_.001']}
        rotation={[Math.PI / 2, 0, 0]}
        position-z={spring5.z}  
        onPointerDown={() => setActive5(true)}
        onPointerUp={() => setActive5(false)}
      />
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes['SwitchKeycap_v6_(2)'].geometry}
        material={materials['HP_3D_HR_CB_PA_12_(con_impresora_3D_en_color_HP_Jet_Fusion_.001']}
        rotation={[Math.PI / 2, 0, 0]}
        position-z={spring6.z}  
        onPointerDown={() => setActive6(true)}
        onPointerUp={() => setActive6(false)}
        
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