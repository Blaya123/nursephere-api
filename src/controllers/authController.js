import jwt from 'jsonwebtoken';
import User from '../models/User.js';

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
}

export async function register(req, res) {
  try {
    const { name, email, password, role, year, institution } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Email already registered' });

    const user = await User.create({ name, email, password, role, year, institution, lastLogin: new Date(), loginCount: 1 });
    const token = generateToken(user._id);

    res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, year: user.year, institution: user.institution, stats: user.stats, darkMode: user.darkMode, lastLogin: user.lastLogin, loginCount: user.loginCount, createdAt: user.createdAt },
    });
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
