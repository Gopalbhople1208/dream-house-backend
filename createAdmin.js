// require("dotenv").config();

// const mongoose = require("mongoose");
// const Admin = require("./models/Admin");

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(async () => {
//     console.log("MongoDB Connected");

//     try {
//       // Delete old admin if exists
//       await Admin.deleteOne({
//         email: "admin@gmail.com",
//       });

//       // Create new admin
//       const admin = new Admin({
//         name: "Society Admin",
//         email: "admin@gmail.com",
//         password: "123456",
//         role: "admin",
//         status: "Active",
//       });

//       await admin.save();

//       console.log("=================================");
//       console.log("Admin Created Successfully");
//       console.log("Email    : admin@gmail.com");
//       console.log("Password : 123456");
//       console.log("=================================");

//       process.exit();
//     } catch (err) {
//       console.log(err);
//       process.exit();
//     }
//   })
//   .catch(console.error);