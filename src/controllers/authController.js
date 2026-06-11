import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/User.js';
import { sendOTPEmail, sendResetEmail } from '../services/email.js';

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
}

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendOTP(req, res) {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const existing = await User.findOne({ email, isVerified: true });
    if (existing) return res.status(400).json({ error: 'Email already registered' });

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    await User.updateOne(
      { email },
      { $set: { 'otp.code': otp, 'otp.expiresAt': otpExpires, email } },
      { upsert: true }
    );

    const sent = await sendOTPEmail(email, otp);
    res.json({ success: true, otp, message: sent ? 'OTP sent to email' : 'Email service unavailable. Use the OTP below.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function verifyOTPAndRegister(req, res) {
  try {
    const { name, email, password, otp, year, institution } = req.body;
    if (!name || !email || !password || !otp) {
      return res.status(400).json({ error: 'All fields required' });
    }

    const pending = await User.findOne({ email, 'otp.code': otp, 'otp.expiresAt': { $gt: new Date() } });
    if (!pending) return res.status(400).json({ error: 'Invalid or expired OTP' });

    pending.name = name;
    pending.password = password;
    pending.role = 'Nursing Student';
    pending.year = year || '1';
    pending.institution = institution || '';
    pending.isVerified = true;
    pending.lastLogin = new Date();
    pending.loginCount = 1;
    pending.otp = undefined;
    await pending.save();

    const token = generateToken(pending._id);
    res.status(201).json({
      token,
      user: { id: pending._id, name: pending.name, email: pending.email, role: pending.role, year: pending.year, institution: pending.institution, stats: pending.stats, darkMode: pending.darkMode, lastLogin: pending.lastLogin, loginCount: pending.loginCount, createdAt: pending.createdAt },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function resendOTP(req, res) {
  try {
    const { email } = req.body;
    const pending = await User.findOne({ email, isVerified: false });
    if (!pending) return res.status(400).json({ error: 'No pending registration found' });

    const otp = generateOTP();
    pending.otp = { code: otp, expiresAt: new Date(Date.now() + 10 * 60 * 1000) };
    await pending.save();

    const sent = await sendOTPEmail(email, otp);
    res.json({ success: true, otp, message: sent ? 'OTP resent' : 'Dev OTP provided' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (!user.isVerified) {
      return res.status(403).json({ error: 'Please verify your email first', needsOTP: true });
    }

    user.lastLogin = new Date();
    user.loginCount = (user.loginCount || 0) + 1;
    user.loginHistory.push({
      date: new Date(),
      ip: req.ip || req.headers['x-forwarded-for'] || 'unknown',
      device: req.headers['user-agent']?.substring(0, 100) || 'unknown',
    });
    if (user.loginHistory.length > 50) user.loginHistory = user.loginHistory.slice(-50);
    await user.save();

    const token = generateToken(user._id);
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, year: user.year, institution: user.institution, stats: user.stats, darkMode: user.darkMode, achievements: user.achievements, roadmapMilestones: user.roadmapMilestones, lastLogin: user.lastLogin, loginCount: user.loginCount },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'No account with that email' });

    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = { token, expiresAt: new Date(Date.now() + 60 * 60 * 1000) };
    await user.save();

    const sent = await sendResetEmail(email, token);
    res.json({ success: true, resetToken: token, message: sent ? 'Reset token sent to email' : 'Dev token provided' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function resetPassword(req, res) {
  try {
    const { email, token, newPassword } = req.body;
    if (!email || !token || !newPassword) {
      return res.status(400).json({ error: 'Email, token, and new password required' });
    }

    const user = await User.findOne({ email, 'resetToken.token': token, 'resetToken.expiresAt': { $gt: new Date() } });
    if (!user) return res.status(400).json({ error: 'Invalid or expired reset token' });

    user.password = newPassword;
    user.resetToken = undefined;
    await user.save();

    res.json({ success: true, message: 'Password reset successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
