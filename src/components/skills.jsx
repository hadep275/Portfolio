import React from 'react'
import "./skills.css"
const skills = () => {
  return (
    <div class="skills">
     <div className="skill-group">
        <h2 class="header">Front End</h2>
        <ul>
          <li class="list">React.js</li>
          <li class="list">HTML/CSS</li>
          <li class="list"> JavaScript</li>
        </ul>
      </div>
      <div className="skill-group">
        <h2 class="header">Tools</h2>
        <ul>
          <li class="list">Git</li>
          <li class="list">Azure</li>
          <li class="list">Figma</li>
          <li class="list">Cognos</li>
          <li class="list">Agile Methodologies</li>
          <li class="list">Google Cloud Services</li>
        </ul>
      </div>
      <div className="skill-group">
        <h2 class="header">Back End</h2>
        <ul>
          <li class="list">Node.js</li>
          <li class="list">MongoDB</li>
          <li class="list">Express.js</li>
        </ul>
      </div>
    </div>
  )
}

export default skills
