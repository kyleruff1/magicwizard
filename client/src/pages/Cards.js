import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Cards extends Component {
  state = {
    cards: [],
    name: "",
    manaCost: "",
    cardDescription: ""
  };

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

  deleteCard = id => {
    API.deleteCard(id)
      .then(res => this.loadCards())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.manaCost) {
      API.saveCard({
        name: this.state.name,
        manaCost: this.state.manaCost,
        cardDescription: this.state.cardDescription
      })
        .then(res => this.loadCards())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Cards Should I Use?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.manaCost}
                onChange={this.handleInputChange}
                name="manaCost"
                placeholder="ManaCost (required)"
              />
              <TextArea
                value={this.state.cardDescription}
                onChange={this.handleInputChange}
                name="cardDescription"
                placeholder="CardDescription (Optional)"
              />
              <FormBtn
                disabled={!(this.state.manaCost && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Card
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Cards On My List</h1>
            </Jumbotron>
            {this.state.cards.length ? (
              <List>
                {this.state.cards.map(card => (
                  <ListItem key={card._id}>
                    <Link to={"/cards/" + card._id}>
                      <strong>
                        {card.name} by {card.manaCost}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCard(card._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
