import React, { Component } from "react";
// import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
const mtg = require("mtgsdk");

export default class Browse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchTerm: ""
    };
  }

  handleClick = event => {
    event.preventDefault();
    console.log("Submit Click")
    mtg.card.all({ name: this.state.searchTerm, pageSize: 1 })
    .on('data', card => {
        console.log(card.name)
        console.log(card.imageUrl)
    })
  }

  handleChange = event => {
    console.log(this.state.searchTerm);
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <label>
            Name:
            <input className="form-control form-control-lg" type="text" placeholder="Search for a card" type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
          </label>
          <button type="button" class="btn btn-light" onClick={this.handleClick}>Search</button>
        </div>
      </div>
    );
  }
}

