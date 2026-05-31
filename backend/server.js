require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
  : ['http://localhost:5173', 'http://localhost:3000', 'https://bellmorewebdesign.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: { ok: false, error: 'Too many submissions. Please try again in 10 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'Bellmore Web Design backend', port: PORT });
});

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

async function sendTelegramMessage(text) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram is not configured: TELEGRAM_BOT_TOKEN and/or TELEGRAM_CHAT_ID is missing.');
    throw new Error('Telegram not configured');
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  console.log('Attempting to send Telegram message to chat ID:', chatId);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Telegram send failed with status', response.status, '-', errorBody);
    throw new Error(`Telegram API returned ${response.status}`);
  }

  console.log('Telegram message send succeeded.');
  return response.json();
}

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    console.log('/api/contact was hit');

    const body = req.body || {};
    const {
      name,
      email,
      message,
      phone,
      business,
      website,
      service,
      budget,
      timeline,
      company,
      honeypot,
      _gotcha,
    } = body;

    // Honeypot fields: if any are filled, silently succeed without sending Telegram.
    if (company || honeypot || _gotcha) {
      console.log('Honeypot field filled - skipping Telegram send and returning success.');
      return res.json({ ok: true, message: 'Thanks. Your message was sent.' });
    }

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'Name is required.' });
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'Email is required.' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'Message is required.' });
    }

    const telegramMessage = `🚨 <b>New Bellmore Web Design Lead</b>

<b>Name:</b> ${escapeHtml(name)}
<b>Email:</b> ${escapeHtml(email)}
<b>Phone:</b> ${escapeHtml(phone) || 'Not provided'}
<b>Business:</b> ${escapeHtml(business) || 'Not provided'}
<b>Website:</b> ${escapeHtml(website) || 'Not provided'}
<b>Service:</b> ${escapeHtml(service) || 'Not provided'}
<b>Budget:</b> ${escapeHtml(budget) || 'Not provided'}
<b>Timeline:</b> ${escapeHtml(timeline) || 'Not provided'}

<b>Message:</b>
${escapeHtml(message)}`;

    await sendTelegramMessage(telegramMessage);

    return res.json({ ok: true, message: 'Thanks. Your message was sent.' });
  } catch (error) {
    console.error('Error handling /api/contact:', error.message);
    return res.status(500).json({
      ok: false,
      error: 'Something went wrong while sending your message.',
    });
  }
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ ok: false, error: 'Something went wrong while sending your message.' });
});

app.listen(PORT, () => {
  console.log(`Bellmore Web Design backend started on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
