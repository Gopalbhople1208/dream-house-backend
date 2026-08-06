const Society = require("../models/Society");
const Resident = require("../models/Resident");
const Staff = require("../models/Staff");
const Amenity = require("../models/Amenity");
const Maintenance = require("../models/Maintenance");
const Complaint = require("../models/Complaint");

// Dashboard Statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const stats = {
      societies: await Society.countDocuments(),
      residents: await Resident.countDocuments(),
      staff: await Staff.countDocuments(),
      amenities: await Amenity.countDocuments(),
      maintenance: await Maintenance.countDocuments(),
      complaints: await Complaint.countDocuments(),
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Societies
exports.getAllSocieties = async (req, res) => {
  try {
    const societies = await Society.find();

    res.json(societies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getSocietyById = async (req, res) => {
  try {
    const society = await Society.findById(req.params.id);

    if (!society) {
      return res.status(404).json({
        message: "Society not found",
      });
    }

    res.status(200).json(society);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};