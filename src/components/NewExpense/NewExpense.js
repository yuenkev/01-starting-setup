import react, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    //we're using this funciton to pass data back upto the <App/>
    const saveExpenseDataHandler = (enteredExpenseData) =>{

        //new data with an ID passed up from expense form
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);

        //passing data up to the <App/> component
        props.onAddExpense(expenseData);
    }

    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} ></ExpenseForm>
    </div>
    )
}

export default NewExpense;