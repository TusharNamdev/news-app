import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src='../new.png' alt='Logo' />
            <div className='home'>
                <Link className='mylink' to='/'>Home</Link>
                <Link className='mylink' to='/about'>About</Link>
                <Link className='mylink' to='/contact'>Contact</Link>
            </div>
        </div>
    )
}
