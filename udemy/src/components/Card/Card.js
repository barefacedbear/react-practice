import './Card.css';

export const Card = (props) => {
    return <div className={`Card ${props.className}`}>{props.children}</div>;
};
