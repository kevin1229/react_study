import React, { Component } from 'react';

class Counter extends Component {
    /*
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    */

    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {

        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>None changed number : {fixedNumber}</h2>
                <button
                    onClick={
                        () => {
                            this.setState({ number: number + 1 }, ()=> {
                                console.log('Now setState function called');
                            });
                            this.setState((prevState, props) => {
                                return {
                                     fixedNumber: this.state.number + 1
                                }
                            })
                        }
                    }>
                    +1</button>

            </div>
        );
    }
}

export default Counter;