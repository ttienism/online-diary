import React from 'react';
import './styles.css';
import Form from '../writingform';
import Sidebar from '../sidebar';


/**
* @author
* @function Post
**/

const Post = (props) => {
  return(
    <section className="container">
        <Form/>
        <Sidebar/>
    </section>
   )

 }

export default Post