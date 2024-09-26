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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi id facilis modi quisquam quaerat temporibus amet sunt dolores fuga culpa explicabo, qui quis quod repellendus dolorum ab accusantium fugit. Quos magni quibusdam aut adipisci earum nihil aperiam eos quas.</p>
              <a href=""><button className='button'>Visit Website</button></a>
            </div>
          </div>
          <div className="card section-padding hi">
            <div className="img">
              <img src={Web2} alt="" />
            </div>
            <div className="text">
              <h2>Form Validation Website</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi id facilis modi quisquam quaerat temporibus amet sunt dolores fuga culpa explicabo, qui quis quod repellendus dolorum ab accusantium fugit. Quos magni quibusdam aut adipisci earum nihil aperiam eos quas.</p>
              <a href=""><button className='button'>Visit Website</button></a>
            </div>
          </div>
          <div className="card section-padding">
            <div className="img">
              <img src={Web3} alt="" />
            </div>
            <div className="text">
              <h2>Popout Animation Form Website</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi id facilis modi quisquam quaerat temporibus amet sunt dolores fuga culpa explicabo, qui quis quod repellendus dolorum ab accusantium fugit. Quos magni quibusdam aut adipisci earum nihil aperiam eos quas.</p>
              <a href=""><button className='button'>Visit Website</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio