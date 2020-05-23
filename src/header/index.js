import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  return (
    <header className="navbar">
      <nav className="nav-item">
          <a href="/home"><FontAwesomeIcon icon={faHome}/> Home</a>
          <a href="/about"><FontAwesomeIcon icon={faInfo}/> About</a>
      </nav>
    </header>
  )
}

export default Header;