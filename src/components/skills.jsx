import React from 'react'
import "./skills.css"
const skills = () => {
  return (
    <div class="skills">
     <div className="skill-group">
        <h2>Front End</h2>
        <ul>
          <li>React.js</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div className="skill-group">
        <h2>Tools</h2>
        <ul>
          <li>Git</li>
          <li>Azure</li>
          <li>Figma</li>
          <li>Cognos</li>
          <li>Agile Methodologies</li>
          <li>Google Cloud Services</li>
        </ul>
      </div>
      <div className="skill-group">
        <h2>Back End</h2>
        <ul>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
        </ul>
      </div>
    </div>
  )
}

export default skills
