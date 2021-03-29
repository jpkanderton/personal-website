import React from 'react';
import axios from 'axios';
import Select from "react-select";
import ProjDropDown from './ProjDropDown.jsx';


const { useState, useRef } = React;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Header = () =>{
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div id="header-container">
      <div id="desktop-nav" className="ss-font">
        <div className="grid grid-12-columns">
          <a className="grid-col-start-2" href="#section-2" onClick={() => console.log('Home Clicked') }>John Anderton</a>
          <a className="grid-col-start-4" href="#">Home</a>
          <a className="grid-col-start-6">About</a>
          <ProjDropDown />
          <a className="grid-col-start-10">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header;

const dropDownStyle = {
  backgroundColor: 'red',
}