// const express = require("express");
// const router = express.Router();

// const {
//   loginSuperAdmin,
//   createSuperAdmin,
//   getProfile,
//    updateProfileImage,
// } = require("../controllers/superAdminController");
// const upload = require("../middleware/upload");
// router.post("/create", createSuperAdmin);
// router.post("/login", loginSuperAdmin);
// router.get("/:id", getProfile);
// router.put(
//   "/:id/profile-image",
//   upload.single("profileImage"),
//   updateProfileImage
// );
// module.exports = router;

const express = require("express");

const router = express.Router();

const {
  loginSuperAdmin,
  createSuperAdmin,
  getProfile,
  updateProfileImage,
} = require("../controllers/superAdminController");

const upload = require("../middleware/upload");

router.post("/create", createSuperAdmin);

router.post("/login", loginSuperAdmin);

router.get("/:id", getProfile);

router.put(
  "/:id/profile-image",
  upload.single("profileImage"),
  updateProfileImage
);

module.exports = router;