import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";

function ExpenseDisplay(props) {
  return (
    <Card>
      {props.expenseArr.map((i) => (
        <ExpenseItem className="expenses" item={i} />
      ))}
    </Card>
  );
}

export default ExpenseDisplay;
