// Reusable case-study structure. Add real photos to `images` later. The
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
      "I built Peak Auto Collision a website that shows their services, repair work, reviews, and how to get an estimate. I also run their Instagram and Facebook, which is the reason I'm on-site shooting photos and short videos of the work. That content goes straight onto their social pages and into the website gallery.",
    services: [
      'Custom mobile-friendly website',
      'Services & repair overview',
      'Reviews section',
      'Estimate contact options',
      'Instagram & Facebook management',
      'On-site photos & short videos',
    ],
    // Real on-site photos, before/after shots, and social posts will be added here.
    images: [],
  },
];
