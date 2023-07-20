import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  const navScrolled = {
    position: "relative",
    width: "100%",
    top: 0,
  };
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    backgroundColor: scrolled ? "transparent" : "transparent",
    display: "flex",
    padding: "70px",
    color: "#1b1811",
    width: "100%",
    zIndex: 9999,
    fontFamily: "Georgia, serif",
    fontWeight: "bold"
  };

  const columnStyle = {
    flex: 1,
    marginRight: "20px",
    maxWidth: "250px",
    overflow: "hidden",
  };

  const headingStyle = {
    fontSize: "16px",
    marginBottom: "10px",
  };

  const listItemStyle = {
    marginBottom: "5px",
    listStyleType: "none",
  };

  const contactInfoStyle = {
    marginBottom: "10px",
  };

  const IconStyle = {
    justifyContent: "spaceBetween",
    padding: 2,
    margin: 2,
    fontSize: 20,
    color: "#F7E86A",
  };
  return (
    <Container>
      <Navbar
        expand="lg"
        style={scrolled ? navScrolled : {}}
        className={scrolled ? "scrolled" : ""}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={navStyle}>
          <Nav.Item style={listItemStyle}>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </Nav.Item>
          <Nav.Item style={listItemStyle}>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </Nav.Item>
          <Nav.Item style={listItemStyle}>
            <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item style={listItemStyle}>
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </Nav.Item>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
            <Link
              style={contactInfoStyle}
              to="contact"
              smooth={true}
              duration={500}
              >
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </Link>
          </span>
        </Nav>
                </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
