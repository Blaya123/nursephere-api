import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  lastMessage: { type: String, default: '' },
  lastSender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lastTime: { type: Date },
  status: { type: String, enum: ['pending', 'active', 'blocked'], default: 'active' },
  requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

conversationSchema.index({ participants: 1 });

export default mongoose.model('Conversation', conversationSchema);
