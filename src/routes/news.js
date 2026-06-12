import { Router } from 'express';
import { getNews, broadcastDailyNews } from '../controllers/newsController.js';

const router = Router();

router.get('/', getNews);
router.post('/broadcast-daily', broadcastDailyNews);

export default router;
