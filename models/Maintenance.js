const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema(
  {
    flatNo: {
      type: String,
      required: [true, "Flat Number is required"],
      trim: true,
    },

    owner: {
      type: String,
      required: [true, "Owner name is required"],
      trim: true,
    },

    amount: {
      type: Number,
      required: [true, "Maintenance amount is required"],
      min: 0,
    },

    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },

    paymentDate: {
      type: Date,
      default: null,
    },

    paymentMode: {
      type: String,
      enum: ["Cash", "UPI", "Net Banking", "Cheque"],
      default: "Cash",
    },

    status: {
      type: String,
      enum: ["Pending", "Paid", "Overdue"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Maintenance", maintenanceSchema);