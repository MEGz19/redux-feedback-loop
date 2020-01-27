import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


import axios from 'axios';

class Review extends Component {

    //Axios POST request to put feedback on DOM
    postFeedback = () => {
        let feedback = {
            feeling: this.props.reduxState.feedbackReducer,
            understanding: this.props.reduxState.feedbackReducer,
            supported: this.props.reduxState.feedbackReducer,
            comments: this.props.reduxState.feedbackReducer
        }
        axios.post('/Review', feedback)
        .then((response) => {
            console.log(`here's the response:`, response);
        }).catch((error) =>{
            console.log(`error in POST request`, error);
        })
    }
    
    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                {/* append feedback to DOM for review */}
                <p>Feeling: {this.props.reduxState.feedback.feeling}</p>
                <p>Understanding: {this.props.reduxState.feedback.understanding}</p>
                <p>Supported: {this.props.reduxState.feedback.supported}</p>
                <p>Comments: {this.props.reduxState.feedback.comments}</p>
            </div>
        );
    }
}

export default connect()(Review);