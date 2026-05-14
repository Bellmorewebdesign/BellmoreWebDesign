# Bellmore Web Design Backend

Backend API server for handling contact form submissions from the Bellmore Web Design website.

## Features

- Express.js REST API
- Contact form endpoint with validation
- Nodemailer for email notifications
- Rate limiting (5 submissions per 10 minutes per IP)
- Honeypot field for bot protection
- CORS protection
- Health check endpoint

## Requirements

- Node.js 18 or higher
- SMTP credentials (Gmail, SendGrid, or any SMTP service)

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
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=bellmorewebdesign@gmail.com
CONTACT_FROM_EMAIL=website@bellmorewebdesign.com
```

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
{"ok":true,"service":"bellmore-web-design-backend"}
```

7. Test the contact endpoint:

```bash
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","businessName":"Test Business","contact":"test@example.com","currentLink":"https://example.com","message":"This is a test message from the contact form.","companyWebsite":""}'
```

Expected response:

```json
{"success":true,"message":"Thank you for reaching out! We will get back to you within 24 hours."}
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
ALLOWED_ORIGINS=https://YOUR-GITHUB-PAGES-URL.github.io,https://bellmorewebdesign.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=bellmorewebdesign@gmail.com
CONTACT_FROM_EMAIL=website@bellmorewebdesign.com
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

Update your frontend `.env` file to point to the backend:

```
VITE_API_BASE_URL=https://your-backend-domain.com
```

Or for local development:

```
VITE_API_BASE_URL=http://localhost:4000
```

The contact form will submit to `${VITE_API_BASE_URL}/api/contact`.

## API Endpoints

### GET /health

Health check endpoint.

**Response:**

```json
{
  "ok": true,
  "service": "bellmore-web-design-backend"
}
```

### POST /api/contact

Submit a contact form.

**Required fields:**

- `name` (string): Contact person's name
- `businessName` (string): Business name
- `contact` (string): Email or phone number
- `message` (string): Message (10-2000 characters)

**Optional fields:**

- `currentLink` (string): Current website URL
- `companyWebsite` (string): Honeypot field (should be empty)

**Request example:**

```json
{
  "name": "John Doe",
  "businessName": "John's Plumbing",
  "contact": "john@example.com",
  "currentLink": "https://example.com",
  "message": "I need a new website for my plumbing business.",
  "companyWebsite": ""
}
```

**Success response (200):**

```json
{
  "success": true,
  "message": "Thank you for reaching out! We will get back to you within 24 hours."
}
```

**Error responses:**

- 400: Validation error
- 429: Rate limit exceeded
- 500: Server error

## Security Features

- **Rate limiting**: 5 submissions per 10 minutes per IP address
- **Honeypot field**: `companyWebsite` field blocks bots
- **Input validation**: All fields are validated
- **CORS protection**: Only allowed origins can call the API
- **Environment variables**: Sensitive data stored in `.env`

## Gmail SMTP Setup

If using Gmail:

1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an App Password:
   - Go to Security > 2-Step Verification > App passwords
   - Create a new app password for "Mail"
4. Use this app password in your `.env` file as `SMTP_PASS`

**Note:** Regular Gmail passwords won't work; you must use an app password.

## Troubleshooting

### Backend won't start

- Check that all required environment variables are set in `.env`
- Make sure port 4000 is not already in use: `lsof -i :4000` (macOS/Linux) or `netstat -ano | findstr :4000` (Windows)
- Check Node.js version: `node --version` (should be 18+)

### Emails not sending

- Verify SMTP credentials in `.env`
- Check SMTP host and port
- If using Gmail, make sure you're using an app password, not your regular password
- Check server logs: `pm2 logs bellmore-web-backend`

### CORS errors

- Add your frontend URL to `ALLOWED_ORIGINS` in `.env`
- Restart the backend: `pm2 restart bellmore-web-backend`
- Make sure the origin includes the protocol (http:// or https://)

### Rate limit errors

- Wait 10 minutes and try again
- If testing, temporarily increase the limit in `server.js`

## Contact

For questions or support:
- Email: bellmorewebdesign@gmail.com
- Website: https://bellmorewebdesign.com
