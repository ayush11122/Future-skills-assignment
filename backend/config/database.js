const mongoose = require("mongoose");

const DB = async () => {
  try {
    await mongoose.connect("mongodb+srv://adminayush:ayushayu@cluster0.ldeh2qv.mongodb.net/futureSkills");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = DB;
