// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const connectDB = require("./config/db");
// const residentRoutes = require("./routes/residentRoutes");
// const societyRoutes = require("./routes/societyRoutes");
// const adminRoutes = require("./routes/adminRoutes");
// const Resident = require("./models/resident");

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:3000"],
//   credentials: true,
//   optionsSuccessStatus: 200
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/api/residents", residentRoutes);
// app.use("/api/societies", societyRoutes);

// app.post("/api/admin/login", async (req, res) => {
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

// app.use("/api/admin", adminRoutes);

// // Health check route
// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Backend Running",
//     timestamp: new Date().toISOString()
//   });
// });

// // Health check API endpoint
// app.get("/api/health", (req, res) => {
//   res.json({
//     success: true,
//     message: "API is healthy",
//     server: "Running",
//     timestamp: new Date().toISOString()
//   });
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found"
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || "Internal Server Error"
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`\nServer Running on Port ${PORT}`);
//   console.log(`API available at http://localhost:${PORT}/api`);
//   console.log(`Health check: http://localhost:${PORT}/api/health\n`);
// });





















// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");

// const connectDB = require("./config/db");
// const residentRoutes = require("./routes/residentRoutes");
// const societyRoutes = require("./routes/societyRoutes");
// const adminRoutes = require("./routes/adminRoutes");

// const app = express();

// // Database
// connectDB();

// // Middleware
// app.use(cors({
//   origin: [
//     "https://your-frontend.vercel.app",
//     "http://localhost:5173"
//   ],
//   credentials: true,
// }));
// app.use(express.json());

// // Routes
// app.use("/api/residents", residentRoutes);
// app.use("/api/societies", societyRoutes);
// app.use("/api/admin", adminRoutes);

// // Home Route
// app.get("/", (req, res) => {
//   res.json({ message: "Backend Running" });
// });

// // Health Check
// app.get("/api/health", (req, res) => {
//   res.json({ message: "API is Healthy" });
// });

// // 404 Route
// app.use((req, res) => {
//   res.status(404).json({ message: "Route Not Found" });
// });

// // Error Handler
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: err.message || "Server Error",
//   });
// });

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const residentRoutes = require("./routes/residentRoutes");
const societyRoutes = require("./routes/societyRoutes");
const adminRoutes = require("./routes/adminRoutes");
const flatRoutes=require("./routes/flatRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const staffRoutes = require("./routes/staffRoutes");
const visitorRoutes = require("./routes/visitorRoutes");
const eventRoutes = require("./routes/eventRoutes");
const noticeRoutes = require("./routes/noticeRoutes");
const amenityRoutes = require("./routes/amenityRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");
//const communityRoutes = require("./routes/communityRoutes");
const superAdminRoutes = require("./routes/superAdminRoutes");


const communityRoutes = require("./routes/communityRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",
     "https://dream-house-gopal.vercel.app"
  ],
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/superadmin", superAdminRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/amenities", amenityRoutes);
app.use("/api/maintenance", maintenanceRoutes);
// app.use("/api/community", communityRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/flats",flatRoutes);
app.use("/api/residents", residentRoutes);
app.use("/api/societies", societyRoutes);
app.use("/api/admin", adminRoutes);
app.use(
    "/api/community",
    communityRoutes
);
app.use(
"/uploads",
express.static("uploads")
);

// Health check routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is healthy",
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});



