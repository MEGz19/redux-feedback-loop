import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>

    );
  }
}

export default App;
