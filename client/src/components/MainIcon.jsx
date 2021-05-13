import React from 'react';
import { BsX } from 'react-icons/Bs';
// import { FaGripLines } from 'react-icons/Fa';

const { useState } = React;

const MainIcon = ({status, mainIconClick, aboutDisplayed, contactDisplayed, displayMainIcon}) =>{

  if (!displayMainIcon) return null;

  let xlcStyle = null;

  if (status !== 'entered') {
    xlcStyle = xlcStyleExit;
  }

  return (
    <a
      id="main-icon-container"
      className="cntr-w-flex"
      style={xlcStyle}
      onClick={()=> {
        mainIconClick();
      }}
      href="#top"
      >
      {/* {status === 'entered' || aboutDisplayed || contactDisplayed ? <BsX size={70} color={'white'}/> : <FaGripLines size={35} color={'white'}/>} */}
      <BsX size={70} color={'white'}/>
    </a>
  )
}

export default MainIcon;



const xlcStyleExit = {
  backgroundColor: 'transparent'
}

// const BsXStyleExit = {
//   opacity: '100%'
// }

const FaGripLinesStyle = {
  color: 'white',
  size: '70'
}