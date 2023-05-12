import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Toolkit from './pages/Toolkit';
import Projects from './pages/Projects';

export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {

    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Toolkit') {
      return <Toolkit />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;

  };

  const bodyStyle = {
    color: "white",
    backgroundColor: "black",
    width: "100vw",
    height: "100vh",
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div style={bodyStyle} >

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>

      {renderPage()}
      
    </div>
  );
}
