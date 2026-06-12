import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'BNSc Student', 'Diploma Nursing Student', 'Midwifery Student', 'Community Nursing Student', 'Post-Basic Student', 'RN', 'Midwife', 'Nursing Student', 'Other'], default: 'BNSc Student' },
  year: { type: String, default: '1' },
  institution: { type: String, default: '' },
  avatar: { type: String, default: '' },
  stats: {
    minutesStudied: { type: Number, default: 0 },
    questionsAnswered: { type: Number, default: 0 },
    connectionsCount: { type: Number, default: 0 },
  },
  achievements: [{ type: String }],
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  darkMode: { type: Boolean, default: false },
  lastLogin: { type: Date },
  loginCount: { type: Number, default: 0 },
  loginHistory: [{ date: Date, ip: String, device: String }],
  roadmapMilestones: [{
    title: String,
    description: String,
    status: { type: String, enum: ['completed', 'in-progress', 'upcoming'], default: 'upcoming' },
  }],
  isVerified: { type: Boolean, default: false },
  otp: {
    code: { type: String },
    expiresAt: { type: Date },
  },
  resetToken: {
    token: { type: String },
    expiresAt: { type: Date },
  },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();
  if (this.password.startsWith('$2')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);
