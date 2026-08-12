const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    flat: {
      type: String,
      default: "",
      trim: true,
    },
    wing: {
      type: String,
      default: "",
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: "",
      trim: true,
    },
    profileImage: {
  type: String,
  default: "",
},
    type: {
      type: String,
      default: "Owner",
      trim: true,
    },
    status: {
      type: String,
      default: "Active",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Resident || mongoose.model("Resident", residentSchema);
