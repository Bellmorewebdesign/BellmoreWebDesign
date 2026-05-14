# Bellmore Web Design

A modern, mobile-friendly website for Bellmore Web Design, showcasing web design services for local businesses.

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Nodemailer** for email contact form
- Fully responsive mobile-first design

## Features

- Clean, professional homepage with multiple sections
- Working contact form with backend API
- Email notifications for new leads
- Rate limiting to prevent spam
- Honeypot field for bot protection
- Three fully-built sample concept websites:
  - Exterior Cleaning business
  - Restaurant/food business
  - Pet care business
- SEO optimized with proper metadata
- Sitemap and robots.txt
- Smooth scrolling navigation
- Mobile-friendly header with hamburger menu

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

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Deploy

### Other Hosting

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean
- AWS
- Google Cloud

Make sure to:
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
