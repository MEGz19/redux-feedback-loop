import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

//import axios from 'axios';

class Feeling extends Component {
    
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
            </div>
        );
    }
}

export default connect()(Feeling);