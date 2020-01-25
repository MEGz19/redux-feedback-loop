import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


//import axios from 'axios';

class Supported extends Component {
    
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
            </div>
        );
    }
}

export default connect()(Supported);