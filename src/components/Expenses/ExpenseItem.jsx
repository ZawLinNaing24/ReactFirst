import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseAmount from "../Expenses/ExpenseAmount";
import ExpenseTitle from "../Expenses/ExpenseTitle";
import Card from "../Card/Card";
import "../Expenses/ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <ExpenseAmount amount={props.amount} />
        <ExpenseTitle title={props.title} />
      </div>
    </Card>
  );
};

export default ExpenseItem;
