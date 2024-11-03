import React, { Component } from "react";
import "./ExpenseItem.css";
import { MdEdit, MdDelete } from "react-icons/md";

export class ExpenseItem extends Component {
  render() {
    return (
      <li className="item">
        <div className="info">
          <span className="expnse">{this.props.expense.charge}</span>
          <span className="amount">{this.props.expense.amount}</span>
        </div>
        <div>
          <button className="edit-btn">
            수정
            <MdEdit />
          </button>
          <button className="clear-btn">
            삭제
            <MdDelete />
          </button>
        </div>
      </li>
    );
  }
}

export default ExpenseItem;
