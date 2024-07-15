import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with a count variable set to 0
    this.state = {
      count: 0
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
