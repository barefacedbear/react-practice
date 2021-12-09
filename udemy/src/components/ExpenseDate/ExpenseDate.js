import './ExpenseDate.css';

export const EnpenseDate = (props) => {
    const date = {
        month: props.date.toLocaleString('en-US', { month: 'long' }),
        day: props.date.toLocaleString('en-US', { day: '2-digit' }),
        year: props.date.getFullYear()
    };

    return (
        <div className="ExpenseDate">
            <div className="ExpenseDate-month">{date.month}</div>
            <div className="ExpenseDate-day">{date.day}</div>
            <div className="ExpenseDate-year">{date.year}</div>
        </div>
    );
};
