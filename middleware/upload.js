// const multer = require("multer");
// const path = require("path");


// const storage = multer.diskStorage({

//     destination:(req,file,cb)=>{

//         cb(
//             null,
//             "uploads/community"
//         );

//     },


//     filename:(req,file,cb)=>{

//         cb(
//             null,
//             Date.now() +
//             "-" +
//             file.originalname
//         );

//     }

// });



// const upload = multer({

//     storage:storage,


//     fileFilter:(req,file,cb)=>{

//         const allowed =
//         /jpeg|jpg|png|webp/;


//         const extname =
//         allowed.test(
//             path.extname(file.originalname)
//             .toLowerCase()
//         );


//         const mimetype =
//         allowed.test(file.mimetype);



//         if(extname && mimetype){

//             cb(null,true);

//         }
//         else{

//             cb(
//               new Error(
//                 "Only image files allowed"
//               )
//             );

//         }

//     }


// });


// module.exports = upload;

// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/community");
//   },

//   filename: (req, file, cb) => {
//     cb(
//       null,
//       Date.now() + "-" + file.originalname
//     );
//   },
// });

// const upload = multer({
//   storage,

//   fileFilter: (req, file, cb) => {
//     const types = /jpeg|jpg|png|gif|webp/;

//     const ext = types.test(
//       path.extname(file.originalname).toLowerCase()
//     );

//     const mime = types.test(file.mimetype);

//     if (ext && mime) {
//       return cb(null, true);
//     }

//     cb(new Error("Only image files are allowed"));
//   },
// });

// module.exports = upload;

// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// // ========================================
// // UPLOAD DIRECTORY
// // ========================================

// const uploadDir = path.join(
//   __dirname,
//   "../uploads/community"
// );

// // Create directory automatically
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, {
//     recursive: true,
//   });
// }

// // ========================================
// // MULTER STORAGE
// // ========================================

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },

//   filename: (req, file, cb) => {
//     const extension = path
//       .extname(file.originalname)
//       .toLowerCase();

//     const filename =
//       Date.now() +
//       "-" +
//       Math.round(Math.random() * 1e9) +
//       extension;

//     cb(null, filename);
//   },
// });

// // ========================================
// // FILE UPLOAD
// // ========================================

// const upload = multer({
//   storage: storage,

//   fileFilter: (req, file, cb) => {
//     const allowedMimeTypes = [
//       "image/jpeg",
//       "image/jpg",
//       "image/png",
//       "image/gif",
//       "image/webp",
//     ];

//     const extension = path
//       .extname(file.originalname)
//       .toLowerCase();

//     const allowedExtensions = [
//       ".jpeg",
//       ".jpg",
//       ".png",
//       ".gif",
//       ".webp",
//     ];

//     if (
//       allowedExtensions.includes(extension) &&
//       allowedMimeTypes.includes(file.mimetype)
//     ) {
//       cb(null, true);
//     } else {
//       cb(
//         new Error(
//           "Only JPG, JPEG, PNG, GIF and WEBP images are allowed"
//         )
//       );
//     }
//   },

//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5 MB
//   },
// });

// // ========================================
// // EXPORT
// // ========================================

// module.exports = upload;

const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../uploads/profile");

// Create folder automatically
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();

    const filename =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      extension;

    cb(null, filename);
  },
});

const upload = multer({
  storage,

  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;

    const ext = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    const mime = allowedTypes.test(file.mimetype);

    if (ext && mime) {
      return cb(null, true);
    }

    cb(new Error("Only image files are allowed"));
  },

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = upload;