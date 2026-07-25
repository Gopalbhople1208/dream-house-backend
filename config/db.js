// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const mongoURI = process.env.MONGO_URI;
    
//     if (!mongoURI) {
//       throw new Error("MONGO_URI is not defined in environment variables");
//     }

//     console.log("Connecting to MongoDB...");

//     await mongoose.connect(mongoURI, {
//       serverSelectionTimeoutMS: 60000,
//       socketTimeoutMS: 60000,
//       connectTimeoutMS: 60000,
//       family: 4,
//       maxPoolSize: 10,
//       minPoolSize: 5,
//     });

//     console.log("✓ MongoDB Connected Successfully");
//     return true;

//   } catch (err) {
//     console.error("✗ MongoDB Connection Error:");
//     console.error(err.message);
    
//     setTimeout(() => {
//       console.log("Attempting to reconnect to MongoDB...");
//       connectDB();
//     }, 5000);
//   }
// };

// module.exports = connectDB; 














// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     if (!process.env.MONGO_URI) {
//       throw new Error("MONGO_URI is not defined");
    
//     }

//     await mongoose.connect(process.env.MONGO_URI);

//     console.log("MongoDB Connected");
//   } catch (err) {
//     console.error("MongoDB Connection Error:", err.message);

//     setTimeout(connectDB, 5000);
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");

const connectDB = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

  } catch (err) {

    console.log(err);

  }

};

module.exports = connectDB;