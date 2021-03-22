import React from 'react';
import axios from 'axios';

const { useState, useRef } = React;

const Header = ({clickHome}) =>{
  const [hooksExample, setHooksExample] = useState('This is a React Hooks example');
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  // console.log('ref header: ', ref);

  return (
    <div id="header-container" style={headerStyle}>
      <div id="desktop-nav" className="ss-font">
        <div className="grid grid-col-12">
          <a className="col-start-2 col-span-2" href="#section-2" onClick={() => { console.log('hi'); clickHome()} }>John Anderton</a>
          <div className="col-start-8 col-span-1">Home</div>
          <div className="col-start-9 col-span-1">About</div>
          <div className="col-start-10 col-span-1">Projects</div>
          <div className="col-start-11 col-span-1">Contact</div>
        </div>
      </div>
    </div>
  )
}

export default Header;


const headerStyle  = {
  backgroundColor: 'violet',
  paddingTop: '100px'
}