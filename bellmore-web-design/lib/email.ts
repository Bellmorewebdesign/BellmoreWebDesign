import nodemailer from 'nodemailer';
import type { ContactFormData } from './validation';

interface EmailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
}

function getEmailConfig(): EmailConfig | null {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !port || !user || !pass || !from || !to) {
    return null;
  }

  return {
    host,
    port: parseInt(port, 10),
    user,
    pass,
    from,
    to
  };
}

export async function sendContactEmail(
  data: ContactFormData,
  metadata?: { ip?: string; userAgent?: string }
): Promise<{ success: boolean; message: string }> {
  const config = getEmailConfig();

  // If no config in development, just log
  if (!config && process.env.NODE_ENV === 'development') {
    console.log('=== NEW LEAD (Development Mode) ===');
    console.log('Name:', data.name);
    console.log('Business:', data.businessName);
    console.log('Contact:', data.contact);
    console.log('Current Link:', data.currentLink || 'Not provided');
    console.log('Message:', data.message);
    console.log('IP:', metadata?.ip || 'Unknown');
    console.log('User Agent:', metadata?.userAgent || 'Unknown');
    console.log('Date:', new Date().toISOString());
    console.log('===================================');
    return { success: true, message: 'Message logged (development mode)' };
  }

  // If no config in production, error
  if (!config) {
    return { success: false, message: 'Email service is not configured' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.port === 465,
      auth: {
        user: config.user,
        pass: config.pass
      }
    });

    const emailBody = `
New Lead from Bellmore Web Design

Name: ${data.name}
Business Name: ${data.businessName}
Phone/Email: ${data.contact}
Current Link: ${data.currentLink || 'Not provided'}

Message:
${data.message}

---
Date: ${new Date().toISOString()}
IP: ${metadata?.ip || 'Unknown'}
User Agent: ${metadata?.userAgent || 'Unknown'}
    `.trim();

    await transporter.sendMail({
      from: config.from,
      to: config.to,
      subject: `New Bellmore Web Design Lead: ${data.businessName}`,
      text: emailBody
    });

    return { success: true, message: 'Message sent successfully' };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, message: 'Failed to send message' };
  }
}
