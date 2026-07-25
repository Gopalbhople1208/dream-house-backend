const express = require("express");
const router = express.Router();

const {
  getMaintenances,
  getMaintenance,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
} = require("../controllers/maintenanceController");

// =====================================
// Get All Maintenance Records
// GET /api/maintenance
// =====================================
router.get("/", getMaintenances);

// =====================================
// Get Single Maintenance Record
// GET /api/maintenance/:id
// =====================================
router.get("/:id", getMaintenance);

// =====================================
// Create Maintenance Record
// POST /api/maintenance
// =====================================
router.post("/", createMaintenance);

// =====================================
// Update Maintenance Record
// PUT /api/maintenance/:id
// =====================================
router.put("/:id", updateMaintenance);

// =====================================
// Delete Maintenance Record
// DELETE /api/maintenance/:id
// =====================================
router.delete("/:id", deleteMaintenance);

module.exports = router;