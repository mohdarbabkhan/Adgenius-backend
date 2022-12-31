const express = require("express");
const router = express.Router();
const {generateAD} = require("../controllers/controller");
router.route("/").post(generateAD);

module.exports = router;