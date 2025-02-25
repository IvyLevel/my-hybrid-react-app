// api/converse.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { message } = req.body;
      res.status(200).json({
        response: `I hear you saying: "${message}". Could you share more details?`
      });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  