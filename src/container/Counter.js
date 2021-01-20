import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter:0
    }

    addHandler = () => {
        this.setState({ counter: this.state.counter + 1 });
      };

    removeHandler = () => {
        if (this.state.counter > 0)
        {this.setState({ counter: this.state.counter - 1 })} 
      };

    resetHandler = () => {
        this.setState({ counter: 0 });
      };
      
    render() {
        return (
            <div>
                <div className="counter_text">Your score: {this.state.counter}</div>
                <button onClick={this.addHandler}>Increase one</button>
                <button onClick={this.removeHandler}>Decrease one</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        );
    }
}

export default Counter;