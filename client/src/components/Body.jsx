import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';

const { useState } = React;

const Body = ( {showHome} ) =>{
  const [hooksExample, setHooksExample] = useState('This is a React Hooks example');
  const [counter, setCounter] = useState(0);


  return (
    <div id="body-container">
      <div id="section-1" className="large-section">What is up in Section 1</div>
      {!showHome ? <div id="section-2" className="large-section">What is up in Section 2 A Side</div>: <div id="section-2" className="large-section">What is up in Section 2 B Side</div>}
        {/* <div id="section-2-inner">hi</div> */}
      <div id="section-3" className="large-section">What is up in Section 3</div>
    </div>
  )
}

export default Body;