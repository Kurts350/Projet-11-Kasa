import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/layout/Navbar.scss'
import image from '../assets/logo.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to="/">
        <div className='navbar__logo'>
          <img src={image} alt='Kasa' className='navbar__logo--img' />
        </div>
      </NavLink>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>À propos</div>
      </NavLink>
    </nav>
  )
}

export default Navbar