const express = require("express");
const router = express.Router();

const {
  getNotices,
  getNotice,
  createNotice,
  updateNotice,
  deleteNotice,
} = require("../controllers/noticeController");

// ===============================
// Get All Notices
// ===============================
router.get("/", getNotices);

// ===============================
// Get Single Notice
// ===============================
router.get("/:id", getNotice);

// ===============================
// Create Notice
// ===============================
router.post("/", createNotice);

// ===============================
// Update Notice
// ===============================
router.put("/:id", updateNotice);

// ===============================
// Delete Notice
// ===============================
router.delete("/:id", deleteNotice);

module.exports = router;