import React from 'react'
import About from './routes/about'
import Project from './routes/project'
import Navbar from './routes/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer.jsx';

import './App.css' 

function App() {

  return (
    <>
      <main>
      <Navbar />
      <Outlet/>
      {/* <About />
      <Resume/>
      <Project /> */}
      <Footer/>
      
    </main>
    </>
  )
}

export default App
