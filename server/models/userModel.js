import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, reqired: true, unique: true },
  email: { type: String, reqired: true, unique: true },
  photo: { type: String, reqired: true },
  firstname: { type: String },
  lastname: { type: String },
  creditBalance: { type: Number, default: 5 },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;