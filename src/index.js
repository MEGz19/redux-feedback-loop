import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//SET UP REDUCERS
const feedbackReducer = (state = {}, action) => {
    if (action.type === 'SET_FEELING') {
        return {
            ...state,
            feeling: action.payload
        }
    } else if (action.type === 'SET_UNDERSTANDING') {
        return {
            ...state,
            understanding: action.payload
        }
    } else if (action.type === 'SET_SUPPORTED') {
        return {
            ...state,
            supported: action.payload
        }
    } else if (action.type === 'SET_COMMENTS') {
        return {
            ...state,
            comments: action.payload
        }
    }
    return state
}










let store = createStore(
    // this is a reducer!
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)

);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


