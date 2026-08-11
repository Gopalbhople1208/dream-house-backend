// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const admin = await Admin.findOne({ email });

//     if (!admin) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid admin email or password",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);

//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid admin email or password",
//       });
//     }

//     const token = jwt.sign(
//       {
//         id: admin._id,
//         role: "admin",
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({
//       success: true,
//       token,
//       admin,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// // };
// const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const Society = require("../models/society");


// const loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const admin = await Admin.findOne({ email });

//     if (!admin) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid Email or Password",
//       });
//     }

//     const match = await bcrypt.compare(
//       password,
//       admin.password
//     );

//     if (!match) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid Email or Password",
//       });
//     }

//     const token = jwt.sign(
//       {
//         id: admin._id,
//         role: admin.role,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       }
//     );

//     res.json({
//       success: true,
//       token,
//       admin,
//     });
//   } catch (err) {
//     console.log(err); 
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// const getAllAdmins = async (req, res) => {
//   try {
//     const admins = await Admin.find()
//       .populate(
//   "society",
//   "societyName registrationNo email phone wings flats city state address"
// )
//       .select("-password");

//     res.status(200).json({
//       success: true,
//       admins,
//     });
//   } catch (err) {
//     console.log(err);

//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// // Update Admin
// const updateAdmin = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       phone,
//       status,

//       societyName,
//       registrationNo,
//       societyEmail,
//       societyPhone,
//       wings,
//       flats,
//       city,
//       state,
//       address,
//     } = req.body;

//     const admin = await Admin.findById(req.params.id);

//     if (!admin) {
//       return res.status(404).json({
//         success: false,
//         message: "Admin Not Found",
//       });
//     }

//     // Update Admin
//     admin.name = name;
//     admin.email = email;
//     admin.phone = phone;
//     admin.status = status;

//     await admin.save();

//     // Update Society
//     await Society.findByIdAndUpdate(
//       admin.society,
//       {
//         societyName,
//         registrationNo,
//         email: societyEmail,
//         phone: societyPhone,
//         wings,
//         flats,
//         city,
//         state,
//         address,
//       }
//     );

//     const updatedAdmin = await Admin.findById(admin._id)
//       .populate("society")
//       .select("-password");

//     res.json({
//       success: true,
//       message: "Admin Updated Successfully",
//       admin: updatedAdmin,
//     });

//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// // =============================
// // GET ADMIN BY ID
// // =============================
// const getAdminById = async (req, res) => {

//   try {

//     const admin = await Admin.findById(req.params.id)

//       .populate(
//         "society",
//         "societyName registrationNo email phone wings flats city state address"
//       )

//       .select("-password");

//     if (!admin) {
//       return res.status(404).json({
//         success: false,
//         message: "Admin Not Found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       admin,
//     });

//   } catch (err) {

//     console.log(err);

//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });

//   }

// };

// exports.updateProfileImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Please select an image.",
//       });
//     }

//     const admin = await Admin.findById(req.params.id);

//     if (!admin) {
//       return res.status(404).json({
//         success: false,
//         message: "Admin not found.",
//       });
//     }

//     admin.profileImage =
//       `/uploads/admin/${req.file.filename}`;

//     await admin.save();

//     const updatedAdmin = await Admin.findById(
//       admin._id
//     )
//       .populate("society")
//       .select("-password");

//     res.status(200).json({
//       success: true,
//       message: "Profile image updated successfully.",
//       admin: updatedAdmin,
//     });
//   } catch (error) {
//     console.error("Admin Image Error:", error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Delete Admin
// const deleteAdmin = async (req, res) => {
//   try {
//     const admin = await Admin.findByIdAndDelete(req.params.id);

//     if (!admin) {
//       return res.status(404).json({
//         success: false,
//         message: "Admin not found",
//       });
//     }

//     res.json({
//       success: true,
//       message: "Admin Deleted Successfully",
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// module.exports = {
//   loginAdmin,
//   getAllAdmins,
//   getAdminById,
//   updateAdmin,
//   deleteAdmin,
//   updateProfileImage,
// };


const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Society = require("../models/society");

// =============================
// ADMIN LOGIN
// =============================
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      success: true,
      token,
      admin: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        role: admin.role,
        status: admin.status,
        profileImage: admin.profileImage || "",
        society: admin.society,
      },
    });
  } catch (err) {
    console.error("Admin Login Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =============================
// GET ALL ADMINS
// =============================
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find()
      .populate(
        "society",
        "societyName registrationNo email phone wings flats city state address"
      )
      .select("-password");

    res.status(200).json({
      success: true,
      admins,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =============================
// UPDATE ADMIN
// =============================
const updateAdmin = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      status,
      societyName,
      registrationNo,
      societyEmail,
      societyPhone,
      wings,
      flats,
      city,
      state,
      address,
    } = req.body;

    const admin = await Admin.findById(req.params.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin Not Found",
      });
    }

    admin.name = name;
    admin.email = email;
    admin.phone = phone;
    admin.status = status;

    await admin.save();

    await Society.findByIdAndUpdate(admin.society, {
      societyName,
      registrationNo,
      email: societyEmail,
      phone: societyPhone,
      wings,
      flats,
      city,
      state,
      address,
    });

    const updatedAdmin = await Admin.findById(admin._id)
      .populate("society")
      .select("-password");

    res.json({
      success: true,
      message: "Admin Updated Successfully",
      admin: updatedAdmin,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =============================
// GET ADMIN BY ID
// =============================
const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id)
      .populate(
        "society",
        "societyName registrationNo email phone wings flats city state address"
      )
      .select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin Not Found",
      });
    }

    res.status(200).json({
      success: true,
      admin,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =============================
// UPDATE ADMIN PROFILE IMAGE
// =============================
const updateProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select an image.",
      });
    }

    const admin = await Admin.findById(req.params.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found.",
      });
    }

   admin.profileImage =
  `/uploads/profile/${req.file.filename}`;

    await admin.save();

    const updatedAdmin = await Admin.findById(admin._id)
      .populate("society")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Profile image updated successfully.",
      admin: updatedAdmin,
    });
  } catch (error) {
    console.error("Admin Image Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// DELETE ADMIN
// =============================
const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.json({
      success: true,
      message: "Admin Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =============================
// EXPORT
// =============================
module.exports = {
  loginAdmin,
  getAllAdmins,
  updateAdmin,
  getAdminById,
  updateProfileImage,
  deleteAdmin,
};