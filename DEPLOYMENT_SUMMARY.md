# Bellmore Web Design - Deployment Summary

## What Was Fixed

### 1. GitHub Pages Deployment Configuration

**Problem:** GitHub Pages was showing README.md instead of the website.

**Solution:**
- Configured Next.js to output the built static site to `/docs` folder
- Updated `next.config.ts`:
  - `distDir: "docs"` - outputs build to /docs instead of /out
  - Removed basePath and assetPrefix for custom domain support
- Added `/docs/.nojekyll` file to prevent Jekyll processing
- Created `npm run deploy:branch` script

### 2. Backend API Server

**Created:** Complete Express.js backend for contact form

**Location:** `backend/` folder

**Features:**
- POST `/api/contact` endpoint
- GET `/health` endpoint
- Rate limiting (5 submissions per 10 minutes)
- Honeypot field for bot protection
- Input validation
- Nodemailer email sending
- CORS protection

**Files:**
- `backend/server.js` - Express server
- `backend/package.json` - Dependencies
- `backend/.env.example` - Environment variables template
- `backend/README.md` - Complete setup instructions

### 3. Frontend Contact Form

**Updated:** `components/ContactSection.tsx`

**Changes:**
- Now submits to backend API instead of mailto
- Shows loading state during submission
- Displays success/error messages
- Clears form after successful submission
- Includes hidden honeypot field
- Handles API errors gracefully

**Environment Variable:**
- `NEXT_PUBLIC_API_BASE_URL` - Points to your backend server

### 4. Sample Sites

**Created/Improved 4 Sample Sites:**

1. **South Shore Shine** (`/sample-sites/exterior-cleaning`)
   - Pressure washing and exterior cleaning
   - Water-inspired blue, aqua, white theme
   - Services, before/after gallery, reviews

2. **Main Street Chicken Co.** (`/sample-sites/restaurant`)
   - Local chicken restaurant
   - Bold red, cream, golden yellow theme
   - Menu, popular items, catering, hours

3. **Harbor Paws Pet Care** (`/sample-sites/pet-care`)
   - Dog boarding and pet care
   - Calm sage green, cream, soft brown theme
   - Services, meet & greet, availability, reviews

4. **Ever After Events** (`/sample-sites/events`)
   - Event planning and party setups
   - Soft pink, cream, gold, lavender theme
   - Event types, packages, gallery, process

### 5. Design Improvements

**Color Palette** (already implemented in your original design):
- Warm off-white background: #FAF7F0
- Soft cream cards: #FFFDF7
- Deep navy text: #1E2A38
- Muted blue accent: #6FA8DC
- Soft sage accent: #A8C3A0
- Warm tan accent: #D8BFA3

**Copy:**
- Homepage headline: "Simple Websites for Local Businesses That Need More Than a Facebook Page"
- Warmer, friendlier tone throughout
- Mobile-first design maintained

### 6. Documentation

**Updated:** `README.md` with correct deployment instructions
**Created:** `backend/README.md` with complete backend setup
**Created:** This summary document

---

## Quick Start Commands

### Frontend Development

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add backend URL to .env
# NEXT_PUBLIC_API_BASE_URL=http://localhost:4000

# Run development server
npm run dev
```

### Backend Development

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your SMTP credentials
# (see backend/README.md for details)

# Run backend
npm run dev
```

### Build and Deploy Frontend

```bash
# Build the static site
npm run build

# Or use the deploy script
npm run deploy:branch

# Commit and push
git add .
git commit -m "Deploy Bellmore Web Design site"
git push origin main
```

---

## GitHub Pages Setup

### Required Steps:

1. Make sure your changes are committed and pushed to GitHub:
   ```bash
   git add .
   git commit -m "Deploy Bellmore Web Design site"
   git push origin main
   ```

2. Go to your repository on GitHub

3. Click **Settings** > **Pages**

4. Under **Source**, select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/docs**

5. Click **Save**

6. Your site will be live at:
   - `https://[username].github.io/[repo-name]/`

### Custom Domain (Optional)

If using a custom domain like `bellmorewebdesign.com`:

1. Add a CNAME file:
   ```bash
   echo "bellmorewebdesign.com" > docs/CNAME
   git add docs/CNAME
   git commit -m "Add CNAME for custom domain"
   git push
   ```

2. Update your DNS settings:
   - Add an A record or CNAME record pointing to GitHub Pages
   - See GitHub docs for exact DNS settings

3. In GitHub Settings > Pages, add your custom domain

---

## Backend Deployment (Home Server)

### Quick Setup:

```bash
# SSH into your home server
ssh user@your-server

# Clone the repo (or pull latest changes)
cd /path/to/projects
git clone https://github.com/YOUR-USERNAME/BellmoreWebDesign.git
cd BellmoreWebDesign/backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env
nano .env
# (Add your SMTP credentials and allowed origins)

# Install PM2 globally
npm install -g pm2

# Start the backend
pm2 start server.js --name bellmore-web-backend

# Save PM2 configuration
pm2 save

# Set PM2 to start on boot
pm2 startup
# (Follow the command output)
```

### Expose Backend to Internet:

**Option 1: Cloudflare Tunnel (Recommended)**
- Install cloudflared on your server
- Create tunnel pointing to `http://localhost:4000`
- You'll get a public URL like `https://backend.yourdomain.com`

**Option 2: Port Forwarding + Dynamic DNS**
- Forward port 4000 on your router
- Use a Dynamic DNS service (DuckDNS, No-IP, etc.)

**Option 3: Reverse Proxy (Nginx)**
- Set up Nginx to proxy requests to port 4000
- Add SSL with Let's Encrypt

### Update Frontend to Use Production Backend:

1. Update `.env`:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://your-backend-domain.com
   ```

2. Rebuild and redeploy:
   ```bash
   npm run deploy:branch
   git add .
   git commit -m "Update backend URL"
   git push origin main
   ```

---

## Verification Checklist

### Frontend Deployment:
- [ ] `/docs/index.html` exists
- [ ] `/docs/.nojekyll` exists
- [ ] `/docs/sample-sites/` contains all 4 sample sites
- [ ] GitHub Pages is set to deploy from main branch /docs
- [ ] Site is accessible at GitHub Pages URL
- [ ] All sample sites load correctly
- [ ] Mobile navigation works

### Backend:
- [ ] Backend runs locally: `cd backend && npm run dev`
- [ ] Health endpoint works: `curl http://localhost:4000/health`
- [ ] Contact endpoint accepts POST requests
- [ ] SMTP credentials are configured in `.env`
- [ ] Allowed origins include your frontend domain
- [ ] Backend is running on production server with PM2

### Integration:
- [ ] Frontend `.env` has correct `NEXT_PUBLIC_API_BASE_URL`
- [ ] Contact form submits successfully
- [ ] Email notifications are received
- [ ] Error messages display correctly
- [ ] Success messages display correctly

---

## File Structure

```
BellmoreWebDesign/
├── app/
│   ├── sample-sites/
│   │   ├── exterior-cleaning/page.tsx  # South Shore Shine
│   │   ├── restaurant/page.tsx         # Main Street Chicken Co.
│   │   ├── pet-care/page.tsx           # Harbor Paws Pet Care
│   │   └── events/page.tsx             # Ever After Events
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                        # Homepage
├── backend/
│   ├── server.js                       # Express backend
│   ├── package.json
│   ├── .env.example
│   └── README.md
├── components/
│   ├── ContactSection.tsx              # Updated for API
│   ├── SampleSitesSection.tsx          # Shows all 4 samples
│   └── [other components...]
├── docs/                               # Built static site (created by npm run build)
│   ├── index.html
│   ├── .nojekyll
│   ├── sample-sites/
│   └── [other files...]
├── .env.example
├── .gitignore
├── next.config.ts                      # Outputs to /docs
├── package.json                        # Has deploy:branch script
├── README.md                           # Updated instructions
└── DEPLOYMENT_SUMMARY.md               # This file
```

---

## Scripts Reference

### Frontend Scripts:

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build static site to /docs
npm run deploy:branch # Build + create .nojekyll + show instructions
```

### Backend Scripts:

```bash
npm run dev          # Start backend (localhost:4000)
npm run start        # Same as dev
```

### PM2 Commands (Production):

```bash
pm2 start server.js --name bellmore-web-backend  # Start
pm2 restart bellmore-web-backend                 # Restart
pm2 stop bellmore-web-backend                    # Stop
pm2 logs bellmore-web-backend                    # View logs
pm2 status                                        # Check status
```

---

## Common Issues

### "README.md showing instead of website"
- Make sure GitHub Pages is set to deploy from `/docs`, not root
- Verify `/docs/index.html` exists
- Check that build completed successfully

### "Contact form not working"
- Check that `NEXT_PUBLIC_API_BASE_URL` is set correctly
- Verify backend is running and accessible
- Check browser console for errors
- Verify CORS allowed origins includes your frontend domain

### "Build fails"
- Run `npm install` to ensure dependencies are installed
- Check for syntax errors in new files
- Read error messages carefully

### "Backend won't start"
- Check that all required env vars are set in `.env`
- Make sure port 4000 is not in use
- Verify Node.js version is 18+

### "Emails not sending"
- Verify SMTP credentials in backend `.env`
- If using Gmail, use an app password, not regular password
- Check PM2 logs: `pm2 logs bellmore-web-backend`

---

## Next Steps

1. **Test Locally:**
   - Start backend: `cd backend && npm run dev`
   - Start frontend: `npm run dev`
   - Test contact form submission

2. **Deploy Frontend:**
   - Run `npm run deploy:branch`
   - Commit and push to GitHub
   - Configure GitHub Pages

3. **Deploy Backend:**
   - Set up backend on home server
   - Configure Cloudflare Tunnel or other exposure method
   - Update frontend `.env` with production backend URL
   - Rebuild and redeploy frontend

4. **Verify:**
   - Check that site loads at GitHub Pages URL
   - Test all sample sites
   - Submit test contact form
   - Verify email received

---

## Support

See detailed instructions in:
- `README.md` - Frontend setup and deployment
- `backend/README.md` - Backend setup and production deployment

For questions: bellmorewebdesign@gmail.com
