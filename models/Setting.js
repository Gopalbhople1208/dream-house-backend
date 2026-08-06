const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  profile: {
    name: String,
    email: String,
    phone: String,
  },

  notification: {
    notifications: {
      type: Boolean,
      default: true,
    },

    maintenanceReminder: {
      type: Boolean,
      default: true,
    },
  },

  website: {
    registration: {
      type: Boolean,
      default: true,
    },

    darkMode: {
      type: Boolean,
      default: false,
    },
  },

  password: {
    type: String,
    default: "admin123",
  },
});

module.exports = mongoose.model("Setting", settingSchema);