const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { type: String, required: true },
  manaCost: { type: String, required: true },
  cardDescription: String,
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
