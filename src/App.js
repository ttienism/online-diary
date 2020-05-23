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

// exports.firebaseConfig = {
//   apiKey: "AIzaSyCO-jaH_21HLtMpNrGs-dQEYfw1d9GQKFg",
//   authDomain: "tinbot-twgvbp.firebaseapp.com",
//   databaseURL: "https://tinbot-twgvbp.firebaseio.com",
//   projectId: "tinbot-twgvbp",
//   storageBucket: "tinbot-twgvbp.appspot.com",
//   messagingSenderId: "12875515310",
//   appId: "1:12875515310:web:6e2360b0e8635ac604b43f"
// };
