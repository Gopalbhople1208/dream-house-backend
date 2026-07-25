const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getComplaints,
  getComplaint,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

// Create Complaint
router.post("/", createComplaint);

// Get All Complaints
router.get("/", getComplaints);

// Get Single Complaint
router.get("/:id", getComplaint);

// Update Complaint
router.put("/:id", updateComplaint);

// Delete Complaint
router.delete("/:id", deleteComplaint);

module.exports = router;
