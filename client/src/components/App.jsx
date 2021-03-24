import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import MainIcon from './MainIcon.jsx'
import Landing, { Wazzup } from './Landing.jsx';


const { useState } = React;

const App = () =>{
  const [landingStatus, setLandingStatus] = useState('entered');

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
    {console.log('landingStatus: ', landingStatus)}
      <Home />
      <Landing landingClick={landingClick} status={landingStatus}/>
      <MainIcon status={landingStatus} landingClick={landingClick} exitingClick={exitingClick}/>
    </>
  )
}

export default App;