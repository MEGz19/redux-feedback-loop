import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
//import NextButton from '../NextButton/NextButton';
//QUESTION: How do you get the NextButton component to work in other components?


//import axios from 'axios';

class Feeling extends Component {
    //set state - for each component
    state = {
        feeling: '',
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
                type: 'SET_FEELING',
                payload: this.state.feeling
            })
            //go to next page
            this.props.history.push('/understanding')
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
                <h1>How are you feeling today?</h1>

                <p>Rate how you're feeling on a scale from 1 to 5, with 5 being "awesome" and 1 being "stressed."</p>

                <input type="number" min="1" onChange={
                    (event) => this.handleChange(event)}>
                </input>

                <button onClick={this.handleClick}>NEXT</button>

            </div>
        );
    }
}

export default connect()(Feeling);