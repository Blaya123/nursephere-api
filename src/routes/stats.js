import { Router } from 'express';
import auth from '../middleware/auth.js';
import { trackStats, getStats } from '../controllers/statsController.js';

const router = Router();

router.post('/track', auth, trackStats);
router.get('/', auth, getStats);

export default router;
