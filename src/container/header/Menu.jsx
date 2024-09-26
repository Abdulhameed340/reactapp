import React, { useState } from 'react'
import './menu.css'
import Close from '../../assets/icon-park--close.svg'
import Hamburger from '../../assets/icon-park--hamburger-button.svg'

const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu =()=>{
        setMenuOpen(!menuOpen);
    }

  return (
    <div id='menu'>
        <div className={`mnu-btn ${menuOpen ? 'open' : ""}`} onClick={toggleMenu}>

            <div className="menu-btn__burger">
                {
                    menuOpen ? <img src={Close} alt="" onClick={() => setMenuOpen(true)}/> :
                                <img src={Hamburger} alt='' onClick={() => setMenuOpen(false)}></img>
                }
            </div>
        </div>


        {
            menuOpen && (
                <div id='dropdown-menu'>
                    <ul>
                        <li><a href="/#hero" onClick={()=> setMenuOpen(false)}>About</a></li>
                        <li><a href="/#portfolio" onClick={()=> setMenuOpen(false)}>Portfolio</a></li>
                        <li><a href="/#skills" onClick={()=> setMenuOpen(false)}>Skills</a></li>
                        <li><a href="/#contact" onClick={()=> setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            )
        }
    </div>
  )
}

export default Menu