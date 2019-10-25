const router = require("express").Router();
const cardRoutes = require("./cards");

// Book routes
router.use("/cards", cardRoutes);

module.exports = router;
