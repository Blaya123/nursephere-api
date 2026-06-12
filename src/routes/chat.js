import { Router } from 'express';
import auth from '../middleware/auth.js';
import {
  getMessages, sendMessage, getChannels, getSeedUsers, addReaction,
  getConversations, getOrCreateConversation, getDMMessages, sendDMMessage, getUnreadCount,
  deleteMessage, acceptConversation, rejectConversation
} from '../controllers/chatController.js';

const router = Router();

router.get('/channels', auth, getChannels);
router.get('/messages/:channel', auth, getMessages);
router.post('/messages', auth, sendMessage);
router.post('/reaction', auth, addReaction);
router.get('/seed-users', auth, getSeedUsers);

router.get('/conversations', auth, getConversations);
router.post('/conversations', auth, getOrCreateConversation);
router.get('/conversations/:conversationId/messages', auth, getDMMessages);
router.post('/conversations/:conversationId/messages', auth, sendDMMessage);
router.delete('/conversations/:conversationId/messages/:messageId', auth, deleteMessage);
router.put('/conversations/:conversationId/accept', auth, acceptConversation);
router.put('/conversations/:conversationId/reject', auth, rejectConversation);
router.get('/unread-count', auth, getUnreadCount);

export default router;
