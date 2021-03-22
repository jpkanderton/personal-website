import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import Landing, { Wazzup } from './Landing.jsx';

const { useState } = React;

const App = () =>{
  const [landingStatus, setLandingStatus] = useState('enter');

  const landingClick = () => {
    setTimeout(() => {
      console.log('exited')
      setLandingStatus('exited')
    }, 1000);
    console.log('exiting')
    setLandingStatus('exiting');
  };

  return (
    <>
    {console.log('landingStatus: ', landingStatus)}
      <Home />
      <Landing landingClick={landingClick} status={landingStatus}/>
      <div id="x-logo-container"><p>I will display &#9986;</p>
</div>
    </>
  )
}

export default App;