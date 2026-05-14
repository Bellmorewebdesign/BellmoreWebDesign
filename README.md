# Bellmore Web Design

A modern, mobile-friendly website for Bellmore Web Design, showcasing web design services for local businesses.

## Tech Stack

- **Next.js 16** with App Router and Static Export
- **TypeScript**
- **Tailwind CSS 4**
- **Express.js Backend** for contact form
- Fully responsive mobile-first design
- Warm, local business color palette

## Features

- Clean, professional homepage with warm, friendly design
- Contact form powered by self-hosted Express backend
- Four fully-designed sample concept websites:
  - **South Shore Shine** - Pressure washing (water-inspired theme)
  - **Main Street Chicken Co.** - Restaurant (bold, food-focused theme)
  - **Harbor Paws Pet Care** - Pet care (calm, trustworthy theme)
  - **Ever After Events** - Event planning (soft, elegant theme)
- SEO optimized with proper metadata
- Smooth scrolling navigation
- Mobile-friendly header with hamburger menu
- Warm color palette (cream, sage green, soft blue, warm tan)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Frontend Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

3. Add your backend URL to `.env`:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

For production, use your public backend URL:

```
NEXT_PUBLIC_API_BASE_URL=https://your-backend-domain.com
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

See the [backend README](backend/README.md) for complete backend setup instructions.

## Contact Form

The contact form submits to a self-hosted Express backend. The backend:

- Validates all required fields
- Implements rate limiting (5 submissions per 10 minutes per IP)
- Includes honeypot field to block bots
- Sends email notifications using Nodemailer

See [backend/README.md](backend/README.md) for backend setup instructions.

## Sample Concept Sites

The site includes four sample concept pages to demonstrate what real client sites could look like:

1. **South Shore Shine** (`/sample-sites/exterior-cleaning`)
   - Pressure washing and exterior cleaning
   - Water-inspired blue theme
   - Services, before/after, reviews, service areas

2. **Main Street Chicken Co.** (`/sample-sites/restaurant`)
   - Restaurant and food business
   - Bold red, cream, and golden yellow theme
   - Menu, hours, catering, reviews

3. **Harbor Paws Pet Care** (`/sample-sites/pet-care`)
   - Dog boarding, walks, and pet care
   - Calm sage green and cream theme
   - Services, meet & greet, reviews, towns served

4. **Ever After Events** (`/sample-sites/events`)
   - Event planning and party setups
   - Soft pink, cream, and lavender theme
   - Event types, packages, gallery, process

Each sample site:
- Is clearly labeled as a sample concept
- Links back to the main Bellmore Web Design site
- Is fully mobile-responsive
- Uses realistic business copy (no lorem ipsum)

## GitHub Pages Deployment

This site is configured for **static export** to deploy to GitHub Pages from the `/docs` folder.

### Deployment Steps

1. Build the static site:

```bash
npm install
npm run build
```

This creates the static files in the `/docs` folder.

2. Run the deploy script:

```bash
npm run deploy:branch
```

This builds the site, adds a `.nojekyll` file to `/docs`, and displays next steps.

3. Commit and push to GitHub:

```bash
git add .
git commit -m "Deploy Bellmore Web Design site"
git push origin main
```

4. Configure GitHub Pages:

Go to your repository on GitHub:
- Click **Settings** > **Pages**
- Under **Source**, select **Deploy from a branch**
- Under **Branch**, select **main** and **/docs**
- Click **Save**

Your site will be live at `https://[username].github.io/[repo-name]/` in a few minutes.

### Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file to the `/docs` folder with your domain:

```bash
echo "bellmorewebdesign.com" > docs/CNAME
```

2. Update DNS settings at your domain registrar:
   - Add an A record pointing to GitHub Pages IPs
   - Or add a CNAME record pointing to `[username].github.io`

3. In GitHub Settings > Pages, add your custom domain

4. Commit and push the CNAME file

### Important Notes

- The static site is served from `/docs`, not from the repo root
- The `/docs/.nojekyll` file tells GitHub Pages not to use Jekyll
- The contact form requires the backend to be running separately
- Update `NEXT_PUBLIC_API_BASE_URL` to point to your live backend URL

## Backend Deployment

The backend runs separately from the static frontend. See [backend/README.md](backend/README.md) for:

- Local development setup
- Production deployment with PM2
- Exposing backend from home server
- SMTP configuration
- Environment variables

## Security Notes

- **Never commit `.env` files to version control**
- Backend includes rate limiting to prevent abuse
- Honeypot field helps block bot submissions
- CORS restricts which domains can call the backend

## Project Structure

```
bellmore-web-design/
├── app/
│   ├── sample-sites/
│   │   ├── exterior-cleaning/
│   │   │   └── page.tsx          # South Shore Shine
│   │   ├── restaurant/
│   │   │   └── page.tsx          # Main Street Chicken Co.
│   │   ├── pet-care/
│   │   │   └── page.tsx          # Harbor Paws Pet Care
│   │   └── events/
│   │       └── page.tsx          # Ever After Events
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Homepage
├── backend/
│   ├── server.js                 # Express backend
│   ├── package.json
│   ├── .env.example
│   └── README.md
├── components/
│   ├── ContactSection.tsx        # Contact form
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   └── [other components...]
├── docs/                         # Built static site (created by npm run build)
│   ├── index.html
│   ├── .nojekyll
│   └── [other static files...]
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
└── README.md
```

## Contact

For questions or support:
- Email: bellmorewebdesign@gmail.com
