import './ExpenseList.css';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';

export const ExpenseList = props => {
    if (!props.expenses.length) {
        return <h2 className="ExpenseList-fallback">No Data Found</h2>
    }

    return (
        <ul className="ExpenseList">
            { props.expenses.map(expense =>
                <ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
            )}
        </ul>
    );
};
