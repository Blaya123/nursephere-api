import { Router } from 'express';
import auth from '../middleware/auth.js';
import { getProfile, updateProfile, getUsers, connectUser, getConnections, getUserById, removeConnection, blockUser, unblockUser, getBlockedUsers } from '../controllers/userController.js';

const router = Router();

router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.get('/all', auth, getUsers);
router.post('/connect', auth, connectUser);
router.get('/connections', auth, getConnections);
router.post('/remove-connection', auth, removeConnection);
router.post('/block', auth, blockUser);
router.post('/unblock', auth, unblockUser);
router.get('/blocked', auth, getBlockedUsers);
router.get('/:id', auth, getUserById);

export default router;
