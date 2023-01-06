import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {


    //handler to change the value of the year and use the state function to update it
    const selectedYearHandler = (event) => {
        // console.log(event.target.value);

        // Using the handler in Expense.js and passing a param to it
        props.onSaveYearFilter(event.target.value);
    }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* on change we call the handler + the value is the default value = props.selected */}
        <select value={props.selected} onChange={selectedYearHandler}> 
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};  
export default ExpensesFilter;
