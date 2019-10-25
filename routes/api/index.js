const router = require("express").Router();
const cardRoutes = require("./cards");
const suggestionRoutes = require("./suggestions");

// Book routes
router.use("/cards", cardRoutes);
router.use("/suggestions", suggestionRoutes)

module.exports = router;
