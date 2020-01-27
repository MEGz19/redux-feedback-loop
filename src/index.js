import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feelingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELING':
            console.log('state', state)
            return action.payload;
     
        default:
            return state
    }
}

// const secondReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_ORDERS':
//             console.log('state', state)
//             return action.payload;

//         default:
//             return state
//     }
// }

// const secondReducer = (state = true, action) => {
//     if (action.type === 'BUTTON_TWO') {
//         console.log('state', state)
//         console.log('Im the second reducer!', action)
//         return !state
//     }
//     return state;
// }

// const elementListReducer = (state = [], action) => {
//     if (action.type === 'ADD_ELEMENT') {
//         console.log('state', state)
//         console.log(action.payload)
//         return [...state, action.payload]
//     }
//     //whatever a reducer returns, 
//     // becomes state the next time it runs!
//     return state;
// }







let store = createStore(
    // this is a reducer!
    combineReducers({
        feelingReducer
    }),
    applyMiddleware(logger)

);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


