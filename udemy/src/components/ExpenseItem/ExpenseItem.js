import { useState } from 'react';
import { EnpenseDate } from '../ExpenseDate/ExpenseDate';
import { Card } from '../Card/Card';
import './ExpenseItem.css';

export const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => setTitle('Updated');

    return (
        <Card className="ExpenseItem">
            <EnpenseDate date={props.date} />
            <div className="ExpenseItem-description">
                <h2>{title}</h2>
                <div className="ExpenseItem-price">${props.price}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
};
