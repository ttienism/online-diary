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
      <Card style={{ marginBottom: '20px', boxSizing: 'border-box', paddingBottom:'10px',
      border:'2px dashed rgb(165, 106, 157)' }}>
        <div className="cardHeader"><span>Check me out!</span></div>
        <div className="smicons">
          <a href="https://www.facebook.com/ttienism"><FontAwesomeIcon icon={faFacebookSquare} size="3x" 
          color="hotpink"/></a>
          <a href="https://www.instagram.com/nhttien_"><FontAwesomeIcon icon={faInstagramSquare} size="3x"
          color="hotpink" /></a>
          <a href="https://www.github.com/ttienism"><FontAwesomeIcon icon={faGithubSquare} size="3x"
          color="hotpink" /></a>
        </div>
      </Card>
    </div>
   )

 }

export default Sidebar