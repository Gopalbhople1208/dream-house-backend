const SuperAdmin = require("../models/SuperAdmin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==========================
// Super Admin Login
// ==========================

// exports.loginSuperAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter email and password",
//       });
//     }

//     const superadmin = await SuperAdmin.findOne({
//       email: email.toLowerCase(),
//     });

//     if (!superadmin) {
//       return res.status(404).json({
//         success: false,
//         message: "Super Admin not found",
//       });
//     }

//     if (superadmin.status !== "Active") {
//       return res.status(401).json({
//         success: false,
//         message: "Account is inactive",
//       });
//     }

//     const isMatch = await bcrypt.compare(
//       password,
//       superadmin.password
//     );

//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid Email or Password",
//       });
//     }

//     const token = jwt.sign(
//       {
//         id: superadmin._id,
//         role: superadmin.role,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       }
//     );

//     res.status(200).json({
//       success: true,
//       message: "Login Successful",
//       token,
//       superadmin: {
//         _id: superadmin._id,
//         name: superadmin.name,
//         email: superadmin.email,
//         role: superadmin.role,
//       },
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



// exports.loginSuperAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     console.log("Login Request:", req.body);

//     const superadmin = await SuperAdmin.findOne({
//       email: email.toLowerCase(),
//     });

//     console.log("Database User:", superadmin);

//     if (!superadmin) {
//       return res.status(404).json({
//         success: false,
//         message: "Super Admin not found",
//       });
//     }

//     console.log("Status:", superadmin.status);

//     // const isMatch = await bcrypt.compare(
//     //   password,
//     //   superadmin.password
//     // );
//     const isMatch = password === superadmin.password;

//     console.log("Password Match:", isMatch);

//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid Email or Password",
//       });
//     }

//     // res.json({
//     //   success: true,
//     // });

//     const token = jwt.sign(
//   {
//     id: superadmin._id,
//     role: "superadmin",
//   },
//   process.env.JWT_SECRET,
//   {
//     expiresIn: "7d",
//   }
// );

// res.status(200).json({
//   success: true,
//   message: "Login Successful",
//   token,
//   superadmin: {
//     _id: superadmin._id,
//     name: superadmin.name,
//     email: superadmin.email,
//   },
// });

//   } 
//   // catch (err) {
//   //   console.log(err);
//   // }
//   catch (err) {
//   console.error(err);

//   res.status(500).json({
//     success: false,
//     message: err.message,
//   });
// }
// };

exports.loginSuperAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    console.log(req.body);

    const superadmin = await SuperAdmin.findOne({
      email: email.toLowerCase(),
    });

    if (!superadmin) {
      return res.status(404).json({
        success: false,
        message: "Super Admin not found",
      });
    }

    const isMatch = password === superadmin.password;

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not found");
    }

    const token = jwt.sign(
      {
        id: superadmin._id,
        role: "superadmin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      token,
      superadmin,
    });

  } catch (err) {
    console.error("LOGIN ERROR:");
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// ==========================
// Get Profile
// ==========================

exports.getProfile = async (req, res) => {
  try {
    const admin = await SuperAdmin.findById(req.params.id)
      .select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Super Admin not found",
      });
    }

    res.status(200).json({
      success: true,
      superadmin: admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ==========================
// Create First Super Admin
// (Run only once)
// ==========================

exports.createSuperAdmin = async (req, res) => {
  try {
    const exists = await SuperAdmin.findOne({
      email: req.body.email.toLowerCase(),
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Super Admin already exists",
      });
    }

    const admin = await SuperAdmin.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).json({
      success: true,  
      message: "Super Admin Created Successfully",
      superadmin: admin,
    });
  } catch (err) {
  console.log(err);
  res.status(500).json({  // ✅ Now sends response
    success: false,
    message: err.message || "Login failed",
  });
}
};
exports.updateProfileImage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select an image.",
      });
    }

    const superadmin = await SuperAdmin.findById(id);

    if (!superadmin) {
      return res.status(404).json({
        success: false,
        message: "Super Admin not found.",
      });
    }

    // IMPORTANT:
    // File is stored in uploads/profile
    superadmin.profileImage =
      `/uploads/profile/${req.file.filename}`;

    await superadmin.save();

    res.status(200).json({
      success: true,
      message: "Profile image updated successfully.",

      superadmin: {
        _id: superadmin._id,
        name: superadmin.name,
        email: superadmin.email,
        role: superadmin.role,
        status: superadmin.status,
        profileImage: superadmin.profileImage,
      },
    });
  } catch (error) {
    console.error("Update Profile Image Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};