import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import MainIcon from './MainIcon.jsx';
import About from './About.jsx';
import Landing, { Wazzup } from './Landing.jsx';


const { useState } = React;

const App = () =>{
  const [landingStatus, setLandingStatus] = useState('entered');
  const [displayAbout, setDisplayAbout] = useState(false);

  const displayToggle = () => {
    setDisplayAbout(!displayAbout);
  }

  const landingClick = () => {
    if (landingStatus === 'exited') {
      return setLandingStatus('entered')
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
        aboutDisplayToggle={displayToggle}
      />
      <Landing
        landingClick={landingClick}
        status={landingStatus}
      />
      <MainIcon
        status={landingStatus}
        landingClick={landingClick} exitingClick={exitingClick}
      />
      <About isDisplayed={displayAbout} displayToggle={displayToggle}/>
    </>
  )
}

export default App;

