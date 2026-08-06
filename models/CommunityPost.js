// const mongoose=require("mongoose");


// const CommunityPostSchema=new mongoose.Schema({

// author:{
// type:String,
// default:"Resident"
// },

// title:{
// type:String,
// default:"Community Post"
// },


// content:{
// type:String,
// required:true
// },
// likes: {
//     type: Number,
//     default: 0
// },

// image:{
// type:String,
// default:""
// }


// },{
// timestamps:true
// });


// module.exports =
// mongoose.model(
// "CommunityPost",
// CommunityPostSchema
// );

// const mongoose = require("mongoose");

// const CommunityPostSchema = new mongoose.Schema(
// {
//   author:{
//     type:String,
//     default:"Resident"
//   },

//   title:{
//     type:String,
//     default:"Community Post"
//   },

//   content:{
//     type:String,
//     required:true
//   },

//   image:{
//     type:String,
//     default:""
//   },

//   likes:{
//     type:Number,
//     default:0
//   },

//   comments:[
//     {
//       user:{
//         type:String,
//         default:"Resident"
//       },

//       text:String,

//       createdAt:{
//         type:Date,
//         default:Date.now
//       }
//     }
//   ]

// },
// {
// timestamps:true
// });

// module.exports = mongoose.model(
// "CommunityPost",
// CommunityPostSchema
// );

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      default: "Resident",
    },

    text: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const CommunityPostSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      default: "Resident",
    },

    title: {
      type: String,
      default: "Community Post",
    },

    content: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    likes: {
      type: Number,
      default: 0,
    },

    comments: [commentSchema], // ← ADD THIS
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CommunityPost",
  CommunityPostSchema
);