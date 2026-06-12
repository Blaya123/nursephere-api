import { Router } from 'express';
import auth from '../middleware/auth.js';
import { getAP, getProgrammes } from '../controllers/apController.js';

const router = Router();

router.get('/', auth, getAP);
router.get('/programmes', getProgrammes);

export default router;
