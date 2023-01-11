import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  //we're using this funciton to pass data back upto the <App/>
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //new data with an ID passed up from expense form
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    //passing data up to the <App/> component
    props.onAddExpense(expenseData);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
