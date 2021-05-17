import React from 'react';
const { useState } = React;

const text = 'I am a Full-Stack Software Engineer with a background in JavaScript (ES5/ES6+), ReactJS with Hooks, Node.js, ExpressJS, MySQL, PostgreSQL, Apache Cassandra, MongoDB, AWS/EC2/S3, Webpack, Nginx, Enzyme, Jest, ArtilleryIO, LoaderIO, New Relic.';

const textTwo = 'im doing well but i dont understand what i am doing';

const textThree = 'waszzzzup sdfkjsdkfjsa hhhheeyyyyyyyy';

const pictureContainer =
  <div id="about-picture-container">
    <img id="about-prof-img" src="resources/_DSC1180.JPG"></img>
  </div>;

const About = ({isDisplayed}) => {

  return (
    <>
    {isDisplayed ?
    <div
      id="about-container"
      style = {isDisplayed ? shown : hidden}
    >
      <div id="about-inner-container">
        <div id="about-section">
          <div className="about-side">
            {pictureContainer}
          </div>
          <div className="about-side">
            <p>{text}</p>
            <p>{textTwo}</p>
            <p>{textThree}</p>
          </div>
        </div>
      </div>
    </div>
    :
    null}
    </>
  )
}

export default About;

const hidden = {
  zIndex: -1,
  opacity: '0%',
  // transform: 'translate(0px, 100vh)'
}

const shown = {
  zIndex: 2,
  opacity: '100%'
}
