// Navbar.js
import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo"><a href='/'>CodeCanvasStudio</a></div>
      <button className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href='/'>Home</a></li>
        <li><a href='services'>Services</a></li>
        <li><a href='contactus'>Contact</a></li>
        <li><a href='career'>Career</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
