import React from 'react';
import axios from 'axios';

const { useState } = React;

const Section2 = () =>{

  return (
    <div id="section-2" className="project-section">
      <div className="project-details-container">
        <h1 className="font-color-prmry project-title project-subsection">Cameron</h1>
        <div className="font-color-scndry1 project-overview-title project-subsection">Overview</div>
        <div className="font-color-prmry project-details-content project-subsection">{description}</div>
      </div>
      <div className="project-video-container">
        <div className="video-container">
          <img className="video" src="https://my-vids-bucket.s3-us-west-1.amazonaws.com/sdc-architecture.png" width="320" height="240"/>
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

export default Section2;

const loremEpsum = "Reworked the back-end of a retail marketplace application in order to handle higher traffic. Moved database to PostgreSQL for more efficient read operations and ACID compliance. Horizontally scaled the application with by placing an Nginx load balancer in front of three instances of the application's server. Further improved the responsiveness of the application by adding Redis caching in front of the database.";

const description = "Scaled the backend for the additional products module of an online retail marketplace, containing over 10 million primary records, to a PostgreSQL database. Reduced response time by over 95% with throughput of 1k RPS with the implementation of an Nginx load-balancer distributed across four service clones. Improved Google Lighthouse audit page speed score to 98% with Redis caching system."

const techTitle = "Developed Using:"

const frontEndTech = "Front-End: React, Axios, CSS-Modules, Webpack";

const backEndTech = "Back-End: Node, Express, Nginx, Redis, PostgreSQL";