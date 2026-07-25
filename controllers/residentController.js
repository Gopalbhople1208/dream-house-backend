const Resident = require("../models/Resident");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Resident registration
const registerResident = async (req, res) => {
  try {
    const { name, phone, email, password, address, flat, wing, type, status } = req.body;

    if (!name || !phone || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, phone, email, and password are required",
      });
    }

    const existingResident = await Resident.findOne({ email });
    if (existingResident) {
      return res.status(409).json({
        success: false,
        message: "Resident with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const resident = await Resident.create({
      name,
      phone,
      email,
      password: hashedPassword,
      address: address || "",
      flat: flat || "",
      wing: wing || "",
      type: type || "Owner",
      status: status || "Active",
    });

    const token = jwt.sign(
      { id: resident._id, email: resident.email },
      process.env.JWT_SECRET || "your_jwt_secret_key",
      { expiresIn: "7d" }
    );

    const residentResponse = resident.toObject();
    delete residentResponse.password;

    res.status(201).json({
      success: true,
      token,
      resident: residentResponse,
    });
  } catch (err) {
    console.error("Resident registration error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Registration failed",
    });
  }
};

// Resident login
const loginResident = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const resident = await Resident.findOne({ email });
    if (!resident) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const match = await bcrypt.compare(password, resident.password);
    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: resident._id, email: resident.email },
      process.env.JWT_SECRET || "your_jwt_secret_key",
      { expiresIn: "7d" }
    );

    const residentResponse = resident.toObject();
    delete residentResponse.password;

    res.json({
      success: true,
      token,
      resident: residentResponse,
    });
  } catch (err) {
    console.error("Resident login error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Login failed",
    });
  }
};

// Get all residents
const getAllResidents = async (req, res) => {
  try {
    const residents = await Resident.find().select("-password");
    res.json({ success: true, count: residents.length, residents });
  } catch (err) {
    console.error("Get all residents error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Failed to fetch residents",
    });
  }
};

// Get resident by ID
const getResidentById = async (req, res) => {
  try {
    const resident = await Resident.findById(req.params.id).select("-password");
    if (!resident) {
      return res.status(404).json({
        success: false,
        message: "Resident not found",
      });
    }
    res.json({ success: true, resident });
  } catch (err) {
    console.error("Get resident by ID error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Failed to fetch resident",
    });
  }
};

// Update resident
const updateResident = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const resident = await Resident.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!resident) {
      return res.status(404).json({
        success: false,
        message: "Resident not found",
      });
    }

    res.json({
      success: true,
      message: "Resident updated successfully",
      resident,
    });
  } catch (err) {
    console.error("Update resident error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Failed to update resident",
    });
  }
};

// Delete resident
const deleteResident = async (req, res) => {
  try {
    const resident = await Resident.findByIdAndDelete(req.params.id);
    if (!resident) {
      return res.status(404).json({
        success: false,
        message: "Resident not found",
      });
    }

    res.json({
      success: true,
      message: "Resident deleted successfully",
    });
  } catch (err) {
    console.error("Delete resident error:", err);
    res.status(500).json({
      success: false,
      message: err.message || "Failed to delete resident",
    });
  }
};


// Get Logged-in Resident Profile
const getResidentProfile = async (req, res) => {
  try {
    const resident = await Resident.findById(req.user.id).select("-password");

    if (!resident) {
      return res.status(404).json({
        success: false,
        message: "Resident not found",
      });
    }

    res.json({
      success: true,
      resident,
    });
  } catch (err) {
    console.error("Profile Error:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


module.exports = {
  registerResident,
  loginResident,
  getAllResidents,
  getResidentById,
  updateResident,
   getResidentProfile,
  deleteResident,
};