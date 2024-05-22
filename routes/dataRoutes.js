const express = require("express");
const router = express.Router();

const dataController = require("../controllers/dataController.js");

router.get("/forPortfolio", dataController.forPortfolio);

module.exports = router;