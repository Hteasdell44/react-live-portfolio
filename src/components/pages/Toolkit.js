import React from 'react';
import "../../css/Toolkit.css"

export default function Toolkit() {
  return (
    
    <div id="toolkit-container">

        <h1 className="title" >My Toolkit</h1>

        <div id="tool-holder">

            <div class="tool-list">

                <h2 class="tool">HTML</h2>
                <h2 class="tool">CSS</h2>
                <h2 class="tool">Git</h2>
                <h2 class="tool">APIs</h2>

            </div>
            
            <div class="tool-list">

                <h2 class="tool">JavaScript</h2>
                <h2 class="tool">GraphQL</h2>
                <h2 class="tool">Node</h2>
                <h2 class="tool">Express</h2>

            </div>
            
            <div class="tool-list">

                <h2 class="tool">React</h2>
                <h2 class="tool">Angular</h2>
                <h2 class="tool">MySQL</h2>
                <h2 class="tool">MongoDB</h2>

            </div>

        </div>

    </div>
  );
}
