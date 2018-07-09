import React from "react";
import PropTypes from "prop-types";

const Child = function({ color, blink, changeColor }) {
  return <div>Delete this to get started!</div>;
};

Child.propTypes = {
  // color is a string that contains a hexidecimal color value
  color: PropTypes.string.isRequired,

  // blink is a boolean that flips about every second
  blink: PropTypes.bool.isRequired,

  // changeColor is a callback that changes the color prop
  changeColor: PropTypes.func.isRequired
};

export default Child;
