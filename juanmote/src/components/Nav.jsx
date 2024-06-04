import React from 'react'
import Logo from '../assets/images/Logo.svg'
import Burger from '../assets/images/Burger.svg'

export default function Nav() {
    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <ul className='list-styled' >
                    <li>
                        <img src={Logo} alt='Drama' />
                    </li>
                    <li>
                        <a className='link-styled'>Interacción</a>
                    </li>
                    <li>
                        <a className='link-styled'>Desarrollo</a>
                    </li>
                    <li>
                        <a className='link-styled'>Presentaciones</a>
                    </li>
                    <li>
                        <a className='link-styled'>Sobre nosotros</a>
                    </li>
                    

                </ul>

            </div>
        </nav>
    )
}