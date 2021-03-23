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
    <div id="main-icon-container" style={xlcStyle} onClick={landingClick}>
      {status === 'entered' ? <BsX style={BsXStyle} size={70}/> : <FaGripLines size={70}/>}
    </div>
  )
}

export default MainIcon;



const xlcStyleExit = {
  backgroundColor: 'black'
}

const BsXStyleExit = {
  opacity: '0%'
}
