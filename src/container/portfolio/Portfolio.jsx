import React from 'react'
import './portfolio.css'
import Web1 from '../../assets/Capture.PNG'
import Web2 from '../../assets/Capture2.PNG'
import Web3 from '../../assets/Capture3.PNG'

const Portfolio = () => {
  return (
    <div id='portfolio' className=' section-padding'>
      <div className="portfolio__header">
        <h2>Portfolio</h2>
        <p>A collection of my most recent works.</p>
      </div>
      <div className="portfolio__body">
        <div className="cards section-padding">
          <div className="card section-padding">
            <div className="img">
              <img src={Web1} alt="" />
            </div>
            <div className="text">
              <h2>My Resume</h2>
              <p>My resume website showcases my professional experience, skills, and accomplishments. It's a dynamic portfolio that highlights my journey, projects, and achievements, making it easy for potential employers to connect with me.</p>
              <a href="https://portfolioindex.vercel.app/"><button className='button'>Visit Website</button></a>
            </div>
          </div>
          <div className="card section-padding hi">
            <div className="img">
              <img src={Web2} alt="" />
            </div>
            <div className="text">
              <h2>Form Validation Website</h2>
              <p>My form validation website ensures seamless user experience by validating input fields in real-time. It helps developers create error-free forms, enhancing data accuracy and improving overall website functionality.</p>
              <a href="https://popout-gilt.vercel.app/"><button className='button'>Visit Website</button></a>
            </div>
          </div>
          <div className="card section-padding">
            <div className="img">
              <img src={Web3} alt="" />
            </div>
            <div className="text">
              <h2>Popout Animation Form Website</h2>
              <p>My form validation website features an engaging popout animation that enhances user interaction. It ensures real-time validation of input fields, improving data accuracy while providing a visually appealing experience for users.</p>
              <a href="https://formvalidating.vercel.app/"><button className='button'>Visit Website</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio