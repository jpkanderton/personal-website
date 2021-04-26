import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


const { useState, useEffect } = React;
// const element = <FontAwesomeIcon icon={faCoffee} />
let count = 0;

const Landing = ({landingClick, status}) => {

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

  const [line, setLine] = useState('');

  useEffect(()=> {
    setLine('Hey, I\'m John');
  })

  return (
    <div id="landing-container" style={outerStyle}>
      <div id="landing-square"></div>
      <div className="hidden-wrapper">
        <div
          id="landing-inner"
          className="bckgrnd-tan-drkr"
          style={innerStyle}>
          <img id="landing-img" src="resources/prof-pic.png"></img>
          <h1 id="landing-title-1">Hi, I'm John</h1>
          <h6
            id="landing-title-2"
            className="cursor-arrow"
          >
            I'm a software engineer and I like to build things</h6>
          <div
            id="learn-more-container" className="center-text cursor-pointer"
            onClick={landingClick}
          >
            <p className="cursor-pointer">View My Work →</p>
          </div>
          <div id="landing-icon-bar">
            <div className="landing-icon-container cntr-w-flex">
              <FontAwesomeIcon
                className="faIcon"
                icon={faGithub}
                size='3x'
                // color="white"
                color="#123C69"
                className="cursor-pointer"
              />
            </div>
            <div className="landing-icon-container cntr-w-flex">
              <FontAwesomeIcon
                icon={faPaperPlane}
                size='3x'
                // color="#123C69"
                color="#AC3B61"
                className="cursor-pointer"

              />
            </div>
            <div className="landing-icon-container cntr-w-flex">
              <FontAwesomeIcon
                icon={faLinkedin}
                size='3x'
                color="#123C69"
                className="cursor-pointer"
              />
            </div>
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