import React from 'react';
import axios from 'axios';
import Select from "react-select";
import ProjectDropdown from './ProjectDropdown.jsx';

const { useState, useRef } = React;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Header = ({aboutClick, contactClick, homeClick}) =>{
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div
      id="header-container"
      className="bckgrnd-main-prmry"
    >
      <div id="desktop-nav">
        <div className="grid grid-12-columns">
          <a
            className="grid-col-start-2 font-color-prmry header-text"
            onClick={homeClick}
          >
            John Anderton
          </a>
          <a
            className="grid-col-start-4 font-color-prmry header-text"
            onClick={homeClick}
            href="#"
          >
            Home
          </a>
          <a
            className="grid-col-start-6 font-color-prmry header-text"
            onClick={aboutClick}
            href="#about-container"
          >
            About
          </a>
          <ProjectDropdown />
          <a
            className="grid-col-start-10 font-color-prmry header-text"
            onClick={contactClick}
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