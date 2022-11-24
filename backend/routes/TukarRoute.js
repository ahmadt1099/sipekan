import express from 'express';
import { getTukar, getTukarById, createTukar, updateTukar, deleteTukar } from '../controllers/Tukar.js';
import { verifyUser, isAdmin, userOnly } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/redeem', verifyUser, getTukar);
router.get('/redeem/:id', verifyUser, getTukarById);
router.post('/redeem/:id', verifyUser, userOnly, createTukar);
router.patch('/redeem/:id', verifyUser, isAdmin, updateTukar);
router.delete('/redeem/:id', verifyUser, isAdmin, deleteTukar);

export default router;
