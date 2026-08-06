const express = require("express");
const router = express.Router();

const {
  getSettings,
  updateProfile,
  changePassword,
  updateNotificationSettings,
  updateWebsiteSettings,
} = require("../controllers/settingController");

// Get Settings
router.get("/", getSettings);

// Update Profile
router.put("/profile", updateProfile);

// Change Password
router.put("/password", changePassword);

// Notification Settings
router.put("/notification", updateNotificationSettings);

// Website Settings
router.put("/website", updateWebsiteSettings);

module.exports = router;