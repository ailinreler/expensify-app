import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('1234', {description: 'Gas bill', amount: 1200, note:'nose'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234',
        updates: {
            description: 'Gas bill',
            amount: 1200,
            note: 'nose'
        }
    });
})

//description, note, amount, createdAt

test('Should setup create expense action object', () => {
    const expenseData = {
        description: 'gas bill',
        amount: 1234,
        note:'no notes',
        createdAt: 100
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
})


test('Should setup create expense action object default set', () => {

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            note:'',
            createdAt: 0,
            id: expect.any(String)
        }
    });
})