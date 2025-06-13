import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});

export default mongoose.model("Package", packageSchema);
