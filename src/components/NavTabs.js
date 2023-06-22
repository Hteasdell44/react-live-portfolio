import React from 'react';
import "../css/NavTabs.css";

function NavTabs() {

  return (

    <ul className="nav">

      <a href="#logo">
        <li className="nav-item">Home</li>
      </a>

      <a href="#about-container">
        <li className="nav-item">About</li>
      </a>

      <a href="#toolkit-container">
        <li className="nav-item">Toolkit</li>
      </a>

      <a href="#projects">
        <li className="nav-item">Projects</li>
      </a>

      <a href="#contact">
        <li className="nav-item">Contact</li>
      </a>
    
    </ul>

  );
}

export default NavTabs;
