import moment from 'moment';

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filtersReducer = ( state = filterReducerDefaultState, action ) => {
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

export default filtersReducer;