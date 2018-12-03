import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should set up default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
})

test('Should set sort by amount', () => {
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test('Should set sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = {type:'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = {type: 'SET_TEXT_FILTER', text: 'sarasa'}
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('sarasa')
})

test('Should set start date filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = {type: 'SET_START_DATE', date: moment(0)}
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(moment(0));
})

test('Should set end date filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = {type: 'SET_END_DATE', date: moment(0)}
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toEqual(moment(0));
})