import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Body from './Body.jsx';

const { useState } = React;

const Home = ({displayAbout}) =>{

  return (
    <div id="main-container">
      <Header displayAbout={displayAbout}/>
      <Body />
    </div>
  )
}

export default Home;
