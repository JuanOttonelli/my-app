import React, { useState, useEffect, Fragment } from "react";
import { Canvas } from '@react-three/fiber';
import { Model } from '../Model.jsx';
import { OrbitControls } from '@react-three/drei';
import WaveMesh from '../BgShader.js';
import { PerspectiveCamera } from '@react-three/drei'
import MovingLights from '../lights.js';


import { clamp } from '../functions.js';

export default function Intera() {
    const [aspect, setAspect] = useState(1);

    const calculateAspect = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const value = clamp(35 * (height / width), 23, 60)

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
        <div className='myCanvas ' >
            <Canvas

                shadows
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 35], fov: 50, near: 1 }}
            >
                <PerspectiveCamera makeDefault={true} position={[0, 0, aspect]} fov={50} />
                <MovingLights />
                <ambientLight intensity={0.35} />
                <WaveMesh />
                
                <Model position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}