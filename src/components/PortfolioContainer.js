import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Toolkit from './pages/Toolkit';
import Projects from './pages/Projects';

export default function PortfolioContainer() {

  const bodyStyle = {
    color: "white",
    backgroundColor: "black",
    width: "100vw",
    height: "100vh",
  };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div style={bodyStyle} >

      <NavTabs />

      <Home/>
      <About/>
      <Toolkit/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}
