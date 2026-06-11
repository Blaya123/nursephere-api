import { Router } from 'express';
import { sendOTP, verifyOTPAndRegister, resendOTP, login, forgotPassword, resetPassword } from '../controllers/authController.js';

const router = Router();

router.post('/send-otp', sendOTP);
router.post('/register', verifyOTPAndRegister);
router.post('/resend-otp', resendOTP);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;
