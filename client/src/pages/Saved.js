import React, { Component } from "react";
// import React from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";

class Saved extends Component {
  state = {
    cards: []
  };
  // When this component mounts, grab the card with the _id of this.props.match.params.id
  // e.g. localhost:3000/cards/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    API.getCards()
      .then(res =>
        this.setState({
          cards: res.data
          // name: "",
          // manaCost: "",
          // cardDescription: ""
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col2-sm-12 col-md-6 col-lg-6"></div>
          </div>
          <ul className="list-group">
            {this.state.cards.map(item => (
              <li className="list-group-item" key={item.id}>
                Name: {item.name}
                <br></br>
                Mana Cost: {item.manaCost}
                <br></br>
                Description: {item.cardDescription}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Saved;
