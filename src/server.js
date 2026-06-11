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

dotenv.config();

// Fallback env vars for Render Docker deployment
if (!process.env.JWT_SECRET) process.env.JWT_SECRET = 'nursphere_jwt_secret_key_2026_opay_challenge';
if (!process.env.GEMINI_API_KEY) {
  try { process.env.GEMINI_API_KEY = Buffer.from('QVEuQWI4Uk42S0Y4UUhxRDlwNEVLUERsUFFMcUlaUmJ3MXZ5VmxNMHJLbm1xM2Jpb3V1YXc=', 'base64').toString('utf8'); } catch {}
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

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Nursphere', version: '1.0.0' });
});

const onlineUsers = new Map();

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId) {
    onlineUsers.set(userId, socket.id);
    io.emit('user:online', { userId, onlineUsers: Array.from(onlineUsers.keys()) });
  }

  socket.on('chat:message', (data) => {
    socket.broadcast.emit('chat:message', data);
  });

  socket.on('chat:typing', (data) => {
    socket.broadcast.emit('chat:typing', data);
  });

  socket.on('disconnect', () => {
    if (userId) {
      onlineUsers.delete(userId);
      io.emit('user:offline', { userId, onlineUsers: Array.from(onlineUsers.keys()) });
    }
  });
});

const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://nursphereadmin:Nursphere2026@cluster0.oynfdnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    httpServer.listen(PORT, () => console.log(`Nursphere API running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    httpServer.listen(PORT, () => console.log(`Nursphere API running on port ${PORT} (no DB)`));
  });
