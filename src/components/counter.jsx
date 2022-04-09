import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  };

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  resetIncrement = (product) => {
    console.log(this.props.id);
    this.setState({ value: 0 });
  };

  render() {
    // console.log(this.props)
    return (
      <div className="my-5">
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.forrmatValue()}
        </span>

        <button
          onClick={(product) => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm mx-2"
        >
          Increment
        </button>

        <button
          onClick={this.resetIncrement}
          className="btn btn-warning btn-sm mx-2"
        >
          Reset
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm mx-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    if (this.state.value > 5) return "badge m-2 bg-danger";
    classes += this.state.value === 0 ? "warning" : "success";
    return classes;
  }

  forrmatValue() {
    const { value } = this.state;
    if (value > 5) return "ok stop it now";
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
