import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo/config';
import { getAllCitySlugs } from '@/app/data/cities';
import { getAllIndustrySlugs } from '@/app/data/industries';

// Dates are the last time the page's copy materially changed. Update the date
// when you edit a page; do not stamp everything with "now" on every build, or
// crawlers learn to ignore the field.
const SITE_UPDATED = '2026-09-15';

type Entry = {
  url: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  lastModified?: string;
};

const CORE: Entry[] = [
  { url: '/', priority: 1, changeFrequency: 'weekly' },
  { url: '/loan-officer-marketing', priority: 0.95, changeFrequency: 'weekly' },
  { url: '/loan-officer-marketing-agencies', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/real-estate-marketing', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/locations', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/articles', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/llms.txt', priority: 0.3, changeFrequency: 'monthly' },
];

const GUIDES: Entry[] = [
  '/best-marketing-agencies-miami',
  '/best-marketing-agencies-tampa',
  '/best-marketing-agencies-sarasota',
  '/best-marketing-agencies-naples',
  '/best-marketing-agencies-chicago',
  '/best-marketing-agencies-new-york',
  '/best-marketing-agencies-los-angeles',
  '/best-marketing-agencies-dallas',
  '/marketing-agency-miami',
  '/digital-marketing-miami',
  '/top-marketing-agencies',
  '/ppc-digital-marketing-agency',
  '/seo-optimization-miami-fl',
  '/orlando-seo-company',
  '/social-media-marketing-agency-near-me',
  '/social-media-marketing-dallas-tx',
  '/lead-generation-for-real-estate-agents',
].map((url) => ({
  url,
  priority: 0.6,
  changeFrequency: 'monthly' as const,
  lastModified: '2025-12-29',
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;

  const entries: MetadataRoute.Sitemap = [...CORE, ...GUIDES].map((page) => ({
    url: `${baseUrl}${page.url === '/' ? '' : page.url}`,
    lastModified: new Date(page.lastModified ?? SITE_UPDATED),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Industry × city pages.
  for (const industry of getAllIndustrySlugs()) {
    for (const city of getAllCitySlugs()) {
      entries.push({
        url: `${baseUrl}/${industry}/${city}`,
        lastModified: new Date('2025-12-29'),
        changeFrequency: 'monthly',
        priority: industry === 'loan-officer-marketing' ? 0.8 : 0.7,
      });
    }
  }

  // The /seo/[slug] template pages are sample content and are noindex until
  // they carry real copy, so they are deliberately not listed here.

  return entries;
}
