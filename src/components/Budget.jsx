import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionBudget from "../redux/actions/actionBudget";

export default function Budget() {
  const totalBudget = useSelector((state) => state.budget);
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionBudget,
    useDispatch()
  );

  return (
    <div className="family-budget">
      <h1>{totalBudget}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
    </div>
  );
}
