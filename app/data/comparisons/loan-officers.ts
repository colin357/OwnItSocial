import type { BestOfData, Company } from '../../components/guides/BestOfPage';

// ---------------------------------------------------------------------------
// Comparison pages for loan officers. Facts and prices were read from each
// company's own website on 2026-11-18 (sources on every entry). Re-check
// prices before changing the `updated` date: vendors change them often.
// ---------------------------------------------------------------------------

const UPDATED = '2026-11-18';

const OURS_BASE = {
  name: 'Own It Social',
  url: 'https://ownitsocial.com/loan-officer-marketing',
  kind: 'Done-for-you marketing department',
  serves: 'Loan officers, mortgage brokers, and branch managers',
  pricing: 'Not published. One monthly retainer scoped to your book after a free strategy session; month to month after onboarding.',
  ours: true,
} as const;

const KALEIDICO: Company = {
  name: 'Kaleidico',
  url: 'https://kaleidico.com',
  kind: 'Done-for-you agency',
  serves: 'Mortgage lenders, plus other financial and professional services',
  summary: 'Mortgage-focused agency for websites, lead generation, SEO, content, and email marketing, with resources written for mortgage brokers and loan officers.',
  bestFor: 'Lenders that want content-led SEO and lead generation from a mortgage-experienced agency',
  keepInMind: 'Pricing is by discovery call, and its budget ranges start at the lender level rather than the individual LO level.',
  pricing: 'Not published',
  sources: ['https://kaleidico.com/mortgage-marketing/'],
};

const MBM: Company = {
  name: 'Mortgage Broker Marketing',
  url: 'https://www.mortgagebrokermarketing.com',
  kind: 'Done-for-you agency',
  serves: 'Mortgage brokers and mortgage companies',
  summary: 'San Diego agency offering mortgage websites, SEO and Google Business Profile, social media, Facebook and pay-per-click ads, email and SMS, retargeting, and reputation.',
  bestFor: 'Brokers that want a broad digital marketing package from a mortgage-only agency',
  keepInMind: 'Few public specifics about scope; pricing is by quote.',
  pricing: 'Not published',
  sources: ['https://www.mortgagebrokermarketing.com'],
};

const OAK: Company = {
  name: 'Oak & Algorithm',
  url: 'https://www.oakandalgorithm.com',
  kind: 'Done-for-you agency',
  serves: 'Loan officers, mortgage brokers, Realtors, and builders, based in Raleigh, NC',
  summary: 'Marketing and systems practice offering Google Business Profile and local SEO, AI visibility for loan officers, websites, content and social media, and CRM setup and automation.',
  bestFor: 'Loan officers who want a hands-on local partner for Google and AI visibility',
  keepInMind: 'A small firm with a regional focus in North Carolina, serving Realtors as much as loan officers.',
  pricing: 'Published: $125 visibility audit; Foundation $1,900/mo for six months; fractional partner $1,900 to $4,000/mo.',
  sources: ['https://www.oakandalgorithm.com'],
};

const REALTYCTL: Company = {
  name: 'RealtyCTL',
  url: 'https://realtyctl.com',
  kind: 'Done-for-you agency',
  serves: 'Realtors and loan officers',
  summary: 'Lead generation through Facebook ads, SEO, content and social media, CRM, and virtual assistants for Realtors and loan officers.',
  bestFor: 'Loan officers who want paid-ad lead generation paired with CRM follow-up',
  keepInMind: 'Pricing is shared on request; ad spend is separate.',
  pricing: 'Not published. Month to month, no setup fees (stated).',
  sources: ['https://realtyctl.com'],
};

const LHP: Company = {
  name: 'LenderHomePage',
  url: 'https://www.lenderhomepage.com',
  kind: 'Software platform with done-for-you content',
  serves: 'Individual loan officers, teams, brokers, and retail lenders',
  summary: 'All-in-one mortgage marketing platform: websites, AI blog, local SEO and landing pages, AI-generated compliant social posts, the Loanzify app and point of sale, and funnels.',
  bestFor: 'Loan officers who want a website, blog, social posts, and point of sale in one subscription',
  keepInMind: 'One-year agreement that renews annually, per its site. Content is AI-generated rather than written by a dedicated team.',
  pricing: 'Published: individual LO plans $127 to $289/mo billed annually, plus $199 to $399 onboarding.',
  sources: ['https://www.lenderhomepage.com/pricing/mortgage-websites'],
};

const LEADPOPS: Company = {
  name: 'LeadPops',
  url: 'https://leadpops.com',
  kind: 'Software with optional setup and ads',
  serves: 'Loan officers, brokers, teams, and enterprise',
  summary: 'Mortgage websites and funnels, lead capture and scoring, nurture sequences, and CRM integrations, with add-ons for blog articles and managed Google and Facebook ads.',
  bestFor: 'Loan officers who want low-cost funnels and lead capture they run themselves',
  keepInMind: 'You run the marketing yourself unless you buy add-ons. Social media management is not offered.',
  pricing: 'Published: plans from $0 to $119/mo; done-for-you setup $299; managed ads from $197/mo plus ad spend.',
  sources: ['https://leadpops.com/pricing'],
};

const INCUBESOCIAL: Company = {
  name: 'IncubeSocial',
  url: 'https://incubesocial.com',
  kind: 'Social media management service',
  serves: 'Small service businesses, including mortgage brokers',
  summary: 'Done-for-you posting with owner approval, comment and message replies, Google Business Profile content, and monthly reports.',
  bestFor: 'Loan officers who want budget social posting with published prices',
  keepInMind: 'A generalist service; mortgage compliance specialization is not stated.',
  pricing: 'Published: $95 to $495 a month; no lock-in.',
  sources: ['https://incubesocial.com/pricing'],
};

const MBSM: Company = {
  name: 'Mortgage Broker Social Media',
  url: 'https://mortgagebrokersocialmedia.com',
  kind: 'Content subscription',
  serves: 'Mortgage brokers and loan officers',
  summary: 'Monthly ready-made reels, posts, stories, captions, and graphics for mortgage professionals to post themselves.',
  bestFor: 'Loan officers on a tight budget who will post their own content',
  keepInMind: 'Its own FAQ says it does not manage accounts, so posting, engagement, and strategy stay with you.',
  pricing: 'Published at $47 to $54 a month (its pages differ); no contract.',
  sources: ['https://mortgagebrokersocialmedia.com'],
};

const TIM_ARMSTRONG: Company = {
  name: 'Tim Armstrong Marketing',
  url: 'https://timarmstrongmarketing.com/services/answer-engine-optimization/',
  kind: 'Done-for-you agency',
  serves: 'Mortgage professionals and local businesses, run by a former loan officer',
  summary: 'Answer engine optimization covering question mapping, answer blocks, schema, and citation monitoring in ChatGPT, Perplexity, and AI Overviews, included in website and lead-generation work.',
  bestFor: 'Loan officers who want AEO built into a new website',
  keepInMind: 'AEO is bundled with website and lead-generation engagements rather than ongoing content and social.',
  pricing: 'Not published for mortgage',
  sources: ['https://timarmstrongmarketing.com/services/answer-engine-optimization/'],
};

const CREDIBILITYOS: Company = {
  name: 'CredibilityOS',
  url: 'https://credibilityos.ai',
  kind: 'AI visibility audit',
  serves: 'Loan officers and other professionals',
  summary: 'A one-time AI visibility audit across ChatGPT, Google AI, Gemini, Perplexity, and Claude, with an optional sprint for help acting on it.',
  bestFor: 'Loan officers who want a one-time diagnosis of how AI assistants see them',
  keepInMind: 'An audit, not ongoing execution. It says it does not promise rankings.',
  pricing: 'Published: $3,500 one-time.',
  sources: ['https://credibilityos.ai'],
};

const VONK: Company = {
  name: 'Vonk Digital',
  url: 'https://www.vonkdigital.com',
  kind: 'Managed website platform',
  serves: 'Loan officers, brokers, branches, and independent mortgage companies',
  summary: 'Managed mortgage websites with calculators and compliance fields, hosting, and ongoing local blog content, structured so search engines and AI systems can understand your business.',
  bestFor: 'Loan officers who want a managed website with ongoing content',
  keepInMind: 'Website-centered; social media management is not part of the service.',
  pricing: 'Published: from $147/mo, or $497/mo with ongoing content, plus a setup fee.',
  sources: ['https://www.vonkdigital.com'],
};

const THRIVE: Company = {
  name: 'Thrive Agency',
  url: 'https://thriveagency.com/digital-marketing-services/generative-engine-optimization-geo',
  kind: 'Full-service digital agency',
  serves: 'Businesses across industries, including financial services and mortgage',
  summary: 'Managed generative engine optimization (GEO) and AI SEO for AI Overviews, AI Mode, ChatGPT, and Gemini, plus financial services and mortgage lead generation pages.',
  bestFor: 'Mortgage companies that want a large agency’s AI search program',
  keepInMind: 'Not mortgage-only; built for companies more than individual loan officers.',
  pricing: 'Not published',
  sources: ['https://thriveagency.com/digital-marketing-services/generative-engine-optimization-geo'],
};

const WEBFX: Company = {
  name: 'WebFX',
  url: 'https://www.webfx.com/seo/services/ai-search-optimization/',
  kind: 'Full-service digital agency',
  serves: 'Businesses across industries, with finance industry pages',
  summary: 'AI search optimization for ChatGPT, Perplexity, and Google AI Overviews, alongside a full catalog of SEO and digital marketing services.',
  bestFor: 'Larger lenders that want a big-agency AI search program',
  keepInMind: 'Not mortgage-specific, and plans carry a six-month commitment.',
  pricing: 'Published: from $3,000 a month, six-month commitment.',
  sources: ['https://www.webfx.com/seo/services/ai-search-optimization/'],
};

const RELATED = [
  { label: 'How to choose a marketing agency as a loan officer', href: '/loan-officer-marketing-agencies' },
  { label: 'Best marketing agencies for loan officers', href: '/best-marketing-agencies-for-loan-officers' },
  { label: 'Best social media marketing companies for loan officers', href: '/best-social-media-marketing-companies-for-loan-officers' },
  { label: 'Best AEO companies for loan officers', href: '/best-aeo-companies-for-loan-officers' },
  { label: 'Co-marketing with realtor partners', href: '/co-marketing' },
];
const related = (self: string) => RELATED.filter((r) => r.href !== self);
const PARENT = { name: 'Loan Officer Marketing', path: '/loan-officer-marketing' };

// ── Best marketing agencies ─────────────────────────────────────────────────
const MARKETING_PATH = '/best-marketing-agencies-for-loan-officers';
export const LO_MARKETING: BestOfData = {
  path: MARKETING_PATH,
  source: 'best-marketing-lo',
  title: 'Best Marketing Agencies for Loan Officers',
  description:
    'A comparison of marketing agencies and platforms for loan officers in 2026: Own It Social, Kaleidico, Mortgage Broker Marketing, Oak & Algorithm, RealtyCTL, LenderHomePage, and LeadPops, with who each fits and published pricing.',
  updated: UPDATED,
  eyebrow: 'For loan officers',
  intro:
    'Loan officer marketing companies range from $29-a-month funnel software to full-service agencies. This list compares the established options by what they actually do, who does the work, and what they publish about price, so you can shortlist two or three to talk to.',
  criteria: [
    { title: 'Mortgage focus', body: 'Whether the company is built for loan officers or serves mortgage as one industry among many.' },
    { title: 'Who does the work', body: 'A team that creates and runs your marketing, or software you run yourself.' },
    { title: 'Channels covered', body: 'Social, Google and AI search, CRM follow-up, ads, and realtor partners.' },
    { title: 'Terms and pricing', body: 'Published prices, contract length, and what is billed on top.' },
  ],
  companies: [
    {
      ...OURS_BASE,
      summary:
        'A done-for-you marketing department for loan officers: five social posts a week, weekly email to past clients, realtor partners, and prospects, Google Business Profile and blog updates, managed Facebook, Instagram, and Google ads, AI search optimization, and co-branded content for realtor partners. You approve everything in a portal before it goes out under your NMLS number.',
      bestFor: 'Loan officers who want to be the go-to lender in their market, built on realtor referrals and repeat business rather than bought leads',
      keepInMind: 'Not a lead vendor and not the cheapest option. Pricing is scoped on a call rather than published; ad spend is billed separately.',
    },
    KALEIDICO,
    MBM,
    OAK,
    REALTYCTL,
    LHP,
    LEADPOPS,
  ],
  choose: [
    { need: 'You want the lowest monthly cost and will run it yourself', answer: 'LeadPops or LenderHomePage.' },
    { need: 'You want content-led SEO and lead generation at the lender level', answer: 'Kaleidico.' },
    { need: 'You want paid-ad lead generation with CRM follow-up', answer: 'RealtyCTL.' },
    { need: 'You want to be the go-to lender, with realtor referrals and repeat business, and one team running social, CRM, Google, ads, AI search, and partners', answer: 'Own It Social.' },
  ],
  faqs: [
    {
      question: 'What is the best marketing agency for loan officers?',
      answer:
        'It depends on what you want done. Own It Social is a done-for-you marketing department for individual loan officers who want to become the go-to lender in their market through realtor referrals, repeat business, and their own brand and ads rather than bought leads; it runs social, CRM follow-up, Google and AI search, paid ads, and realtor co-marketing. Kaleidico focuses on SEO, content, and lead generation for lenders. Mortgage Broker Marketing and RealtyCTL offer broad digital and ad-driven packages. LenderHomePage and LeadPops are lower-cost platforms you run yourself. CRMs such as Total Expert are software, not marketing agencies; an agency can run your marketing inside one.',
    },
    {
      question: 'How much does a loan officer marketing agency cost?',
      answer:
        'Published prices in 2026 range from free or $29 a month for funnel software, to about $127 to $289 a month for all-in-one platforms, to roughly $1,900 a month and up for hands-on agencies. Most full-service agencies quote after a call. Ad spend is almost always billed separately.',
    },
    {
      question: 'What is the difference between a mortgage marketing platform and an agency?',
      answer:
        'A platform gives you software, templates, and automation that you or your team operate. An agency or done-for-you department creates and runs the marketing for you. Platforms cost less per month; agencies cost more but take the work off your plate.',
    },
    {
      question: 'Can I use an agency if my company already pays for Total Expert?',
      answer:
        'Yes. Many loan officers have a company CRM but no one to write content and run campaigns in it. Own It Social builds inside the systems loan officers already use, including Total Expert.',
    },
  ],
  parent: PARENT,
  related: related(MARKETING_PATH),
};

// ── Best social media marketing companies ───────────────────────────────────
const SOCIAL_PATH = '/best-social-media-marketing-companies-for-loan-officers';
export const LO_SOCIAL: BestOfData = {
  path: SOCIAL_PATH,
  source: 'best-social-lo',
  title: 'Best Social Media Marketing Companies for Loan Officers',
  description:
    'A comparison of social media marketing companies for loan officers in 2026: Own It Social, LenderHomePage, IncubeSocial, RealtyCTL, and Mortgage Broker Social Media, with what each does, who it fits, and published pricing.',
  updated: UPDATED,
  eyebrow: 'For loan officers',
  intro:
    'Social media help for loan officers comes in three forms: content you post yourself, AI-generated posts inside a platform, and a team that writes, films, edits, and posts for you. This list compares the main options and what you actually get from each.',
  criteria: [
    { title: 'Custom or template', body: 'Whether content is made for you or shared across subscribers.' },
    { title: 'Who posts', body: 'Done for you, or prepared for you to post yourself.' },
    { title: 'Mortgage compliance', body: 'Whether content goes through an approval step before it goes out under your NMLS number.' },
    { title: 'Price and terms', body: 'Published prices and contract terms.' },
  ],
  companies: [
    {
      ...OURS_BASE,
      summary:
        'Scripts, captions, video editing, and a weekly posting calendar across Instagram, Facebook, and LinkedIn, written for you and published for you. You approve every post first. Social runs alongside CRM follow-up, Google, AI search, and realtor co-marketing.',
      bestFor: 'Loan officers who want custom content and video that sounds like them',
      keepInMind: 'Not a social-only service, and priced above template subscriptions.',
    },
    LHP,
    INCUBESOCIAL,
    REALTYCTL,
    MBSM,
  ],
  choose: [
    { need: 'You will post yourself and want ready-made content', answer: 'Mortgage Broker Social Media.' },
    { need: 'You want AI-generated posts bundled with a website', answer: 'LenderHomePage.' },
    { need: 'You want a general social service with published prices', answer: 'IncubeSocial.' },
    { need: 'You want custom video and posting done for you, tied to the rest of your marketing', answer: 'Own It Social.' },
  ],
  faqs: [
    {
      question: 'What is the best social media marketing company for loan officers?',
      answer:
        'For content you post yourself, Mortgage Broker Social Media is the low-cost option. LenderHomePage bundles AI-generated social posts with a website. IncubeSocial is a general done-for-you social service with published prices. Own It Social writes, films, edits, and posts custom content for loan officers as part of a full marketing department.',
    },
    {
      question: 'How much does social media management cost for a loan officer?',
      answer:
        'Published prices in 2026 run from about $47 a month for content you post yourself, to $95 to $495 a month for general posting services, to $1,500 to $5,000 a month for custom content and video from a dedicated team.',
    },
    {
      question: 'Do loan officers need compliance approval for social media posts?',
      answer:
        'Posts that advertise mortgage products are subject to advertising rules, and most companies require a compliance review. Choose a provider with an approval step so nothing goes out under your name and NMLS number without sign-off.',
    },
    {
      question: 'Do I have to be on camera?',
      answer:
        'No. Video helps, but a good provider can build your content around graphics, market updates, client stories, and written posts if you would rather not film.',
    },
  ],
  parent: PARENT,
  related: related(SOCIAL_PATH),
};

// ── Best AEO companies ──────────────────────────────────────────────────────
const AEO_PATH = '/best-aeo-companies-for-loan-officers';
export const LO_AEO: BestOfData = {
  path: AEO_PATH,
  source: 'best-aeo-lo',
  title: 'Best AEO Companies for Loan Officers',
  description:
    'A comparison of AI search optimization (AEO and GEO) companies for loan officers in 2026: Own It Social, Oak & Algorithm, Tim Armstrong Marketing, CredibilityOS, Vonk Digital, Thrive Agency, and WebFX.',
  updated: UPDATED,
  eyebrow: 'For loan officers',
  intro:
    'Borrowers now ask ChatGPT, Google AI Overviews, and Perplexity to recommend a loan officer. Answer engine optimization (AEO), also called generative engine optimization (GEO), is the work of getting named in those answers. Here is who offers it to loan officers, and in what form.',
  criteria: [
    { title: 'Offered as a real service', body: 'An AEO or GEO service you can buy, not only a blog post about it.' },
    { title: 'Built for loan officers', body: 'Whether it fits an individual LO or is aimed at large companies.' },
    { title: 'Ongoing or one-time', body: 'An audit, a website build, or work that continues every month.' },
    { title: 'Price and terms', body: 'Published prices and commitments.' },
  ],
  companies: [
    {
      ...OURS_BASE,
      url: 'https://ownitsocial.com/ai-search-optimization',
      summary:
        'AI search optimization built into a done-for-you marketing department: structured data and an llms.txt summary, plain answers to the questions borrowers ask, consistent Google, Bing, and directory listings, steady reviews, and tracking of what AI assistants say about you.',
      bestFor: 'Loan officers who want AEO fed by real content, reviews, and partner mentions every week',
      keepInMind: 'Sold as part of the full department rather than as a stand-alone AEO project.',
    },
    OAK,
    TIM_ARMSTRONG,
    CREDIBILITYOS,
    { ...VONK, keepInMind: 'AI readiness comes through how the website is structured; it says visibility is never guaranteed. No social media management.' },
    THRIVE,
    WEBFX,
  ],
  choose: [
    { need: 'You want a one-time diagnosis', answer: 'CredibilityOS’s audit.' },
    { need: 'You need a new website built for AI search', answer: 'Tim Armstrong Marketing or Vonk Digital.' },
    { need: 'You want a local hands-on partner in North Carolina', answer: 'Oak & Algorithm.' },
    { need: 'You are a mortgage company with a large budget', answer: 'Thrive Agency or WebFX.' },
    { need: 'You want AEO as part of one team running all your marketing', answer: 'Own It Social.' },
  ],
  faqs: [
    {
      question: 'What is AEO for loan officers?',
      answer:
        'Answer engine optimization (AEO) is the work of getting a loan officer named when a borrower asks an AI assistant such as ChatGPT, Google AI Overviews, or Perplexity for a recommendation. It relies on consistent information across your website and listings, plain answers to common borrower questions, structured data, and reviews and mentions from other sources.',
    },
    {
      question: 'Which companies offer AI search optimization to loan officers?',
      answer:
        'Mortgage-focused options include Oak & Algorithm, which sells AI visibility for loan officers; Tim Armstrong Marketing, which builds AEO into websites; CredibilityOS, which runs a one-time AI visibility audit; and Vonk Digital, whose managed websites are structured for AI systems. Thrive Agency and WebFX offer GEO to larger companies. Own It Social includes AEO in its done-for-you marketing department for loan officers.',
    },
    {
      question: 'Is AEO different from SEO for a loan officer?',
      answer:
        'Yes. SEO aims to rank your pages in a list of results. AEO aims to get you named inside a single AI-written answer. Both rely on a strong website and Google Business Profile, but AEO puts more weight on consistent facts everywhere, quotable answers, and third-party reviews and mentions.',
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
