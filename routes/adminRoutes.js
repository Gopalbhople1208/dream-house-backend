  // const express = require("express");
  // const router = express.Router();
  // const bcryptjs = require("bcryptjs");
  // const jwt = require("jsonwebtoken");
  // const Resident = require("../models/Resident");



  // router.post("/login", async (req, res) => {
  //   try {
  //     const { email, password } = req.body;

  //     if (!email || !password) {
  //       return res.status(400).json({
  //         success: false,
  //         message: "Email and password are required",
  //       });
  //     }

  //     const admin = await Resident.findOne({ email });
  //     if (!admin) {
  //       return res.status(401).json({
  //         success: false,
  //         message: "Invalid email or password",
  //       });
  //     }

  //     const isPasswordValid = await bcryptjs.compare(password, admin.password);
  //     if (!isPasswordValid) {
  //       return res.status(401).json({
  //         success: false,
  //         message: "Invalid email or password",
  //       });
  //     }

  //     const token = jwt.sign(
  //       { id: admin._id, email: admin.email, role: "society-admin" },
  //       process.env.JWT_SECRET || "your_jwt_secret_key",
  //       { expiresIn: "7d" }
  //     );

  //     res.status(200).json({
  //       success: true,
  //       message: "Admin login successful",
  //       token,
  //       admin: {
  //         id: admin._id,
  //         name: admin.name,
  //         email: admin.email,
  //       },
  //     });
  //   } catch (error) {
  //     console.error("Admin login error:", error);
  //     res.status(500).json({
  //       success: false,
  //       message: error.message || "Admin login failed",
  //     });
  //   }
  // });

//   // module.exports = router;
// const express = require("express");
// const router = express.Router();

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const Admin = require("../models/Admin");

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Email and password are required",
//       });
//     }

//     const admin = await Admin.findOne({ email });

//     if (!admin) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid Admin Email or Password",
//       });
//     }

//     const match = await bcrypt.compare(password, admin.password);

//     if (!match) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid Admin Email or Password",
//       });
//     }

//     const token = jwt.sign(
//       {
//         id: admin._id,
//         role: "admin",
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       }
//     );

//     res.json({
//       success: true,
//       token,
//       admin: {
//         id: admin._id,
//         name: admin.name,
//         email: admin.email,
//         role: admin.role,
//       },
//     });
//   } catch (err) {
//     console.log(err);

//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const Admin = require("../models/Admin");
// const {
//   loginAdmin,
//    getAllAdmins,
//      updateAdmin,
//      getAdminById,
//   deleteAdmin,
// } = require("../controllers/adminController");


// router.post("/login", loginAdmin);
// router.get("/", getAllAdmins);
// router.get("/:id", getAdminById);
// router.put("/:id", updateAdmin);

// router.delete("/:id", deleteAdmin);
// // ======================
// // Admin Login
// // ======================
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Email and Password are required",
//       });
//     }

//     // Find admin from Admin collection
//     const admin = await Admin.findOne({
//       email: email.toLowerCase(),
//     });

//     if (!admin) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid Admin Email or Password",
//       });
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, admin.password);

//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid Admin Email or Password",
//       });
//     }

//     router.put(
//   "/:id/profile-image",
//   upload.single("profileImage"),
//   updateProfileImage
// );

//     // Create JWT
//     const token = jwt.sign(
//       {
//         id: admin._id,
//         email: admin.email,
//         role: admin.role,
//       },
//       process.env.JWT_SECRET || "your_jwt_secret_key",
//       {
//         expiresIn: "7d",
//       }
//     );

//     res.status(200).json({
//       success: true,
//       message: "Admin Login Successful",
//       token,
//       admin: {
//         id: admin._id,
//         name: admin.name,
//         email: admin.email,
//         role: admin.role,
//         status: admin.status,
//       },
//     });
//   } catch (err) {
//     console.error("Admin Login Error:", err);

//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

const {
  loginAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  updateProfileImage,
  deleteAdmin,
} = require("../controllers/adminController");

const upload = require("../middleware/adminUpload");

// Login
router.post("/login", loginAdmin);

// Get all admins
router.get("/", getAllAdmins);

// Profile route MUST come before /:id
router.get("/profile", async (req, res) => {
  try {
    const adminId = req.user?.id;

    if (!adminId) {
      return res.status(401).json({
        success: false,
        message: "Admin not authenticated",
      });
    }

    const admin = await Admin.findById(adminId)
      .populate("society")
      .select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.json({
      success: true,
      admin,
    });
  } catch (error) {
    console.error("Profile Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Update profile image
router.put(
  "/:id/profile-image",
  upload.single("profileImage"),
  updateProfileImage
);

// Get admin by ID
// // router.get("/:id", getAdminById);
// api.get(`/admin/${storedAdmin._id}`)
router.get("/:id", getAdminById);

// Update admin
router.put("/:id", updateAdmin);

// Delete admin
router.delete("/:id", deleteAdmin);

module.exports = router;