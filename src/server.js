import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import aiRoutes from './routes/ai.js';
import clinicalRoutes from './routes/clinical.js';
import chatRoutes from './routes/chat.js';
import roadmapRoutes from './routes/roadmap.js';
import statsRoutes from './routes/stats.js';
import drugRoutes from './routes/drugs.js';
import apRoutes from './routes/ap.js';
import notificationRoutes from './routes/notifications.js';
import adminRoutes from './routes/admin.js';
import newsRoutes from './routes/news.js';

dotenv.config();

if (!process.env.JWT_SECRET || !process.env.MONGODB_URI || !process.env.GROQ_API_KEY) {
  console.error('Missing required env vars: JWT_SECRET, MONGODB_URI, GROQ_API_KEY');
  process.exit(1);
}

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/clinical', clinicalRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/roadmap', roadmapRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/drugs', drugRoutes);
app.use('/api/ap', apRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/news', newsRoutes);

app.set('io', io);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Nursphere', version: '1.0.0' });
});

const onlineUsers = new Map();

function getSocketIds(userId) {
  const sockets = onlineUsers.get(userId);
  return sockets ? Array.from(sockets) : [];
}

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId) {
    if (!onlineUsers.has(userId)) onlineUsers.set(userId, new Set());
    onlineUsers.get(userId).add(socket.id);
    io.emit('user:online', { userId, onlineUsers: Array.from(onlineUsers.keys()) });
  }

  socket.on('chat:message', (data) => {
    socket.broadcast.emit('chat:message', data);
  });

  socket.on('chat:typing', (data) => {
    socket.broadcast.emit('chat:typing', data);
  });

  socket.on('disconnect', () => {
    if (userId && onlineUsers.has(userId)) {
      onlineUsers.get(userId).delete(socket.id);
      if (onlineUsers.get(userId).size === 0) onlineUsers.delete(userId);
      io.emit('user:offline', { userId, onlineUsers: Array.from(onlineUsers.keys()) });
    }
  });
});

const PORT = process.env.PORT || 10000;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    httpServer.listen(PORT, () => console.log(`Nursphere API running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    httpServer.listen(PORT, () => console.log(`Nursphere API running on port ${PORT} (no DB)`));
  });
