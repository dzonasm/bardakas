import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Burger from '../burger/burger.component'

import './navigation.styles.scss'

function Navigation() {

    let [navActive, setNavActive] = useState(false)

    const handleNav = () => {
        setNavActive(!navActive)
    }


    //nav fade in
    let navStyle = navActive ? { transform: 'translateX(0%)' } : null

    //links animation

    let linksActive = navActive ? 'links-active' : 'nav-links-inactive'

    return (
        <nav className='navigation'>
            <div className='logo'>
                <Link to='/'>
                    <div className='text-container'>
                        <div className='bar'>
                            <h1>BAR</h1>
                        </div>
                        <div className='dakas'>
                            <h1>SAKAD</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <ul className='nav-links' style={navStyle}>
                <li className={linksActive}><Link to='/'>Home</Link></li>
                <li className={linksActive}><Link to='/food'>Menu</Link></li>
                <li className={linksActive}><Link to='contact'>Reservations</Link></li>
                <li className={linksActive}><Link to='about'>About</Link></li>
            </ul>
            <div onClick={handleNav} >
                <Burger />
            </div>
        </nav >
    )
}

export default Navigation