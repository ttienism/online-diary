import React from 'react';
import Card from '../card';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
    <div className="sidebarContainer" style={{width:'25%'}}>
      <Card style={{ marginBottom: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader"><span>Check me out!</span></div>
        <div className="smicons">
          <a href="https://www.facebook.com/ttienism"><FontAwesomeIcon icon={faFacebookSquare} size="3x" 
          color="hotpink"/></a>
          <a href="https://www.facebook.com/ttienism"><FontAwesomeIcon icon={faInstagramSquare} size="3x"
          color="hotpink" /></a>
          <a href="https://www.facebook.com/ttienism"><FontAwesomeIcon icon={faGithubSquare} size="3x"
          color="hotpink" /></a>
        </div>
      </Card>
    </div>
   )

 }

export default Sidebar