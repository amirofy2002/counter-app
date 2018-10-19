import React, { Component } from "react";
class Counter extends Component {
  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  //   constructor() {
  //     super();
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  render() {
    return (
      <div>
        <h3>{this.props.children}</h3>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.props.onIncrement(1);
          }}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.onIncrement(-1);
          }}
          className="btn btn-info btn-sm"
        >
          -
        </button>
        <button
          onClick={() => {
            this.props.onDelete();
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(t => (
          <li key={t}>{t} </li>
        ))}
      </ul>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    return this.props.value === 0 ? "Zero" : this.props.value;
  };
}

export default Counter;
