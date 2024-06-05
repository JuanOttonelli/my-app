import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useScroll } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Logo from '../assets/images/Logo.svg'
import Burger from '../assets/images/Burger.svg'
import Play from '../assets/images/Play.svg'
import Playy from '../assets/images/Playy.svg'
import { lerp } from "../functions";

export default function Nav() {
    const [opacity, setOpacity] = useState(1);
    const lastScrollY = useRef(0);
    const didScroll = useRef(false);

    // Esta función se ejecuta cada vez que ocurre un evento de desplazamiento
    const handleScroll = () => {
        didScroll.current = true;
    };

    const scrolled = () => {
        const scrollTop = window.pageYOffset; // Cantidad de desplazamiento vertical en píxeles
        if (scrollTop < 0) {
            // Ignora los cambios de posición del rebote de Safari
            return;
        }
        if (scrollTop < lastScrollY.current) {
            // Desplazamiento hacia arriba
            setOpacity(prevOpacity => lerp(prevOpacity, 1, 0.7));
        } else if (scrollTop > lastScrollY.current) {
            // Desplazamiento hacia abajo
            setOpacity(prevOpacity => lerp(prevOpacity, 0, 0.6));
        }
        lastScrollY.current = scrollTop;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Intervalo para comprobar el desplazamiento
        const interval = setInterval(() => {
            if (didScroll.current) {
                didScroll.current = false;
                scrolled();
            }
        }, 50);

        // Elimina el event listener de desplazamiento y el intervalo cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);
    return (
            <nav className='nav-wrapper' style={{ opacity: opacity }} >
                <div className='nav-content'>
                    <ul className='list-styled' >
                        <li>
                            <img src={Playy} alt='Play' />
                        </li>
                        <li>
                            <img src={Logo} alt='Drama' />
                        </li>
                        <li>
                            <img src={Burger}  alt='Contextual menu' />
                        </li>
                    </ul>

                </div>
            </nav>

    )
}