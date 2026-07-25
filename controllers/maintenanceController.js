const Maintenance = require("../models/Maintenance");

// =======================================
// Get All Maintenance Records
// =======================================
const getMaintenances = async (req, res) => {
  try {
    const maintenances = await Maintenance.find().sort({
      createdAt: -1,
    });

    res.status(200).json(maintenances);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch maintenance records",
      error: error.message,
    });
  }
};

// =======================================
// Get Single Maintenance Record
// =======================================
const getMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id);

    if (!maintenance) {
      return res.status(404).json({
        message: "Maintenance record not found",
      });
    }

    res.status(200).json({
      maintenance,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch maintenance record",
      error: error.message,
    });
  }
};

// =======================================
// Create Maintenance Record
// =======================================
const createMaintenance = async (req, res) => {
  try {
    const {
      flatNo,
      owner,
      amount,
      dueDate,
      paymentDate,
      paymentMode,
      status,
    } = req.body;

    const maintenance = await Maintenance.create({
      flatNo,
      owner,
      amount,
      dueDate,
      paymentDate,
      paymentMode,
      status,
    });

    res.status(201).json({
      message: "Maintenance Added Successfully",
      maintenance,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add maintenance",
      error: error.message,
    });
  }
};

// =======================================
// Update Maintenance Record
// =======================================
const updateMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!maintenance) {
      return res.status(404).json({
        message: "Maintenance record not found",
      });
    }

    res.status(200).json({
      message: "Maintenance Updated Successfully",
      maintenance,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update maintenance",
      error: error.message,
    });
  }
};

// =======================================
// Delete Maintenance Record
// =======================================
const deleteMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(
      req.params.id
    );

    if (!maintenance) {
      return res.status(404).json({
        message: "Maintenance record not found",
      });
    }

    res.status(200).json({
      message: "Maintenance Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete maintenance",
      error: error.message,
    });
  }
};

module.exports = {
  getMaintenances,
  getMaintenance,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
};