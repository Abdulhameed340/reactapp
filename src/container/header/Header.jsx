import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div id='header' className='header section-padding'>
        <div className='logo'>
            <h2>Abdul</h2>
        </div>
        <div className='header__links'>
            <a href="#hero">About</a>
            <a href="#portfolio">portfolio</a>
            <a href="#skills">skills</a>
            <a href="#contact">contact</a>
        </div>
    </div>
  )
}

export default Header