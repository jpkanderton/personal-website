import React from 'react';
const { useState } = React;

const About = ({isDisplayed}) => {

  return (
    <>
      {isDisplayed ?
      <div id="about-wrapper">
        <div id="about-content-wrapper">
          <div id="about-content">
            <div id="about-img-wrapper">
              <img id="about-img" src="resources/john-looking-1.png"></img>
            </div>
            <div id="about-text-wrapper">
              <div
                id="about-text-title"
                className="about-text"
              >
                <p>{introTxt}</p>
              </div>
              <div
                id="about-text-text1"
                className="about-text"
              >
                <p>{sftwrTxt}</p>
              </div>
              <div
                className="about-text"
              >
                <p>{recrtnTxt}</p>
              </div>
              <div
                id="about-text-text2"
                className="about-text"
              >
                <p>{cntctTxt}</p>
              </div>
              <ContactButton/>
            </div>
          </div>
        </div>
      </div>
      :
      null}
    </>
  )
}

const ContactButton = () => {
  return (
    <div id="contact-button">
      Contact Me!
    </div>
  )
}

const ProjectsButton = () => {
  return (
    <div id="projects-button">
      Projects
    </div>
  )
}

const pictureContainer =
  <div id="about-picture-container">
    <img id="about-prof-img" src="resources/john-looking.png"></img>
  </div>;

const introTxt = "I'm John, a software engineer based in Hailey, ID.";
const sftwrTxt = "Thanks for checking out my website! I love software engineering because of how accessible and open-ended the possibilities are to build and create. I have a great eye for detail and style and enjoy focusing on the UX and appearance of my projects. My expertise is primarily in React, Next.js, and Node.js.";
const cntctTxt = "If you would like to reach out or just say hi send me a message!";
const recrtnTxt = "When I am not coding, you can usually find me outside. Depending the season, I'll either be hiking, mountain biking, snowboarding, or camping; and if I'm not doing any of these things, I'm probably playing soccer."

export default About;