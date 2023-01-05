import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  //function clickHandler(){}

  // With destructing we can store the 2 values that use state outputs
  //1st one is the param 
  //2nd one is the function to output the udpated vlaues
  const [title, setTitle] = useState(props.title);

  //arrow function that is being pointed too
  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  }

  return(
  <Card className='expense-item'>

    <ExpenseDate date={props.date}/>
  
    <div className='expense-item__description'>
      {/* to inject const/variables you must use {} */}
      <h2 >{title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
  </Card>
  );
}

export default ExpenseItem;
