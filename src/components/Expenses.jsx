import React from "react";
import { useSelector } from "react-redux";

export default function Expenses() {
  const allExpenses = useSelector((state) => state.expenses);

  return allExpenses.map((item, index) => (
    <div key={index} style={{ margin: "20px" }}>
      <span>{item.day} - </span>
      <span>{item.name} - </span>
      <span>{item.amount}</span>
    </div>
  ));
}
