import React from "react";

import Child from "./Child";

const colors = ["#ff7b7b", "#ff545e", "#589ea5", "#6ec2b1", "#95e3bb"];

class Parent extends React.Component {
  constructor() {
    super();

    this.state = {
      color: colors[0],
      blink: false
    };

    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    // set interval to flip blink state
    this.interval = setInterval(() => {
      this.setState({ blink: !this.state.blink });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeColor() {
    // loop continuously through array of colors
    const next = (colors.indexOf(this.state.color) + 1) % colors.length;
    this.setState({ color: colors[next] });
  }

  render() {
    return <Child {...this.state} changeColor={this.changeColor} />;
  }
}

export default Parent;
