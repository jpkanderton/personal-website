import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import MainIcon from './MainIcon.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx'
import Landing, { Wazzup } from './Landing.jsx';


const { useState, useEffect } = React;

const App = () =>{
  const [landingStatus, setLandingStatus] = useState('entered');
  const [aboutDisplayed, setDisplayAbout] = useState(false);
  const [contactDisplayed, setDisplayContact] = useState(false);
  const [homeDisplayed, setDisplayHome] = useState(false);
  const [displayMainIcon, setDisplayMainIcon] = useState(true);

  const displayHome = () => {
    if (landingStatus === 'entered') {
      setTimeout(() => {
        setDisplayHome(true)
        setLandingStatus('exited')
      }, 249);
      setDisplayMainIcon(false);
      setLandingStatus('exiting');
    } else {
      setDisplayAbout(false);
      setDisplayContact(false);
      setDisplayMainIcon(false);
      setLandingStatus('exited');
      setDisplayHome(true);
    }
  }

  const useKeyPress = (key, action) => { useEffect(()=>{
      function onKeyUp(e) {
        if (e.key === key) action();
      }
      window.addEventListener('keyup', onKeyUp);
      return () => {window.removeEventListener('keyup', onKeyUp)}
    }, [landingStatus, aboutDisplayed, contactDisplayed, homeDisplayed]);
  }

  useKeyPress('Escape', displayHome);

  const mainIconClick = displayHome;

  const aboutClick = () => {
    setDisplayMainIcon(true);
    setDisplayAbout(true);
    setDisplayHome(false);
  };

  const homeClick = () => {
    setDisplayMainIcon(true);
    setDisplayHome(false);
    setLandingStatus('entered');
  };

  const contactClick = () => {
    setDisplayAbout(false);
    setDisplayHome(false);
    setLandingStatus('exited');
    setDisplayContact(true);
    setDisplayMainIcon(true);
  };

  return (
    <>
      <Home
        landingStatus={landingStatus}
        homeDisplayed={homeDisplayed}
        aboutClick={aboutClick}
        contactClick={contactClick}
        homeClick={homeClick}
      />
      <Landing
        mainIconClick={mainIconClick}
        status={landingStatus}
      />
      <MainIcon
        mainIconClick={mainIconClick}
        isDisplayed = {displayMainIcon}
      />
      <Contact
        isDisplayed={contactDisplayed}
      />
      <About
        isDisplayed={aboutDisplayed}
        contactClick={contactClick}
      />
    </>
  )
}

export default App;

