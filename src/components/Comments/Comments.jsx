import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

//import axios from 'axios';

class Comments extends Component {
    //set state - for each component
    state = {
        comments: '',
    }
    //make handleClick function that sends state to ReduxState
    //REMOVE IF/ELSE for this section - not needed
    //then proceed to next page
    handleClick = () => {
            this.props.dispatch({
                type: 'SET_COMMENTS',
                payload: this.state.comments
            })
            //go to next page
            this.props.history.push('/review')

    }

    //make handleChange function
    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>

                <input type="text" onChange={
                    (event) => this.handleChange(event)}>
                </input>

                <button onClick={this.handleClick}>NEXT</button>
            </div>
        );
    }
}

export default connect()(Comments);