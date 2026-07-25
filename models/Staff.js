const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      enum: [
        "Security",
        "Cleaner",
        "Electrician",
        "Plumber",
        "Gardener",
        "Manager",
        "Other",
      ],
    },

    shift: {
      type: String,
      required: true,
      enum: ["Morning", "Evening", "Night"],
    },

    salary: {
      type: Number,
      required: true,
    },

    joiningDate: {
      type: Date,
      default: Date.now,
    },

    address: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", staffSchema);