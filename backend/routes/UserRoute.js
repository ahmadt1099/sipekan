import express from 'express';
import { getUser, getUserById, createUser, updateUser, deleteUser } from '../controllers/User.js';
import { verifyUser, isAdmin } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/user', verifyUser, isAdmin, getUser);
router.get('/user/:id', verifyUser, isAdmin, getUserById);
router.post('/user', verifyUser, isAdmin, createUser);
router.patch('/user/:id', verifyUser, isAdmin, updateUser);
router.delete('/user/:id', verifyUser, isAdmin, deleteUser);

export default router;
