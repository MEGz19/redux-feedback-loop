import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


//import axios from 'axios';

class Home extends Component {
    
    render() {
        return (
            <div>
                <h1>Welcome to the Home Page!</h1>
            </div>
        );
    }
}

export default connect()(Home);