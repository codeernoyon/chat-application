// external import
const express = require("express");

// internal import

const { getLogin } = require("../controller/loginController");
const router = express.Router();

// login page
router.get("/", getLogin);

module.exports = router;
