import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ['general', 'exam', 'event', 'update', 'announcement'], default: 'general' },
  targetRole: { type: String, enum: ['BNSc Student', 'Diploma Nursing Student', 'Midwifery Student', 'Community Nursing Student', 'Post-Basic Student', 'RN', 'Midwife', 'Nursing Student', 'Other', 'all'], default: 'all' },
  link: { type: String, default: '' },
  readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Notification', notificationSchema);
