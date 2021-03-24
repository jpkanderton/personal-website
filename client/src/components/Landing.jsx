import React from 'react';

const { useState, useEffect } = React;
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
    setLine('Welcome To the Landing Page');
  })

  return (
    <div id="landing-container" style={outerStyle}>
      <div id="landing-square"></div>
      <div className="hidden-wrapper">
        <div id="landing-inner" onClick={landingClick} style={innerStyle}>
          <div id="landing-text">{line}</div>
        </div>
      </div>
    </div>
  )
}


export default Landing;

const innerStyleExit = {
  transform: 'translate(1000px, 0px)',
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

// BsThreeDots
// BsX