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

  handleDelete = x => {
    console.log("event handler for delete called", x);
    var idx = this.state.counters.filter(c => c.id !== x.id);
    this.setState({ counters: idx });
  };
  handleIncrement = (x, i) => {
    console.log("Handle increment on parent", x, i);
    const countrs = [...this.state.counters];
    const idx = countrs.indexOf(x);
    countrs[idx] = x;
    countrs[idx].value += i;
    this.setState({ countrs });
    //this.setState({ counters: this.counters });
  };
  handleReset = () => {
    const rest = this.state.counters.map(x => {
      x.value = 0;
      return x;
    });
    this.setState({ counters: rest });
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => {
            this.handleReset();
          }}
        >
          Reset
        </button>
        {this.state.counters.map(x => (
          <Counter
            key={x.id}
            onDelete={() => {
              this.handleDelete(x);
            }}
            onIncrement={i => {
              this.handleIncrement(x, i);
            }}
            value={x.value}
            id={x.id}
            selected={true}
          >
            {x.Title}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
