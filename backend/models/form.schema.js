import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  adult: {
    type: Number,
    default: 0,
  },
  child: {
    type: Number,
    default: 0,
  },
  infant: {
    type: Number,
    default: 0,
  },
  hotelName: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("FormSubmission", formSchema);
