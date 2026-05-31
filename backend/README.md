# Bellmore Web Design Backend

Backend API server for handling contact form submissions from the Bellmore Web Design website. Notifications are sent to Telegram only — there is no email sending of any kind.

## Features

- Express.js REST API
- Contact form endpoint with validation
- Telegram Bot integration for instant notifications (no email)
- Rate limiting (5 submissions per 10 minutes per IP)
- Honeypot field for bot protection
- CORS protection
- Health check endpoint

## Requirements

- Node.js 18 or higher
- Telegram Bot token and Chat ID

## Local Development Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create your environment file:

```bash
cp .env.example .env
```

4. Edit the `.env` file with your credentials:

```bash
nano .env
```

Required environment variables:

```
PORT=4000
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,https://bellmorewebdesign.com
TELEGRAM_BOT_TOKEN=your-bot-token-here
TELEGRAM_CHAT_ID=your-chat-id-here
```

### Getting Telegram Credentials

1. **Create a Telegram Bot:**
   - Open Telegram and search for `@BotFather`
   - Send `/newbot` and follow the prompts
   - Copy the bot token provided

2. **Get Your Chat ID:**
   - Search for `@userinfobot` on Telegram
   - Send `/start`
   - Copy your chat ID
   - OR start a chat with your bot and visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

5. Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:4000`.

6. Test the health endpoint:

```bash
curl http://localhost:4000/health
```

Expected response:

```json
{"ok":true,"service":"Bellmore Web Design backend","port":4000}
```

7. Test the contact endpoint:

```bash
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"This is a test message from the contact form."}'
```

Expected response:

```json
{"ok":true,"message":"Thanks. Your message was sent."}
```

## Production Deployment (Home Server with PM2)

### Initial Setup

1. SSH into your home server and navigate to where you want to deploy:

```bash
cd /path/to/your/projects
git clone https://github.com/YOUR-USERNAME/BellmoreWebDesign.git
cd BellmoreWebDesign/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create production environment file:

```bash
cp .env.example .env
nano .env
```

Update with production values:

```
PORT=4000
ALLOWED_ORIGINS=https://bellmorewebdesign.com
TELEGRAM_BOT_TOKEN=your-bot-token-here
TELEGRAM_CHAT_ID=your-chat-id-here
```

4. Install PM2 globally (if not already installed):

```bash
npm install -g pm2
```

5. Start the backend with PM2:

```bash
pm2 start server.js --name bellmore-web-backend
```

6. Save the PM2 process list:

```bash
pm2 save
```

7. Set PM2 to start on system boot:

```bash
pm2 startup
```

Follow the command output instructions to complete the startup configuration.

### PM2 Management Commands

View logs:

```bash
pm2 logs bellmore-web-backend
```

Restart the backend:

```bash
pm2 restart bellmore-web-backend
```

Stop the backend:

```bash
pm2 stop bellmore-web-backend
```

Check status:

```bash
pm2 status
```

View detailed info:

```bash
pm2 show bellmore-web-backend
```

### Updating the Backend

1. Pull latest changes:

```bash
cd /path/to/BellmoreWebDesign/backend
git pull origin main
```

2. Install any new dependencies:

```bash
npm install
```

3. Restart PM2:

```bash
pm2 restart bellmore-web-backend
```

## Exposing Backend from Home Server

The backend runs on port 4000 by default. To make it accessible from the internet:

### Option 1: Cloudflare Tunnel (Recommended)

1. Install Cloudflare Tunnel (cloudflared) on your home server
2. Create a tunnel and point it to `http://localhost:4000`
3. You'll get a public URL like `https://backend.yourdomain.com`
4. Update your frontend `VITE_API_BASE_URL` to this URL
5. Add this URL to `ALLOWED_ORIGINS` in backend `.env`
6. Restart PM2: `pm2 restart bellmore-web-backend`

### Option 2: Port Forwarding + Dynamic DNS

1. Forward port 4000 on your router to your server's local IP
2. Set up Dynamic DNS (No-IP, DuckDNS, etc.)
3. Use your Dynamic DNS hostname in the frontend
4. Consider adding HTTPS with Let's Encrypt

### Option 3: Reverse Proxy (Nginx)

If you're running other services, use Nginx as a reverse proxy:

```nginx
server {
    listen 80;
    server_name backend.yourdomain.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Frontend Configuration

The frontend contact form submits to the relative path `/api/contact`, which is proxied by Nginx to `http://localhost:4000/api/contact`. No environment variables are needed for the API URL.

## API Endpoints

### GET /health

Health check endpoint.

**Response:**

```json
{
  "ok": true,
  "service": "Bellmore Web Design backend",
  "port": 4000
}
```

### POST /api/contact

Submit a contact form.

**Required fields:**

- `name` (string): Contact person's name
- `email` (string): Valid email address
- `message` (string): Message

**Optional fields:**

- `phone` (string)
- `business` (string)
- `website` (string)
- `service` (string)
- `budget` (string)
- `timeline` (string)

**Honeypot fields (leave empty):**

- `company`, `honeypot`, or `_gotcha`. If any is filled, the request returns success without sending a Telegram message.

**Request example:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "516 555 0123",
  "business": "John's Plumbing",
  "website": "https://example.com",
  "message": "I need a new website for my plumbing business."
}
```

**Success response (200):**

```json
{
  "ok": true,
  "message": "Thanks. Your message was sent."
}
```

**Error responses:**

All errors return JSON with `ok: false` and an `error` message:

```json
{
  "ok": false,
  "error": "Error message here"
}
```

- 400: Validation error
- 429: Rate limit exceeded
- 500: Server error (Telegram API failure or configuration issue)

## Security Features

- **Rate limiting**: 5 submissions per 10 minutes per IP address
- **Honeypot fields**: `company`, `honeypot`, and `_gotcha` fields block bots
- **Input validation**: All fields are validated
- **CORS protection**: Only allowed origins can call the API
- **Environment variables**: Sensitive data stored in `.env`

## Telegram Setup Guide

### Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Choose a name for your bot (e.g., "Bellmore Web Design Contact")
4. Choose a username for your bot (must end in 'bot', e.g., "bellmore_contact_bot")
5. Copy the bot token provided (looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)
6. Save this as `TELEGRAM_BOT_TOKEN` in your `.env` file

### Step 2: Get Your Chat ID

1. Search for `@userinfobot` on Telegram
2. Send `/start` command
3. The bot will reply with your user info, including your Chat ID
4. Copy the Chat ID number
5. Save this as `TELEGRAM_CHAT_ID` in your `.env` file

### Step 3: Start Your Bot

1. Search for your bot by username on Telegram
2. Send `/start` to activate the bot
3. Your bot is now ready to send you messages!

## Troubleshooting

### Backend won't start

- Check that all required environment variables are set in `.env`
- Make sure port 4000 is not already in use: `lsof -i :4000` (macOS/Linux) or `netstat -ano | findstr :4000` (Windows)
- Check Node.js version: `node --version` (should be 18+)

### Telegram messages not sending

- Verify `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in `.env`
- Make sure you've sent `/start` to your bot on Telegram
- Test the bot token with: `curl https://api.telegram.org/bot<YOUR_TOKEN>/getMe`
- Check server logs: `pm2 logs bellmore-backend`

### CORS errors

- Add your frontend URL to `ALLOWED_ORIGINS` in `.env`
- Restart the backend: `pm2 restart bellmore-backend`
- Make sure the origin includes the protocol (http:// or https://)

### Rate limit errors

- Wait 10 minutes and try again
- If testing, temporarily increase the limit in `server.js`

## Contact

For questions or support:
- Phone: 516 725 2774
- Website: BellmoreWebDesign.com (https://bellmorewebdesign.com)
