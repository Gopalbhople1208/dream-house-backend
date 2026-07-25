// const jwt = require("jsonwebtoken");

// // Middleware to verify JWT token
// const verifyToken = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "No token provided. Please login first.",
//       });
//     }

//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET || "your_jwt_secret_key"
//     );
    
//     req.resident = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({
//       success: false,
//       message: "Invalid or expired token",
//     });
//   }
// };

// module.exports = {
//   verifyToken,
// };


// const jwt = require("jsonwebtoken");

// exports.verifyToken = (req, res, next) => {

//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token)
//         return res.status(401).json({
//             message: "Unauthorized"
//         });

//     try {

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         req.user = decoded;

//         next();

//     } catch (err) {

//         res.status(401).json({
//             message: "Invalid Token"
//         });

//     }

// };

const jwt = require("jsonwebtoken");

// Verify JWT Token
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

// Resident Only
exports.verifyResident = (req, res, next) => {
  if (req.user.role !== "resident") {
    return res.status(403).json({
      success: false,
      message: "Resident access only",
    });
  }

  next();
};

// Admin Only
exports.verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access only",
    });
  }

  next();
};

// Super Admin Only
exports.verifySuperAdmin = (req, res, next) => {
  if (req.user.role !== "superadmin") {
    return res.status(403).json({
      success: false,
      message: "Super Admin access only",
    });
  }

  next();
};