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

  // module.exports = router;
const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Resident = require("../models/Resident");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // ONLY ADMIN CAN LOGIN HERE
    const admin = await Resident.findOne({
      email,
      role: "admin",
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid Admin Email or Password",
      });
    }

    const isPasswordValid = await bcryptjs.compare(
      password,
      admin.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid Admin Email or Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
        role: "admin",
      },
      process.env.JWT_SECRET || "your_jwt_secret_key",
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;