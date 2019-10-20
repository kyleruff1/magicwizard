import axios from "axios";

export default {
  // Gets all Cards
  getCards: function() {
    return axios.get("/api/Cards");
  },
  // Gets the Card with the given id
  getCard: function(id) {
    return axios.get("/api/Cards/" + id);
  },
  // Deletes the Card with the given id
  deleteCard: function(id) {
    return axios.delete("/api/Cards/" + id);
  },
  // Saves a Card to the database
  saveCard: function(CardData) {
    return axios.post("/api/Cards", CardData);
  }
};
