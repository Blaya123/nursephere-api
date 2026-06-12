import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  channel: { type: String },
  conversationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userAvatar: { type: String, default: '' },
  text: { type: String, required: true },
  reactions: [{
    emoji: String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  }],
  unreadFor: [{ type: String }],
  deleted: { type: Boolean, default: false },
  deletedAt: { type: Date },
}, { timestamps: true });

messageSchema.index({ channel: 1, createdAt: -1 });
messageSchema.index({ conversationId: 1, createdAt: -1 });

export default mongoose.model('Message', messageSchema);
