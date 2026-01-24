import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bontera.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/services', '/projects', '/news', '/careers', '/contact'];
  
  const routes: MetadataRoute.Sitemap = [];

  // Generate URLs for all pages in all locales
  locales.forEach((locale) => {
    pages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  return routes;
}