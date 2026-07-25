const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({

    destination:(req,file,cb)=>{

        cb(
            null,
            "uploads/community"
        );

    },


    filename:(req,file,cb)=>{

        cb(
            null,
            Date.now() +
            "-" +
            file.originalname
        );

    }

});



const upload = multer({

    storage:storage,


    fileFilter:(req,file,cb)=>{

        const allowed =
        /jpeg|jpg|png|webp/;


        const extname =
        allowed.test(
            path.extname(file.originalname)
            .toLowerCase()
        );


        const mimetype =
        allowed.test(file.mimetype);



        if(extname && mimetype){

            cb(null,true);

        }
        else{

            cb(
              new Error(
                "Only image files allowed"
              )
            );

        }

    }


});


module.exports = upload;