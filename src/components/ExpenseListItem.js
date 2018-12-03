import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
    return ( 
        <div>
            <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
            <p>Price: {amount}</p>
            <p>Created at: {createdAt}</p>            
        </div>
    );
}

export default ExpenseListItem;