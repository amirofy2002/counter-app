import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidMount() {
    console.log("Counters - Mount");
  }
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => {
            onReset();
          }}
        >
          Reset
        </button>
        {counters.map(x => (
          <Counter
            key={x.id}
            onDelete={() => {
              onDelete(x);
            }}
            onIncrement={i => {
              onIncrement(x, i);
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
