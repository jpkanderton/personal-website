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
  const [homeDisplayed, setDisplayHome] = useState(false);
  const [displayMainIcon, setDisplayMainIcon] = useState(true);

  const displayHome = () => setDisplayHome(true);
  const hideHome = () => setDisplayHome(false);

  const nameClick = () => {
    setDisplayMainIcon(true);
    setDisplayHome(false);
    setLandingStatus('entered');
  }

  const aboutClick = () => {
    setDisplayAbout(true);
    setDisplayHome(false);
  };
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

  const mainIconClick = () => {
    if (landingStatus === 'exited') {
      if (aboutDisplayed) {
        setDisplayAbout(false);
        setDisplayHome(true);
        return;
      } else {
        if(!homeDisplayed) {
          setDisplayHome(true);
          setDisplayContact(false);
        };
        // setLandingStatus('entered');
        return;
      }
    }
    setTimeout(() => {
      setDisplayHome(true)
      setLandingStatus('exited')
    }, 249);
    setLandingStatus('exiting');
  };

  const homeClick = () => {
    setDisplayMainIcon(true);
    setDisplayHome(false);
    setLandingStatus('entered');
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
        aboutClick={aboutClick}
        displayContact={displayContact}
        homeDisplayed={homeDisplayed}
        homeClick={homeClick}
      />
      <Landing
        mainIconClick={mainIconClick}
        status={landingStatus}
      />
      <MainIcon
        status={landingStatus}
        mainIconClick={mainIconClick}
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

