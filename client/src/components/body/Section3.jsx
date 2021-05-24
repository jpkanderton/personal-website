import React from 'react';
import axios from 'axios';

const { useState } = React;

const Section3 = () =>{

  return (
    <div id="section-3" className="project-section">
      <div className="project-details-container">
        <h1 className="font-color-prmry project-title project-subsection">Show Me The Goals!​</h1>
        <div className="font-color-scndry1 project-overview-title project-subsection">Overview</div>
        <div className="font-color-prmry project-details-content">{description}</div>
      </div>
      <div className="project-video-container">
        <div className="video-container">
          <video className="video" src="https://my-vids-bucket.s3-us-west-1.amazonaws.com/mvp_screen_record.mov" width="320" height="240" controls/>
        </div>
        <div className="tech-container">
          <div className="tech-title">
            <p className="font-color-prmry large-font">{techTitle}</p>
            <p className="font-color-prmry">{frontEndTech}</p>
            <p className="font-color-prmry">{backEndTech}</p>
          </div>
          <div className="tech-content"></div>
        </div>
      </div>
    </div>
  )
}

export default Section3;

const loremEpsum = "Collaborated with a remote team to build a booking application for reserving campsites. I was tasked with the description and details component and designed a RESTful API with Express and Node.js to populate the client with data. I then created modular responsive modals with React Hooks and CSS transitions. At the end of the project we deployed the app on AWS EC2 and pieced the components together on a proxy server.";

const description = " Designed a single-page look-up application rendering videos of current world soccer highlights based on input from a modal search bar augmented with a team statistics feature; all sourced from multiple public APIs. Optimized rendering of individual ​React​components by developing application with R​ eact Hooks​to handle state. Produced a dynamic modal interface by employing a combination of ​CSS Grid​​and C​ SS Flexbox"

const techTitle = "Developed Using:"

const frontEndTech = "Front-End: React, React Hooks, CSS-Grid, CSS-Flex";

const backEndTech = "Back-End: Node, MySQL";