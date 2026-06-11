import { Router } from 'express';
import auth from '../middleware/auth.js';
import { getMessages, sendMessage, getChannels, getSeedUsers, addReaction } from '../controllers/chatController.js';

const router = Router();

router.get('/channels', auth, getChannels);
router.get('/messages/:channel', auth, getMessages);
router.post('/messages', auth, sendMessage);
router.post('/reaction', auth, addReaction);
router.get('/seed-users', auth, getSeedUsers);

export default router;
