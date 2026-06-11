import { chatWithGemini, generateProcedure, generateDiagnosis, generateDailyTip, generateQuote, generateNews, generateRoadmap, generateCareerInsight } from '../services/gemini.js';
import User from '../models/User.js';

const insightsCache = new Map();

function getCacheKey(year) {
  const today = new Date().toISOString().slice(0, 10);
  return `year${year}_${today}`;
}

export async function chat(req, res) {
  try {
    const { message, history } = req.body;
    const response = await chatWithGemini(message, history || []);
    res.json({ response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function procedure(req, res) {
  try {
    const { name } = req.body;
    const response = await generateProcedure(name);
    res.json({ response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function diagnosis(req, res) {
  try {
    const { symptoms } = req.body;
    const response = await generateDiagnosis(symptoms);
    res.json({ response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function dailyInsights(req, res) {
  try {
    const user = await User.findById(req.userId);
    const year = user?.year || '1';
    const cacheKey = getCacheKey(year);

    if (insightsCache.has(cacheKey)) {
      return res.json(insightsCache.get(cacheKey));
    }

    const [tip, quote, news] = await Promise.all([
      generateDailyTip(user?.role || 'Nursing Student', year),
      generateQuote(year),
      generateNews(),
    ]);

    const result = { tip, quote, news };
    insightsCache.set(cacheKey, result);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function careerRoadmap(req, res) {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (user.roadmapMilestones && user.roadmapMilestones.length > 0) {
      return res.json({ milestones: user.roadmapMilestones });
    }

    const milestones = await generateRoadmap(user.role, user.year, user.institution);
    user.roadmapMilestones = milestones;
    await user.save();
    res.json({ milestones });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function careerInsight(req, res) {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const insight = await generateCareerInsight(user.role, user.year, user.institution, user.stats);
    res.json({ insight });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
