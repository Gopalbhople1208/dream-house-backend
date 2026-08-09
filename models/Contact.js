// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       lowercase: true,
//     },

//     message: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     status: {
//       type: String,
//       enum: ["New", "Read", "Replied"],
//       default: "New",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports =
//   mongoose.models.Contact ||
//   mongoose.model("Contact", contactSchema);



const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Unread", "Read"],
      default: "Unread",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);