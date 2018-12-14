import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
// importamos el css de datepicker
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense} from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
// store.dispatch(addExpense({description:'Gas Bill', amount: 1000}));
// store.dispatch(addExpense({description:'Water Bill', amount: 700, createdAt: 1000}));
// store.dispatch(addExpense({description:'Rent', amount: 109500}));

const state = store.getState();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));