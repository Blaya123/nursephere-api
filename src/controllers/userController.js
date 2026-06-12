import User from '../models/User.js';

export async function getProfile(req, res) {
  try {
    const user = await User.findById(req.userId).select('-password').populate('connections', 'name role year institution avatar stats');
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

    if (!target.connections.includes(req.userId)) {
      target.connections.push(req.userId);
      target.stats.connectionsCount = target.connections.length;
      await target.save();
    }

    const populated = await User.findById(req.userId)
      .select('connections stats')
      .populate('connections', 'name role year institution avatar stats');

    res.json({ connectionsCount: user.stats.connectionsCount, connections: populated.connections });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getConnections(req, res) {
  try {
    const user = await User.findById(req.userId)
      .select('connections')
      .populate('connections', 'name role year institution avatar stats connections');

    const friends = (user?.connections || []).map(c => ({
      _id: c._id,
      name: c.name,
      role: c.role,
      year: c.year,
      institution: c.institution,
      avatar: c.avatar,
      connectionsCount: c.stats?.connectionsCount || 0,
    }));

    res.json(friends);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id)
      .select('-password -loginHistory -otp -resetToken');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      year: user.year,
      institution: user.institution,
      avatar: user.avatar,
      stats: user.stats,
      connectionsCount: user.stats?.connectionsCount || 0,
      createdAt: user.createdAt,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function removeConnection(req, res) {
  try {
    const { userId } = req.body;
    const user = await User.findById(req.userId);
    const target = await User.findById(userId);
    if (!target) return res.status(404).json({ error: 'User not found' });

    user.connections = user.connections.filter(id => id.toString() !== userId);
    user.stats.connectionsCount = user.connections.length;
    await user.save();

    if (target) {
      target.connections = target.connections.filter(id => id.toString() !== req.userId);
      target.stats.connectionsCount = target.connections.length;
      await target.save();
    }

    res.json({ success: true, connectionsCount: user.stats.connectionsCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function blockUser(req, res) {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId required' });

    const user = await User.findById(req.userId);
    if (!user.blockedUsers.includes(userId)) {
      user.blockedUsers.push(userId);
    }
    user.connections = user.connections.filter(id => id.toString() !== userId);
    user.stats.connectionsCount = user.connections.length;
    await user.save();

    const target = await User.findById(userId);
    if (target) {
      target.connections = target.connections.filter(id => id.toString() !== req.userId);
      target.stats.connectionsCount = target.connections.length;
      await target.save();
    }

    await Conversation.updateMany(
      { participants: { $all: [req.userId, userId] } },
      { status: 'blocked' }
    );

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function unblockUser(req, res) {
  try {
    const { userId } = req.body;
    const user = await User.findById(req.userId);
    user.blockedUsers = user.blockedUsers.filter(id => id.toString() !== userId);
    await user.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getBlockedUsers(req, res) {
  try {
    const user = await User.findById(req.userId)
      .select('blockedUsers')
      .populate('blockedUsers', 'name role year institution');
    res.json(user?.blockedUsers || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
