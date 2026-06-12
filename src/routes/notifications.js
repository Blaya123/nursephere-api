import { Router } from 'express';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';
import { getNotifications, markRead, markAllRead, createNotification } from '../controllers/notificationController.js';

const router = Router();

router.get('/', auth, getNotifications);
router.put('/:id/read', auth, markRead);
router.put('/read-all', auth, markAllRead);
router.post('/', auth, admin, createNotification);

export default router;
