import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


//import axios from 'axios';

class Understanding extends Component {
    //set state - for each component
    state = {
        understanding: '',
    }
    //make handleClick function that sends state to ReduxState
    //if/else alert - form input cannot be empty
    //once input complete, dispatch info
    //then proceed to next page
    handleClick = () => {
        if (this.state.feeling === '') {
            alert('Please submit your feedback in order to proceed.')
        }
        // send info to state (.dispatch)
        else {
            this.props.dispatch({
                type: 'SET_UNDERSTANDING',
                payload: this.state.feeling
            })
            //go to next page
            this.props.history.push('/supported')
        }

    }

    //make handleChange function
    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>

                <p>Rate how well you're understanding the material on a scale from 1 to 5, with 5 being "very well" and 1 being "not at all."</p>

                <input type="number" min="1" onChange={
                    (event) => this.handleChange(event)}>
                </input>

                <button onClick={this.handleClick}>NEXT</button>
            </div>
        );
    }
}

export default connect()(Understanding);