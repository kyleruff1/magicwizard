const router = require("express").Router();
const cardRoutes = require("./cards");

// card routes
router.use("/cards", cardRoutes);

module.exports = router;
