import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


//import axios from 'axios';

class Submit extends Component {
    
    render() {
        return (
            <div>
                <h1>Thank you for submitting your feedback! Click the button below to leave new feedback.</h1>
            </div>
        );
    }
}

export default connect()(Submit);