import React from 'react';
import { BsX } from 'react-icons/bs';

const { useState } = React;

const MainIcon = ({mainIconClick, displayMainIcon}) =>{

  if (!displayMainIcon) return null;

  return (
    <a
      id="main-icon-container"
      className="cntr-w-flex"
      onClick={mainIconClick}
      href="#top"
      >
      <BsX size={70} className="font-color-prmry-w-hover"/>
    </a>
  )
}

export default MainIcon;