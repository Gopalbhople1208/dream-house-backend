const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getAllSocieties,
  getSocietyById, // ✅ Add this
} = require("../controllers/dashboardController");

router.get("/stats", getDashboardStats);

router.get("/societies", getAllSocieties);

router.get("/societies/:id", getSocietyById);

module.exports = router;