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

const Header = ({aboutClick, displayContact, homeClick}) =>{
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div id="header-container">
      <div id="desktop-nav" className="ss-font">
        <div className="grid grid-12-columns">
          <a
            className="grid-col-start-2 header-text"
            onClick={homeClick}
          >
            John Anderton
          </a>
          <a
            className="grid-col-start-4 header-text"
            onClick={homeClick}
            href="#"
          >
            Home
          </a>
          <a
            className="grid-col-start-6 header-text"
            onClick={aboutClick}
            href="#about-container"
          >
            About
          </a>
          <ProjDropDown />
          <a
            className="grid-col-start-10 header-text"
            onClick={displayContact}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;

const dropDownStyle = {
  backgroundColor: 'red',
}