import { useState } from "react";
import "./App.css";
import AddNewExpenseButton from "./components/AddNewExpenseButton";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [displayExpenseForm, setDisplayExpenseForm] = useState(false);
  const [expense, setExpense] = useState([]);

  return (
    <>
      {displayExpenseForm ? <AddExpenseForm  setExpense={setExpense} setDisplayExpenseForm={setDisplayExpenseForm}/>
      : <AddNewExpenseButton setDisplayExpenseForm={setDisplayExpenseForm} />}
    
      {expense.map((item) => {
          return <ExpenseList key={item.id} title={item.title} amount={item.amount} date={item.date} />;
        })}
    </>
  );
}

export default App;
