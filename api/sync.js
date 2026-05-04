const { Redis } = require('@upstash/redis');

const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

module.exports = async function handler(req, res) {
  if (!url || !token) {
    const available = Object.keys(process.env)
      .filter(k => k.includes('REDIS') || k.includes('KV') || k.includes('UPSTASH'))
      .join(', ');
    console.error('Missing Redis credentials. Available env keys:', available || '(none)');
    return res.status(500).json({ error: 'storage not configured', available });
  }

  const redis = new Redis({ url, token });

  const { key } = req.query;
  if (!key || typeof key !== 'string' || key.length < 2 || key.length > 100) {
    return res.status(400).json({ error: 'invalid key' });
  }

  const kvKey = `timer:${key}`;

  if (req.method === 'GET') {
    const data = await redis.get(kvKey);
    return res.status(200).json(data || { flows: [] });
  }

  if (req.method === 'POST') {
    const { flows } = req.body;
    if (!Array.isArray(flows)) return res.status(400).json({ error: 'invalid body' });
    await redis.set(kvKey, { flows });
    return res.status(200).json({ ok: true });
  }

  res.status(405).end();
};
