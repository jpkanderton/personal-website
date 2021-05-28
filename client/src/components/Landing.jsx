import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const { useState, useEffect } = React;
let count = 0;

const Landing = ({mainIconClick, status}) => {

  let outerStyle = null;
  let innerStyle = null;
  let landingSquareStyle = null;

  if (status === 'exiting') {
    outerStyle = outerStyleExiting;
    innerStyle = innerStyleExit;
    landingSquareStyle = landingSquareStyleExit;
  } else if (status === 'exited') {
    outerStyle = outerStyleExited;
    innerStyle = innerStyleExit;
    landingSquareStyle = landingSquareStyleExit;
  }

  return (
    <div
      id="landing-container"
      className="bckgrnd-main-prmry"
      style={outerStyle}
    >
      <div
        id="landing-square"
        className="bckgrnd-main-prmry"
      ></div>
      <div className="hidden-wrapper">
        <div
          id="landing-inner"
          className="bckgrnd-main-prmry"
          style={innerStyle}>
          <img id="landing-img" src="resources/prof-pic.png"></img>
          <h1 id="landing-title-1"
            className="font-color-prmry"
          >
            Hi, I'm John
          </h1>
          <h6
            id="landing-title-2"
            className="font-color-prmry cursor-arrow"
          >
            I'm a software engineer and I like to build things</h6>
          <div
            id="learn-more-container" className="center-text cursor-pointer"
            onClick={mainIconClick}
          >
            <p className="font-color-prmry cursor-pointer">View My Work →</p>
          </div>
          <div
            id="landing-icon-bar"
            className="bckgrnd-scndry1-prmry"
          >
            <a
              className="landing-icon-container cntr-w-flex"
              href="https://github.com/jpkanderton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size='3x'
                className="font-color-prmry-w-hover cursor-pointer"
              />
            </a>
            <a
              className="landing-icon-container cntr-w-flex"
              href="mailto:john.pk.anderton@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                size='3x'
                className="font-color-prmry-w-hover cursor-pointer"
              />
            </a>
            <a
              className="landing-icon-container cntr-w-flex"
              href="https://www.linkedin.com/in/johnpkanderton/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size='3x'
                className="font-color-prmry-w-hover cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Landing;

const innerStyleExit = {
  transform: 'translate(0px, 1000px)',
  opacity: '0%',
}

const outerStyleExited = {
  opacity: '0%',
  zIndex: '-1'
}

const outerStyleExiting = {
  opacity: '0%'
}

const landingSquareStyleExit = {
  opacity: '0%'
}