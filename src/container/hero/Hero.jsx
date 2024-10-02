import React from 'react'
import './hero.css'
import Face from '../../assets/hotel1.avif'
import Github from '../../assets/skill-icons--github-dark.svg'
import Whatsapp from '../../assets/logos--whatsapp-icon.svg'
import Linkedin from '../../assets/logos--linkedin-icon (2).svg'


const Hero = () => {
  return (
    <div id='hero' className='hero section-padding'>
    <div className="hero__image">
        <img src={Face} alt="" />
    </div>
    <div className="hero2"><div className="hero__text">
        <h1>Mido </h1>
        <p>I am an accomplished web developer and designer, adept in HTML, CSS, JavaScript, and React, with a portfolio featuring several published websites. My expertise allows me to craft engaging, user-friendly interfaces that balance functionality and aesthetic appeal. I possess a strong understanding of web design principles and best practices, ensuring that my projects not only look great but also perform optimally across devices. My passion for coding drives you to explore new technologies and frameworks, continually expanding my skill set. With a commitment to delivering exceptional results, I aim to create ultimate web experiences that resonate with users.</p>
    </div>
    <div className="hero__button">
        <a href="https://github.com"><button className='button'><img src={Github} alt="" />Github</button></a>
        <a href="https://linkedin.com"><button className='button'><img src={Linkedin} alt="" />LinkedIn</button></a>
        <a href="https://whatsapp.com"><button className='button'><img src={Whatsapp} alt="" />Whatsapp</button></a>

    </div></div>
    </div>
  )
}

export default Hero