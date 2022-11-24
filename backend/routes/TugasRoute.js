import express from 'express';
import { getTugas, getTugasById, createTugas, updateTugas, deleteTugas } from '../controllers/Tugas.js';
import { verifyUser, isAdmin } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/tugas', verifyUser, getTugas);
router.get('/tugas/:id', verifyUser, getTugasById);
router.post('/tugas', verifyUser, isAdmin, createTugas);
router.patch('/tugas/:id', verifyUser, isAdmin, updateTugas);
router.delete('/tugas/:id', verifyUser, isAdmin, deleteTugas);

export default router;
