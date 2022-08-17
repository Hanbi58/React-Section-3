import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";

import Card from "./Card";

function ExpenseDisplay(props) {
  return (
    <Card className="expense">
      {props.expenseArr.map((i) => (
        <ExpenseItem item={i} />
      ))}
    </Card>
  );
}

export default ExpenseDisplay;

{
  /* <ExpenseItem item={props.expenseArr[0]} />
      <ExpenseItem item={props.expenseArr[1]} />
      <ExpenseItem item={props.expenseArr[2]} />
      <ExpenseItem item={props.expenseArr[3]} /> */
}
