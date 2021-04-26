import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Body from './Body.jsx';

const { useState } = React;

const Home = ({displayAbout, displayContact, landingStatus, homeDisplayed, homeClick}) =>{
  if (!homeDisplayed) return null;
  if (landingStatus === 'exited') {console.log('landingStatus exited')}
  let mainContainerStyle = null;
  if (landingStatus === 'entered') {
    mainContainerStyle = homeDisplayedStyle;
    console.log('landingStatus entered')
  }
  return (
    <div id="main-container" style={mainContainerStyle}>
      <Header
        displayAbout={displayAbout}
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