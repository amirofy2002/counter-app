import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
    console.log("App Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
