import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

//import axios from 'axios';

class Comments extends Component {
    
    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
            </div>
        );
    }
}

export default connect()(Comments);