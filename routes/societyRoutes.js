const express = require("express");
const router = express.Router();

const { createSociety } = require("../controllers/societyController");

router.post("/register", createSociety);

module.exports = router;
