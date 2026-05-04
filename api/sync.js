const { Redis } = require('@upstash/redis');

const redis = new Redis({
  url: process.env.timer_KV_REST_API_URL,
  token: process.env.timer_KV_REST_API_TOKEN,
});

module.exports = async function handler(req, res) {
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
