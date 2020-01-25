import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


//import axios from 'axios';

class Review extends Component {
    
    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
            </div>
        );
    }
}

export default connect()(Review);