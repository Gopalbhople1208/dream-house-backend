const Notice = require("../models/Notice");

// =========================================
// Get All Notices
// =========================================
const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });

    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch notices",
      error: error.message,
    });
  }
};

// =========================================
// Get Single Notice
// =========================================
const getNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({
        message: "Notice not found",
      });
    }

    res.status(200).json({
      notice,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch notice",
      error: error.message,
    });
  }
};

// =========================================
// Create Notice
// =========================================
const createNotice = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      priority,
      publishDate,
      expiryDate,
      status,
    } = req.body;

    const notice = await Notice.create({
      title,
      description,
      category,
      priority,
      publishDate,
      expiryDate,
      status,
    });

    res.status(201).json({
      message: "Notice Added Successfully",
      notice,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add notice",
      error: error.message,
    });
  }
};

// =========================================
// Update Notice
// =========================================
const updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!notice) {
      return res.status(404).json({
        message: "Notice not found",
      });
    }

    res.status(200).json({
      message: "Notice Updated Successfully",
      notice,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update notice",
      error: error.message,
    });
  }
};

// =========================================
// Delete Notice
// =========================================
const deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);

    if (!notice) {
      return res.status(404).json({
        message: "Notice not found",
      });
    }

    res.status(200).json({
      message: "Notice Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete notice",
      error: error.message,
    });
  }
};

module.exports = {
  getNotices,
  getNotice,
  createNotice,
  updateNotice,
  deleteNotice,
};