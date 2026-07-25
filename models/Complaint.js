const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    resident: {
      type: String,
      required: [true, "Resident name is required"],
      trim: true,
    },

    flat: {
      type: String,
      required: [true, "Flat number is required"],
      trim: true,
    },

    complaint: {
      type: String,
      required: [true, "Complaint subject is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved"],
      default: "Pending",
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Complaint", complaintSchema);