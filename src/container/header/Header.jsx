import React from 'react'
import "./header.css"
import Menu from './Menu'

const Header = () => {
  return (
    <div id='header' className='header section-padding'>
        <div className='logo'>
            <h2>Mido</h2>
        </div>
        <div className='header__links'>
            <a href="#hero">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="hamburger">
          <Menu />
        </div>
    </div>
  )
}

export default Header