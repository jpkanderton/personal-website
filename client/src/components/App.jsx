import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import MainIcon from './MainIcon.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx'
import Landing, { Wazzup } from './Landing.jsx';
import useKeyPress from './useKeyPress'


const { useState } = React;

const App = () =>{
  const [landingStatus, setLandingStatus] = useState('entered');
  const [aboutDisplayed, setDisplayAbout] = useState(false);
  const [contactDisplayed, setDisplayContact] = useState(false);
  const [homeDisplayed, setDisplayHome] = useState(false);
  const [displayMainIcon, setDisplayMainIcon] = useState(true);

  const displayHome = () => setDisplayHome(true);
  const hideHome = () => setDisplayHome(false);

  useKeyPress('Escape', () => {
    alert(`keypress made \n landing status ${landingStatus} \n contactDisplayed ${contactDisplayed} \n aboutDisplayed ${aboutDisplayed}`)
    if (landingStatus === 'entered') return mainIconClick();
    if (contactDisplayed) return setDisplayContact(false);
    if (aboutDisplayed) return setDisplayAbout(false);
  })

  const nameClick = () => {
    setDisplayMainIcon(true);
    setDisplayMainIcon(true);
    setDisplayHome(false);
    setLandingStatus('entered');
  }

  const aboutClick = () => {
    setDisplayMainIcon(true);
    setDisplayAbout(true);
    setDisplayHome(false);
  };
  const hideAbout = () => setDisplayAbout(false);
  const displayContact = () => {
    setDisplayMainIcon(true);
    setDisplayHome(false);
    setDisplayContact(true);
  }
  const hideContact = () => {
    setDisplayContact(false)
  };

  const mainIconClick = () => {
    setDisplayMainIcon(false);
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

  const contactClick = () => {
    setDisplayAbout(false);
    displayContact();
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
        displayMainIcon = {displayMainIcon}
      />
      <Contact
        isDisplayed={contactDisplayed}
        hideContact={hideContact}
      />
      <About
        isDisplayed={aboutDisplayed}
        hideAbout={hideAbout}
        contactClick={contactClick}
      />
    </>
  )
}

export default App;

