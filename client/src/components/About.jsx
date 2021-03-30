import React from 'react';

const { useState } = React;

const About = ({isDisplayed}) => {

  return (
    <div
      id="about-container"
      style = {isDisplayed ? shown : hidden}
    >
      <div id="about-inner-container">
        <div id="about-section">
          Hi hello where am i
        </div>
      </div>
    </div>
  )
}

export default About;

const hidden = {
  zIndex: -1,
  opacity: '0%',
  transform: 'translate(0px, 100vh)'
}

const shown = {
  zIndex: 2,
  opacity: '100%'
}
