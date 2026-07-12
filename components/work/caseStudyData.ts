// Reusable case-study structure. Add real photos to `images` later — the
// gallery renders a "coming soon" state while a study has no images, so no
// stock or invented photos are ever presented as completed client work.

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  industry: string;
  location?: string;
  href: string;
  summary: string;
  services: string[];
  images: CaseStudyImage[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'peak-auto-collision',
    name: 'Peak Auto Collision',
    industry: 'Auto Body & Collision',
    location: '2488 Merrick Road, Bellmore, NY 11710',
    href: 'https://bellmorewebdesign.github.io/PeakAutoCollision/',
    summary:
      'A professional auto collision website designed to showcase services, repair work, reviews, and estimate contact options.',
    services: [
      'Custom mobile-friendly website',
      'Services & repair overview',
      'Reviews section',
      'Estimate contact options',
    ],
    // Real on-site photos, before/after shots, and social posts will be added here.
    images: [],
  },
];
