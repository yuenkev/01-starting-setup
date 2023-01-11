import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

// When passing any prop other than a string (IN THIS CASE AN ARRAY) to a React component, we have to wrap the value in curly braces.

const Expenses = (props) => {
  // Use state to store the filter year value, as well as the default value
  const [expenseYearFilter, setExpenseYearFilter] = useState("2020");

  //we're using this funciton/hanlder to save the selected Year, to filter
  const saveExpenseYearHandler = (expenseYear) => {
    //new data with an Year passed up from ExpenseFilter.js as the param
    setExpenseYearFilter(expenseYear);
  };

  //we need a FILTER where it says if its the same year, put it into an array
  const filteredArray = props.items.filter(
    (exp) => exp.date.getFullYear() == expenseYearFilter
  );


  return (
    // Must have one ROOT element (div)
    <div>
      <Card className="expenses">
        <ExpensesFilter
          //this selected value is passed to the ExpenseFilter.js to set the select value to the default '2020'
          selected={expenseYearFilter}
          onSaveYearFilter={saveExpenseYearHandler}/>
        <ExpensesList items={filteredArray} />
      </Card>
    </div>
  );
};

export default Expenses;
