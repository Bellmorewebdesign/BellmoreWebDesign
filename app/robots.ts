import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bellmorewebdesign.com/sitemap.xml',
    host: 'https://bellmorewebdesign.com',
  };
}
