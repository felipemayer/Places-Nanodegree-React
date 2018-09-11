import React, { Component } from "react";
import Input from "../components/input";
import Results from "../components/results";

class Menu extends Component {
  render() {
    return (
      <div id="menu">
        <div id="menu-title">
          <h1>Title</h1>
          <i className="fas fa-times mobile" id="menu-icon-close" />
        </div>
        <i className="fas fa-bars mobile" id="menu-icon-open" />

        <Input />

        <Results />
      </div>
    );
  }
}

export default Menu;
