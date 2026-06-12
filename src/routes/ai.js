import { Router } from 'express';
import auth from '../middleware/auth.js';
import { chat, procedure, diagnosis, dailyInsights, careerRoadmap, careerInsight, getChatHistory, getChatSession, deleteChatSession } from '../controllers/aiController.js';

const router = Router();

router.post('/chat', auth, chat);
router.post('/procedure', auth, procedure);
router.post('/diagnosis', auth, diagnosis);
router.get('/daily-insights', auth, dailyInsights);
router.get('/roadmap', auth, careerRoadmap);
router.get('/career-insight', auth, careerInsight);
router.get('/history', auth, getChatHistory);
router.get('/history/:id', auth, getChatSession);
router.delete('/history/:id', auth, deleteChatSession);

export default router;
