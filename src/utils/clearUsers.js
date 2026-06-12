import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Conversation from '../models/Conversation.js';
import Message from '../models/Message.js';
import ChatHistory from '../models/ChatHistory.js';
import Notification from '../models/Notification.js';

dotenv.config();

async function clearAll() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    const u = await User.deleteMany({});
    const c = await Conversation.deleteMany({});
    const m = await Message.deleteMany({});
    const h = await ChatHistory.deleteMany({});
    const n = await Notification.deleteMany({});

    console.log(`Cleared: ${u.deletedCount} users, ${c.deletedCount} conversations, ${m.deletedCount} messages, ${h.deletedCount} chat histories, ${n.deletedCount} notifications`);
    console.log('Database reset complete. All users deleted.');

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

clearAll();
