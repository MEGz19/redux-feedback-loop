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
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
      <div>

      {/* Use exact path for home page, so it won't show up on other 
      componet pages. */}
      <Route exact path="/" component={Home}/>
      <Route path="/feeling" component={Feeling}/>
      <Route path="/understanding" component={Understanding}/>
      <Route path="/supported" component={Supported}/>
      <Route path="/comments" component={Comments}/>
      <Route path="/review" component={Review}/>
      <Route path="/submit" component={Submit}/>
      </div>
      </Router>
    );
  }
}

export default App;
