# Bellmore Web Design

A modern, mobile-friendly website for Bellmore Web Design, showcasing web design services for local businesses. Configured for **static export** and **GitHub Pages deployment**.

## Tech Stack

- **Next.js 16** with App Router and Static Export
- **TypeScript**
- **Tailwind CSS 4**
- Fully responsive mobile-first design
- Warm, local business color palette

## Features

- Clean, professional homepage with warm, friendly design
- Contact form using `mailto:` (GitHub Pages compatible)
- Three fully-redesigned sample concept websites:
  - **South Shore Shine** - Pressure washing (water-inspired theme)
  - **Main Street Chicken Co.** - Restaurant (bold, food-focused theme)
  - **Harbor Paws Pet Care** - Pet care (calm, trustworthy theme)
- SEO optimized with proper metadata
- Sitemap and robots.txt
- Smooth scrolling navigation
- Mobile-friendly header with hamburger menu
- Warm color palette (cream, sage green, soft blue, warm tan)
- GitHub Actions workflow for automatic deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository or download the project files

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Fill in your SMTP credentials in `.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=bellmorewebdesign@gmail.com
CONTACT_FROM_EMAIL=website@bellmorewebdesign.com
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Contact Form Backend

The contact form uses a server-side API route at `/api/contact` that:

- Validates all required fields
- Implements rate limiting (5 submissions per 10 minutes per IP)
- Includes honeypot field to block bots
- Sends email notifications using Nodemailer
- Falls back to console logging in development mode if SMTP is not configured

### SMTP Configuration

The contact form requires SMTP credentials to send emails. You can use:

- Gmail (requires app password)
- SendGrid
- Mailgun
- Any SMTP service

**Important:** If SMTP is not configured:
- In development mode, leads will be logged to the console
- In production mode, an error will be returned

## Sample Concept Pages

The site includes three sample concept pages to demonstrate what real client sites could look like:

1. **Exterior Cleaning Demo** (`/sample-sites/exterior-cleaning`)
   - Pressure washing and exterior cleaning business
   - Services, before/after gallery, reviews, service areas

2. **Restaurant Demo** (`/sample-sites/restaurant`)
   - Restaurant and food business
   - Menu, hours, location, catering, reviews

3. **Pet Care Demo** (`/sample-sites/pet-care`)
   - Dog walking and pet care business
   - Services, meet & greet info, towns served, reviews

Each sample site:
- Is clearly labeled as a sample concept
- Links back to the main Bellmore Web Design site
- Is fully mobile-responsive
- Uses realistic business copy (no lorem ipsum)

## GitHub Pages Deployment

This site is configured for **static export** to work with GitHub Pages. Here's everything you need to know:

### How It Works

The site is built as a static Next.js export that generates plain HTML, CSS, and JavaScript files that GitHub Pages can serve.

**Important:** GitHub Pages is a **static hosting** service. It cannot:
- Run backend API routes (like `/api/contact`)
- Execute server-side code
- Use dynamic server features

That's why the contact form uses `mailto:` instead of a backend API route for the GitHub Pages version.

### What Gets Deployed

1. When you push to the `main` branch, GitHub Actions automatically:
   - Installs dependencies
   - Runs `npm run build` to create a static export
   - Deploys the `out/` folder to GitHub Pages

2. The built site includes:
   - `index.html` at the root
   - All pages as static HTML files
   - CSS and JavaScript bundles
   - Image assets

### Repository Setup

**Make sure your GitHub repository is configured correctly:**

1. **Go to Settings > Pages** in your GitHub repository

2. **Set Source to:**
   - Source: **GitHub Actions** (not "Deploy from a branch")

3. **The site will be available at:**
   - `https://[username].github.io/BellmoreWebDesign/`

4. **Base path configuration:**
   - The `next.config.ts` file is already configured with:
     ```typescript
     basePath: process.env.NODE_ENV === 'production' ? '/BellmoreWebDesign' : '',
     assetPrefix: process.env.NODE_ENV === 'production' ? '/BellmoreWebDesign/' : '',
     ```
   - If your repository has a different name, update these paths in `next.config.ts`

### Manual Build (Optional)

To build and test locally before deploying:

```bash
# Install dependencies
npm install

# Build the static site
npm run build

# The output will be in the `out/` folder
# You can serve it locally to test:
npx serve out
```

### Fixing the "File not found" Error

If you see "File not found" on GitHub Pages, check:

1. **Is the repo configured correctly?**
   - Go to Settings > Pages > Source: **GitHub Actions**

2. **Did the workflow run?**
   - Go to Actions tab
   - Make sure the latest deploy succeeded

3. **Is index.html at the root?**
   - After the workflow runs, check the deployment
   - The `out/` folder should have `index.html` at the root

4. **Is the base path correct?**
   - If your repo name is NOT `BellmoreWebDesign`, update `next.config.ts`:
     ```typescript
     basePath: '/your-repo-name',
     assetPrefix: '/your-repo-name/',
     ```

### Contact Form on GitHub Pages

The contact form uses `mailto:bellmorewebdesign@gmail.com` which opens the user's email client with pre-filled information. This works on GitHub Pages because it doesn't require a backend server.

**The form does NOT:**
- Submit to `/api/contact` (that route doesn't exist in static export)
- Send emails from the server
- Require SMTP configuration

**The form DOES:**
- Open the user's email app (Gmail, Outlook, Apple Mail, etc.)
- Pre-fill the email body with the form data
- Work on all devices

### Other Deployment Options

If you need a backend API (server-side features), deploy to:

#### Vercel (Recommended for Full Features)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

Vercel supports the full Next.js API routes and server features.

#### Netlify, Railway, DigitalOcean, AWS, Google Cloud

These platforms also support Next.js with API routes. Make sure to:
1. Set environment variables on your hosting platform
2. Build the project with `npm run build`
3. Configure the hosting to run `npm start`

## Security Notes

- **Never commit your `.env` file to version control**
- The `.env` file is already in `.gitignore`
- Keep your SMTP credentials secure
- Rate limiting is enabled to prevent abuse
- Honeypot field helps block bot submissions

## Project Structure

```
bellmore-web-design/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── sample-sites/
│   │   ├── exterior-cleaning/
│   │   │   └── page.tsx
│   │   ├── restaurant/
│   │   │   └── page.tsx
│   │   └── pet-care/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ContactSection.tsx        # Contact form
│   ├── FAQItem.tsx
│   ├── FAQSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PricingCard.tsx
│   ├── PricingSection.tsx
│   ├── ProblemSection.tsx
│   ├── ProcessSection.tsx
│   ├── ProjectCard.tsx
│   ├── SampleSitesSection.tsx
│   ├── ServicesSection.tsx
│   ├── SolutionSection.tsx
│   ├── WebsitePreview.tsx
│   └── WhoIHelpSection.tsx
├── lib/
│   ├── email.ts                  # Email sending logic
│   ├── rateLimit.ts              # Rate limiting
│   └── validation.ts             # Form validation
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.ts
```

## Customization

To customize the site for your own use:

1. Update business information in components
2. Replace sample project links with your own
3. Update contact email and phone number
4. Modify color scheme in Tailwind config
5. Add your own photos and branding

## License

This project is private and proprietary to Bellmore Web Design.

## Contact

For questions or support:
- Email: bellmorewebdesign@gmail.com
- Website: https://bellmorewebdesign.com
