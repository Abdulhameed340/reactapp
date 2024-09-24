import React from 'react'
import './hero.css'
import Face from '../../assets/hotel1.avif'
import Github from '../../assets/skill-icons--github-dark.svg'
import Whatsapp from '../../assets/logos--whatsapp-icon.svg'
import Linkedin from '../../assets/eva--email-fill.svg'


const Hero = () => {
  return (
    <div id='hero' className='hero section-padding'>
    <div className="hero__image">
        <img src={Face} alt="" />
    </div>
    <div className="hero2"><div className="hero__text">
        <h1>Abdul</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusamus, architecto aut mollitia perferendis asperiores ut atque minus molestias possimus facere beatae et fugit pariatur voluptatibus nesciunt eligendi illum perspiciatis optio impedit quaerat! Vitae, obcaecati quidem fuga quod odit, a sint magnam pariatur ipsam labore sed veritatis. Esse suscipit, laudantium placeat fuga, ratione architecto optio unde non porro rerum soluta autem dolor dignissimos, quam rem accusantium deleniti! Minima voluptate animi odit debitis laborum magnam nesciunt corporis dicta sint possimus quas corrupti, vero adipisci tempora voluptas neque architecto. Delectus quod saepe veritatis, necessitatibus mollitia labore incidunt totam veniam autem perferendis!</p>
    </div>
    <div className="hero__button">
        <a href=""><button className='button'><img src={Github} alt="" />Github</button></a>
        <a href=""><button className='button'><img src={Linkedin} alt="" />LinkedIn</button></a>
        <a href=""><button className='button'><img src={Whatsapp} alt="" />Whatsapp</button></a>

    </div></div>
    </div>
  )
}

export default Hero