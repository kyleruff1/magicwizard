import React, { Component } from "react";
// import React from "react";
import Navbar from "../components/Navbar";

export default class Browse extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    console.log(this.state.searchTerm);
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <label>
            Name:
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Search for a card"
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </label>
        </div>
      </div>
    );
  }
}
