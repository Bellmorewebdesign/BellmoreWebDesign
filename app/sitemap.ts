import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bellmorewebdesign.com';
  const now = new Date();

  const mainPages = [
    { path: '', priority: 1 },
    { path: '/work', priority: 0.9 },
    { path: '/contact', priority: 0.9 },
  ];

  const samplePages = [
    '/sample-sites/exterior-cleaning',
    '/sample-sites/restaurant',
    '/sample-sites/pet-care',
    '/sample-sites/events',
    '/sample-sites/high-end-tech',
  ];

  return [
    ...mainPages.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p.priority,
    })),
    ...samplePages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
