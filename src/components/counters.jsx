import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => {
            this.props.onReset();
          }}
        >
          Reset
        </button>
        {this.props.counters.map(x => (
          <Counter
            key={x.id}
            onDelete={() => {
              this.props.onDelete(x);
            }}
            onIncrement={i => {
              this.props.onIncrement(x, i);
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
