const CommunityPost = require("../models/CommunityPost");



// CREATE POST

exports.createPost = async(req,res)=>{

try{


const post = await CommunityPost.create({

author:req.body.author || "Resident",

title:req.body.title || "Community Update",

content:req.body.content,


image:req.file
? req.file.filename
: ""

});


res.status(201).json({

success:true,

message:"Post created successfully",

post

});


}
catch(error){

console.log(error);


res.status(500).json({

success:false,

message:error.message

});


}

};






// GET POSTS

exports.getPosts = async(req,res)=>{


try{


const posts = await CommunityPost.find()
.sort({
createdAt:-1
});


res.status(200).json({

success:true,

posts

});


}
catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};






// LIKE POST

exports.likePost = async(req,res)=>{


try{


const post =
await CommunityPost.findById(req.params.id);



if(!post){

return res.status(404).json({

message:"Post not found"

});

}



post.likes +=1;


await post.save();



res.json({

success:true,

likes:post.likes

});


}
catch(error){

res.status(500).json({

message:error.message

});

}


};







// COMMENT

exports.addComment = async(req,res)=>{


try{


const post =
await CommunityPost.findById(req.params.id);



post.comments.push({

user:req.body.user || "Resident",

text:req.body.text

});


await post.save();



res.json({

success:true,

post

});


}
catch(error){

res.status(500).json({

message:error.message

});

}


};