// Single source of truth for site-wide content.
// Front-end only. None of this affects the contact-form backend contract.

export const SITE_URL = 'https://bellmorewebdesign.com';
export const BUSINESS_NAME = 'Bellmore Web Design';

export const CONTACT = {
  phoneDisplay: '516-725-2774',
  phoneTel: '+15167252774',
  smsHref: 'sms:+15167252774',
  email: 'bellmorewebdesign@gmail.com',
  instagramHandle: '@Bellmorewebdesign',
  instagramUrl: 'https://www.instagram.com/bellmorewebdesign/',
} as const;

export interface NavLink {
  label: string;
  /** Absolute href. Home-page anchors use "/#id" so they work from any page. */
  href: string;
}

// Recommended navigation. Services/Pricing point at Home-page sections so they
// resolve correctly from the Work and Contact pages too.
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
];

export interface RealProject {
  name: string;
  industry: string;
  location?: string;
  description: string;
  href: string;
  label: string;
  initials: string;
  from: string;
  to: string;
}

// Real local client projects. Links use the current bellmorewebdesign GitHub
// Pages username.
export const REAL_PROJECTS: RealProject[] = [
  {
    name: "Katie's Canines",
    industry: 'Dog Walking & Pet Care',
    location: 'Long Island, NY',
    description:
      'A local dog walking and pet care website designed to make services, scheduling information, and contact options easy to find.',
    href: 'https://katiescanines.com',
    label: 'Local Client Project',
    initials: 'KC',
    from: '#A8C3A0',
    to: '#6B8E6B',
  },
  {
    name: "Grandma's Garden",
    industry: 'Handmade Garden & Home Goods',
    description:
      'A warm small-business website created to present handmade garden and home products in a clear, welcoming format.',
    href: 'https://bellmorewebdesign.github.io/GrandmasGarden/',
    label: 'Local Client Project',
    initials: 'GG',
    from: '#D8BFA3',
    to: '#C9A86A',
  },
  {
    name: 'Royal Barbershop',
    industry: 'Barbershop',
    location: '2111 Bellmore Ave, Bellmore, NY',
    description:
      'A local barbershop website designed to display services, location information, photos, and easy contact options.',
    href: 'https://bellmorewebdesign.github.io/RoyalBarbershop/',
    label: 'Local Client Project',
    initials: 'RB',
    from: '#8Fb0d6',
    to: '#4E86BC',
  },
  {
    name: 'Peak Auto Collision',
    industry: 'Auto Body & Collision',
    location: '2488 Merrick Road, Bellmore, NY 11710',
    description:
      'A professional auto collision website designed to showcase services, repair work, reviews, and estimate contact options.',
    href: 'https://bellmorewebdesign.github.io/PeakAutoCollision/',
    label: 'Local Client Project',
    initials: 'PA',
    from: '#6b7683',
    to: '#1E2A38',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  business: string;
  initials: string;
}

// Real testimonials, kept in the owners' own words.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "This site boosted my dog walking sales a ton! I don't have any complaints, Lucas was very helpful during the whole process! Even someone who doesn't know anything about technology could get their own website with no fuss through Lucas!",
    name: 'Katie',
    business: "Katie's Canines",
    initials: 'K',
  },
  {
    quote:
      'Lucas! I love the site a lot! I know how hard and how much work you put into this!',
    name: 'Donna',
    business: "Grandma's Garden",
    initials: 'D',
  },
];

export interface ServiceArea {
  websites: string;
  onSite: string;
  towns: string[];
}

export const SERVICE_AREA: ServiceArea = {
  websites: 'Website design is available for businesses throughout New York.',
  onSite:
    'On-site photography and social media content are available near Bellmore and surrounding communities, generally within about a 30-minute drive.',
  towns: [
    'Bellmore',
    'Merrick',
    'Wantagh',
    'Seaford',
    'Massapequa',
    'East Meadow',
    'Nassau County',
    'Nearby Suffolk County',
  ],
};

// Broad set of local businesses we help.
export const INDUSTRIES: string[] = [
  'Auto body shops',
  'Barbers',
  'Salons',
  'Contractors',
  'Landscapers',
  'Pressure washing',
  'Detailers',
  'Pet care',
  'Restaurants',
  'Food businesses',
  'Event businesses',
  'Cleaning companies',
];
