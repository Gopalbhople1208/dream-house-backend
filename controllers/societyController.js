// const Society = require("../models/society");
// const Resident = require("../models/resident");
// const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const createSociety = async (req, res) => {
//   try {
//     const {
//       societyName,
//       registrationNo,
//       email,
//       phone,
//       wings,
//       flats,
//       city,
//       state,
//       address,
//       headName,
//       headEmail,
//       headPhone,
//       password,
//     } = req.body;

//     if (
//       !societyName ||
//       !registrationNo ||
//       !email ||
//       !phone ||
//       !wings ||
//       !flats ||
//       !city ||
//       !state ||
//       !address ||
//       !headName ||
//       !headEmail ||
//       !headPhone ||
//       !password
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Please fill in all required fields",
//       });
//     }

//     const existingSociety = await Society.findOne({ registrationNo });
//     if (existingSociety) {
//       return res.status(409).json({
//         success: false,
//         message: "Society with this registration number already exists",
//       });
//     }

//     const existingHead = await Resident.findOne({ email: headEmail });
//     if (existingHead) {
//       return res.status(409).json({
//         success: false,
//         message: "A resident with this head email already exists",
//       });
//     }

//     const hashedPassword = await bcryptjs.hash(password, 10);

//     const society = await Society.create({
//       societyName,
//       registrationNo,
//       email,
//       phone,
//       wings: Number(wings),
//       flats: Number(flats),
//       city,
//       state,
//       address,
//       headName,
//       headEmail,
//       headPhone,
//     });

//     const resident = await Resident.create({
//       name: headName,
//       email: headEmail,
//       password: hashedPassword,
//       phone: headPhone,
//       address: `${address}, ${city}, ${state}`,
//     });

//     const token = jwt.sign(
//       { id: resident._id, email: resident.email, role: "society-admin" },
//       process.env.JWT_SECRET || "your_jwt_secret_key",
//       { expiresIn: "7d" }
//     );

//     res.status(201).json({
//       success: true,
//       message: "Society created successfully",
//       token,
//       society,
//       admin: {
//         id: resident._id,
//         name: resident.name,
//         email: resident.email,
//       },
//     });
//   } catch (error) {
//     console.error("Society creation error:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message || "Failed to create society",
//     });
//   }
// };

// module.exports = {
//   createSociety,
// };






const Society = require("../models/society");
const Resident = require("../models/Resident");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const createSociety = async (req, res) => {
  try {
    const {
      societyName,
      registrationNo,
      email,
      phone,
      wings,
      flats,
      city,
      state,
      address,
      headName,
      headEmail,
      headPhone,
      password,
    } 
    = req.body;

    if (
      !societyName || !registrationNo || !email || !phone ||
      !wings || !flats || !city || !state || !address ||
      !headName || !headEmail || !headPhone || !password
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (await Society.findOne({ registrationNo })) {
      return res.status(409).json({
        success: false,
        message: "Society already exists",
      });
    }

    if (await Resident.findOne({ email: headEmail })) {
      return res.status(409).json({
        success: false,
        message: "Resident already exists",
      });
    }

    const hash = await bcryptjs.hash(password, 10);

    const society = await Society.create({
      societyName,
      registrationNo,
      email,
      phone,
      wings: Number(wings),
      flats: Number(flats),
      city,
      state,
      address,
      headName,
      headEmail,
      headPhone,
    });

    const resident = await Resident.create({
      name: headName,
      email: headEmail,
      password: hash,
      phone: headPhone,
      address: `${address}, ${city}, ${state}`,
      flat: "",
  wing: "",
  type: "Owner",
  status: "Active",
    });

    const admin = await Admin.create({
  name: headName,
  email: headEmail,
  phone: headPhone,

  // IMPORTANT:
  // Admin model hashes password automatically.
  password: password,

  society: society._id,

  role: "admin",

  status: "Active",
});

    const token = jwt.sign(
      { id: resident._id, email: resident.email, role: "society-admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
  success: true,
  message: "Society Created Successfully",

  token,

  society,

  resident,

  admin,
});

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { createSociety };