import React from 'react';
import "../../css/Toolkit.css"

export default function Toolkit() {
  return (
    
    <div id="toolkit-container">

        <h1 className="title" >My Toolkit</h1>

        <div id="tool-holder">

            <div class="tool-list">

                <h2 class="tool">JavaScript</h2>
                <h2 class="tool">React</h2>
                <h2 class="tool">Node</h2>
                <h2 class="tool">MongoDB</h2>

            </div>
            
            <div class="tool-list">

                <h2 class="tool">HTML/CSS</h2>
                <h2 class="tool">Angular</h2>
                <h2 class="tool">Express</h2>
                <h2 class="tool">MySQL</h2>

            </div>
            
            <div class="tool-list">

                <h2 class="tool">Java</h2>
                <h2 class="tool">Vue</h2>
                <h2 class="tool">Spring Boot</h2>
                <h2 class="tool">Git</h2>

            </div>

        </div>

    </div>
  );
}
