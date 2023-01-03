import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';


// When passing any prop other than a string (IN THIS CASE AN ARRAY) to a React component, we have to wrap the value in curly braces.

function Expenses(props){

    return(
        // Must have one ROOT element (div)
    <Card className="expenses">
        {/* Here we are using the param in the <Expense items={expenses}/> in App.js to access the array passed into this component thru props*/}
    <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
    <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
    <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
    <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
    </Card>
    );

}

export default Expenses;