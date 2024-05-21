const express = require("express");
const router = express.Router();

const IndexController = require("../controllers/indexController.js");

router.get("/", IndexController.home);
router.get("/portfolio", IndexController.portfolio);

module.exports = router;