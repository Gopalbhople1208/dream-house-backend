// const mongoose = require("mongoose");

// const visitorSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     phone: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     purpose: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     flatNo: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     resident: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     checkIn: {
//       type: Date,
//       required: true,
//     },

//     checkOut: {
//       type: Date,
//       default: null,
//     },

//     status: {
//       type: String,
//       enum: ["Checked In", "Checked Out", "Pending"],
//       default: "Checked In",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Visitor", visitorSchema);

const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    purpose: {
      type: String,
      required: true,
      trim: true,
    },

    visitDate: {
      type: Date,
      required: true,
    },

    visitTime: {
      type: String,
      required: true,
    },

    totalVisitors: {
      type: Number,
      default: 1,
    },

    vehicleNo: {
      type: String,
      default: "",
    },

    remarks: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Completed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Visitor", visitorSchema);