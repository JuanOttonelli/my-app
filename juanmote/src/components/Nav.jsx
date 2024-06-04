import React, { useRef } from 'react'
import { useGLTF, useScroll} from '@react-three/drei'
import Logo from '../assets/images/Logo.svg'
import Burger from '../assets/images/Burger.svg'
import Play from '../assets/images/Play.svg'
import Playy from '../assets/images/Playy.svg'
const val = 1;

export default function Nav() {
    return (
        <nav className='nav-wrapper' style={{opacity:val}} >
            <div className='nav-content'>
                <ul className='list-styled' >
                    
                    
                    <li>
                        <img src={Playy} alt='Play' />
                    </li>
                    <li>
                        <img src={Logo} alt='Drama' />
                    </li>
                    <li>
                        <img src={Burger} alt='Contextual menu' />
                    </li>
                    

                </ul>

            </div>
        </nav>
    )
}