import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 20, Title: "Car" },
      { id: 2, value: 0, Title: "Vehicle" },
      { id: 3, value: 0, Title: "Motor" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(x => (
          <Counter key={x.id} value={x.value} selected={true}>
            {x.Title}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
