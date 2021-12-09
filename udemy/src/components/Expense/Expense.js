import { useState } from 'react';
import { Card } from '../Card/Card';
import { ExpenseList } from '../ExpenseList/ExpenseList';
import { ExpenseFilter } from '../ExpenseFilter/ExpenseFilter';
import { ExpenseChart } from '../ExpenseChart/ExpenseChart';
import './Expense.css';

export const Expense = props => {
    const [filteredYear, setFilterYear] = useState('');
    const expenses = props.expenses;
    const fetchFilterYearHandler = year => setFilterYear(year);
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)
    return (
        <div>
            <Card className="Expense">
                <ExpenseFilter onFilterYear={fetchFilterYearHandler} />
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpenseList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};