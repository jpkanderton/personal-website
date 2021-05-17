import React from 'react';
import axios from 'axios';

const { useState } = React;

const Section1 = () =>{

  return (
    <div id="section-1" className="project-section">
      <div className="project-details-container">
        <h1 className="project-title project-subsection">Aqua</h1>
        <div className="project-overview-title project-subsection">Overview</div>
        <div className="project-details-content project-subsection">{description}</div>
      </div>
      <div className="project-video-container">
        <div className="video-container">
          <video className="video" src="https://my-vids-bucket.s3-us-west-1.amazonaws.com/FEC_first_video.mov" width="320" height="240" controls/>
        </div>
        <div className="tech-container">
          <div className="tech-title">
            <p className="large-font">{techTitle}</p>
            <p>{frontEndTech}</p>
            <p>{backEndTech}</p>
          </div>
          <div className="tech-content"></div>
        </div>
      </div>
    </div>
  )
}

export default Section1;

const loremEpsum = "Collaborated with a remote team to build a booking application for reserving campsites. I was tasked with the description and details component and designed a RESTful API with Express and Node.js to populate the client with data. I then created modular responsive modals with React Hooks and CSS transitions. At the end of the project we deployed the app on AWS EC2 and pieced the components together on a proxy server.";

const description = "Collaborated with a remote team to build a booking application for an online property rental marketplace. I was charged with developing a listings carousel that would display other similar rental properties. Using a ​Node.​js​ Restful API and a​ ​MySQL ​​database, I built the application to display properties based on location data. I then created modular responsive modals using React Hooks and styled-components. Our team integrated the various micro-services together on a proxy server and lastly deployed the app on AWS EC2.";


const techTitle = "Developed Using:"

const frontEndTech = "Front-End: React, React Hooks, CSS-Grid, CSS-Flex";

const backEndTech = "Back-End: Node, MySQL";