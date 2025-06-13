import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

export default mongoose.model("Destination", destinationSchema);
