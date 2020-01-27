import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


//import axios from 'axios';

class Supported extends Component {
    //set state - for each component
    state = {
        supported: '',
    }
    //make handleClick function that sends state to ReduxState
    //if/else alert - form input cannot be empty
    //once input complete, dispatch info
    //then proceed to next page
    handleClick = () => {
        if (this.state.supported === '') {
            alert('Please submit your feedback in order to proceed.')
        }
        // send info to state (.dispatch)
        else {
            this.props.dispatch({
                type: 'SET_SUPPORTED',
                payload: this.state.supported
            })
            //go to next page
            this.props.history.push('/comments')
        }

    }

    //make handleChange function
    handleChange = (event) => {
        this.setState({
            supported: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>

                <p>Rate how well you feel supported by the staff on a scale from 1 to 5, with 5 being "very supported" and 1 being "not at all."</p>

                <input type="number" min="1" onChange={
                    (event) => this.handleChange(event)}>
                </input>

                <button onClick={this.handleClick}>NEXT</button>
            </div>
        );
    }
}

export default connect()(Supported);