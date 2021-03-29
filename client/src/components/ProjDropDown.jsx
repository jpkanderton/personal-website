import React from 'react';
import onHover from './helpers.js';

const { useState, useRef } = React;

const ProjDropDown = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setValue] = useState('');
  const [isSectionClickable, setSectionClickable] = useState(false);
  const [hrefs, setHrefs] = useState({
    section1: null,
    section2: null,
    section3: null
  });

  let ddProject = 'dropdown-project';

  const checkIfClickable = () => {
    if (isSectionClickable) {
      ddProject += ' clickable'
    } else {
      ddProject = 'dropdown-project'
    }
  }

  checkIfClickable();

  const dropdownClick = () => {
    if (isSectionClickable) {
      console.log('DD it is clickable');
    } else {
      console.log('DD it is NOT clickable')
    }
  }

  const dropdownEnter = () => {
    setSectionClickable(true);
    setHrefs({
      section1: '#section-1',
      section2: '#section-2',
      section3: '#section-3'
    })
  }

  const dropdownLeave = () => {
    setSectionClickable(false);
    setHrefs({
      section1: null,
      section2: null,
      section3: null
    })
  }

  return (
    <a
      className="grid-col-start-8"
      id="dropdown-container"
      onMouseLeave={() => {
        console.log('Mouse Leaves');
        setSectionClickable(false);
        dropdownLeave();
      }}
      >
      <div id="dropdown-title"
        onClick={()=> {
          setSectionClickable(!isSectionClickable);
          }
        }
        onMouseEnter={() => {
          dropdownEnter();
        }}
      >
        Projects
      </div>
      <div
        className="hidden"
        id="dropdown-projects-container">
        <a
          className={ddProject}
          onClick={dropdownClick}
          href={hrefs.section1}
        >
          Proj 1
        </a>
        <a
          className={ddProject}
          onClick={dropdownClick}
          href={hrefs.section2}
        >
          Proj 2
        </a>
        <a
          className={ddProject}
          onClick={dropdownClick}
          href={hrefs.section3}
        >
          Proj 3
        </a>
      </div>
    </a>
  )
}

export default ProjDropDown;