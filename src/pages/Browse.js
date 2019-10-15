import React, { Component } from "react";
// import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";

// function Browse() {
//   return (
//     <div>
//       <Navbar />
//       <Carousel />

//     </div>
//   );
// }

// export default Browse;

export default class Browse extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <Navbar />
        <label>
          Name:
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder=".form-control-lg"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
