import Package from "../models/Package.js";

export const getTopPackages = async (req, res) => {
  const data = await Package.find();
  res.json(data);
};
