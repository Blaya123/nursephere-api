import Message from '../models/Message.js';

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
  { channel: 'general', userId: 'seed3', userName: 'Fatima Yusuf', userAvatar: '', text: 'Can anyone share tips for Pharmacology? The drug names are overwhelming 😅' },
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
    { id: 'general', name: 'General', icon: '💬', description: 'Welcome and general discussions' },
    { id: 'study-corner', name: 'Study Corner', icon: '📚', description: 'Share study resources and tips' },
    { id: 'clinical-discussions', name: 'Clinical Discussions', icon: '🏥', description: 'Case studies and clinical experiences' },
    { id: 'job-board', name: 'Job Board', icon: '💼', description: 'Job postings and opportunities' },
    { id: 'student-connect', name: 'Student Connect', icon: '👋', description: 'Connect with fellow students' },
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
