const express = require("express");
const router = express.Router();

const {
  getVisitors,
  getVisitor,
  createVisitor,
  updateVisitor,
  deleteVisitor,
} = require("../controllers/visitorController");

// ==========================
// Get All Visitors
// GET /api/visitors
// ==========================
router.get("/", getVisitors);

// ==========================
// Get Single Visitor
// GET /api/visitors/:id
// ==========================
router.get("/:id", getVisitor);

// ==========================
// Add Visitor
// POST /api/visitors
// ==========================
router.post("/", createVisitor);

// ==========================
// Update Visitor
// PUT /api/visitors/:id
// ==========================
router.put("/:id", updateVisitor);

// ==========================
// Delete Visitor
// DELETE /api/visitors/:id
// ==========================
router.delete("/:id", deleteVisitor);

module.exports = router;