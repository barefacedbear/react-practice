import React, { Component } from 'react';

class Welcome extends Component {
    
    constructor() {
        super();
        this.state = { count: 0 };
    }

    increment() {
        // this.setState({ count: this.state.count + 1 },
        // () => {
        //     console.log('%c'+this.state.count, 'color: red;background-color: yellow;');
        // });
        this.setState(prevState => ({
            count: prevState.count + 1
        }),
        () => {
            console.log('%c'+this.state.count, 'color: red;background-color: yellow;');
        });
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
    return (
        <div>
            <h2>{this.state.count}</h2>
            <button onClick={ () => this.incrementFive() }>Change state</button>
        </div>
    );
    }
}

export default Welcome;