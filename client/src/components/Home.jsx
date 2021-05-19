import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Body from './Body.jsx';

const { useState } = React;

const Home = ({aboutClick, displayContact, landingStatus, homeDisplayed, homeClick}) =>{
  if (!homeDisplayed) return null;
  let mainContainerStyle = null;
  if (landingStatus === 'entered') {
    mainContainerStyle = homeDisplayedStyle;
  }
  return (
    <div
      id="main-container"
      className="bckgrnd-main-prmry"
      style={mainContainerStyle}
    >
      <Header
        aboutClick={aboutClick}
        displayContact={displayContact}
        homeClick={homeClick}
      />
      <Body />
    </div>
  )
}

export default Home;


const homeDisplayedStyle = {
  transform: 'translate(0px, -1000px)',
  opacity: '0%',
}