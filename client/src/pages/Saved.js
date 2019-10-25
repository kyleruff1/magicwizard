import React, { Component } from "react";
// import React from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";

class Saved extends Component {
  state = {
    card: 
      [{
        name: "guy",
      manaCost: "alot",
      cardDescription: "really big guy"
      },
      {   name: "guy2",
      manaCost: "alot2",
      cardDescription: "really big guy2"}
    ]
    
  };
  // When this component mounts, grab the card with the _id of this.props.match.params.id
  // e.g. localhost:3000/cards/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    API.getCards()
      .then(res =>
        this.setState({ cards: res.data, name: "", manaCost: "", cardDescription: "" })
      )
      .catch(err => console.log(err));
  };
  render() {

    return (
      <div>
        <Navbar />

        <div className="container">
        <div className="row">
        <div className="col2-sm-12 col-md-6 col-lg-6" >
         
        </div>
        </div>

          <h1>ur saved decks will go here. nice.</h1>
          <h1>ur saved decks will go here. nice.</h1>
          <h1>ur saved decks will go here. nice.</h1>
          <h1>ur saved decks will go here. nice.</h1>
          <h1>ur saved decks will go here. nice.</h1>
          <h1>ur saved decks will go here. nice.</h1>
          <h1>ur saved decks will go here. nice.</h1>
          <h1>ur saved decks will go here. nice.</h1>
          <h1>ur saved decks will go here. nice.</h1>
          <h1>ur saved decks will go here. nice.</h1>
          <ul className="list-group">
            {this.state.card.map(item => (
              <li
                className="list-group-item"
                key={item.id}

                >
                {item.name} {item.manaCost} {item.cardDescription}
             
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Saved;
