import React, { useState } from 'react';
import "../../css/Projects.css";
import hushPuppyPng from "../../img/hush-puppy-screenshot.png";
import hushpuppyMobilePng from "../../img/hushpuppy-screenshot-mobile.jpg"
import hawkeyePng from "../../img/hawkeye-screenshot.png";
import hawkeyeMobilePng from "../../img/hawkeye-screenshot-mobile.jpg"
import wallBallPng from "../../img/wall-ball-screenshot.png";
import forecastPng from "../../img/weather-forecast.png";
import forecastMobilePng from "../../img/weather-forecast-mobile.jpg"
import gauntletPng from "../../img/coding-gauntlet-screenshot.png";
import gauntletMobilePng from "../../img/gauntlet-screenshot-mobile.jpg"
import noteTakerPng from "../../img/note-taker-screenshot.png";
import noteTakerMobilePng from "../../img/note-taker-mobile.jpg"
import htjobboardPng from "../../img/htjobboard-screenshot.png"
import htjobboardMobilePng from "../../img/htjobboard-screenshot-mobile.jpg"

export default function Projects() {

  const [toggler, setToggler] = useState(0);

  const increaseDesktopToggler = () => {

    if (toggler < 2) {

      setToggler(toggler + 1);

    } else {

      setToggler(0);
    }
  }

  const increaseMobileToggler = () => {

    if (toggler < 5) {

      setToggler(toggler + 1);

    } else {

      setToggler(0);
    }
  }

  const decreaseDesktopToggler = () => {

    if (toggler > 0) {

      setToggler(toggler - 1);

    } else {

      setToggler(2);
    }
  }

  const decreaseMobileToggler = () => {

    if (toggler > 0) {

      setToggler(toggler - 1);

    } else {

      setToggler(5);
    }
  }



  return (

    <div>

      <section id="projects">

      <h1 className="title">My Projects</h1>

      {/* Desktop Project Cards */}

      {toggler == 0 && (<div id="project-holder" className='desktop-project-holder'>

          <div id="projects-left">

              <a href="https://ht-job-board-ec3ceab20798.herokuapp.com/" target="_blank" rel="noreferrer">
                  <img src={htjobboardPng} alt=""/>
              </a>

                <h1 id="left-title">HT Job Board</h1>
                
                <p id="left-label">A job board application that connects employers with job seekers, built with Angular, Spring Boot, and MongoDB. </p>

                <ul>
                  <li><a href="https://github.com/Hteasdell44/ht-job-board" target="_blank" rel="noreferrer">Github Repo</a></li>
                  <li><a href="https://ht-job-board-ec3ceab20798.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></li>
                </ul>

          </div>

          <div id="projects-right" >

            <a href="https://hawkeye-student-portal-f159fc161d0f.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={hawkeyePng} alt="" id="forecast-img"/>
            </a>

     
                <h1 id="right-title">Hawkeye Student Data Portal</h1>

                <p id="right-label">A Student Data Portal with a separate UI/UX for parents and teachers built with React, Node, Express, and SQL.</p>

                <ul>
                  <li><a href="https://github.com/Hteasdell44/hawkeye-student-data-portal" target="_blank" rel="noreferrer">Github Repo</a></li>
                  <li><a href="https://hawkeye-student-portal-f159fc161d0f.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></li>
                </ul>

          </div>

      </div> )}

      {toggler == 1 && (<div id="project-holder" className='desktop-project-holder'>

        <div id="projects-left">

          <a href="https://the-hush-puppy-co.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={hushPuppyPng} alt=""/>
          </a>

            <h1 id="left-title">The Hush Puppy Co</h1>
            
            <p id="left-label">A fully functional eCommerce site and blog for owners of dogs with Separation Anxiety, built with the MERN stack. </p>

            <ul>
              <li><a href="https://github.com/Hteasdell44/hush-puppy-co" target="_blank" rel="noreferrer">Github Repo</a></li>
              <li><a href="https://the-hush-puppy-co.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></li>
            </ul>

          </div>

          <div id="projects-right">

            <a href="https://hteasdell44.github.io/weather-forecast-dashboard/" target="_blank" rel="noreferrer">
              <img src={forecastPng} alt="" id="forecast-img"/>
            </a>

     
                <h1 id="right-title">Live Weather Forecast</h1>

                <p id="right-label">An interactive weather dashboard that displays current conditions in any city that the user searches using the OpenWeather API. </p>

                <ul>
                  <li><a href="https://github.com/Hteasdell44/weather-forecast-dashboard" target="_blank" rel="noreferrer">Github Repo</a></li>
                  <li><a href="https://hteasdell44.github.io/weather-forecast-dashboard/" target="_blank" rel="noreferrer">Deployed Application</a></li>
                </ul>

          </div>

      </div> )}

      {toggler == 2 && (<div id="project-holder" className='desktop-project-holder'>

          <div id="projects-left">

              <a href="https://hteasdell44.github.io/coding-assessment/" target="_blank" rel="noreferrer">
                  <img src={gauntletPng} alt=""/>
              </a>

                <h1 id="left-title">The Coding Gauntlet</h1>
                
                <p id="left-label">A gamified exam where user answer basic questions about coding. If given an incorrect answer, time is subtracted from the clock.</p>

                <ul>
                  <li><a href="https://github.com/Hteasdell44/coding-assessment" target="_blank" rel="noreferrer">Github Repo</a></li>
                  <li><a href="https://hteasdell44.github.io/coding-assessment/" target="_blank" rel="noreferrer">Deployed Application</a></li>
                </ul>

          </div>

          <div id="projects-right">

            <a href="https://express-note-taker-4.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={noteTakerPng} alt="" id="forecast-img"/>
            </a>

     
                <h1 id="right-title">Express Note Taker</h1>

                <p id="right-label">An interactive weather dashboard that displays current conditions in any city that the user searches using the OpenWeather API. </p>

                <ul>
                  <li><a href="https://github.com/Hteasdell44/express-note-taker" target="_blank" rel="noreferrer">Github Repo</a></li>
                  <li><a href="https://express-note-taker-4.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></li>
                </ul>

          </div>

      </div> )}

      {/* Mobile Project Cards */}

      {toggler == 0 && (<div id="project-holder" className='mobile-project-holder'>

        <div id="projects-left">

          <a href="https://ht-jobs-4a553258d208.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={htjobboardMobilePng} alt=""/>
          </a>

            <h1 id="left-title">HT Job Board</h1>
            
            <p id="left-label">A job board application that connects employers with job seekers, built with Angular, Spring Boot, and MongoDB. </p>

            <ul>
              <li><a href="https://github.com/Hteasdell44/ht-job-board" target="_blank" rel="noreferrer">Github Repo</a></li>
              <li><a href="https://ht-jobs-4a553258d208.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></li>
            </ul>

          </div>

      </div> )}

      {toggler == 1 && (<div id="project-holder" className='mobile-project-holder'>

      <div id="projects-right" >

          <a href="https://hawkeye-student-data-portal-32f19e354af5.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={hawkeyeMobilePng} alt="" id="forecast-img"/>
          </a>

          <h1 id="right-title">Hawkeye Student Data Portal</h1>

          <p id="right-label">A Student Data Portal with a separate UI/UX for parents and teachers built with React, Node, Express, and SQL.</p>

          <ul>
            <li><a href="https://github.com/Hteasdell44/hawkeye-student-data-portal" target="_blank" rel="noreferrer">Github Repo</a></li>
            <li><a href="https://hawkeye-student-data-portal-32f19e354af5.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></li>
          </ul>

      </div>

      </div> )}

      {toggler == 2 && (<div id="project-holder" className='mobile-project-holder'>

        <div id="projects-left">

          <a href="https://the-hush-puppy-co.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={hushpuppyMobilePng} alt=""/>
          </a>

            <h1 id="left-title">The Hush Puppy Co</h1>
            
            <p id="left-label">A fully functional eCommerce site and blog for owners of dogs with Separation Anxiety, built with the MERN stack. </p>

            <ul>
              <li><a href="https://github.com/Hteasdell44/hush-puppy-co" target="_blank" rel="noreferrer">Github Repo</a></li>
              <li><a href="https://the-hush-puppy-co.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></li>
            </ul>

        </div>

      </div> )}

      {toggler == 3 && (<div id="project-holder" className='mobile-project-holder'>

          <div id="projects-right">

            <a href="https://hteasdell44.github.io/weather-forecast-dashboard/" target="_blank" rel="noreferrer">
              <img src={forecastMobilePng} alt="" id="forecast-img"/>
            </a>

     
                <h1 id="right-title">Live Weather Forecast</h1>

                <p id="right-label">An interactive weather dashboard that displays current conditions in any city that the user searches using the OpenWeather API. </p>

                <ul>
                  <li><a href="https://github.com/Hteasdell44/weather-forecast-dashboard" target="_blank" rel="noreferrer">Github Repo</a></li>
                  <li><a href="https://hteasdell44.github.io/weather-forecast-dashboard/" target="_blank" rel="noreferrer">Deployed Application</a></li>
                </ul>

          </div>

      </div> )}

      {toggler == 4 && (<div id="project-holder" className='mobile-project-holder'>

          <div id="projects-left">

              <a href="https://hteasdell44.github.io/coding-assessment/" target="_blank" rel="noreferrer">
                  <img src={gauntletMobilePng} alt=""/>
              </a>

                <h1 id="left-title">The Coding Gauntlet</h1>
                
                <p id="left-label">A gamified exam where user answer basic questions about coding. If given an incorrect answer, time is subtracted from the clock.</p>

                <ul>
                  <li><a href="https://github.com/Hteasdell44/coding-assessment" target="_blank" rel="noreferrer">Github Repo</a></li>
                  <li><a href="https://hteasdell44.github.io/coding-assessment/" target="_blank" rel="noreferrer">Deployed Application</a></li>
                </ul>

          </div>

      </div> )}

      {toggler == 5 && (<div id="project-holder" className='mobile-project-holder'>

          <div id="projects-right">

            <a href="https://express-note-taker-4.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={noteTakerMobilePng} alt="" id="forecast-img"/>
            </a>

     
                <h1 id="right-title">Express Note Taker</h1>

                <p id="right-label">An interactive weather dashboard that displays current conditions in any city that the user searches using the OpenWeather API. </p>

                <ul>
                  <li><a href="https://github.com/Hteasdell44/express-note-taker" target="_blank" rel="noreferrer">Github Repo</a></li>
                  <li><a href="https://express-note-taker-4.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></li>
                </ul>

          </div>

      </div> )}

      <div id="paginators" className='desktop-paginators'>
              <button class="project-paginator-back" onClick={decreaseDesktopToggler}><span>&larr; Back</span></button>
              <button class="project-paginator" onClick={increaseDesktopToggler}><span>Next &rarr;</span></button>
      </div>

      <div id="paginators" className='mobile-paginators'>
              <button class="project-paginator-back" onClick={decreaseMobileToggler}><span>&larr; Back</span></button>
              <button class="project-paginator" onClick={increaseMobileToggler}><span>Next &rarr;</span></button>
      </div>

      </section>

    </div>
    
  );
}