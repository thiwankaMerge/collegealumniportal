// config/db.js
const mongoose = require("mongoose");
mongoose.set('strictQuery', false); // or true, depending on your need

// Set strictQuery explicitly to suppress the warning
//mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);  // Remove deprecated options
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
