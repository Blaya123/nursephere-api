import { Router } from 'express';
import auth from '../middleware/auth.js';
import { getDrugs, getDrugByName } from '../controllers/drugController.js';

const router = Router();

router.get('/', auth, getDrugs);
router.get('/:name', auth, getDrugByName);

export default router;
