import { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseAmount from "../Expenses/ExpenseAmount";
import ExpenseTitle from "../Expenses/ExpenseTitle";
import Card from "../Card/Card";
import "../Expenses/ExpenseItem.css";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("expesen working");
  const clickHandler = () => {
    setTitle("Title Update");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <ExpenseTitle title={title} />
        <ExpenseAmount amount={props.amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
