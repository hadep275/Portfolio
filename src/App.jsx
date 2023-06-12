import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './routes/about'
import Project from './routes/project'
import Navbar from './routes/navbar'
import { Outlet } from 'react-router-dom'
import Skills from './routes/skills'
// import Footer from './footer.jsx';

import './App.css' 

function App() {

  return (
    <>
      <main>
      <Navbar />
      <Outlet/>
      <About />
      {/* <Project /> */}
      <Skills/>
      {/* <Footer/> */}
      
    </main>
    </>
  )
}

export default App
