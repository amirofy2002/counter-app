import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    Address: {
      street: ""
    },
    imgUrl: "http://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increments</button>
        <ul>
          {this.state.tags.map(t => (
            <li key={t}>{t} </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
}

export default Counter;
