import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Body from './Body.jsx';

const { useState } = React;

const Home = () =>{
  const [showHome, setHome] = useState(false);

  const handleClick = () => setCounter(counter + 1);
  const clickHome = () => setHome(!showHome);

  return (
    <div id="main-container">
      <Header clickHome = {clickHome}/>
      <Body showHome = {showHome}/>
      <div>RANDOM DIV - Orange Color</div>
    </div>
  )
}

export default Home;
