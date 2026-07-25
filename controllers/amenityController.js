const Amenity = require("../models/Amenity");

// ==========================================
// Get All Amenities
// ==========================================
const getAmenities = async (req, res) => {
  try {
    const amenities = await Amenity.find().sort({ createdAt: -1 });

    res.status(200).json(amenities);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch amenities",
      error: error.message,
    });
  }
};

// ==========================================
// Get Single Amenity
// ==========================================
const getAmenity = async (req, res) => {
  try {
    const amenity = await Amenity.findById(req.params.id);

    if (!amenity) {
      return res.status(404).json({
        message: "Amenity not found",
      });
    }

    res.status(200).json({
      amenity,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch amenity",
      error: error.message,
    });
  }
};

// ==========================================
// Create Amenity
// ==========================================
const createAmenity = async (req, res) => {
  try {
    const {
      name,
      location,
      capacity,
      openingTime,
      closingTime,
      bookingRequired,
      status,
    } = req.body;

    const amenity = await Amenity.create({
      name,
      location,
      capacity,
      openingTime,
      closingTime,
      bookingRequired,
      status,
    });

    res.status(201).json({
      message: "Amenity Added Successfully",
      amenity,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add amenity",
      error: error.message,
    });
  }
};

// ==========================================
// Update Amenity
// ==========================================
const updateAmenity = async (req, res) => {
  try {
    const amenity = await Amenity.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!amenity) {
      return res.status(404).json({
        message: "Amenity not found",
      });
    }

    res.status(200).json({
      message: "Amenity Updated Successfully",
      amenity,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update amenity",
      error: error.message,
    });
  }
};

// ==========================================
// Delete Amenity
// ==========================================
const deleteAmenity = async (req, res) => {
  try {
    const amenity = await Amenity.findByIdAndDelete(req.params.id);

    if (!amenity) {
      return res.status(404).json({
        message: "Amenity not found",
      });
    }

    res.status(200).json({
      message: "Amenity Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete amenity",
      error: error.message,
    });
  }
};

module.exports = {
  getAmenities,
  getAmenity,
  createAmenity,
  updateAmenity,
  deleteAmenity,
};