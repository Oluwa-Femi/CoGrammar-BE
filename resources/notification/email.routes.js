const express = require("express");

const router = express.Router();
const email = require('./notifications');


router.route("/");
router.route("/email").post(email);

module.exports = router;
