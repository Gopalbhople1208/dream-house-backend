const mongoose=require("mongoose");


const CommunityPostSchema=new mongoose.Schema({

author:{
type:String,
default:"Resident"
},

title:{
type:String,
default:"Community Post"
},


content:{
type:String,
required:true
},


image:{
type:String,
default:""
}


},{
timestamps:true
});


module.exports =
mongoose.model(
"CommunityPost",
CommunityPostSchema
);