import React from 'react';

const { useState } = React;

const About = ({isDisplayed, displayToggle}) => {
  const [show, setShow] = useState(true);

  return (
    <div
      id="about-container"
      onClick= {displayToggle}
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
  zIndex: -1
}

const shown = {
  zIndex: 5
}
