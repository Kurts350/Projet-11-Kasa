import React from 'react'
import '../sass/Navbar.scss'
import image from '../assets/logo.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src={image} alt='Kasa' />
      </div>
      <div>Accueil</div>
      <div>À propos</div>
    </nav>
  )
}

export default Navbar
