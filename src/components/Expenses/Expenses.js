import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

// When passing any prop other than a string (IN THIS CASE AN ARRAY) to a React component, we have to wrap the value in curly braces.

const Expenses = (props) => {

  // Use state to store the filter year value, as well as the default value
  const [expenseYearFilter, setExpenseYearFilter] = useState('2020');

  //we're using this funciton/hanlder to save the selected Year, to filter
  const saveExpenseYearHandler = expenseYear => {
    //new data with an Year passed up from ExpenseFilter.js as the param

    console.log("in expenses.js");
    console.log(expenseYear);

    setExpenseYearFilter(expenseYear);
  };

  return (
    // Must have one ROOT element (div)
    <div>
      <ExpensesFilter
        //this selected value is passed to the ExpenseFilter.js to set the select value to the default '2020'
        selected={expenseYearFilter}
        onSaveYearFilter={saveExpenseYearHandler}
      />
      <Card className="expenses">
        {/* Here we are using the param in the <Expense items={expenses}/> in App.js to access the array passed into this component thru props*/}
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
