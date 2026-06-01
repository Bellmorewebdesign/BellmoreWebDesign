export type SampleId = 'pressure-washing' | 'restaurant' | 'pet-care' | 'events' | 'high-end-tech';

export interface HomeSample {
  id: SampleId;
  /** short tab label */
  tab: string;
  name: string;
  industry: string;
  tagline: string;
  href: string;
  cta: string;
  hero: string;
  accent: string;
  accentDark: string;
  features: string[];
  badge?: string;
  dark?: boolean;
}

export const HOME_SAMPLES: HomeSample[] = [
  {
    id: 'pressure-washing',
    tab: 'Exterior Cleaning',
    name: 'South Shore Shine',
    industry: 'Exterior Cleaning',
    tagline: 'Make your home look fresh again',
    href: '/sample-sites/exterior-cleaning',
    cta: 'Get a Free Estimate',
    hero: '/images/samples/pressure-washing/driveway.jpg',
    accent: '#0E8FB0',
    accentDark: '#0B5E78',
    features: ['House Washing', 'Driveways', 'Patios'],
  },
  {
    id: 'restaurant',
    tab: 'Restaurant',
    name: 'Main Street Chicken Co.',
    industry: 'Restaurant',
    tagline: 'Crispy, crave-worthy chicken',
    href: '/sample-sites/restaurant',
    cta: 'View Menu',
    hero: '/images/samples/restaurant/hero-chicken-sandwich.jpg',
    accent: '#C8401F',
    accentDark: '#7A2E12',
    features: ['Nashville Hot', 'Crispy Tenders', 'Loaded Fries'],
  },
  {
    id: 'pet-care',
    tab: 'Pet Care',
    name: 'Harbor Paws Pet Care',
    industry: 'Pet Care',
    tagline: 'Trusted care for your best friend',
    href: '/sample-sites/pet-care',
    cta: 'Request Care',
    hero: '/images/samples/pet-care/hero-golden-retriever.jpg',
    accent: '#6B8A5A',
    accentDark: '#45603A',
    features: ['Boarding', 'Walking', 'Daycare'],
  },
  {
    id: 'events',
    tab: 'Events',
    name: 'Ever After Events',
    industry: 'Event Styling',
    tagline: 'Beautiful setups for every occasion',
    href: '/sample-sites/events',
    cta: 'Plan Your Event',
    hero: '/images/samples/events/hero-balloon-setup.jpg',
    accent: '#C0699A',
    accentDark: '#8A4A72',
    features: ['Balloon Arches', 'Backdrops', 'Tablescapes'],
  },
  {
    id: 'high-end-tech',
    tab: 'High-End Tech',
    name: 'NovaStack Labs',
    industry: 'High-End Tech',
    tagline: 'Build faster with intelligent infrastructure',
    href: '/sample-sites/high-end-tech',
    cta: 'View Platform',
    hero: '',
    accent: '#3B82F6',
    accentDark: '#1E3A8A',
    features: ['Dashboards', 'AI Workflows', 'Analytics'],
    badge: 'High-End Concept',
    dark: true,
  },
];
