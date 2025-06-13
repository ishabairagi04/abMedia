import Destination from "../models/Destination.js";

export const getDestinations = async (req, res) => {
  const data = await Destination.find();
  res.json(data);
};
