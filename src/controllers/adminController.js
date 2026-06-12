import User from '../models/User.js';
import Message from '../models/Message.js';
import Conversation from '../models/Conversation.js';
import Notification from '../models/Notification.js';

export async function getDashboard(req, res) {
  try {
    const totalUsers = await User.countDocuments();
    const totalMessages = await Message.countDocuments();
    const totalConversations = await Conversation.countDocuments();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const usersToday = await User.countDocuments({ createdAt: { $gte: today } });
    const messagesToday = await Message.countDocuments({ createdAt: { $gte: today } });

    const roleBreakdown = await User.aggregate([
      { $match: { role: { $ne: 'admin' } } },
      { $group: { _id: '$role', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    const totalMinutesStudied = await User.aggregate([
      { $group: { _id: null, total: { $sum: '$stats.minutesStudied' } } },
    ]);

    res.json({
      totalUsers,
      totalMessages,
      totalConversations,
      usersToday,
      messagesToday,
      roleBreakdown,
      totalMinutesStudied: totalMinutesStudied[0]?.total || 0,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUsers(req, res) {
  try {
    const { search, role, page = 1, limit = 50 } = req.query;
    const query = { role: { $ne: 'admin' } };
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { institution: { $regex: search, $options: 'i' } },
      ];
    }
    if (role) query.role = role;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const users = await User.find(query)
      .select('-password -otp -resetToken -loginHistory')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    const total = await User.countDocuments(query);

    res.json({ users, total, page: parseInt(page), pages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUserDetail(req, res) {
  try {
    const user = await User.findById(req.params.id)
      .select('-password -otp -resetToken')
      .populate('connections', 'name role year institution')
      .lean();
    if (!user) return res.status(404).json({ error: 'User not found' });

    const messageCount = await Message.countDocuments({ userId: req.params.id });
    const conversationCount = await Conversation.countDocuments({ participants: req.params.id });

    res.json({ ...user, messageCount, conversationCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.role === 'admin') return res.status(403).json({ error: 'Cannot delete admin users' });

    await Message.deleteMany({ userId: req.params.id });
    await Conversation.deleteMany({ participants: req.params.id });
    await User.findByIdAndDelete(req.params.id);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function broadcastNotification(req, res) {
  try {
    const { title, message, type } = req.body;
    if (!title || !message) {
      return res.status(400).json({ error: 'Title and message are required' });
    }

    const allUsers = await User.find({}, '_id').lean();
    const notification = await Notification.create({
      title,
      message,
      type: type || 'announcement',
      targetRole: 'all',
      createdBy: req.userId,
      readBy: [],
    });

    const io = req.app.get('io');
    if (io) {
      io.emit('notification:new', notification);
    }

    res.status(201).json({ success: true, notification });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
