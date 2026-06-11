import { Router } from 'express';
import auth from '../middleware/auth.js';
import { careerRoadmap } from '../controllers/aiController.js';

const router = Router();

router.get('/', auth, careerRoadmap);

export default router;
