import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE_EXPENSE
const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates   
})
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT BY DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// SORT BY AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
// SET_END_DATE

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

// EXPENSES REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
            break;

        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => id !== action.id );
            break;
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })

        default:
            return state;
    }
};

// filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

const filterReducer = ( state = filterReducerDefaultState, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text}
            break;

        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'} 
            break;

        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
            break;

        case 'SET_START_DATE':
            return {...state, startDate: action.date}
            break;

        case 'SET_END_DATE':
            return {...state, endDate: action.date}
            break;
        default:
        return state;
            break;
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate} = filters) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
});

// store.dispatch(setStartDate(1000));
// store.dispatch(setEndDate(1300));
// store.dispatch(setStartDate());

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -10000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 500, createdAt: -1000}));

// store.dispatch(sortByDate());

store.dispatch(sortByAmount());

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 900 }));

store.dispatch(setTextFilter());

// const demoState = {
//     expenses: [{
//         id: 'sadfasf',
//         description: 'January Rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filter: {
//         text: 'rent',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }

// const user = {
//     name: 'Jen',
//     age: 28
// }

// console.log({...user, location: 'BS', age: 20})