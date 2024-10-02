import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <div id='skills' className='section-padding'>
      <div className="skills__header">
      <h2>Skills</h2>
      </div>
      <div className="skills__type">
        <div className="skills__card">
          <h3>Technical Skills</h3>
          <p>Master React fundamentals, including hooks, state management (Redux/Context), and React Router. Gain expertise in performance optimization, component lifecycle, and testing with Jest. Enhance your front-end skills with HTML, CSS, JavaScript, API integration, and Git version control.</p>
        </div>
        <div className="skills__card">
          <h3>Soft Skills</h3>
          <p>Develop problem-solving, adaptability, and communication skills to collaborate effectively. Cultivate attention to detail and time management for efficient project delivery. Embrace continuous learning, teamwork, and feedback to improve code quality, and build strong relationships with designers, developers, and stakeholders.</p>
        </div>
      </div>
    </div>
  )
}

export default Skills