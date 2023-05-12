import React from 'react';
import "../../css/Toolkit.css"

export default function Toolkit() {
  return (
    
    <div>

        <h1 id="title" >My Toolkit</h1>

        <div id="tool-holder">

            <div class="tool-list">

                <h2 class="tool">HTML</h2>
                <h2 class="tool">CSS</h2>
                <h2 class="tool">Git</h2>
                <h2 class="tool">API's</h2>

            </div>
            
            <div class="tool-list">

                <h2 class="tool">JavaScript</h2>
                <h2 class="tool">AJAX</h2>
                <h2 class="tool">Node.js</h2>
                <h2 class="tool">Express.js</h2>

            </div>
            
            <div class="tool-list">

                <h2 class="tool">React</h2>
                <h2 class="tool">MySQL</h2>
                <h2 class="tool">NoSQL</h2>
                <h2 class="tool">MongoDB</h2>

            </div>

        </div>

    </div>
  );
}
