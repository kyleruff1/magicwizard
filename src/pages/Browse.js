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

  // handleClick = event => {
  //   event.preventDefault();
  //   console.log("Submit Click")
  //   mtg.card.where({ name: this.state.searchTerm, pageSize: 10})
  //   .on(results => {
  //     console.log(results)
  //       console.log("React is crazy")
  //       console.log(results.cards.name)
  //       console.log(results.cards.imageUrl)

  //   })
  // }


  handleChange = event => {
    console.log(this.state.searchTerm);
    let searchTerm = event.target.value;
    this.setState({ searchTerm: event.target.value });
    mtg.card.where({ name: searchTerm, pageSize: 10 }).then(results => {
      console.log(results[0]);
      this.setState({ items: results });
    });
    console.log(this.state.items.map(item => item.name));
  };

  // handleChange = event => {
  //   console.log(this.state.searchTerm);
  //   this.setState({ searchTerm: event.target.value });
  // };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <label>
            Name:
            <input className="form-control form-control-lg" type="text" placeholder="Search for a card" type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
          </label>
          <button type="button" className="btn btn-light" onClick={this.handleClick}>Search</button>
        </div>
      </div>
    );
  }
}

