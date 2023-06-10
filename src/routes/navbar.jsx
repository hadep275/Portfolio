import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul>
            <li><a href="/about">About</a></li>            
            <li><a href="/project">Project</a></li>            
            <li><a href="/skills">Skills</a></li>            
        </ul>
      </nav>
    </div>
  )
}

export default navbar
