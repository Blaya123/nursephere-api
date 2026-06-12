import Message from '../models/Message.js';
import Conversation from '../models/Conversation.js';
import User from '../models/User.js';

const SEED_USERS = [
  { id: 'seed1', name: 'Amina Bello', role: 'BSN Student', year: '3', institution: 'University of Ibadan' },
  { id: 'seed2', name: 'Chidi Okonkwo', role: 'RN', year: 'Graduate', institution: 'Lagos University Teaching Hospital' },
  { id: 'seed3', name: 'Fatima Yusuf', role: 'Nursing Student', year: '2', institution: 'ABU Zaria' },
  { id: 'seed4', name: 'Emeka Nwosu', role: 'Midwife', year: 'Graduate', institution: 'UNTH Enugu' },
  { id: 'seed5', name: 'Grace Akpan', role: 'BSN Student', year: '4', institution: 'University of Calabar' },
  { id: 'seed6', name: 'Daniel Okafor', role: 'Nursing Student', year: '1', institution: 'UNILAG' },
  { id: 'seed7', name: 'Sola Adeyemi', role: 'RN', year: 'Graduate', institution: 'OAU Ile-Ife' },
];

const SEED_MESSAGES = [
  { channel: 'general', userId: 'seed1', userName: 'Amina Bello', userAvatar: '', text: 'Good morning everyone! How is your study going?' },
  { channel: 'general', userId: 'seed2', userName: 'Chidi Okonkwo', userAvatar: '', text: 'Morning Amina! Just finished my night shift. Time to review some NMCN questions.' },
  { channel: 'general', userId: 'seed3', userName: 'Fatima Yusuf', userAvatar: '', text: 'Can anyone share tips for Pharmacology? The drug names are overwhelming \uD83D\uDE05' },
  { channel: 'study-corner', userId: 'seed5', userName: 'Grace Akpan', userAvatar: '', text: 'I found a great mnemonic for cranial nerves! On Old Olympus Towering Tops...' },
  { channel: 'study-corner', userId: 'seed2', userName: 'Chidi Okonkwo', userAvatar: '', text: 'Try to group drugs by class, Fatima. Beta-blockers end in -lol, ACE inhibitors in -pril.' },
  { channel: 'clinical-discussions', userId: 'seed4', userName: 'Emeka Nwosu', userAvatar: '', text: 'Had an interesting case of preeclampsia yesterday. BP was 160/100. Started on IV hydralazine.' },
  { channel: 'clinical-discussions', userId: 'seed2', userName: 'Chidi Okonkwo', userAvatar: '', text: 'Magnesium sulfate seizure prophylaxis too? Standard protocol for severe preeclampsia.' },
  { channel: 'job-board', userId: 'seed7', userName: 'Sola Adeyemi', userAvatar: '', text: 'LUTH is recruiting 20 staff nurses. Application closes June 30th. Check their website!' },
  { channel: 'student-connect', userId: 'seed6', userName: 'Daniel Okafor', userAvatar: '', text: 'Any freshers here? Just got admitted to UNILAG Nursing. Would love to connect!' },
  { channel: 'student-connect', userId: 'seed3', userName: 'Fatima Yusuf', userAvatar: '', text: 'Welcome Daniel! Join the study-corner channel, we share notes there.' },
];

export async function getMessages(req, res) {
  try {
    const { channel } = req.params;
    const count = await Message.countDocuments();
    if (count === 0) {
      await Message.insertMany(SEED_MESSAGES);
    }
    const messages = await Message.find({ channel }).sort({ createdAt: -1 }).limit(50).lean();
    res.json(messages.reverse());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function sendMessage(req, res) {
  try {
    const { channel, text } = req.body;
    const msg = await Message.create({
      channel,
      userId: req.userId,
      userName: req.body.userName || 'Anonymous',
      userAvatar: req.body.userAvatar || '',
      text,
    });
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getChannels(req, res) {
  res.json([
    { id: 'general', name: 'General', icon: '\uD83D\uDCAC', description: 'Welcome and general discussions' },
    { id: 'study-corner', name: 'Study Corner', icon: '\uD83D\uDCDA', description: 'Share study resources and tips' },
    { id: 'clinical-discussions', name: 'Clinical Discussions', icon: '\uD83C\uDFE5', description: 'Case studies and clinical experiences' },
    { id: 'job-board', name: 'Job Board', icon: '\uD83D\uDCBC', description: 'Job postings and opportunities' },
    { id: 'student-connect', name: 'Student Connect', icon: '\uD83D\uDC4B', description: 'Connect with fellow students' },
  ]);
}

export async function getSeedUsers(req, res) {
  res.json(SEED_USERS);
}

export async function addReaction(req, res) {
  try {
    const { messageId, emoji } = req.body;
    const msg = await Message.findById(messageId);
    if (!msg) return res.status(404).json({ error: 'Message not found' });

    const existing = msg.reactions.find(r => r.emoji === emoji);
    if (existing) {
      const idx = existing.users.indexOf(req.userId);
      if (idx > -1) existing.users.splice(idx, 1);
      else existing.users.push(req.userId);
    } else {
      msg.reactions.push({ emoji, users: [req.userId] });
    }
    await msg.save();
    res.json(msg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getConversations(req, res) {
  try {
    const conversations = await Conversation.find({
      participants: req.userId,
      status: { $ne: 'blocked' },
    }).populate('participants lastSender', 'name email role year').sort({ lastTime: -1 }).lean();

    const user = await User.findById(req.userId).select('name email blockedUsers').lean();
    const blockedIds = (user?.blockedUsers || []).map(id => id.toString());

    const result = conversations.map(c => {
      const other = c.participants.find(p => p._id.toString() !== req.userId);
      const isBlocked = other && blockedIds.includes(other._id.toString());
      return { ...c, other: other ? { ...other, isBlocked } : null };
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getOrCreateConversation(req, res) {
  try {
    const { otherUserId } = req.body;
    if (!otherUserId) return res.status(400).json({ error: 'otherUserId required' });

    let conversation = await Conversation.findOne({
      participants: { $all: [req.userId, otherUserId] },
    });

    if (!conversation) {
      const isConnected = await User.findOne({
        _id: req.userId,
        connections: otherUserId,
      });

      conversation = await Conversation.create({
        participants: [req.userId, otherUserId],
        status: isConnected ? 'active' : 'pending',
        requestedBy: req.userId,
      });
    }

    const populated = await Conversation.findById(conversation._id)
      .populate('participants lastSender', 'name email role year institution');

    res.json(populated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getDMMessages(req, res) {
  try {
    const { conversationId } = req.params;
    const conversation = await Conversation.findById(conversationId);
    if (!conversation) return res.status(404).json({ error: 'Conversation not found' });
    if (!conversation.participants.some(p => p.toString() === req.userId)) {
      return res.status(403).json({ error: 'Not a participant' });
    }

    if (conversation.status === 'blocked') {
      return res.status(403).json({ error: 'This conversation is blocked' });
    }

    const user = await User.findById(req.userId).select('blockedUsers').lean();
    const otherParticipant = conversation.participants.find(p => p.toString() !== req.userId);
    if (otherParticipant && (user?.blockedUsers || []).some(id => id.toString() === otherParticipant.toString())) {
      return res.status(403).json({ error: 'You have blocked this user' });
    }

    await Message.updateMany(
      { conversationId, unreadFor: req.userId },
      { $pull: { unreadFor: req.userId } }
    );

    const messages = await Message.find({ conversationId, deleted: false })
      .sort({ createdAt: -1 }).limit(100).lean();
    res.json(messages.reverse());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function sendDMMessage(req, res) {
  try {
    const { conversationId } = req.params;
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text is required' });

    const conversation = await Conversation.findById(conversationId);
    if (!conversation) return res.status(404).json({ error: 'Conversation not found' });
    if (!conversation.participants.some(p => p.toString() === req.userId)) {
      return res.status(403).json({ error: 'Not a participant' });
    }
    if (conversation.status === 'blocked') {
      return res.status(403).json({ error: 'This conversation is blocked' });
    }

    const otherParticipant = conversation.participants.find(p => p.toString() !== req.userId);

    const blockerCheck = await User.findOne({
      _id: otherParticipant,
      blockedUsers: req.userId,
    });
    if (blockerCheck) {
      return res.status(403).json({ error: 'You have been blocked by this user' });
    }

    const user = await User.findById(req.userId).select('name');

    const msg = await Message.create({
      conversationId,
      userId: req.userId,
      userName: user?.name || 'Anonymous',
      text,
      unreadFor: otherParticipant ? [otherParticipant.toString()] : [],
    });

    conversation.lastMessage = text;
    conversation.lastSender = req.userId;
    conversation.lastTime = new Date();
    await conversation.save();

    const io = req.app.get('io');
    if (io) {
      conversation.participants.forEach(pid => {
        const sid = pid.toString();
        if (sid !== req.userId) {
          io.emit('dm:new', { conversationId, message: msg, userId: sid });
        }
      });
    }

    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUnreadCount(req, res) {
  try {
    const count = await Message.countDocuments({
      unreadFor: req.userId,
    });
    res.json({ unread: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteMessage(req, res) {
  try {
    const { conversationId, messageId } = req.params;
    const conversation = await Conversation.findById(conversationId);
    if (!conversation) return res.status(404).json({ error: 'Conversation not found' });

    const msg = await Message.findById(messageId);
    if (!msg) return res.status(404).json({ error: 'Message not found' });
    if (msg.userId !== req.userId) return res.status(403).json({ error: 'Can only delete your own messages' });

    msg.deleted = true;
    msg.deletedAt = new Date();
    msg.text = '[deleted]';
    await msg.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function acceptConversation(req, res) {
  try {
    const { conversationId } = req.params;
    const conversation = await Conversation.findById(conversationId);
    if (!conversation) return res.status(404).json({ error: 'Conversation not found' });
    if (!conversation.participants.some(p => p.toString() === req.userId)) {
      return res.status(403).json({ error: 'Not a participant' });
    }
    if (conversation.status !== 'pending') {
      return res.status(400).json({ error: 'Conversation is not pending' });
    }

    conversation.status = 'active';
    await conversation.save();

    const otherId = conversation.participants.find(p => p.toString() !== req.userId);
    if (otherId) {
      await User.findByIdAndUpdate(req.userId, {
        $addToSet: { connections: otherId },
        $inc: { 'stats.connectionsCount': 1 },
      });
      await User.findByIdAndUpdate(otherId, {
        $addToSet: { connections: req.userId },
        $inc: { 'stats.connectionsCount': 1 },
      });
    }

    const populated = await Conversation.findById(conversationId)
      .populate('participants lastSender', 'name email role year institution');

    const io = req.app.get('io');
    if (io) {
      io.emit('friend:accepted', { conversationId, userId: otherId?.toString() });
    }

    res.json(populated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function rejectConversation(req, res) {
  try {
    const { conversationId } = req.params;
    const conversation = await Conversation.findById(conversationId);
    if (!conversation) return res.status(404).json({ error: 'Conversation not found' });
    if (!conversation.participants.some(p => p.toString() === req.userId)) {
      return res.status(403).json({ error: 'Not a participant' });
    }
    if (conversation.status !== 'pending') {
      return res.status(400).json({ error: 'Conversation is not pending' });
    }

    await Message.deleteMany({ conversationId });
    await Conversation.findByIdAndDelete(conversationId);

    res.json({ success: true, message: 'Conversation rejected and removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
