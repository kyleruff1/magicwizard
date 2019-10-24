const router = require("express").Router();
const bookRoutes = require("./books");
const suggestionRoutes = require("./suggestions");

// Book routes
router.use("/books", bookRoutes);
router.use("/suggestions", suggestionRoutes)

module.exports = router;
