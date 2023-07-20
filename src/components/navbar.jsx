import React, {useState, useEffect} from 'react'
import { Navbar, Container, Nav, Collapse, Dropdown} from 'react-bootstrap'

import { HashLink } from 'react-router-hash-link';
import { AiOutlineGithub } from "react-icons/ai";


const navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () =>{
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }


window.addEventListener ("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}


  return (
    <Navbar expand='lg' className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href ="/">
          <img src={logo} alt ="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls = "basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className = {activeLink === 'home'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="/About" className = {activeLink === 'about'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="/skills" className = {activeLink === 'about'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Skills</Nav.Link>
            <Nav.Link href="/Project" className = {activeLink === 'project'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href ="#"> <AiOutlineGithub/> </a>
              <a href ="#"></a>
              <a href ="#"></a>
            </div>
            <HashLink to='/contact'>
          <button className='vvd' onClick={() => console.log('connect')}>
            <span>Let's Connect</span>
          </button>
          </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default navbar
