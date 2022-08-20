import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import { useState } from "react";

function ExpenseItem(props) {
  const [ctt, setCtt] = useState(props.item.title);

  const changeTitle = () => {
    setCtt("Updated");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{ctt}</h2>
      </div>
      <div className="expense-item__price">${props.item.amount}</div>
      <button onClick={changeTitle}>Click</button>
    </div>
  );
}

export default ExpenseItem;
