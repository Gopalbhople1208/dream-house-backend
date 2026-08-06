const Setting = require("../models/Setting");

// ==========================
// Get Settings
// ==========================
exports.getSettings = async (req, res) => {
  try {
    let settings = await Setting.findOne();

    if (!settings) {
      settings = await Setting.create({
        profile: {
          name: "Super Admin",
          email: "superadmin@gmail.com",
          phone: "9876543210",
        },
      });
    }

    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==========================
// Update Profile
// ==========================
exports.updateProfile = async (req, res) => {
  try {
    let settings = await Setting.findOne();

    if (!settings) {
      settings = new Setting();
    }

    settings.profile = req.body;

    await settings.save();

    res.status(200).json({
      message: "Profile Updated Successfully",
      settings,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==========================
// Change Password
// ==========================
exports.changePassword = async (req, res) => {
  try {
    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = req.body;

    const settings = await Setting.findOne();

    if (!settings) {
      return res.status(404).json({
        message: "Settings not found",
      });
    }

    if (settings.password !== currentPassword) {
      return res.status(400).json({
        message: "Current Password Incorrect",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    settings.password = newPassword;

    await settings.save();

    res.status(200).json({
      message: "Password Changed Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==========================
// Update Notification Settings
// ==========================
exports.updateNotificationSettings = async (req, res) => {
  try {
    let settings = await Setting.findOne();

    settings.notification = req.body;

    await settings.save();

    res.status(200).json({
      message: "Notification Settings Updated",
      settings,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==========================
// Update Website Settings
// ==========================
exports.updateWebsiteSettings = async (req, res) => {
  try {
    let settings = await Setting.findOne();

    settings.website = req.body;

    await settings.save();

    res.status(200).json({
      message: "Website Settings Updated",
      settings,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};