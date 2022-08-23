import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";

import ExpensesFilter from "../NewExpense/ExpensesFilter";

import { useState } from "react";

function ExpenseDisplay(props) {
  const [filArr, setFilArr] = useState(props.expenseArr);

  const pickedYear = (year) => {
    setFilArr(
      year === "All"
        ? props.expenseArr
        : props.expenseArr.filter((i) => i.date.getFullYear() == year)
    );
  };
  return (
    <Card>
      <ExpensesFilter parentFunction={pickedYear} defaultYeay="All" />
      {filArr.map((i) => (
        <ExpenseItem className="expenses" item={i} />
      ))}
    </Card>
  );
}

export default ExpenseDisplay;
