import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Body from './Body.jsx';

const { useState } = React;

const Home = ({aboutDisplayToggle}) =>{
  const [showHome, setHome] = useState(false);

  return (
    <div id="main-container">
      <Header aboutDisplayToggle={aboutDisplayToggle}/>
      <Body showHome = {showHome} />
    </div>
  )
}

export default Home;
