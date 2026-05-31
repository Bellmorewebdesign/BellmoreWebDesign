require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:5173', 'http://localhost:3000', 'https://bellmorewebdesign.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: { error: 'Too many submissions. Please try again in 10 minutes.' },
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

async function sendTelegramMessage(text) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram credentials missing. TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required.');
    throw new Error('Telegram not configured');
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  console.log('Sending Telegram message to chat ID:', chatId);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error('Telegram API error:', response.status, errorData);
    throw new Error(`Telegram API returned ${response.status}`);
  }

  const data = await response.json();
  console.log('Telegram message sent successfully');
  return data;
}

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, businessName, contact, currentLink, message, companyWebsite } = req.body;

    console.log('Received contact form submission:', { name, businessName, contact: contact?.substring(0, 10) + '...' });

    // Honeypot field check
    if (companyWebsite) {
      console.log('Honeypot field triggered - potential bot');
      return res.json({ ok: true, message: 'Thank you for your submission!' });
    }

    // Validate required fields
    if (!name || !businessName || !contact || !message) {
      console.log('Validation failed: missing required fields');
      return res.status(400).json({ 
        ok: false,
        error: 'Missing required fields: name, businessName, contact, and message are required.' 
      });
    }

    if (typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'Name is required and must be a valid string.' });
    }

    if (typeof businessName !== 'string' || businessName.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'Business name is required and must be a valid string.' });
    }

    if (typeof contact !== 'string' || contact.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'Contact information is required and must be a valid string.' });
    }

    if (typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ ok: false, error: 'Message must be at least 10 characters long.' });
    }

    if (message.trim().length > 2000) {
      return res.status(400).json({ ok: false, error: 'Message cannot exceed 2000 characters.' });
    }

    // Format Telegram message
    const telegramMessage = `🚨 <b>New Bellmore Web Design Lead</b>

<b>Name:</b> ${escapeHtml(name.trim())}
<b>Business:</b> ${escapeHtml(businessName.trim())}
<b>Contact:</b> ${escapeHtml(contact.trim())}
<b>Current Website:</b> ${currentLink ? escapeHtml(currentLink.trim()) : 'Not provided'}

<b>Message:</b>
${escapeHtml(message.trim())}

<i>Submitted at: ${new Date().toLocaleString()}</i>`;

    // Send Telegram message
    await sendTelegramMessage(telegramMessage);

    console.log('Contact form processed successfully');
    res.json({ 
      ok: true, 
      message: 'Thanks. Your message was sent.' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error.message);
    
    if (error.message === 'Telegram not configured') {
      return res.status(500).json({ 
        ok: false,
        error: 'Contact form is not configured. Please email us directly at bellmorewebdesign@gmail.com.' 
      });
    }

    res.status(500).json({ 
      ok: false,
      error: 'Something went wrong while sending your message.' 
    });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

app.listen(PORT, () => {
  console.log(`Bellmore Web Design backend listening on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
});
