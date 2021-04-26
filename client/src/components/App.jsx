import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import MainIcon from './MainIcon.jsx';
import About from './About.jsx';
import Contact from './contact/Contact.jsx'
import Landing, { Wazzup } from './Landing.jsx';


const { useState } = React;

const App = () =>{
  const [landingStatus, setLandingStatus] = useState('entered');
  const [aboutDisplayed, setDisplayAbout] = useState(false);
  const [contactDisplayed, setDisplayContact] = useState(false);
  const [homeDisplayed, setDisplayHome] = useState(true);

  const displayHome = () => setDisplayHome(true);
  const hideHome = () => setDisplayHome(false);

  const displayAbout = () => setDisplayAbout(true);
  const hideAbout = () => setDisplayAbout(false);
  const displayContact = () => {
    console.log('setting display contact to false')
    setDisplayHome(false);
    setDisplayContact(true);
  }
  const hideContact = () => {
    console.log('setting display contact to false')
    setDisplayContact(false)
  };

  const landingClick = () => {
    if (landingStatus === 'exited') {
      if (aboutDisplayed) {
        return setDisplayAbout(false);
      } else {
        if(!homeDisplayed) {
          setDisplayHome(true);
          setDisplayContact(false);
        };
        setLandingStatus('entered');
        return;
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
        landingStatus={landingStatus}
        displayAbout={displayAbout}
        displayContact={displayContact}
        homeDisplayed={homeDisplayed}
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
        contactDisplayed = {contactDisplayed}
      />
      <About
        isDisplayed={aboutDisplayed}
        hideAbout={hideAbout}
      />
      <Contact
        isDisplayed={contactDisplayed}
        hideContact={hideContact}
      />
    </>
  )
}

export default App;

