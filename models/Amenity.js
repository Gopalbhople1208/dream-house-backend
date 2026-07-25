const mongoose = require("mongoose");

const amenitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Amenity name is required"],
      trim: true,
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },

    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
      min: 1,
    },

    openingTime: {
      type: String,
      required: [true, "Opening time is required"],
    },

    closingTime: {
      type: String,
      required: [true, "Closing time is required"],
    },

    bookingRequired: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },

    status: {
      type: String,
      enum: [
        "Available",
        "Unavailable",
        "Under Maintenance",
      ],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Amenity", amenitySchema);