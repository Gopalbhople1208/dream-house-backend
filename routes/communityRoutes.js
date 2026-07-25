const express = require("express");

const router = express.Router();


const upload = require("../middleware/upload");


const {

createPost,

getPosts,

likePost,

addComment

}=require("../controllers/communityController");





// create post with image

router.post(
"/",
upload.single("image"),
createPost
);



// get posts

router.get(
"/",
getPosts
);



// like

router.put(
"/like/:id",
likePost
);



// comment

router.post(
"/comment/:id",
addComment
);



module.exports = router;