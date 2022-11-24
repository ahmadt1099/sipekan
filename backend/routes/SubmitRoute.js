import express from 'express';
import { getSubmit, getSubmitById, createSubmit, updateSubmit, deleteSubmit } from '../controllers/Submit.js';
import { verifyUser, isAdmin, userOnly } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/submit', verifyUser, getSubmit);
router.get('/submit/:id', verifyUser, getSubmitById);
router.post('/submit/:id', verifyUser, userOnly, createSubmit);
router.patch('/submit/:id', verifyUser, updateSubmit);
router.delete('/submit/:id', verifyUser, deleteSubmit);

export default router;
