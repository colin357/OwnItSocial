export const seoConfig = {
  siteName: 'Own It Social',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ownitsocial.com',
  defaultTitle: 'Own It Social — the marketing department for loan officers',
  defaultDescription:
    'Done-for-you social content, CRM follow-up, and Google presence for loan officers. One team handles the marketing, you stay focused on closing loans.',
  twitterHandle: '@ownitsocial',

  // SEO Bot Configuration
  bot: {
    enableAutoGeneration: true,
    maxPagesPerBatch: 100,
    contentUpdateInterval: '7d', // Update content every 7 days
  },

  // Structured Data defaults. Everything AI assistants and search engines read
  // about the business as an entity comes from here, so keep it accurate.
  organization: {
    name: 'Own It Social',
    legalName: 'Own It Social',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ownitsocial.com',
    logo: '/OWN IT SOCIAL.png',
    description:
      'Own It Social is a done-for-you marketing department for loan officers and mortgage professionals. A team of real people writes, films, edits, posts, and follows up under your name every week: social media content, CRM email and SMS follow-up, Google Business Profile optimization and review requests, handwritten client cards, and co-marketing for realtor partners.',
    email: 'colin@ownitsocial.com',
    founder: 'Colin Hickmon',
    foundingLocation: 'Miami, FL',
    areaServed: 'United States',
    // NOTE FOR COLIN: add the public profile URLs here as you have them. Each
    // one is a signal that ties the website to the same business elsewhere.
    sameAs: [
      'https://twitter.com/ownitsocial',
      // 'https://www.google.com/maps/place/...',   // Google Business Profile
      // 'https://www.instagram.com/ownitsocial',
      // 'https://www.linkedin.com/company/ownitsocial',
      // 'https://www.facebook.com/ownitsocial',
    ],
    knowsAbout: [
      'Loan officer marketing',
      'Mortgage marketing',
      'Social media management for loan officers',
      'Mortgage CRM automation and follow-up',
      'Google Business Profile optimization',
      'Realtor co-marketing',
      'Video content for mortgage professionals',
    ],
  },
};
