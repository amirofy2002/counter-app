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
  handleClick = () => {
    console.info("increasing counter....", this);

    this.setState({ count: this.state.count + 1 });
  };
  doHandleClick = cnt => {
    this.setState({ count: this.state.count + cnt });
  };
  self;
  //   constructor() {
  //     super();
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.doHandleClick(3);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increments
        </button>
        {this.renderTags()}
      </React.Fragment>
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
}

export default Counter;
