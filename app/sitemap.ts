import { MetadataRoute } from 'next';
import { ContentGenerator } from '@/lib/seo/content-generator';
import { DataSourceManager, seoTemplates } from '@/lib/seo/data-sources';
import { seoConfig } from '@/lib/seo/config';

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

  // Add dashboard
  entries.push({
    url: `${baseUrl}/dashboard`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  });

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
