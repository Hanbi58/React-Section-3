import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseDisplay(props) {
  return (
    <div className="expense">
      {props.expenseArr.map((i) => (
        <ExpenseItem item={i} />
      ))}
    </div>
  );
}

export default ExpenseDisplay;

{
  /* <ExpenseItem item={props.expenseArr[0]} />
      <ExpenseItem item={props.expenseArr[1]} />
      <ExpenseItem item={props.expenseArr[2]} />
      <ExpenseItem item={props.expenseArr[3]} /> */
}
