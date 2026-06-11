import { Router } from 'express';
import auth from '../middleware/auth.js';
import { dosageCalculate, getHistory } from '../controllers/clinicalController.js';

const router = Router();

router.post('/dosage', auth, dosageCalculate);
router.get('/dosage-history', auth, getHistory);

export default router;
