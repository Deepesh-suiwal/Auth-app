import mongoose from "mongoose";
import "dotenv/config";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB Connected");
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
}
