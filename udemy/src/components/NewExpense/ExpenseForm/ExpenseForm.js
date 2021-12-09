import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = props => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    // const [userInput, setUserInput] = useState({ title: '', price: 0, date: '' });

    const titleChangeHandler = event => {
        setTitle(event.target.value);
        // setUserInput({ ...userInput, title: event.target.value })
        // setUserInput(prevState => {
        //     return { ...prevState, title: event.target.value };
        // }); // Prefer this approach as this will update state if it requires prev state
    };
    const priceChangeHandler = event => {
        setPrice(event.target.value);
        // setUserInput({ ...userInput, price: event.target.value })
        // setUserInput(prevState => {
        //     return { ...prevState, price: event.target.value };
        // });
    };
    const dateChangeHandler = event => {
        setDate(event.target.value);
        // setUserInput({ ...userInput, date: event.target.value })
        // setUserInput(prevState => {
        //     return { ...prevState, date: event.target.value };
        // });
    };

    const submitHandler = event => {
        event.preventDefault();
        const expenseData = { title: title, price: +price, date: new Date(date) };
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setPrice('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="NewExpense-controls">
                <div className="NewExpense-control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="NewExpense-control">
                    <label>Price</label>
                    <input type="number" value={price} min="0.01" step="0.01" onChange={priceChangeHandler} />
                </div>
                <div className="NewExpense-control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="NewExpense-actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};