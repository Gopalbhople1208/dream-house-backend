const mongoose = require("mongoose");

const societySchema = new mongoose.Schema({
  societyName: {
    type: String,
    required: true,
    trim: true,
  },
  registrationNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  wings: {
    type: Number,
    required: true,
  },
  flats: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  headName: {
    type: String,
    required: true,
  },
  headEmail: {
    type: String,
    required: true,
  },
  headPhone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Society", societySchema);
