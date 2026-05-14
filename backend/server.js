require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:5173', 'http://localhost:3000'];

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
  res.json({ ok: true, service: 'bellmore-web-design-backend' });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, businessName, contact, currentLink, message, companyWebsite } = req.body;

    if (companyWebsite) {
      return res.json({ success: true, message: 'Thank you for your submission!' });
    }

    if (!name || !businessName || !contact || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, businessName, contact, and message are required.' 
      });
    }

    if (typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Name is required and must be a valid string.' });
    }

    if (typeof businessName !== 'string' || businessName.trim().length === 0) {
      return res.status(400).json({ error: 'Business name is required and must be a valid string.' });
    }

    if (typeof contact !== 'string' || contact.trim().length === 0) {
      return res.status(400).json({ error: 'Contact information is required and must be a valid string.' });
    }

    if (typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters long.' });
    }

    if (message.trim().length > 2000) {
      return res.status(400).json({ error: 'Message cannot exceed 2000 characters.' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailContent = `
New Contact Form Submission from Bellmore Web Design

Name: ${name.trim()}
Business Name: ${businessName.trim()}
Contact: ${contact.trim()}
Current Website: ${currentLink ? currentLink.trim() : 'Not provided'}

Message:
${message.trim()}

---
Submitted at: ${new Date().toLocaleString()}
    `;

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL || 'bellmorewebdesign@gmail.com',
      subject: `New Lead: ${businessName.trim()}`,
      text: emailContent,
    });

    res.json({ 
      success: true, 
      message: 'Thank you for reaching out! We will get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Failed to send your message. Please try again or email us directly at bellmorewebdesign@gmail.com.' 
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
