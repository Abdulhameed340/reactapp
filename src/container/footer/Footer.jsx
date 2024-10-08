import React from 'react'
import Whatsapp from '../../assets/logos--whatsapp-icon.svg'
import Facebook from '../../assets/devicon--facebook.svg'
import Instagram from '../../assets/skill-icons--instagram.svg'
import Github from '../../assets/skill-icons--github-dark.svg'
import './footer.css'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer__top">
        <p>Reach me on my socials:</p>
        <a href="https://facebook.com"><img src={Facebook} alt="" /></a>
        <a href="https://whatsapp.com"><img src={Whatsapp} alt="" /></a>
        <a href="https://instagram.com"><img src={Instagram} alt="" /></a>
        <a href="https://github.com"><img src={Github} alt="" /></a>
      </div>
      <div className="footer__down">
        <p><b>2024 Abdul </b></p>
      </div>
    </div>
  )
}

export default Footer