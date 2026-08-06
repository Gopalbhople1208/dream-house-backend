const mongoose = require("mongoose");

const communityCommentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CommunityPost",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resident",
      required: true,
    },

    userName: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    comment: {
      type: String,
      required: true,
      trim: true,
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resident",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
"CommunityComment",
communityCommentSchema
);