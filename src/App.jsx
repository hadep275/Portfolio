import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './routes/about'
import Project from './routes/project'
import Navbar from './routes/navbar'
import { Outlet } from 'react-router-dom'
import Skills from './routes/skills'
import Footer from './footer.jsx';

import './App.css' 

function App() {

  return (
    <> 
    <Navbar />
      <main>
      <Outlet/>
      <About />
      <Project />
      <Skills/>
    </main>
    <Footer/>
    </>
  )
}

export default App
