import React, { useEffect, useState, useCallback, useRef, Fragment } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Model } from '../Model.jsx';
import { OrbitControls } from '@react-three/drei';
import WaveMesh from '../BgShader.js';
import { PerspectiveCamera } from '@react-three/drei'
import MovingLights from '../lights.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { a, useSpring } from '@react-spring/three';

import { clamp } from '../functions.js';

export default function Intera() {
    const [aspect, setAspect] = useState(50);
    const cameraRef = useRef();
    const [scrollY, setScrollY] = useState(0);
    const [rect, setRect] = useState({ top: 0, bottom: 0 });
    const [procRect, setProcRect] = useState({ top: 0, bottom: 0 });
    const [lookAtXYZ, setLookAt] = useState([0, 0, 0]); // State as an array

    const [{ position }, set] = useSpring(() => ({
        position: [0, 0, 50],
        config: { mass: 1, tension: 170, friction: 26 }
    }));

    const calculateAspect = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const value = clamp(35 * (height / width), 30, 50);
        return value;
    };

    useEffect(() => {
        const initialAspect = calculateAspect();
        setAspect(initialAspect);

        const handleResize = () => {
            const newAspect = calculateAspect();
            setAspect(newAspect);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const elem = document.getElementById('sectionDesa');
            const elemProc = document.getElementById('sectionProc');
            if (elem) {
                const newRect = elem.getBoundingClientRect();
                const newProcRect = elemProc.getBoundingClientRect();
                setRect(newRect);
                setProcRect(newProcRect);

                const positions = [
                    { scrollY: 0, position: [0, 0, 50], lookAtXYZ: [0, 0, 0] },
                    { scrollY: newRect.top + window.scrollY, position: [35, 0, 10], lookAtXYZ: [-30, 0, 0] }, // Adjust the lookAtX as needed
                    { scrollY: newProcRect.top + window.scrollY / 2, position: [10, -20, 20], lookAtXYZ: [0, 20, 0] }
                ];
                const newScrollY = window.scrollY;
                setScrollY(newScrollY);

                let currentPosition = positions[0].position;
                let currentLookAt = positions[0].lookAtXYZ;

                for (let i = 0; i < positions.length - 1; i++) {
                    const start = positions[i];
                    const end = positions[i + 1];

                    if (newScrollY >= start.scrollY && newScrollY < end.scrollY) {
                        const progress = (newScrollY - start.scrollY) / (end.scrollY - start.scrollY);
                        currentPosition = start.position.map((startPos, index) => startPos + progress * (end.position[index] - startPos));
                        currentLookAt = start.lookAtXYZ.map((startPos, index) => startPos + progress * (end.lookAtXYZ[index] - startPos));
                        break;
                    }
                }

                if (newScrollY >= positions[positions.length - 1].scrollY) {
                    currentPosition = positions[positions.length - 1].position;
                    currentLookAt = positions[positions.length - 1].lookAtXYZ;
                }

                set({ position: currentPosition });
                setLookAt(currentLookAt); // Set as array
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [set]);

    useFrame(() => {
        if (cameraRef.current) {
            cameraRef.current.position.set(...position.get());
            cameraRef.current.lookAt(...lookAtXYZ); // Use lookAt array here
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