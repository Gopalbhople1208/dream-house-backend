// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const superAdminSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },

//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//     },

//     role: {
//       type: String,
//       default: "superadmin",
//     },

//     status: {
//       type: String,
//       enum: ["Active", "Inactive"],
//       default: "Active",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Hash password before saving
// superAdminSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);

//   next();
// });

// module.exports = mongoose.model("SuperAdmin", superAdminSchema);


// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const superAdminSchema = new mongoose.Schema({
//   name: String,

//   email: {
//     type: String,
//     unique: true,
//     lowercase: true,
//   },

//   password: String,

//   role: {
//     type: String,
//     default: "superadmin",
//   },

//   status: {
//     type: String,
//     default: "Active",
//   },
// });

// superAdminSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   this.password = await bcrypt.hash(this.password, 10);

//   next();
// });

// module.exports = mongoose.model("SuperAdmin", superAdminSchema);
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const superAdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "superadmin",
    },

    status: {
      type: String,
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

superAdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

module.exports = mongoose.model(
  "SuperAdmin",
  superAdminSchema
);