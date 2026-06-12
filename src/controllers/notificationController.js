import Notification from '../models/Notification.js';
import User from '../models/User.js';

export async function getNotifications(req, res) {
  try {
    const user = await User.findById(req.userId).select('role');
    const userRole = user?.role || 'Other';
    const notifications = await Notification.find({
      $or: [{ targetRole: 'all' }, { targetRole: userRole }],
    }).sort({ createdAt: -1 }).limit(50);
    const unreadCount = await Notification.countDocuments({
      $or: [{ targetRole: 'all' }, { targetRole: userRole }],
      readBy: { $ne: req.userId },
    });
    res.json({ notifications, unreadCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function markRead(req, res) {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) return res.status(404).json({ error: 'Notification not found' });
    if (!notification.readBy.includes(req.userId)) {
      notification.readBy.push(req.userId);
      await notification.save();
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function markAllRead(req, res) {
  try {
    const user = await User.findById(req.userId).select('role');
    const userRole = user?.role || 'Other';
    await Notification.updateMany(
      { $or: [{ targetRole: 'all' }, { targetRole: userRole }], readBy: { $ne: req.userId } },
      { $push: { readBy: req.userId } }
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createNotification(req, res) {
  try {
    const { title, message, type, targetRole, link } = req.body;
    if (!title || !message) {
      return res.status(400).json({ error: 'Title and message are required' });
    }
    const notification = await Notification.create({
      title, message, type, targetRole, link,
      createdBy: req.userId,
    });

    const io = req.app.get('io');
    if (io) {
      const sockets = io.sockets.sockets;
      sockets.forEach(s => {
        if (targetRole === 'all') {
          s.emit('notification:new', notification);
        }
      });
    }

    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
