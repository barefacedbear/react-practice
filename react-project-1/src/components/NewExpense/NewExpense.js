import { ExpenseForm } from './ExpenseForm/ExpenseForm';
import './NewExpense.css'

export const NewExpense = props => {

    const saveExpenseDataHandler = data => {
        const expenseData = { ...data, id: Math.random().toString() }
        props.onNewExpense(expenseData);
    };

    return (
        <div className="NewExpense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};