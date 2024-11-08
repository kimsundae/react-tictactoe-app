import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = ({ handleDelete, initialExpenses }) => {
  return (
    <>
      <ul className="list">
        {initialExpenses.map((expense) => {
          return (
            <ExpenseItem
              handleDelete={handleDelete}
              expense={expense}
              key={expense.id}
            />
          );
        })}
      </ul>
      <button className="btn">
        목록 지우기
        <MdDelete className="btn-icon" />
      </button>
    </>
  );
};

export default ExpenseList;
