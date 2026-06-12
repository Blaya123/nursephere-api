import Notification from '../models/Notification.js';
import { fetchNursingNews } from '../services/newsService.js';

export async function getNews(req, res) {
  try {
    const articles = await fetchNursingNews();
    res.json({ articles, count: articles.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function broadcastDailyNews(req, res) {
  try {
    const apiKey = req.query.key || req.headers['x-cron-key'];
    if (apiKey !== process.env.CRON_SECRET) {
      return res.status(401).json({ error: 'Invalid cron key' });
    }

    const articles = await fetchNursingNews();
    const headlines = articles.slice(0, 5);

    if (headlines.length === 0) {
      return res.json({ success: true, message: 'No news to broadcast' });
    }

    const message = headlines.map((a, i) => `${i + 1}. ${a.title}`).join('\n');

    await Notification.create({
      title: 'Nigerian Nursing News',
      message,
      type: 'general',
      targetRole: 'all',
    });

    const io = req.app.get('io');
    if (io) {
      io.emit('notification:new', { title: 'Nigerian Nursing News', message });
    }

    res.json({ success: true, articles: headlines.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
