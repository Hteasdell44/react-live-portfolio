import React from 'react';
import whiteLogo from '../../img/white-logo.png';
import placeholderImage from '../../img/placeholder-image.png';
import "../../css/Home.css";

export default function Home() {

  return (

    <div id="body">

      <header id="header">

          <img src={whiteLogo} id="logo" className="header-logo"/>

      </header>

        <section id="hero">

          <div id="hero-left">

              <img src={placeholderImage} alt="#" id="hero-image"/>

          </div>

          <div id="hero-right">

              <div class="hero-text">

                  <h1 class="hero-heading" id="hello-text">Hey there, I'm Hakim.</h1>

                  <h1 class="hero-heading">I build captivating Web Applications with HTML.</h1>

              </div>

              <div id="hero-button-holder">

                  <a href="https://drive.google.com/file/d/15rZYUEo1e3Brhj1rVJdJ3GU-Nh-_ahsB/view?usp=sharing">
                      <button id="resume-button" class="hero-button">Resumé</button>
                  </a>
      
                  <a href="https://www.linkedin.com/in/hteasdell">
                      <button id="linkedin-button" class="hero-button">LinkedIn</button>
                  </a>
      
                  <a href="https://github.com/Hteasdell44">
                      <button id="github-button" class="hero-button">GitHub</button>
                  </a>
      
              </div>

          </div>

      </section>

    </div>
  );
}
