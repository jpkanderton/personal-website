import React from 'react';
const { useState } = React;

const About = ({isDisplayed, contactClick}) => {

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
              <div className="about-txt-lrg-font">
                <p>{introTxt}</p>
              </div>
              <div className="about-itm about-txt-smll-font">
                <p>{sftwrTxt1}</p>
              </div>
              <div className="about-itm about-txt-smll-font">
                <p>{sftwrTxt2}</p>
              </div>
              {/* <ProjectsButton /> */}
              <div className="about-itm about-txt-smll-font">
                <p>{recrtnTxt}</p>
              </div>
              <div className="about-itm about-txt-smll-font">
                <p>{cntctTxt}</p>
              </div>
              <ContactButton contactClick={contactClick} />
            </div>
          </div>
        </div>
        <div id="line"></div>
        <div id="tech-wrapper">
          <div id="tech-title">
            <p className="font-color-prmry">Tech Background:</p>
          </div>
          <TechItms />
        </div>
      </div>
      :
      null}
    </>
  )
}

const ContactButton = ({contactClick}) => {
  return (
    <div
      id="contact-button"
      className="clickable about-itm"
      onClick={contactClick}
    >
      <p className="clickable">Contact Me!</p>
    </div>
  )
}

const ProjectsButton = () => {
  return (
    <div id="projects-button">
      <p className="clickable">Projects</p>
    </div>
  )
}

const TechItms = () => {
  const techItmNames = ['JavaScript', 'React', 'HTML', 'CSS', 'jQuery', 'Styled-Components', 'Webpack', 'Babel', 'Node.js', 'ExpressJS', 'MySQL', 'Sequelize', 'MongoDB', 'Mongoose', 'PostgreSQL', 'Apache Cassandra', 'Nginx', 'Redis', 'PM2', 'AWS/EC2/S3', 'Enzyme', 'Jest', 'ArtilleryIO', 'LoaderIO', 'New Relic', 'Git Workflow', 'Agile Methodology']
  const techItmElements = techItmNames.map(itm=> <div key="tech-itm" className="tech-itm font-color-prmry">{itm}</div>)
  return (
    <div id="tech-content">
      {techItmElements}
    </div>
  )
}

const pictureContainer =
  <div id="about-picture-container">
    <img id="about-prof-img" src="resources/john-looking.png"></img>
  </div>;

const introTxt = "Hi, I'm John, a software engineer based in Hailey, ID.";
// const sftwrTxt = "Thanks for checking out my website! I love software engineering because of how accessible and open-ended the possibilities are to build and create. I have a great eye for detail and style and enjoy focusing on the UX and appearance of my projects. My expertise is primarily in React, Next.js, and Node.js.";

const sftwrTxt1 = "Finding creative solutions to difficult problems inspires my work and life. In life, this has meant anything from embracing the challenge of my car radiator blowing out in the middle of the desert, to something as innocuous as finding a more efficient way to fold a t-shirt. In software development, this joy drives my belief that there is always a solution to any issue a developer faces."

const sftwrTxt2 = "I strive to produce solutions and create applications that are built to last, or better yet, built to be built upon later. Ensuring the code I produce is clean and nimble, and the applications I develop are intuitive and effective, are some of my top priorities."

const cntctTxt = "If you would like to reach out or just say hi, please send me a message!";

const recrtnTxt = "When I am not coding, you can usually find me outside. Depending the season, I'll either be hiking, mountain biking, snowboarding, or camping; and if I'm not doing any of these things, I'm probably playing soccer."

export default About;