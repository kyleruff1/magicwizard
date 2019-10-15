const mtg = require("mtgsdk");

mtg.card.find(370680).then(result => {
  console.log(result.card.name); // "Black Lotus"
  console.log(result.card.imageUrl);
});
