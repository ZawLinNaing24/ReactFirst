import "./ExpenseTitle.css";
const ExpenseTitle = function (props) {
  return (
    <div>
      <h2 className="expense-item_description">{props.title}</h2>
    </div>
  );
};

export default ExpenseTitle;
