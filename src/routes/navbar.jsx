import React, {useState} from 'react'
import { Navbar, Container, Nav, Collapse, Dropdown} from 'react-bootstrap'


const navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href ="/">
          <img src={''} alt ="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls = "basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Project">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href ="/"img src={''} alt=""></a>
              <a href ="/"img src={''} alt=""></a>
              <a href ="/"img src={''} alt=""></a>
            </div>
          </span>
          <button className='vvd' onClick={() => console.log('connect')}>
            <span>Let's Connect</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default navbar
