import { Router } from 'express';
import auth from '../middleware/auth.js';
import { getProfile, updateProfile, getUsers, connectUser } from '../controllers/userController.js';

const router = Router();

router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.get('/all', auth, getUsers);
router.post('/connect', auth, connectUser);

export default router;
