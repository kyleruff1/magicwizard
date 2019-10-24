
let axios = require("axios");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: req.query.q
      }
    })
    .then(function (response) {
      console.log(response);
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  }
};
