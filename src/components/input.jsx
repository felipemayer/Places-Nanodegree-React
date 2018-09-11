import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div id="input">
        <input type="text" placeholder="Search" id="text-input" />
        <input type="button" value="Search" id="btn-ok" />
      </div>
    );
  }
}

export default Input;
