import React from 'react';
import onHover from './helpers.js';

const { useState, useRef } = React;

const ProjDropDown = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setValue] = useState('');
  const [isDDClickable, setDDClickable] = useState(false);
  const [hrefP1, setHrefP1] = useState(null);
  const [hrefP2, setHrefP2] = useState(null);
  const [hrefP3, setHrefP3] = useState(null);

  let optionItems = ['dog', 'cat', 'bird'];
  let options = optionItems.map((item) => {
    return <option key={item} value={item}>what is up {item}??</option>
  })

  let ddProject = 'dd-project';

  if (isDDClickable) {
    ddProject += ' clickable'
  } else {
    ddProject = 'dd-project'
  }

  const clickOnDD = () => {
    if (isDDClickable) {
      console.log('DD it is clickable');
    } else {
      console.log('DD it is NOT clickable')
    }
  }

  return (
    // <>
      <div className="grid-col-start-8" id="dropdown-container" onMouseEnter={() => {console.log('wazzup'); setDDClickable(true)}} onMouseLeave={() => {console.log('wazzup'); setDDClickable(false)}}>
        <div id="dd-title"
          onClick={()=> {
            setDDClickable(true);
            setHrefP1('#top')
            }
          }>
          Projects
        </div>
        <div
          className="hidden"
          id="dd-projects-container">
          <a className={ddProject} onClick={clickOnDD} href={hrefP1}>
            Proj 1
          </a>
          <a
            className={ddProject}
            onClick={clickOnDD}
            href="#top"

          >
            Proj 2
            </a>
          <div className={ddProject} onClick={clickOnDD}>Proj 3</div>
        </div>
      </div>

    // </>
  )
}

export default ProjDropDown;

{/* <div className="custom-select-wrapper">
<div className="custom-select">
  <div className="custom-select__trigger"><span>Projects</span>
      <div className="arrow"></div>
  </div>
  <div className="custom-options">
    <span className="custom-option selected" value="project1">Project 1</span>
    <span className="custom-option" value="project2">Project 2</span>
    <span className="custom-option" value="project3">Project 3</span>
  </div>
</div>
</div>
</div> */}