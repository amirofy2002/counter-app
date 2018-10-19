import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
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

  doHandleClick = cnt => {
    this.setState({ value: this.state.value + cnt });
  };
  self;
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
            this.doHandleClick(1);
          }}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => {
            this.doHandleClick(-1);
          }}
          className="btn btn-info btn-sm"
        >
          -
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

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return this.state.value === 0 ? "Zero" : value;
  }
}

export default Counter;
