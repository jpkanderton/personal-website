import React from 'react';
const { useState } = React;

const text = 'adskjfha adskjfdkajhfdaskf  sdkjhfkdjahfkajs dkjfhs sdkjfhk sdkjfhkj dksjfhkjh sdkfjhkh sdkfjhkjh sdfkjhkj hdsf skjdhfkh ksjhfkj skjfhkjh  ksdfhkjdshkjhfds kjhdsfkjhsdkjhf  ksjhdfkjdhskjf ksjdhfkjdhskfkj skjdfhkjdkhsfh';

const textTwo = 'im doing well but i dont understand what i am doing';

const textThree = 'waszzzzup sdfkjsdkfjsa hhhheeyyyyyyyy';

const pictureContainer = <div id="about-picture-container"></div>;

const About = ({isDisplayed}) => {

  return (
    <div
      id="about-container"
      style = {isDisplayed ? shown : hidden}
    >
      <div id="about-inner-container">
        <div id="about-section">
          <div className="about-side">
            {pictureContainer}
          </div>
          <div className="about-side">
            <p>{text}</p>
            <p>{textTwo}</p>
            <p>{textThree}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

const hidden = {
  zIndex: -1,
  opacity: '0%',
  // transform: 'translate(0px, 100vh)'
}

const shown = {
  zIndex: 2,
  opacity: '100%'
}
