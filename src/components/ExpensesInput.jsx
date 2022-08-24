import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionExpenses from "../redux/actions/actionExpenses";
import * as actionBudget from "../redux/actions/actionBudget";

export default function ExpensesInput() {
  const [day, setDay] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { spendMoney } = bindActionCreators(actionExpenses, useDispatch());
  const { withdrawMoney } = bindActionCreators(actionBudget, useDispatch());

  const handleSubmit = (e) => {
    e.preventDefault();

    spendMoney(day, name, amount);
    withdrawMoney(amount);
  };

  return (
    <form>
      <div>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          style={{ width: "100px" }}
          placeholder="Date"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "300px" }}
          placeholder="Name"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100px" }}
        />
      </div>
      <button onClick={handleSubmit}>ADD</button>
    </form>
  );
}
