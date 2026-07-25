const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
  flatNo: {
    type: String,
    required: true,
  },
  wing: {
    type: String,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  resident: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "Vacant",
  },
  status: {
    type: String,
    default: "Available",
  },
  maintenance: {
    type: String,
    default: "Pending",
  }
});

module.exports = mongoose.model("Flat", flatSchema);