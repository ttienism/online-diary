import React from 'react';
import './styles.css';

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
        <h2><img href="#" className="img" src={require('../img/comp.png')} alt="logo" /> Online Diary</h2>
    </div>
   )

 }

export default Logo