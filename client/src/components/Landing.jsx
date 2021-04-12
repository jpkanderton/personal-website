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
        <div
          id="landing-inner"
          className="bckgrnd-tan-drkr"
          onClick={landingClick} style={innerStyle}>
          <div id="landing-text">{line}</div>
          <h1 id="landing-title-1">Software Engineer</h1>
          <img id="landing-img" src="resources/prof-pic.png"></img>
          <div id="landing-icon-bar">
            <div className="landing-icon-container cntr-w-flex">
              <FontAwesomeIcon
                className="faIcon"
                icon={faGithub}
                size='3x'
                // color="white"
                color="#123C69"
              />
            </div>
            <div className="landing-icon-container cntr-w-flex">
              <FontAwesomeIcon
                icon={faPaperPlane}
                size='3x'
                // color="#123C69"
                color="#AC3B61"
              />
            </div>
            <div className="landing-icon-container cntr-w-flex">
              <FontAwesomeIcon
                icon={faLinkedin}
                size='3x'
                color="#123C69"
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