import React from 'react';
import "../../css/Projects.css"
import wallBallPng from "../../img/wall-ball-screenshot.png"
import forecastPng from "../../img/weather-forecast.png"

export default function Projects() {

  return (

    <div>

      <section id="projects">

      <h1 id="title">My Projects</h1>

      <div id="project-holder">

          <div id="projects-left">

              <a href="https://hteasdell44.github.io/wall-ball/" target="_blank" rel="noreferrer">
                  <img src={wallBallPng} alt=""/>
              </a>

                <h1 id="left-title">Wall Ball</h1>
                
                <p id="left-label">This bubble blast inspired game was built with JavaScript, HTML, and CSS. </p>

                <ul>
                  <li><a href="https://github.com/Hteasdell44/wall-ball" target="_blank" rel="noreferrer">Github Repo</a></li>
                  <li><a href="https://hteasdell44.github.io/wall-ball/" target="_blank" rel="noreferrer">Deployed Application</a></li>
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

      </div>

      </section>

    </div>
    
  );
}