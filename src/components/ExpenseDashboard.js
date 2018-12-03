import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboard = () => (
    <div>
        <h2>Expense Dashboard</h2>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboard;