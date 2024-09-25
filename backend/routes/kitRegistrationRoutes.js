// routes/kitRegistrationRoutes.js
import express from 'express';
import { registerKit, getKits } from '../controllers/kitRegistrationController.js';

const router = express.Router();

// POST route for kit registration
router.post('/register', registerKit);

// GET route for fetching all registered kits
router.get('/kits', getKits);

export default router;

