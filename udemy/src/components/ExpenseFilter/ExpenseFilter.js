import './ExpenseFilter.css';

export const ExpenseFilter = props => {
    const onSelectHandler = event => props.onFilterYear(event.target.value);
    return (
        <div className='ExpenseFilter'>
            <div className='ExpenseFilter-control'>
                <label>Filter by year</label>
                <select onChange={onSelectHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};
