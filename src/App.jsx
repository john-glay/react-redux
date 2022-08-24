import "./App.css";
import Budget from "./components/Budget";
import Expenses from "./components/Expenses";
import ExpensesInput from "./components/ExpensesInput";

function App() {
  return (
    <div className="App">
      <Budget />
      <Expenses />
      <br />
      <hr />
      <ExpensesInput />
    </div>
  );
}

export default App;
