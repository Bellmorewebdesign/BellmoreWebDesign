// Services, pricing, process and FAQ content. Front-end only.

export interface Service {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  accent: string;
}

export const SERVICES: Service[] = [
  {
    id: 'websites',
    name: 'Website Design & Redesign',
    tagline:
      'Custom, mobile-friendly websites that put your services, photos, reviews, and contact options in one clean place.',
    accent: '#4E86BC',
    features: [
      'New custom business websites',
      'Website redesigns',
      'Mobile-friendly layouts',
      'Services sections & photo galleries',
      'Reviews, contact forms & call buttons',
      'Quote buttons & social media links',
      'Basic SEO setup',
      'Routine maintenance & content updates',
    ],
  },
  {
    id: 'social',
    name: 'Social Media Management',
    tagline:
      'Consistent, professional posts that keep your business active online and show customers the quality of your work.',
    accent: '#6B8E6B',
    features: [
      'Instagram & Facebook management',
      'Captions & content planning',
      'Content scheduling',
      'Routine profile updates',
      'Before-and-after posts',
      'Project highlights',
      'Reels & short-form video',
      'Consistent posting',
    ],
  },
  {
    id: 'photography',
    name: 'Business Photography & Content',
    tagline:
      'On-site photos and short videos of your real work — content for your website gallery and your social pages.',
    accent: '#C9A86A',
    features: [
      'On-site photography',
      'Before-and-after & finished-work photos',
      'Product & service photography',
      'Staff & workplace photos',
      'Short vertical videos',
      'Website gallery content',
      'Social media content',
      'Mainly included with ongoing content plans',
    ],
  },
];

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  note?: string;
}

export const WEBSITE_PLANS: PricingPlan[] = [
  {
    title: 'Website Refresh',
    price: 'Starting at $350',
    cta: 'Request Pricing',
    ctaHref: '/contact',
    features: [
      'Cleaner modern design',
      'Improved mobile layout',
      'Updated sections and copy',
      'Better contact buttons',
      'Better organization',
      'Basic SEO improvements',
    ],
  },
  {
    title: 'Custom Business Website',
    price: 'Starting at $500',
    featured: true,
    badge: 'Most popular',
    cta: 'Get a Free Mockup',
    ctaHref: '/contact',
    features: [
      'Custom mobile-friendly website',
      'Services section',
      'Photo gallery',
      'Reviews',
      'Contact form',
      'Call or quote buttons',
      'Basic SEO setup',
      'Social media links',
    ],
  },
];

export const MONTHLY_PLANS: PricingPlan[] = [
  {
    title: 'Website Care',
    price: 'Starting at $49/month',
    cta: 'Ask About This Plan',
    ctaHref: '/contact',
    note: 'Major redesigns, new pages, custom systems, and advanced features are quoted separately.',
    features: [
      'Routine text changes',
      'Photo changes',
      'Service updates',
      'Pricing updates',
      'Minor maintenance',
      'One grouped update request per month',
    ],
  },
  {
    title: 'Social Content',
    price: 'Starting at $450/month',
    cta: 'Ask About This Plan',
    ctaHref: '/contact',
    features: [
      'Instagram & Facebook management',
      'On-site content visits',
      'Professional photos',
      'Short video clips',
      'Eight monthly posts',
      'Up to two Reels',
      'Captions',
      'Scheduling',
    ],
  },
  {
    title: 'Complete Online Presence',
    price: 'Starting at $650/month',
    featured: true,
    badge: 'Best value',
    cta: 'Ask About This Plan',
    ctaHref: '/contact',
    features: [
      'Regular on-site content visits',
      'Instagram & Facebook management',
      'Professional photos & short-form video',
      'Up to twelve monthly posts',
      'Up to four Reels',
      'Routine website updates',
      'New work added to your website gallery',
      'Basic monthly performance summary',
    ],
  },
];

export const PRICING_NOTE =
  'Final pricing depends on the amount of content, travel, posting frequency, and website support required. Twice-weekly or unusually frequent visits are a custom quote.';

export interface ProcessStep {
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'I review your current online presence',
    description: 'A quick look at your website, social pages, and how customers find you now.',
  },
  {
    title: 'We decide what your business needs',
    description: 'Website, social content, photography, or a combination — whatever actually fits.',
  },
  {
    title: 'I create a free homepage mockup or content plan',
    description: 'You see a real direction before committing to anything.',
  },
  {
    title: 'You review the direction',
    description: 'We adjust until it feels right for your business and your customers.',
  },
  {
    title: 'I build, photograph, post, and maintain',
    description: 'I handle the agreed services and keep everything up to date.',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const CONTACT_FAQS: Faq[] = [
  {
    question: 'Is the homepage mockup really free?',
    answer:
      'Yes. I build a homepage concept first so you can see the direction before deciding anything. There is no cost and no obligation to continue.',
  },
  {
    question: 'Is the completed website free?',
    answer:
      'No. The homepage mockup is free to look at, but the finished, built website is a paid project. You only pay if you decide to move forward.',
  },
  {
    question: 'Can you manage my Instagram and Facebook?',
    answer:
      'Yes. Social media management is one of the three core services — including posts, captions, scheduling, and short-form video on Instagram and Facebook.',
  },
  {
    question: 'Do you take the photos?',
    answer:
      'Yes. On-site photography and short videos of your real work are included mainly with ongoing social media and content plans.',
  },
  {
    question: 'Can I purchase only website maintenance?',
    answer:
      'Yes. The Website Care plan covers routine text, photo, service, and pricing updates without a full monthly content plan.',
  },
  {
    question: 'Can I buy social media without a new website?',
    answer:
      'Absolutely. Social-media-only and content-only plans are available whether or not I built your current site.',
  },
  {
    question: 'How far do you travel for content?',
    answer:
      'On-site photography and content visits are generally within about a 30-minute drive of Bellmore — Merrick, Wantagh, Seaford, Massapequa, East Meadow, and nearby towns.',
  },
  {
    question: 'Can you build a website for a business outside Nassau County?',
    answer:
      'Yes. Website design is available for businesses throughout New York. On-site photography and social visits are the geographically limited part.',
  },
  {
    question: 'How does monthly pricing work?',
    answer:
      'Monthly plans are ongoing and start at the listed prices. Final pricing depends on travel, number of visits, platforms, posting frequency, editing, and website support.',
  },
  {
    question: 'Can the website be updated later?',
    answer:
      'Yes. I can update photos, services, prices, and copy over time — either as part of a monthly plan or as a one-off request.',
  },
];
