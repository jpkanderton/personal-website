import React from 'react';
import axios from 'axios';
import Section1 from './body/Section1.jsx';
import Section2 from './body/Section2.jsx';
import Section3 from './body/Section3.jsx';

const { useState } = React;

const Body = () =>{

  return (
    <div id="body-container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default Body;