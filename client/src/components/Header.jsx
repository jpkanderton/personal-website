import React from 'react';
import axios from 'axios';

const { useState, useRef } = React;

const Header = () =>{

  return (
    <div id="header-container">
      <div id="desktop-nav" className="ss-font">
        <div className="grid grid-col-12">
          <a className="col-start-2 col-span-3" href="#section-2" onClick={() => console.log('Home Clicked') }>John Anderton</a>
          <a className="col-start-8 col-span-1">Home</a>
          <a className="col-start-9 col-span-1">About</a>
          <a className="col-start-10 col-span-1">Projects</a>
          <a className="col-start-11 col-span-1">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header;