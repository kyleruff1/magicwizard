import React, { Component } from "react";
// import React from "react";
import Navbar from "../components/Navbar";
import "../components/browse.css";
import API from "../utils/API";

const mtg = require("mtgsdk");

var pageSize = 25;

export default class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchTerm: "",
      selectedCard: {
        cardName: "",
        cardDescription: "",
        cardImage: "",
        manaCost: ""
      },
      card: { name: "", manaCost: "", cardDescription: "" }
    };
  }
  componentDidMount() {
    this.loadList();
  }
  savedCard = event => {
    event.preventDefault();

    API.saveCard({
      name: this.state.selectedCard.cardName,
      manaCost: this.state.selectedCard.manaCost,
      cardDescription: this.state.selectedCard.cardDescription
    })
      .then(res => this.loadCards())
      .catch(err => console.log(err));
  };
  loadCards = () => {
    API.getCards()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  //   currently not using the function below
  //   handleClick = event => {
  //     event.preventDefault();
  //     console.log("Submit Click");
  //     mtg.card
  //       .all({ name: this.state.searchTerm, pageSize: 1 })
  //       .on("data", card => {
  //         console.log(card.name);
  //         console.log(card.imageUrl);
  //       });
  //   };

  //   this will initially load 10 cards when you load the browse page
  loadList = () => {
    mtg.card.where({ pageSize: pageSize }).then(results => {
      console.log(results);
      this.setState({ items: results });
    });
  };

  //-----------------------------------------------------------------------------

  handleAutoChange = () => {
    mtg.card.where({ name: this.state.searchTerm }).then(results => {
      console.log(results);
    });
  };
  //-----------------------------------------------------------------------------
  //   every input in searchbar will trigger an api call.
  handleChange = event => {
    console.log(this.state.searchTerm);
    let searchTerm = event.target.value;
    this.setState({ searchTerm: event.target.value });
    mtg.card.where({ name: searchTerm, pageSize: pageSize }).then(results => {
      console.log(results);
      this.setState({ items: results });
    });
    console.log(this.state.items.map(item => item.name));
    pageSize = 25;
  };
  // clicking on a list item will give it's name and description
  clickAlert = (cardName, cardDescription, cardImage, manaCost) => {
    return () => {
      this.setState({
        selectedCard: { cardName, cardDescription, cardImage, manaCost }
      });
    };
  };

  //------------------------------------------------------------------------------

  moreCards = event => {
    event.preventDefault();
    console.log("More button Clicked");
    mtg.card
      .where({ name: this.state.searchTerm, pageSize: (pageSize += 25) })
      .then(results => {
        console.log(results);
        this.setState({ items: results });
      });
  };

  //------------------------------------------------------------------------------
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Search for a card"
                  type="text"
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                />
              </label>
              <button
                type="button"
                className="btn btn-light"
                onClick={this.handleChange}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {/* idk lists here */}

        <div className="row">
          <div className="col2-sm-12 col-md-6 col-lg-6">
            <ul className="list-group">
              {this.state.items.map(item => (
                <li
                  className="list-group-item"
                  key={item.id}
                  onClick={this.clickAlert(
                    item.name,
                    item.originalText,
                    item.imageUrl,
                    item.manaCost
                  )}
                >
                  {item.name}
                  <br></br>
                  {item.manaCost}
                  {/* <button onClick={this.savedCard}>hey</button> */}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm12 col-md-5 col-lg-5">
            <div className="cardInfo">
              <h2>{this.state.selectedCard.cardName}</h2>
              <button onClick={this.savedCard}>Save Card</button>
              <img
                className="cardImage"
                src={this.state.selectedCard.cardImage}
                srcSet="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=0&type=card"
              ></img>
              <p className="cardDescription">
                {this.state.selectedCard.cardDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-light"
            onClick={this.moreCards}
          >
            More Cards
          </button>
        </div>
      </div>
    );
  }
}
