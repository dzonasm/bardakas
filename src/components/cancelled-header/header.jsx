import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from "../../assets/bardako-logo-black.svg"

import './header.styles.scss'

const Header = () => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className='logo' />
        </Link>
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
        <div className='options'>
            <Link className='option' to='/cocktails'>
                COCKTAILS
        </Link>
            <Link to='/food'>
                <div className='option'>
                    FOOD
    </div>
            </Link>
            <Link to='/contact'>
                <div className='option'>
                    CONTACT
    </div>
            </Link>
        </div>
    </div>
)
export default Header