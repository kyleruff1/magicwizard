const router = require("express").Router();
const suggestionsController = require("../../controllers/suggestionsController");

// Matches with "/api/suggestions"
router.route("/")
  .get(suggestionsController.findAll)


module.exports = router;
