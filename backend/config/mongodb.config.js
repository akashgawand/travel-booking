import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

export const connectDB= async() => {
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected successfully")
  }
  catch(error){ 
    console.log("MongoDB connection error:", error)
  }
}
