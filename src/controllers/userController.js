import User from '../models/User.js';

export async function getProfile(req, res) {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateProfile(req, res) {
  try {
    const allowed = ['name', 'role', 'year', 'institution', 'avatar', 'darkMode'];
    const updates = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) updates[key] = req.body[key];
    }

    const user = await User.findByIdAndUpdate(req.userId, updates, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.find({ _id: { $ne: req.userId } }).select('name role year institution avatar stats');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function connectUser(req, res) {
  try {
    const { userId } = req.body;
    const user = await User.findById(req.userId);
    const target = await User.findById(userId);

    if (!target) return res.status(404).json({ error: 'User not found' });

    if (!user.connections.includes(userId)) {
      user.connections.push(userId);
      user.stats.connectionsCount = user.connections.length;
      await user.save();
    }

    res.json({ connectionsCount: user.stats.connectionsCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
