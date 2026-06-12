import { Router } from 'express';
import auth from '../middleware/auth.js';
import { sendOTP, verifyOTPAndRegister, verifyExistingOTP, resendOTP, login, forgotPassword, resetPassword, changePassword } from '../controllers/authController.js';

const router = Router();

router.post('/send-otp', sendOTP);
router.post('/register', verifyOTPAndRegister);
router.post('/verify-otp', verifyExistingOTP);
router.post('/resend-otp', resendOTP);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.put('/change-password', auth, changePassword);

export default router;
