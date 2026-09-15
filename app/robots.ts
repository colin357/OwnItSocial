import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo/config';

// Everyone may crawl the public site. The AI crawlers are listed explicitly so
// the intent survives future edits: being readable by these bots is how the
// site gets recommended inside ChatGPT, Claude, Perplexity, Gemini, and
// Copilot. Add a bot here rather than relying on the wildcard if a vendor
// starts requiring an explicit allow.
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
];

// /cmo stays crawlable: it is noindex via its own metadata, and the ad
// platforms' checkers need to be able to fetch it.
const PRIVATE = ['/api/', '/admin/', '/lanas-birthday'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: PRIVATE,
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: PRIVATE,
      })),
    ],
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
    host: seoConfig.siteUrl,
  };
}
