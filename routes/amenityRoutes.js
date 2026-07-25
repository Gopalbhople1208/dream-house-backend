const express = require("express");
const router = express.Router();

const {
  getAmenities,
  getAmenity,
  createAmenity,
  updateAmenity,
  deleteAmenity,
} = require("../controllers/amenityController");

// ==============================
// Get All Amenities
// GET /api/amenities
// ==============================
router.get("/", getAmenities);

// ==============================
// Get Single Amenity
// GET /api/amenities/:id
// ==============================
router.get("/:id", getAmenity);

// ==============================
// Create Amenity
// POST /api/amenities
// ==============================
router.post("/", createAmenity);

// ==============================
// Update Amenity
// PUT /api/amenities/:id
// ==============================
router.put("/:id", updateAmenity);

// ==============================
// Delete Amenity
// DELETE /api/amenities/:id
// ==============================
router.delete("/:id", deleteAmenity);

module.exports = router;