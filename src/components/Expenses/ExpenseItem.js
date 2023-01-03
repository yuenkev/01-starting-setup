import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem(props) {

  //arrow function that is being pointed too
  const clickHandler = () => {
    console.log('clicked!!!');
  }

  return(
  <Card className='expense-item'>

    <ExpenseDate date={props.date}/>
  
    <div className='expense-item__description'>
      {/* to inject const/variables you must use {} */}
      <h2 >{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
  </Card>
  );
}

export default ExpenseItem;
