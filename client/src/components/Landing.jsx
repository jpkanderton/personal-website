import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
// fa-paper-plane"
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
        <div id="landing-inner" onClick={landingClick} style={innerStyle}>
          <div id="landing-text">{line}</div>
          <img id="landing-img" src="resources/prof-pic.png"></img>
          <div id="landing-icon-bar">
            <div className="landing-icon-container">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="landing-icon-container">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="landing-icon-container">
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
            <div className="landing-icon-container">
            <FontAwesomeIcon icon={faTwitter} />
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