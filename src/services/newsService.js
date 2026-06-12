const RSS_FEEDS = [
  'https://punchng.com/tag/nursing/feed/',
  'https://guardian.ng/tag/nursing/feed/',
  'https://dailytrust.com/tag/nursing/feed/',
];

const CACHE_TTL = 60 * 60 * 1000;
let cache = { articles: [], fetchedAt: null };

function parseRSSItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const content = match[1];
    const title = (content.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || content.match(/<title>(.*?)<\/title>/))?.[1] || '';
    const link = content.match(/<link>(.*?)<\/link>/)?.[1] || '';
    const pubDate = content.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
    const description = (content.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || content.match(/<description>(.*?)<\/description>/))?.[1] || '';
    const source = content.match(/<source[^>]*>(.*?)<\/source>/)?.[1] || '';
    if (title && link) {
      items.push({
        title: title.replace(/<[^>]*>/g, '').trim(),
        link,
        description: description.replace(/<[^>]*>/g, '').trim().substring(0, 300),
        pubDate,
        source: source || new URL(link).hostname?.replace('www.', '') || '',
        publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
      });
    }
  }
  return items;
}

async function fetchFeed(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseRSSItems(xml);
  } catch {
    return [];
  }
}

export async function fetchNursingNews() {
  if (cache.fetchedAt && Date.now() - cache.fetchedAt < CACHE_TTL) {
    return cache.articles;
  }

  const results = await Promise.allSettled(RSS_FEEDS.map(fetchFeed));
  const articles = results
    .filter(r => r.status === 'fulfilled')
    .flatMap(r => r.value)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 30);

  const seen = new Set();
  const unique = [];
  for (const a of articles) {
    const key = a.title.toLowerCase().slice(0, 60);
    if (!seen.has(key)) { seen.add(key); unique.push(a); }
  }

  cache = { articles: unique, fetchedAt: Date.now() };
  return unique;
}

export function getCachedNews() {
  return cache.articles;
}
