import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const { useState } = React;

const Body = () => {
  return (
    <div id="body-container">
      {projectSections}
    </div>
  )
}

const projectSectionsData = [
  {
    name: 'Rental Booking Application',
    description: 'Collaborated with a remote team to build a booking application for an online property rental marketplace. I was charged with developing a listings carousel that would display other similar rental properties. Using a ​Node.​js​ Restful API and a​ ​MySQL ​​database, I built the application to display properties based on location data. I then created modular responsive modals using React Hooks and styled-components. Our team integrated the various micro-services together on a proxy server and lastly deployed the app on AWS EC2.',
    frontend: 'React, React Hooks, CSS-Grid, CSS-Flex',
    backend: 'Node, MySQL',
    video: "https://my-vids-bucket.s3-us-west-1.amazonaws.com/FEC_first_video.mov",
    id: "section-1",
    projectGitHub: 'https://github.com/Aqua-App'
  },
  {
    name: 'Retail Product Page',
    description: 'Scaled the backend for the additional products module of an online retail marketplace, containing over 10 million primary records, to a PostgreSQL database. Reduced response time by over 95% with throughput of 1k RPS with the implementation of an Nginx load-balancer distributed across four service clones. Improved Google Lighthouse audit page speed score to 98% with Redis caching system.',
    frontend: 'React, Axios, CSS-Modules, Webpack',
    backend: 'Node, Express, Nginx, Redis, PostgreSQL',
    image: "https://my-vids-bucket.s3-us-west-1.amazonaws.com/sdc-architecture.png",
    id: "section-2",
    projectGitHub: 'https://github.com/sdc01-cameron'
  },
  {
    name: 'Show Me The Goals!​',
    description: 'Designed a single-page look-up application rendering videos of current world soccer highlights based on input from a modal search bar augmented with a team statistics feature; all sourced from multiple public APIs. Optimized rendering of individual ​React​components by developing application with R​ eact Hooks​to handle state. Produced a dynamic modal interface by employing a combination of ​CSS Grid​​and C​SS Flexbox',
    frontend: 'React, React Hooks, CSS-Grid, CSS-Flex',
    backend: 'Node, MySQL',
    video: 'https://my-vids-bucket.s3-us-west-1.amazonaws.com/mvp_screen_record.mov',
    id: "section-3",
    projectGitHub: 'https://github.com/jpkanderton/john-mvp'
  }
]

const projectSections = projectSectionsData.map((data, index) => {

  const imgORvid = data.video ? <video className="video" src={data.video} width="320" height="240" controls/> : <img className="video" src={data.image} width="320" height="240"/>

  return (
    <div
      id={data.id}
      className="project-section"
      key={index}
    >
      <div className="project-details-container">
        <h1 className="font-color-prmry project-title project-subsection">{data.name}</h1>
        <div id="project-overview-title-container">
          <div className="font-color-scndry1 project-overview-title project-subsection">Overview</div>
          <a
                className="project-github-icon-container cntr-w-flex"
                href={data.projectGitHub}
              >
                <FontAwesomeIcon
                  className="font-color-prmry-w-hover cursor-pointer"
                  icon={faGithub}
                />
          </a>
        </div>
        <div className="font-color-prmry project-details-content">{data.description}</div>
      </div>
      <div className="project-video-container">
        <div className="video-container">
          {imgORvid}
        </div>
        <div className="tech-container">
          <div className="tech-title">
            <p className="font-color-scndry1 large-font">Developed Using:</p>
            <p className="font-color-prmry">Front-End: {data.frontend}</p>
            <p className="font-color-prmry">Back-End: {data.backend}</p>
          </div>
          <div className="tech-content"></div>
        </div>
      </div>
    </div>
  )
})

export default Body;