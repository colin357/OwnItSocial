import type { BestOfData, Company } from '../../components/guides/BestOfPage';

// ---------------------------------------------------------------------------
// Comparison pages for insurance agents. Facts and prices were read from each
// company's own website on 2026-11-18 (sources on every entry). Re-check
// prices before changing the `updated` date: vendors change them often.
// ---------------------------------------------------------------------------

const UPDATED = '2026-11-18';

const OURS_BASE = {
  name: 'Own It Social',
  url: 'https://ownitsocial.com/insurance-agents',
  kind: 'Done-for-you marketing department',
  serves: 'Captive and independent insurance agents',
  pricing: 'Not published. One monthly retainer scoped to your agency after a free strategy session; month to month after onboarding.',
  ours: true,
} as const;

const BRIGHTFIRE: Company = {
  name: 'BrightFire',
  url: 'https://www.brightfire.com',
  kind: 'Agency with self-serve packages',
  serves: 'Independent insurance agents',
  summary:
    'Insurance-specific websites, reviews and reputation, local listings, Google search ads, and social media posting, sold as individual monthly packages managed through BrightFire’s dashboard.',
  bestFor: 'Independent agents who want low-cost, month-to-month packages they can turn on one at a time',
  keepInMind: 'Social posts come from an insurance content library; custom campaigns cost extra.',
  pricing: 'Published: websites $170/mo, social media $100/mo, reviews $110/mo, listings $50/mo, search ads $160/mo plus ad spend. No contracts.',
  sources: ['https://www.brightfire.com/pricing', 'https://www.brightfire.com/solutions-for-insurance-agents/social-media-marketing'],
};

const STRATOSPHERE: Company = {
  name: 'Stratosphere',
  url: 'https://www.joinstratosphere.com',
  kind: 'Done-for-you agency',
  serves: 'Independent agencies, general agencies, and carriers',
  summary:
    'Insurance marketing agency offering agency websites, reputation management, SEO, content, paid search, social media, and what it calls AI Optimization for AI-powered search results.',
  bestFor: 'Independent agencies that want one insurance-focused vendor for web, search, and reputation',
  keepInMind: 'Pricing is by consultation. The company has been acquired by Global Marketing Resources.',
  pricing: 'Not published',
  sources: ['https://www.joinstratosphere.com'],
};

const IMC: Company = {
  name: 'Insurance Marketing Co',
  url: 'https://www.insurancemarketingco.com',
  kind: 'Done-for-you agency',
  serves: 'Medicare, health and ACA, final expense, and P&C agents',
  summary:
    'Managed lead generation for insurance agents: SEO, Google and Meta ads, websites and landing pages, email automation, reputation, and AI search (GEO) from its Growth tier up.',
  bestFor: 'Medicare, health, and final expense agents who want paid lead generation run for them',
  keepInMind: 'A larger monthly commitment than template vendors, and ad spend is on top. Organic social posting is not listed.',
  pricing: 'Published: $2,500, $3,500, or $5,500 a month plus ad spend; month to month with 30 days’ notice.',
  sources: ['https://www.insurancemarketingco.com/pricing'],
};

const TOSTEN: Company = {
  name: 'Tosten Marketing',
  url: 'https://tostenmarketing.com',
  kind: 'Done-for-you agency',
  serves: 'Insurance agencies from one employee to fifty',
  summary:
    'Insurance agency websites, SEO and schema markup, blogging, Google Business Profile management, pay-per-click, and done-for-you social posts with a dedicated social media manager.',
  bestFor: 'Small agencies that want insurance-specific SEO and social at a modest budget',
  keepInMind: 'Focused on web, search, and social; CRM follow-up and referral partner work are not part of the listed services.',
  pricing: 'Programs start at $100 a month (published).',
  sources: ['https://tostenmarketing.com'],
};

const AGENCY_REVOLUTION: Company = {
  name: 'Agency Revolution',
  url: 'https://agencyrevolution.com',
  kind: 'Software with done-for-you add-ons',
  serves: 'Independent agencies, plus carriers and brokerages',
  summary:
    'Marketing automation connected to your agency management system for retention and cross-sell campaigns, websites, and add-ons for texting, reviews, listings, social, and done-for-you marketing.',
  bestFor: 'Independent agencies that want automated retention and cross-sell campaigns tied to their AMS',
  keepInMind: 'A platform first. Pricing comes through a consultation.',
  pricing: 'Not published',
  sources: ['https://agencyrevolution.com'],
};

const AGENCYBLOC: Company = {
  name: 'AgencyBloc',
  url: 'https://www.agencybloc.com',
  kind: 'Software (AMS and CRM)',
  serves: 'Life, health, group benefits, and senior market agencies',
  summary:
    'Agency management and CRM software. Its Engage+ add-on includes a library of insurance social posts and scheduling tools that you run yourself.',
  bestFor: 'Life and health agencies that need an AMS with built-in marketing tools',
  keepInMind: 'Software you operate, not a team that creates and posts for you.',
  pricing: 'Published: AMS plans from $109, $139, or $169 a month; Engage+ by quote.',
  sources: ['https://www.agencybloc.com/pricing'],
};

const INCUBESOCIAL: Company = {
  name: 'IncubeSocial',
  url: 'https://incubesocial.com',
  kind: 'Social media management service',
  serves: 'Small businesses, including insurance agencies',
  summary:
    'Done-for-you social posting, stories, and reels with a content calendar you approve, comment and message replies, and monthly reports.',
  bestFor: 'Agents who want affordable, general social posting and engagement',
  keepInMind: 'A general small-business service; insurance is one of many industries it serves.',
  pricing: 'Published: $95 a month (4 posts) to $495 a month (16 posts); cancel anytime.',
  sources: ['https://incubesocial.com/pricing'],
};

const IGNITE: Company = {
  name: 'Ignite Visibility',
  url: 'https://ignitevisibility.com/industry/insurance/',
  kind: 'Full-service digital agency',
  serves: 'Larger insurance companies and multi-location agencies',
  summary: 'National agency with an insurance practice covering SEO, pay-per-click, social and paid social, content, and conversion optimization.',
  bestFor: 'Multi-location agencies and carriers with a larger budget',
  keepInMind: 'Built for bigger organizations than a single-office agent.',
  pricing: 'Published range: most insurance engagements run $2,000 to $10,000+ a month.',
  sources: ['https://ignitevisibility.com/industry/insurance/'],
};

const FIRST_PAGE_SAGE: Company = {
  name: 'First Page Sage',
  url: 'https://firstpagesage.com',
  kind: 'SEO and GEO agency',
  serves: 'Carriers, brokers, and larger insurance companies',
  summary: 'SEO, GEO, and AEO agency with an insurance practice that works on getting companies recommended in AI answers as well as search results.',
  bestFor: 'Carriers and large brokers investing in content-led AI search visibility',
  keepInMind: 'Works with companies, not individual local agents.',
  pricing: 'Not published',
  sources: ['https://firstpagesage.com'],
};

const WEBFX: Company = {
  name: 'WebFX',
  url: 'https://www.webfx.com/seo/services/ai-search-optimization/',
  kind: 'Full-service digital agency',
  serves: 'Businesses across industries, with insurance industry pages',
  summary: 'Generative engine optimization for ChatGPT, Perplexity, and Google AI Overviews, alongside a full catalog of SEO and digital marketing services.',
  bestFor: 'Larger agencies that want a big-agency AI search program',
  keepInMind: 'Not insurance-specific, and the published plans carry a six-month commitment.',
  pricing: 'Published: AI search optimization from $3,000 a month, six-month commitment.',
  sources: ['https://www.webfx.com/seo/services/ai-search-optimization/'],
};

const RELATED = [
  { label: 'How to choose a marketing agency as an insurance agent', href: '/insurance-agent-marketing-agencies' },
  { label: 'Best marketing agencies for insurance agents', href: '/best-marketing-agencies-for-insurance-agents' },
  { label: 'Best social media marketing companies for insurance agents', href: '/best-social-media-marketing-companies-for-insurance-agents' },
  { label: 'Best AEO companies for insurance agents', href: '/best-aeo-companies-for-insurance-agents' },
  { label: 'Co-marketing with realtors and loan officers', href: '/co-marketing' },
];
const related = (self: string) => RELATED.filter((r) => r.href !== self);
const PARENT = { name: 'Insurance Agent Marketing', path: '/insurance-agents' };

// ── Best marketing agencies ─────────────────────────────────────────────────
const MARKETING_PATH = '/best-marketing-agencies-for-insurance-agents';
export const INSURANCE_MARKETING: BestOfData = {
  path: MARKETING_PATH,
  source: 'best-marketing-insurance',
  title: 'Best Marketing Agencies for Insurance Agents',
  description:
    'A comparison of marketing agencies and platforms for insurance agents in 2026: Own It Social, BrightFire, Stratosphere, Insurance Marketing Co, Tosten Marketing, Agency Revolution, and Ignite Visibility, with who each fits and published pricing.',
  updated: UPDATED,
  eyebrow: 'For insurance agents',
  intro:
    'Insurance marketing companies range from $100-a-month template packages to full lead-generation programs. This list compares the established options by what they actually do, who they are built for, and what they publish about price, so you can shortlist two or three to talk to.',
  criteria: [
    { title: 'Insurance focus', body: 'Whether the company is built for insurance agents or serves them as one industry among many.' },
    { title: 'Who does the work', body: 'A team that creates and runs your marketing, or software and templates you run yourself.' },
    { title: 'Channels covered', body: 'Social, Google and AI search, follow-up with your book, ads, and referral partners.' },
    { title: 'Terms and pricing', body: 'Published prices, contract length, and what is billed on top.' },
  ],
  companies: [
    {
      ...OURS_BASE,
      summary:
        'A done-for-you marketing department for insurance agents: weekly social content, Google Business Profile and review requests, AI search optimization, automated email and SMS follow-up for quotes, renewals, and cross-sells, and co-branded material for realtor and loan officer partners. Works inside captive agents’ carrier review process.',
      bestFor: 'Agents who want one team running every channel, including follow-up with their existing book',
      keepInMind: 'Not a lead vendor and not the cheapest option. Pricing is scoped on a call rather than published.',
    },
    BRIGHTFIRE,
    STRATOSPHERE,
    IMC,
    TOSTEN,
    AGENCY_REVOLUTION,
    IGNITE,
  ],
  choose: [
    { need: 'You want the lowest monthly cost', answer: 'BrightFire or Tosten Marketing, whose published packages start around $100 a month.' },
    { need: 'You want paid leads for Medicare, health, or final expense', answer: 'Insurance Marketing Co runs ad-driven lead generation for those lines.' },
    { need: 'You want automated retention campaigns tied to your AMS', answer: 'Agency Revolution is built around that.' },
    { need: 'You want one team doing social, search, follow-up, and partners', answer: 'Own It Social, as a done-for-you marketing department.' },
    { need: 'You run a multi-location agency with a big budget', answer: 'A national agency such as Ignite Visibility.' },
  ],
  faqs: [
    {
      question: 'What is the best marketing agency for insurance agents?',
      answer:
        'It depends on what you need done. BrightFire and Tosten Marketing offer low-cost insurance-specific packages. Stratosphere covers websites, search, and reputation for independent agencies. Insurance Marketing Co runs paid lead generation, mainly for Medicare, health, and final expense. Agency Revolution automates retention campaigns from your AMS. Own It Social is a done-for-you marketing department that runs social, Google and AI search, follow-up with your book, and referral partner co-marketing for captive and independent agents.',
    },
    {
      question: 'How much does an insurance marketing agency cost?',
      answer:
        'Published prices in 2026 range from about $100 a month for a single package such as social posting or local listings, to $2,500 to $5,500 a month plus ad spend for managed lead generation, and $2,000 to $10,000 or more for national agencies. Done-for-you departments that cover several channels sit in between and are usually scoped to the size of the agency.',
    },
    {
      question: 'Should an insurance agent use an agency or buy leads?',
      answer:
        'Lead marketplaces sell shopper data and live transfers, which produce activity right away but stop when you stop paying and are often shared with other agents. An agency builds marketing you keep: your brand, reviews, Google presence, follow-up with your book, and referral partners. Many agencies use both, shifting budget toward the brand as it grows.',
    },
    {
      question: 'Do these companies work with captive agents?',
      answer:
        'Some focus on independent agents, including BrightFire and Stratosphere. Captive agents should confirm that any vendor can work within their carrier’s brand rules and review process. Own It Social works with both and builds captive agents’ content around carrier-approved material and review.',
    },
  ],
  parent: PARENT,
  related: related(MARKETING_PATH),
};

// ── Best social media marketing companies ───────────────────────────────────
const SOCIAL_PATH = '/best-social-media-marketing-companies-for-insurance-agents';
export const INSURANCE_SOCIAL: BestOfData = {
  path: SOCIAL_PATH,
  source: 'best-social-insurance',
  title: 'Best Social Media Marketing Companies for Insurance Agents',
  description:
    'A comparison of social media marketing companies for insurance agents in 2026: Own It Social, BrightFire, Tosten Marketing, IncubeSocial, Stratosphere, and AgencyBloc, with what each does, who it fits, and published pricing.',
  updated: UPDATED,
  eyebrow: 'For insurance agents',
  intro:
    'Social media for an insurance agent can mean a library of pre-written posts, a general social media service, or a team that writes, films, and posts content that sounds like you. This list compares the main options and what you actually get from each.',
  criteria: [
    { title: 'Custom or library content', body: 'Whether posts are written for your agency or drawn from a shared library.' },
    { title: 'Who posts', body: 'Done for you, or prepared for you to post yourself.' },
    { title: 'Insurance know-how', body: 'Whether the company knows coverage topics and carrier review.' },
    { title: 'Price and terms', body: 'Published prices and contract terms.' },
  ],
  companies: [
    {
      ...OURS_BASE,
      summary:
        'Short videos, carousels, and captions written for your agency and posted every week to Instagram, Facebook, and LinkedIn, with scripts and editing done for you. Social runs alongside Google and AI search, follow-up, and partner co-marketing so the content feeds the rest of your marketing.',
      bestFor: 'Agents who want custom content that sounds like them, as part of a full marketing department',
      keepInMind: 'Not a social-only service, and priced above library-based posting.',
    },
    BRIGHTFIRE,
    TOSTEN,
    INCUBESOCIAL,
    { ...STRATOSPHERE, keepInMind: 'Social media is listed among its services without published scope or pricing.' },
    AGENCYBLOC,
  ],
  choose: [
    { need: 'You want posting handled for about $100 a month', answer: 'BrightFire’s social package or a Tosten Marketing program.' },
    { need: 'You want a general social service with engagement replies', answer: 'IncubeSocial.' },
    { need: 'You want to run social yourself inside your AMS', answer: 'AgencyBloc’s Engage+ add-on.' },
    { need: 'You want custom video and content tied to the rest of your marketing', answer: 'Own It Social.' },
  ],
  faqs: [
    {
      question: 'What is the best social media marketing company for insurance agents?',
      answer:
        'For low-cost posting from an insurance content library, BrightFire and Tosten Marketing are built for agents. IncubeSocial is a general social service that includes insurance agencies. AgencyBloc gives you insurance post templates inside its software to run yourself. Own It Social writes and produces custom content for your agency, including video, and runs it alongside Google, AI search, follow-up, and partner co-marketing.',
    },
    {
      question: 'Does social media marketing work for insurance agents?',
      answer:
        'Yes, when it is consistent and local. Insurance is a trust purchase, and people would rather call an agent they recognize. Short videos that explain coverage in plain language, community posts, and a steady schedule keep you familiar so your name comes up at renewal time or when someone buys a home.',
    },
    {
      question: 'How much does social media management cost for an insurance agency?',
      answer:
        'Published prices in 2026 run from about $95 to $100 a month for library-based or entry-level posting up to around $500 a month for higher-volume general services. Custom content with video, produced by a dedicated team, costs more and is usually bundled with other marketing.',
    },
    {
      question: 'Can captive agents use a social media company?',
      answer:
        'Usually, as long as the content follows the carrier’s guidelines and goes through any required review. Ask any vendor how it handles carrier approval before you sign.',
    },
  ],
  parent: PARENT,
  related: related(SOCIAL_PATH),
};

// ── Best AEO companies ──────────────────────────────────────────────────────
const AEO_PATH = '/best-aeo-companies-for-insurance-agents';
export const INSURANCE_AEO: BestOfData = {
  path: AEO_PATH,
  source: 'best-aeo-insurance',
  title: 'Best AEO Companies for Insurance Agents',
  description:
    'A comparison of AI search optimization (AEO and GEO) companies for insurance agents in 2026: Own It Social, Insurance Marketing Co, Stratosphere, Tosten Marketing, BrightFire, First Page Sage, and WebFX.',
  updated: UPDATED,
  eyebrow: 'For insurance agents',
  intro:
    'More people now ask ChatGPT, Google AI Overviews, or Perplexity to recommend an insurance agent. Answer engine optimization (AEO), also called generative engine optimization (GEO), is the work of getting named in those answers. Here is who offers it to insurance agents, and in what form.',
  criteria: [
    { title: 'Offered as a real service', body: 'An ongoing AEO or GEO service, not only a blog post about it.' },
    { title: 'Built for agents', body: 'Whether it fits a local agency or is aimed at carriers and large brokers.' },
    { title: 'What else is included', body: 'Whether AEO comes with the content, reviews, and listings that feed it.' },
    { title: 'Price and terms', body: 'Published prices and commitments.' },
  ],
  companies: [
    {
      ...OURS_BASE,
      url: 'https://ownitsocial.com/ai-search-optimization',
      summary:
        'AI search optimization built into a done-for-you marketing department: structured data and an llms.txt summary, plain answers to the coverage questions people ask, consistent Google, Bing, and directory listings, steady reviews, and tracking of what AI assistants say about your agency.',
      bestFor: 'Agents who want AEO fed by real content, reviews, and partner mentions every week',
      keepInMind: 'Sold as part of the full department rather than as a stand-alone AEO project.',
    },
    { ...IMC, keepInMind: 'GEO is included from the Growth tier ($3,500 a month) up, as part of a lead-generation program.' },
    STRATOSPHERE,
    { ...TOSTEN, keepInMind: 'Its AI search work is centered on schema and structured data for ChatGPT and AI Overviews.' },
    { ...BRIGHTFIRE, keepInMind: 'AEO is limited to an llms.txt file included with its websites at no extra cost, not a separate service.' },
    FIRST_PAGE_SAGE,
    WEBFX,
  ],
  choose: [
    { need: 'You want basic AI readiness with your website', answer: 'BrightFire includes an llms.txt file with its insurance websites.' },
    { need: 'You want structured data and SEO on a small budget', answer: 'Tosten Marketing.' },
    { need: 'You already want paid lead generation', answer: 'Insurance Marketing Co includes GEO in its higher tiers.' },
    { need: 'You are a carrier or large broker', answer: 'First Page Sage or WebFX.' },
    { need: 'You want AEO as part of one team running all your marketing', answer: 'Own It Social.' },
  ],
  faqs: [
    {
      question: 'What is AEO for insurance agents?',
      answer:
        'Answer engine optimization (AEO) is the work of getting your agency named when someone asks an AI assistant such as ChatGPT, Google AI Overviews, or Perplexity for an insurance agent. It relies on consistent business information across your website and listings, plain answers to common coverage questions, structured data, and reviews and mentions from other sources.',
    },
    {
      question: 'Which companies offer AI search optimization to insurance agents?',
      answer:
        'Insurance-focused options include Insurance Marketing Co, which includes GEO in its Growth tier and above; Stratosphere, which lists AI Optimization; Tosten Marketing, which focuses on schema for AI search; and BrightFire, which adds an llms.txt file to its websites. First Page Sage and WebFX offer GEO to larger companies. Own It Social includes AEO in its done-for-you marketing department for agents.',
    },
    {
      question: 'How is AEO different from SEO for an insurance agency?',
      answer:
        'SEO aims to rank your pages in a list of results. AEO aims to get your agency named inside a single AI-written answer. Both rely on a strong website and Google Business Profile, but AEO puts more weight on consistent facts everywhere, quotable answers, and third-party reviews and mentions.',
    },
    {
      question: 'Can any company guarantee ChatGPT will recommend my agency?',
      answer:
        'No. Nobody controls what an AI assistant says. A good provider makes your agency the clearest, most consistent, best-reviewed option in your market and shows you, prompt by prompt, where you are and are not being named.',
    },
  ],
  parent: { name: 'AI Search Optimization', path: '/ai-search-optimization' },
  related: related(AEO_PATH),
};
