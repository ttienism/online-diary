import React from 'react';
import './App.css';
import Home from './home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from './about';
import Jumbotron from './jumbotron';
import Header from './header';

function App() {
  return (
    <Router>
      <div className="App">
        <Jumbotron />
        <Header />
        
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
    
  )
}

export default App;
