import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import MainIcon from './MainIcon.jsx';
import About from './About.jsx';
import Landing, { Wazzup } from './Landing.jsx';


const { useState } = React;

const App = () =>{
  const [landingStatus, setLandingStatus] = useState('entered');
  const [aboutDisplayed, setDisplayAbout] = useState(false);

  const displayAbout = () => setDisplayAbout(true);
  const hideAbout = () => setDisplayAbout(false);

  const landingClick = () => {
    if (landingStatus === 'exited') {
      if (aboutDisplayed) {
        return setDisplayAbout(false);
      } else {
        return setLandingStatus('entered')
      }
    }
    setTimeout(() => {
      setLandingStatus('exited')
    }, 249);
    setLandingStatus('exiting');
  };

  const exitingClick = () => {
    setTimeout(() => {
      setLandingStatus('entered')
    }, 249);
    setLandingStatus('entering');
  };

  return (
    <>
      <Home
        displayAbout={displayAbout}
      />
      <Landing
        landingClick={landingClick}
        status={landingStatus}
      />
      <MainIcon
        status={landingStatus}
        landingClick={landingClick}
        exitingClick={exitingClick}
        aboutDisplayed = {aboutDisplayed}
      />
      <About
        isDisplayed={aboutDisplayed}
        hideAbout={hideAbout}
      />
    </>
  )
}

export default App;

