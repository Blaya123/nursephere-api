import { Router } from 'express';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import { getDashboard, getUsers, getUserDetail, deleteUser, broadcastNotification } from '../controllers/adminController.js';

const router = Router();

router.get('/dashboard', auth, admin, getDashboard);
router.get('/users', auth, admin, getUsers);
router.get('/users/:id', auth, admin, getUserDetail);
router.delete('/users/:id', auth, admin, deleteUser);
router.post('/notifications/broadcast', auth, admin, broadcastNotification);

export default router;
