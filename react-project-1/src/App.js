import { useState } from 'react';
import './App.css';
import { Expense } from './components/Expense/Expense';
import { NewExpense } from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', price: 24.29, date: new Date('2021-09-01') },
  { id: 'e2', title: 'Car Paint', price: 100.00, date: new Date('2021-10-02') },
  { id: 'e3', title: 'Car Service', price: 50.05, date: new Date('2020-09-03') },
  { id: 'e4', title: 'Car Light', price: 2.02, date: new Date('2019-09-04') }
];

function App() {

  const [expenses, setExpense] = useState(INITIAL_EXPENSES);

  const newExpenseHandler = expense => setExpense(prevExpense => {
    return [expense, ...prevExpense];
  });

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
