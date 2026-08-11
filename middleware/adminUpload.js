const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(
  __dirname,
  "../uploads/profile"
);

// Create folder automatically
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const extension = path
      .extname(file.originalname)
      .toLowerCase();

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
    const allowedTypes =
      /jpeg|jpg|png|gif|webp/;

    const ext = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    const mime = allowedTypes.test(
      file.mimetype
    );

    if (ext && mime) {
      return cb(null, true);
    }

    cb(
      new Error(
        "Only image files are allowed"
      )
    );
  },

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = upload;