import React from 'react';
import { createStore } from 'redux';

// action generator
// this are functions that return action objects.

const incrementCountBy = ({incrementBy = 1} = {}) => {
    return{
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})

//Reducers



const countReducer = (state = { count: 0}, action ) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
            break;

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
            break;

        case 'RESET':
            return {
                count: 0
            }
            break;

        case 'SET':
            return {
                count: action.count
            }
            break;
    
        default:
            return state;
            break;
    }
    return state;
}

const store = createStore( countReducer );

// watch for changes on store
store.subscribe( () => {
    console.log(store.getState());
});

store.dispatch(incrementCountBy({ incrementBy: 11}));

store.dispatch(incrementCountBy());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 101 }));

store.dispatch(setCount({count: 239}));
