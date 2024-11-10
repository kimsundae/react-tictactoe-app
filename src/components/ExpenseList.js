import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = ({ handleDelete, initialExpenses, handleEdit, handleClear }) => {
  return (
    <>
      <ul className="list">
        {initialExpenses.map((expense) => {
          return (
            <ExpenseItem
              handleDelete={handleDelete}
              expense={expense}
              handleEdit={handleEdit}
              key={expense.id}
            />
          );
        })}
      </ul>
      {initialExpenses.length > 0 && (
        <button className="btn" onClick={handleClear}>
        목록 지우기
        <MdDelete className="btn-icon" />
      </button>
      )}
      
    </>
  );
};

export default ExpenseList;
