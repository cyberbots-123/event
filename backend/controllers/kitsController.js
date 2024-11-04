import Kit from '../models/kitModel.js';

// GET endpoint to retrieve all kits
export const getKits = async (req, res) => {
  try {
    const kits = await Kit.find();
    res.status(200).json(kits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};