import express from 'express';
import { getHadiah, getHadiahById, createHadiah, updateHadiah, deleteHadiah } from '../controllers/Hadiah.js';
import { verifyUser, isAdmin } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/reward', verifyUser, getHadiah);
router.get('/reward/:id', verifyUser, getHadiahById);
router.post('/reward', verifyUser, isAdmin, createHadiah);
router.patch('/reward/:id', verifyUser, isAdmin, updateHadiah);
router.delete('/reward/:id', verifyUser, isAdmin, deleteHadiah);

export default router;
