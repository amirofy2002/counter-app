import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    Address: {
      street: ""
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1> {this.formatCount()} </h1>
        <h3>{2 + 2} </h3>
        <button>Increments</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
}

export default Counter;
