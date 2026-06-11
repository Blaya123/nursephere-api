import User from '../models/User.js';

export async function trackStats(req, res) {
  try {
    const { type, value } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (type === 'study') user.stats.minutesStudied += value || 1;
    if (type === 'question') user.stats.questionsAnswered += value || 1;

    await user.save();
    res.json(user.stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getStats(req, res) {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user.stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
