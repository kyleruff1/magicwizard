import React, { Component } from "react";
// import React from "react";
import Navbar from "../components/Navbar";

export default class Browse extends Component {
  state = {
    inputUsername: "",
    inputPassword: ""
  };

  handleUsernameChange = event => {
    console.log(this.state.inputUsername);
    this.setState({ inputUsername: event.target.value });
  };

  handlePasswordChange = event => {
    console.log(this.state.inputPassword);
    this.setState({ inputPassword: event.target.value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div class="container" id="login-form">
          <h1 id="hey">Login</h1>
          <input
            className="form-control col-7"
            id="input-username"
            placeholder="Username"
            type="text"
            value={this.state.inputUsername}
            onChange={this.handleUsernameChange}
          />
          <input
            className="form-control col-7"
            id="input-password"
            placeholder="Password"
            type="password"
            value={this.state.inputPassword}
            onChange={this.handlePasswordChange}
          />
        </div>
      </div>
    );
  }
}
