import React, { useEffect, useState, useCallback, useRef, Fragment } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Model } from '../Model.jsx';
import { OrbitControls } from '@react-three/drei';
import WaveMesh from '../BgShader.js';
import { PerspectiveCamera } from '@react-three/drei'
import MovingLights from '../lights.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "./scroll-animation.js";
import { a, useSpring } from '@react-spring/three';

import { clamp } from '../functions.js';

export default function Intera() {

    const [aspect, setAspect] = useState(1);
    const cameraRef = useRef();
    const [scrollY, setScrollY] = useState(0);
    // if (cameraRef.current) {
    //     cameraRef.current.position.x=30;
    //     cameraRef.current.position.z=5;
    //     cameraRef.current.lookAt(0,0,0);
    // }
    const [{ position }, set] = useSpring(() => ({
        position: [0, 0, 50],
        config: { mass: 1, tension: 170, friction: 26 }
    }));
    const calculateAspect = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const value = clamp(35 * (height / width), 30, 50)

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
    useEffect(() => {
        const handleScroll = () => {
            const newScrollY = window.scrollY;
            setScrollY(newScrollY);
            set({
                position: [0 - newScrollY /30 , 0 + newScrollY /50, 50 - newScrollY /30 ]
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [set]);

    useFrame(() => {
        if (cameraRef.current) {
            cameraRef.current.position.set(...position.get());
            cameraRef.current.lookAt(0, 0, 0);
        }
    });

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault={true} position={[0, 0, 50]} fov={aspect} />
            <MovingLights />
            <ambientLight intensity={0.35} />
            <Model />
        </>
    );
}