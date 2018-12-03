import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})

test('Should remove expense id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 10
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[1] , expenses[2]]);
})


test('Should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense : {
            id: 4,
            description:'sarlanga',
            amount: 0,
            createdAt: moment(0),
            note: ''
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[1] , expenses[2], action.expense]);
})

test('Should edit expense', () => {
    const amount = 1000;

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount: 1000
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state[0].amount).toBe(1000);
})

test('Should not edit expense', () => {
    const amount = 1000;

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 1000
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
})
