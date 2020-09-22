import React from 'react';

// const Greet = ({ name }) => {
//     return <h1>Hello { name }</h1>;
// }
const Greet = props => {
    const { name } = props; // Same for class level - same for state
    return <h1>Hello { name }</h1>;
}
export default Greet;