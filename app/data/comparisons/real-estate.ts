import type { BestOfData, Company } from '../../components/guides/BestOfPage';

// ---------------------------------------------------------------------------
// Comparison pages for real estate agents. Facts and prices were read from
// each company's own website on 2026-11-18 (sources on every entry).
// Luxury Presence blocks automated fetches, so its facts came from indexed
// copies of its own pages; re-check it in a browser before each update.
// Coffee & Contracts lives at coffeecontracts.com. The old
// coffeeandcontracts.com domain now redirects elsewhere; do not link it.
// ---------------------------------------------------------------------------

const UPDATED = '2026-11-18';

const OURS_BASE = {
  name: 'Own It Social',
  url: 'https://ownitsocial.com/real-estate-marketing',
  kind: 'Done-for-you marketing department',
  serves: 'Real estate agents and teams',
  pricing: 'Not published. One monthly retainer scoped after a free strategy session; month to month after onboarding.',
  ours: true,
} as const;

const LUXURY_PRESENCE: Company = {
  name: 'Luxury Presence',
  url: 'https://www.luxurypresence.com',
  kind: 'Platform with managed services',
  serves: 'Agents, teams, and brokerages, especially at the high end',
  summary: 'Real estate websites and CRM with managed SEO and GEO, paid ads, an AI SEO tool, and a social media management service in beta that posts from your listings.',
  bestFor: 'Established agents who want a premium website plus managed SEO and AI search from one vendor',
  keepInMind: 'Its own blog describes setup fees and a 12-month agreement. Social media management is still in beta.',
  pricing: 'Not consistently published; quoted after a call.',
  sources: ['https://www.luxurypresence.com/social-media-management/', 'https://www.luxurypresence.com/blogs/ai-first-search/'],
};

const INBOUNDREM: Company = {
  name: 'InboundREM',
  url: 'https://inboundrem.com',
  kind: 'Done-for-you agency',
  serves: 'Individual agents, with custom plans for brokerages',
  summary: 'SEO-focused agent websites, hyperlocal SEO and blogging, paid ads, video, and branding, plus RealtyRank AI, a program for getting agents recommended by ChatGPT, Perplexity, Gemini, Claude, and Copilot.',
  bestFor: 'Solo agents focused on local SEO and AI recommendations',
  keepInMind: 'Social media management is not part of its services.',
  pricing: 'Published for AI visibility: $750/mo per assistant plan, custom from $2,500/mo. Core SEO pricing not published.',
  sources: ['https://inboundrem.com/ai-visibility/'],
};

const REW: Company = {
  name: 'Real Estate Webmasters',
  url: 'https://www.realestatewebmasters.com',
  kind: 'Platform with agency services',
  serves: 'Agents, teams, brokerages, and enterprise',
  summary: 'IDX websites and an AI CRM with dialer and texting, plus SEO, pay-per-click, answer engine optimization, and custom design and development.',
  bestFor: 'Teams and brokerages that want website, CRM, and SEO in one stack',
  keepInMind: 'Mainly a technology platform; done-for-you organic social content is not listed.',
  pricing: 'Published platform pricing: $350/mo single user to $999+/mo brokerage. Agency work quoted.',
  sources: ['https://www.realestatewebmasters.com/pricing'],
};

const AGENT_IMAGE: Company = {
  name: 'Agent Image',
  url: 'https://www.agentimage.com',
  kind: 'Website and digital marketing agency',
  serves: 'Solo agents through brokerages of 50+ agents',
  summary: 'Custom and semi-custom IDX websites, SEO plus AEO and GEO for AI platforms, pay-per-click, and content.',
  bestFor: 'Agents and brokerages that want a custom-designed website with search and AI visibility',
  keepInMind: 'Pricing and social media details require a sales call.',
  pricing: 'Not published',
  sources: ['https://www.agentimage.com'],
};

const CURAYTOR: Company = {
  name: 'Curaytor',
  url: 'https://www.curaytor.com',
  kind: 'Platform with agency services',
  serves: 'Solo agents and teams',
  summary: 'Websites, listing tools, email, pay-per-click, SEO and AEO, and a content plan in which its team writes social copy and handles posting.',
  bestFor: 'Teams that want a coached, hands-on marketing partner',
  keepInMind: 'The highest published entry price in this list; services are added on top of the platform.',
  pricing: 'Published: platform from $1,299 a month; no long-term contracts.',
  sources: ['https://www.curaytor.com'],
};

const EVOCALIZE: Company = {
  name: 'Evocalize',
  url: 'https://www.evocalize.com',
  kind: 'Software platform',
  serves: 'Brokerages, franchises, and mortgage companies; individuals can start free',
  summary: 'An AI marketing platform that runs paid search and social ads, listing videos, landing pages, direct mail, and AI lead calling.',
  bestFor: 'Brokerages and franchises scaling listing ads across many agents',
  keepInMind: 'Centered on paid ads rather than organic content or a hands-on team.',
  pricing: 'Not published',
  sources: ['https://www.evocalize.com'],
};

const LYFE: Company = {
  name: 'LYFE Marketing',
  url: 'https://www.lyfemarketing.com/industries/real-estate-social-media-marketing/',
  kind: 'Social media agency',
  serves: 'Small businesses, with a real estate offering',
  summary: 'Done-for-you social media: content creation, a posting calendar, community responses, and reporting, with social ads, email and SMS, and web design available.',
  bestFor: 'Agents who want a human social media team with published packages',
  keepInMind: 'Not real estate-only, and SEO and websites are not part of its real estate packages.',
  pricing: 'Published: $750, $1,350, or $1,550 a month (12 to 20 posts); ad spend separate.',
  sources: ['https://www.lyfemarketing.com/industries/real-estate-social-media-marketing/'],
};

const ROOMVU: Company = {
  name: 'Roomvu',
  url: 'https://www.roomvu.com',
  kind: 'Automated video subscription',
  serves: 'Agents and loan officers',
  summary: 'AI-made hyper-local market videos using your face and voice, posted automatically to six social channels every day, with a light CRM and lead tools.',
  bestFor: 'Agents who want low-cost, hands-off daily video posting',
  keepInMind: 'Content is AI- and template-driven rather than made by a human social media manager.',
  pricing: 'Published: $89.99, $199.99, or $399.99 a month; no contracts.',
  sources: ['https://www.roomvu.com/pricing'],
};

const COFFEE: Company = {
  name: 'Coffee & Contracts',
  url: 'https://coffeecontracts.com',
  kind: 'Content subscription',
  serves: 'Individual agents',
  summary: 'Weekly and monthly drops of human-made social content, 1,000+ Canva templates, an AI assistant, and lead magnets for agents to post themselves.',
  bestFor: 'Agents who want polished, on-trend content to post themselves',
  keepInMind: 'Posting and engagement remain your job.',
  pricing: 'Published: $62 to $74 a month depending on billing term.',
  sources: ['https://coffeecontracts.com'],
};

const STUDIO4AGENTS: Company = {
  name: 'Studio4Agents',
  url: 'https://www.studio4agents.com',
  kind: 'Marketing planner software',
  serves: 'Individual agents and brokerages',
  summary: 'A daily content plan with captions and branded images, video scripts and a teleprompter, and listing and open-house tools.',
  bestFor: 'Budget-minded agents who will post their own content',
  keepInMind: 'Content is prepared for you, but you copy and post it yourself.',
  pricing: 'Published: Pro $79 a month (introductory pricing available).',
  sources: ['https://www.studio4agents.com'],
};

const WEBFX: Company = {
  name: 'WebFX',
  url: 'https://www.webfx.com/seo/services/ai-search-optimization/',
  kind: 'Full-service digital agency',
  serves: 'Businesses across industries, with real estate SEO pages',
  summary: 'AI search optimization for ChatGPT, Perplexity, and Google AI Overviews, and a real estate SEO service that lists generative engine and AI SEO.',
  bestFor: 'Brokerages that want a big-agency AI search program',
  keepInMind: 'Not real estate-only, and plans carry a six-month commitment.',
  pricing: 'Published: from $3,000 a month, six-month commitment.',
  sources: ['https://www.webfx.com/seo/services/ai-search-optimization/'],
};

const RELATED = [
  { label: 'Best marketing agencies for real estate agents', href: '/best-marketing-agencies-for-real-estate-agents' },
  { label: 'Best social media marketing companies for real estate agents', href: '/best-social-media-marketing-companies-for-real-estate-agents' },
  { label: 'Best AEO companies for real estate agents', href: '/best-aeo-companies-for-real-estate-agents' },
  { label: 'Co-marketing with lender partners', href: '/co-marketing' },
];
const related = (self: string) => RELATED.filter((r) => r.href !== self);
const PARENT = { name: 'Real Estate Marketing', path: '/real-estate-marketing' };

// ── Best marketing agencies ─────────────────────────────────────────────────
const MARKETING_PATH = '/best-marketing-agencies-for-real-estate-agents';
export const RE_MARKETING: BestOfData = {
  path: MARKETING_PATH,
  source: 'best-marketing-re',
  title: 'Best Marketing Agencies for Real Estate Agents',
  description:
    'A comparison of marketing agencies and platforms for real estate agents in 2026: Own It Social, Luxury Presence, Real Estate Webmasters, Agent Image, Curaytor, InboundREM, and Evocalize, with who each fits and published pricing.',
  updated: UPDATED,
  eyebrow: 'For real estate agents',
  intro:
    'Real estate marketing companies range from IDX website platforms to ad engines and full-service agencies. This list compares the established options by what they actually do, who does the work, and what they publish about price, so you can shortlist two or three to talk to.',
  criteria: [
    { title: 'What they lead with', body: 'Websites and IDX, ads, SEO, or content and social.' },
    { title: 'Who does the work', body: 'A team that creates and runs your marketing, or a platform you run.' },
    { title: 'AI search', body: 'Whether AEO or GEO is offered as part of the service.' },
    { title: 'Terms and pricing', body: 'Published prices, contract length, and setup fees.' },
  ],
  companies: [
    {
      ...OURS_BASE,
      summary:
        'A done-for-you marketing department: listing and market-update content for social, automated email and SMS nurture for buyer and seller leads, Google Business Profile, AI search optimization, and co-marketing with your lender partner. You approve everything in a portal.',
      bestFor: 'Agents who want content, follow-up, and search run by one team, especially with a lender partner',
      keepInMind: 'A marketing service, not a website platform. Pricing is scoped on a call rather than published.',
    },
    LUXURY_PRESENCE,
    REW,
    AGENT_IMAGE,
    CURAYTOR,
    INBOUNDREM,
    EVOCALIZE,
  ],
  choose: [
    { need: 'You need a premium IDX website first', answer: 'Luxury Presence, Agent Image, or Real Estate Webmasters.' },
    { need: 'You want local SEO and AI recommendations', answer: 'InboundREM.' },
    { need: 'You run a brokerage and want listing ads at scale', answer: 'Evocalize.' },
    { need: 'You want a coached platform-plus-services partner', answer: 'Curaytor.' },
    { need: 'You want content, follow-up, and lender co-marketing done for you', answer: 'Own It Social.' },
  ],
  faqs: [
    {
      question: 'What is the best marketing agency for real estate agents?',
      answer:
        'It depends on what you need first. Luxury Presence, Agent Image, and Real Estate Webmasters lead with websites and search. InboundREM focuses on local SEO and AI recommendations. Curaytor pairs a platform with a hands-on team. Evocalize runs listing ads for brokerages. Own It Social is a done-for-you marketing department for content, CRM follow-up, Google and AI search, and lender co-marketing.',
    },
    {
      question: 'How much does a real estate marketing agency cost?',
      answer:
        'Published prices in 2026 range from about $350 a month for a website and CRM platform, to $750 a month for AI visibility programs, to $1,299 a month and up for platform-plus-services partners. Several premium vendors quote after a call and charge setup fees.',
    },
    {
      question: 'Should a real estate agent sign a 12-month marketing contract?',
      answer:
        'Some website platforms require one because of setup costs. For ongoing marketing services, month-to-month terms after a short onboarding period are common and give you leverage if the work is not delivering.',
    },
    {
      question: 'Do real estate marketing agencies do AI search optimization?',
      answer:
        'Several now do. InboundREM, Luxury Presence, Real Estate Webmasters, Agent Image, and Curaytor all list AEO or GEO services, and Own It Social includes AI search optimization in its done-for-you department.',
    },
  ],
  parent: PARENT,
  related: related(MARKETING_PATH),
};

// ── Best social media marketing companies ───────────────────────────────────
const SOCIAL_PATH = '/best-social-media-marketing-companies-for-real-estate-agents';
export const RE_SOCIAL: BestOfData = {
  path: SOCIAL_PATH,
  source: 'best-social-re',
  title: 'Best Social Media Marketing Companies for Real Estate Agents',
  description:
    'A comparison of social media marketing companies for real estate agents in 2026: Own It Social, LYFE Marketing, Roomvu, Coffee & Contracts, Studio4Agents, and Luxury Presence, with what each does, who it fits, and published pricing.',
  updated: UPDATED,
  eyebrow: 'For real estate agents',
  intro:
    'Social media help for agents ranges from Canva templates you post yourself to automated video and full human social teams. This list compares the main options and what you actually get from each.',
  criteria: [
    { title: 'Custom or template', body: 'Whether content is made for you or shared across subscribers.' },
    { title: 'Who posts', body: 'Done for you, automated, or prepared for you to post yourself.' },
    { title: 'Human or AI', body: 'Whether people or AI create the content.' },
    { title: 'Price and terms', body: 'Published prices and contract terms.' },
  ],
  companies: [
    {
      ...OURS_BASE,
      summary:
        'Listing, market-update, and personal-brand content written, filmed, edited, and posted for you every week, with your approval first. Social runs alongside lead nurture, Google, AI search, and co-marketing with your lender partner.',
      bestFor: 'Agents who want custom content and video that sounds like them, done by people',
      keepInMind: 'Not a social-only service, and priced above template subscriptions.',
    },
    LYFE,
    ROOMVU,
    COFFEE,
    STUDIO4AGENTS,
    { ...LUXURY_PRESENCE, keepInMind: 'Its social media management is in beta and posts two to three times a week from your listings.' },
  ],
  choose: [
    { need: 'You will post yourself and want great templates', answer: 'Coffee & Contracts or Studio4Agents.' },
    { need: 'You want automated daily video at a low price', answer: 'Roomvu.' },
    { need: 'You want a human social team with published packages', answer: 'LYFE Marketing.' },
    { need: 'You already use a Luxury Presence website', answer: 'Its listing-based social service.' },
    { need: 'You want custom content tied to follow-up and lender co-marketing', answer: 'Own It Social.' },
  ],
  faqs: [
    {
      question: 'What is the best social media marketing company for real estate agents?',
      answer:
        'For content you post yourself, Coffee & Contracts and Studio4Agents are popular, low-cost choices. Roomvu automates daily market videos. LYFE Marketing provides a human social team with published packages. Own It Social writes, films, edits, and posts custom content as part of a full marketing department.',
    },
    {
      question: 'How much does social media management cost for a real estate agent?',
      answer:
        'Published prices in 2026 run from about $62 to $79 a month for content subscriptions, $90 to $400 a month for automated video, and $750 to $1,550 a month for a done-for-you social team.',
    },
    {
      question: 'Is AI-generated social content good enough for agents?',
      answer:
        'It is fine for volume, but it tends to look like everyone else’s. Agents win listings on trust and personality, so content that shows you, your market, and your clients usually outperforms generic market updates.',
    },
    {
      question: 'Do I need to be on camera?',
      answer:
        'Video of you builds trust fastest, but it is not required. A good provider can mix listing content, market updates, graphics, and client stories.',
    },
  ],
  parent: PARENT,
  related: related(SOCIAL_PATH),
};

// ── Best AEO companies ──────────────────────────────────────────────────────
const AEO_PATH = '/best-aeo-companies-for-real-estate-agents';
export const RE_AEO: BestOfData = {
  path: AEO_PATH,
  source: 'best-aeo-re',
  title: 'Best AEO Companies for Real Estate Agents',
  description:
    'A comparison of AI search optimization (AEO and GEO) companies for real estate agents in 2026: Own It Social, InboundREM, Luxury Presence, Real Estate Webmasters, Agent Image, Curaytor, and WebFX.',
  updated: UPDATED,
  eyebrow: 'For real estate agents',
  intro:
    'Buyers and sellers now ask ChatGPT, Google AI Overviews, and Perplexity to recommend an agent. Answer engine optimization (AEO), also called generative engine optimization (GEO), is the work of getting named in those answers. Here is who offers it to agents, and in what form.',
  criteria: [
    { title: 'Offered as a real service', body: 'An AEO or GEO service you can buy, not only a blog post about it.' },
    { title: 'Built for agents', body: 'Whether it fits an individual agent or a brokerage.' },
    { title: 'What feeds it', body: 'Whether AEO comes with the content, reviews, and listings that make it work.' },
    { title: 'Price and terms', body: 'Published prices and commitments.' },
  ],
  companies: [
    {
      ...OURS_BASE,
      url: 'https://ownitsocial.com/ai-search-optimization',
      summary:
        'AI search optimization built into a done-for-you marketing department: structured data, plain answers to the questions buyers and sellers ask, consistent Google, Bing, and portal profiles, steady reviews, and tracking of what AI assistants say about you.',
      bestFor: 'Agents who want AEO fed by real content, reviews, and partner mentions every week',
      keepInMind: 'Sold as part of the full department rather than as a stand-alone AEO project.',
    },
    { ...INBOUNDREM, keepInMind: 'Its AI visibility plans are priced per assistant. Social media management is not offered.' },
    LUXURY_PRESENCE,
    REW,
    AGENT_IMAGE,
    CURAYTOR,
    WEBFX,
  ],
  choose: [
    { need: 'You want a program built only around AI recommendations', answer: 'InboundREM’s RealtyRank AI.' },
    { need: 'You also need a new website', answer: 'Luxury Presence, Agent Image, or Real Estate Webmasters.' },
    { need: 'You run a brokerage with a big budget', answer: 'WebFX.' },
    { need: 'You want AEO as part of one team running all your marketing', answer: 'Own It Social.' },
  ],
  faqs: [
    {
      question: 'What is AEO for real estate agents?',
      answer:
        'Answer engine optimization (AEO) is the work of getting an agent named when someone asks an AI assistant such as ChatGPT, Google AI Overviews, or Perplexity for a recommendation. It relies on consistent information across your website and profiles, plain answers to common questions, structured data, and reviews and mentions from other sources.',
    },
    {
      question: 'Which companies offer AI search optimization to real estate agents?',
      answer:
        'InboundREM has a dedicated AI visibility program for agents. Luxury Presence, Real Estate Webmasters, Agent Image, and Curaytor include AEO or GEO with their websites and SEO. WebFX offers GEO to larger companies. Own It Social includes AEO in its done-for-you marketing department.',
    },
    {
      question: 'How much does AEO cost for a real estate agent?',
      answer:
        'Published prices in 2026 include $750 a month per assistant for InboundREM’s AI visibility plans and $3,000 a month and up for WebFX. Others bundle AEO with websites or ongoing marketing and quote it after a call.',
    },
    {
      question: 'Can any company guarantee ChatGPT will recommend me?',
      answer:
        'No. Nobody controls what an AI assistant says. A good provider makes you the clearest, most consistent, best-reviewed option in your market and shows you where you are and are not being named.',
    },
  ],
  parent: { name: 'AI Search Optimization', path: '/ai-search-optimization' },
  related: related(AEO_PATH),
};
