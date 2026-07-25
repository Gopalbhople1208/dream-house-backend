const express = require("express");
const router = express.Router();

const {
  loginSuperAdmin,
  createSuperAdmin,
  getProfile,
} = require("../controllers/superAdminController");

router.post("/create", createSuperAdmin);
router.post("/login", loginSuperAdmin);
router.get("/:id", getProfile);

module.exports = router;