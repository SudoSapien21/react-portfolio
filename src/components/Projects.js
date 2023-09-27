import React from 'react';

function Projects() {
  return (
    <p className="projects">
      <h2>Projects Page</h2>
      {/* Your Projects page content */}       
      <a href="https://github.com/SudoSapien21/LOGO-CREATOR" target="_blank">
      <img src="./logo.png" class="Me4" width="200" height="200" alt="LOGO CREATOR"></img>
      <p>LOGO CREATOR</p>
    </a>

    <a href="https://github.com/SudoSapien21/Text-Editor" target="_blank"> 
    <img src="./text.gif"  alt="TEXT EDITOR"></img>
    <p>TEXT EDITOR</p>
   </a>
      
      
    </p>

  );
}

export default Projects;
