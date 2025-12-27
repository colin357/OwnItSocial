export const seoConfig = {
  siteName: 'OwnItSocial',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ownitsocial.com',
  defaultTitle: 'OwnItSocial - Programmatic SEO',
  defaultDescription: 'A powerful platform for programmatic SEO and content generation',
  twitterHandle: '@ownitsocial',

  // SEO Bot Configuration
  bot: {
    enableAutoGeneration: true,
    maxPagesPerBatch: 100,
    contentUpdateInterval: '7d', // Update content every 7 days
  },

  // Structured Data defaults
  organization: {
    name: 'OwnItSocial',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ownitsocial.com',
    logo: '/logo.png',
  },
};
