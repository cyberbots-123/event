// routes/kits.js
import express from 'express';
import Kit from '../models/kitModel.js'; // Import the Kit model
const router = express.Router();

// POST endpoint to save kit details
router.post('/kits', async (req, res) => {
    const newKit = new Kit(req.body);
    try {
        await newKit.save();
        res.status(201).json(newKit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET endpoint to retrieve all kits
router.get('/kits', async (req, res) => {
    try {
        const kits = await Kit.find();
        res.json(kits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

