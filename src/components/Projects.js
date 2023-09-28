import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects Page</h2>
      {/* Your Projects page content */}       
      <a href="https://github.com/SudoSapien21/LOGO-CREATOR" target="_blank" rel="noreferrer">
      <img src="./logo.png" className="Me4" width="200" height="200" alt="LOGO CREATOR"></img>
      <p>LOGO CREATOR</p>
    </a>

    <a href="https://github.com/SudoSapien21/Text-Editor" target="_blank"  rel="noreferrer"> 
    <img src="./text.gif"  alt="TEXT EDITOR"></img>    <p>TEXT EDITOR</p>
   </a>
      

    </div>
 
      
  );
}

export default Projects;
