import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about";
import Project from "./components/project";
import Navbar from "./components/navbar";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import Skills from "./components/skills";
import Footer from "./footer.jsx";
import Contact from "./components/contact";
import "./App.css";
import Testimonial from "./components/testimonial";
function App() {
  return (
    <>
      <Navigation />
      {/* <Navbar/> */}
      <main>
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <About />
        </div>
        <Skills />
        <Project />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
