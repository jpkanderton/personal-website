import React from 'react';
import { BsThreeDots, BsX } from 'react-icons/Bs';
import { FaGripLines } from 'react-icons/Fa';

const { useState } = React;

const MainIcon = ({status, landingClick, aboutDisplayed}) =>{

  let xlcStyle = null;

  if (status !== 'entered') {
    xlcStyle = xlcStyleExit;
  }

  return (
    <a
      id="main-icon-container"
      style={xlcStyle}
      onClick={()=> {
        landingClick();
      }}
      href="#top"
      >
      {status === 'entered' || aboutDisplayed ? <BsX size={70} color={'white'}/> : <FaGripLines size={35} color={'white'}/>}
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