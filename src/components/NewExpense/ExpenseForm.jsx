import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <div>
      <div className="new-expense__controls">
        <label htmlFor="">Title </label>
        <input type="text" name="" id="" />
      </div>
      <div className="new-expense__controls">
        <label htmlFor="">Amount</label>
        <input type="number" min="0.01" step="0.01" />
      </div>
      <div className="new-expense__controls">
        <label htmlFor="">Date</label>
        <input type="number" min="2019-01-01" max="2023-12-31" step="0.01" />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add This Expense</button>
      </div>
    </div>
  );
};

export default ExpenseForm;
