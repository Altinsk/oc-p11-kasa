import React from 'react'
import logo from '../../assests/logo.png'
import './Header.css'

function Header() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <a href='/'><img src={logo} alt='logo'/></a>
            </div>
            <div className='navlinks'>
                <a href='/accueil' className='link'>ACCUEIL</a>
                <a href='/apropos' className='link'>A PROPOS</a>
            </div>
        </nav>
    )
}

export default Header
 