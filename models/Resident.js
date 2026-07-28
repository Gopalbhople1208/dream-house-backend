// const mongoose = require("mongoose");

// const residentSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     flat: {
//       type: String,
//       default: "",
//       trim: true,
//     },
//     wing: {
//       type: String,
//       default: "",
//       trim: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       default: "",
//       trim: true,
//     },
//     type: {
//       type: String,
//       default: "Owner",
//       trim: true,
//     },
//     status: {
//       type: String,
//       default: "Active",
//       trim: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.models.Resident || mongoose.model("Resident", residentSchema);
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const residentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    flat: String,

    wing: String,

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    address: String,

    type: {
      type: String,
      default: "Owner",
    },

    status: {
      type: String,
      default: "Active",
    },

    // ADD THIS
    role: {
      type: String,
      enum: ["resident", "admin"],
      default: "resident",
    },
  },
  {
    timestamps: true,
  }
);

residentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

module.exports = mongoose.model("Resident", residentSchema);
