const Complaint = require("../models/Complaint");

// ============================
// Create Complaint
// ============================
exports.createComplaint = async (req, res) => {
  try {
    const complaint = new Complaint(req.body);

    const savedComplaint = await complaint.save();

    res.status(201).json(savedComplaint);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// ============================
// Get All Complaints
// ============================
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({
      createdAt: -1,
    });

    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ============================
// Get Single Complaint
// ============================
exports.getComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      complaint,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ============================
// Update Complaint
// ============================
exports.updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      message: "Complaint updated successfully",
      complaint,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// ============================
// Delete Complaint
// ============================
exports.deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndDelete(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      message: "Complaint deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};