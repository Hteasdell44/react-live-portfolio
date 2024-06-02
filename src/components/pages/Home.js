import React, { useState, useEffect } from 'react';
import whiteLogo from '../../img/white-logo.png';
import placeholderImage from '../../img/placeholder-image.png';
import headshotPng from '../../img/headshot.png';
import "../../css/Home.css";

export default function Home() {


    const toolList = ['React', 'JS', 'Java', 'Angular', 'SQL', 'APIs', 'Node', 'Express', 'HTML', 'CSS', 'Tailwind', 'GraphQL', 'Shopify', 'Stripe'];

    const [toggle, setToggle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setToggle(prevToggle => (prevToggle + 1) % toolList.length);
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
    }, []);


  return (

    <div id="body">

      <header id="header">

          <img src={whiteLogo} id="logo" className="header-logo desktop-logo"/>

      </header>

      <header id="header">

          <img src={whiteLogo} id="logo" className="header-logo mobile-logo"/>

        </header>

        <section id="hero">

          <div id="hero-left">

              <img src={headshotPng} alt="#" id="hero-image"/>

          </div>

          <div id="hero-right">

              <div class="hero-text">

                  <h1 class="hero-heading" id="hello-text">Hey there, I'm Hakim.</h1>

                  <h1 class="hero-heading" id="second-heading">I build captivating Web Applications with <span id="mobile-dynamic" className="dynamic-text">{toolList[toggle]}.</span></h1> 

                  <span id="desktop-dynamic" className="dynamic-text">{toolList[toggle]}.</span>

              </div>

              <div id="hero-button-holder">

                  <a href="https://drive.google.com/file/d/1s505Or_L0PzRk8xWMClC4tdWtzZ4gRAM/view?usp=sharing" target="_blank" rel="noreferrer">Resumé</a>
      
                  <a href="https://www.linkedin.com/in/hteasdell" target="_blank" rel="noreferrer">
                      LinkedIn
                  </a>
      
                  <a href="https://github.com/Hteasdell44" target="_blank" rel="noreferrer">
                      GitHub
                  </a>
      
              </div>

          </div>

      </section>

    </div>
  );
}
