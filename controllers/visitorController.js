const Visitor = require("../models/Visitor");

// ==============================
// Get All Visitors
// ==============================
exports.getVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ createdAt: -1 });

    res.status(200).json(visitors);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch visitors",
      error: error.message,
    });
  }
};

// ==============================
// Get Single Visitor
// ==============================
exports.getVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.id);

    if (!visitor) {
      return res.status(404).json({
        message: "Visitor not found",
      });
    }

    res.status(200).json({
      visitor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch visitor",
      error: error.message,
    });
  }
};

// ==============================
// Add Visitor
// ==============================
exports.createVisitor = async (req, res) => {
  try {
    const visitor = new Visitor(req.body);

    await visitor.save();

    res.status(201).json({
      message: "Visitor added successfully",
      visitor,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add visitor",
      error: error.message,
    });
  }
};

// ==============================
// Update Visitor
// ==============================
exports.updateVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!visitor) {
      return res.status(404).json({
        message: "Visitor not found",
      });
    }

    res.status(200).json({
      message: "Visitor updated successfully",
      visitor,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update visitor",
      error: error.message,
    });
  }
};

// ==============================
// Delete Visitor
// ==============================
exports.deleteVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findByIdAndDelete(req.params.id);

    if (!visitor) {
      return res.status(404).json({
        message: "Visitor not found",
      });
    }

    res.status(200).json({
      message: "Visitor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete visitor",
      error: error.message,
    });
  }
};