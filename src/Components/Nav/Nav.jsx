import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './nav.css';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      {/* Added data-text for the neon effect */}
      <h1 data-text="PORTFOLIO">PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="desktopmenu">
        <li>
          <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile Menu */}
      <div
        className={`hamburger ${isMobileMenuOpen ? 'activeham' : ''}`}
        onClick={toggleMobileMenu}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobilemenu ${isMobileMenuOpen ? 'activemobile' : ''}`}>
        <li>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;