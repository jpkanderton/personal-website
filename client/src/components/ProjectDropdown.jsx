import React from 'react';

const { useState, useRef } = React;

const ProjectDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setValue] = useState('');
  const [isSectionClickable, setSectionClickable] = useState(false);
  const [hrefs, setHrefs] = useState({
    section1: null,
    section2: null,
    section3: null
  });

  let ddProject = 'font-color-prmry dropdown-project';

  const toggleClickability = () => {
    if (isSectionClickable) {
      ddProject += ' clickable'
    } else {
      ddProject = 'dropdown-project'
    }
  }

  toggleClickability();

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
    <div
      className="grid-col-start-8 header-text"
      id="dropdown-container"
      onMouseLeave={() => {
        setSectionClickable(false);
        dropdownLeave();
      }}
      >
      <div
        id="dropdown-title header-text"
        className="font-color-prmry"
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
          href={hrefs.section1}
        >
          <span className="clickable">Rental Booking Application</span>
        </a>
        <a
          className={ddProject}
          href={hrefs.section2}
        >
          <span className="clickable">Retail Product Page</span>
        </a>
        <a
          className={ddProject}
          href={hrefs.section3}
        >
          <span className="clickable">Show Me The Goals!​</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectDropdown;