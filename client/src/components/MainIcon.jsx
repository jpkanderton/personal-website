import React from 'react';
import { BsThreeDots, BsX } from 'react-icons/Bs';
import { FaGripLines } from 'react-icons/Fa';

const { useState } = React;

const MainIcon = ({status, landingClick}) =>{

  let xlcStyle = null;
  let BsXStyle = null;

  if (status === 'entered') {
    //
  } else {
    xlcStyle = xlcStyleExit;
    BsXStyle = BsXStyleExit;
  }

  return (
    <a id="main-icon-container" style={xlcStyle} onClick={landingClick} href="#top">
      {status === 'entered' ? <BsX style={BsXStyle} size={70} color={'white'}/> : <FaGripLines size={35} color={'white'}/>}
    </a>
  )
}

export default MainIcon;



const xlcStyleExit = {
  backgroundColor: 'transparent'
}

const BsXStyleExit = {
  opacity: '0%'
}

const FaGripLinesStyle = {
  color: 'white',
  size: '70'
}