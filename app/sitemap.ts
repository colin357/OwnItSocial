import { MetadataRoute } from 'next';
import { ContentGenerator } from '@/lib/seo/content-generator';
import { DataSourceManager, seoTemplates } from '@/lib/seo/data-sources';
import { seoConfig } from '@/lib/seo/config';
import { getAllCitySlugs } from '@/app/data/cities';
import { getAllIndustrySlugs } from '@/app/data/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;
  const entries: MetadataRoute.Sitemap = [];

  // Add homepage
  entries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  });

  // Add static pages
  const staticPages = [
    { url: '/dashboard', priority: 0.8, changeFrequency: 'daily' as const },
    { url: '/articles', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/locations', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/best-marketing-agencies-miami', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/best-marketing-agencies-tampa', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/best-marketing-agencies-sarasota', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/best-marketing-agencies-naples', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/best-marketing-agencies-chicago', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/best-marketing-agencies-new-york', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/best-marketing-agencies-los-angeles', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/best-marketing-agencies-dallas', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/marketing-agency-miami', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/digital-marketing-miami', priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  for (const page of staticPages) {
    entries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  // Add all industry/city combination pages
  const cities = getAllCitySlugs();
  const industries = getAllIndustrySlugs();

  for (const industry of industries) {
    for (const city of cities) {
      entries.push({
        url: `${baseUrl}/${industry}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9, // High priority for local service pages
      });
    }
  }

  // Add all generated SEO pages
  const templateIds = DataSourceManager.getTemplateIds();

  for (const templateId of templateIds) {
    const template = seoTemplates[templateId];
    const data = DataSourceManager.getData(templateId);

    if (template && data) {
      const pages = ContentGenerator.generatePages(template, data);

      for (const page of pages) {
        entries.push({
          url: `${baseUrl}/seo/${page.slug}`,
          lastModified: page.lastModified || new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        });
      }
    }
  }

  return entries;
}
