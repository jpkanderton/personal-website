import React from 'react';

const { useState } = React;

const About = ({isDisplayed, hideAbout}) => {
  const [show, setShow] = useState(true);

  return (
    <div
      id="about-container"
      onClick= {hideAbout}
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
  transform: 'translate(0px, 1000vh)',
}

const shown = {
  zIndex: 5,
  opacity: '100%'
}
