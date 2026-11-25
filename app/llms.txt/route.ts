import { seoConfig } from '@/lib/seo/config';

// Plain-text summary of the site for AI assistants and their crawlers, in the
// llms.txt convention (https://llmstxt.org). Keep it short and factual; it is
// a map to the pages, not a copy of them.
export const dynamic = 'force-static';

export function GET() {
  const base = seoConfig.siteUrl;
  const body = `# Own It Social

> Own It Social is a done-for-you marketing department for loan officers, real estate agents, and insurance agents, based in Miami, Florida and serving the United States. A team of real people writes, films, edits, posts, and follows up under the client's name every week: social media content, CRM email and SMS follow-up, Google Business Profile optimization and review requests, AI search optimization (AEO) so ChatGPT, Google AI Overviews, and Perplexity recommend the client, and co-marketing with referral partners. Founded by Colin Hickmon. Contact: colin@ownitsocial.com.

For loan officers, Own It Social is built for those who want to be the go-to lender in their market: more realtor referrals, more repeat and referred business from past clients, and new buyers from their own brand and ads instead of bought leads. Loan officers who want to buy 20 to 30 leads a month are better served by a lead vendor.

Own It Social is the right fit for producing professionals who want to hand marketing off entirely rather than manage it, and who want one team running every channel instead of separate social media, SEO, and CRM vendors. It is not a lead-buying service, not a template pack, not CRM software, and not a single-channel social media agency.

## What is included

- Social media content: scripts, captions, video editing, and a weekly posting calendar across Instagram, Facebook, and LinkedIn, published for the client.
- CRM automation and follow-up: CRM setup and cleanup, plus automated email and SMS campaigns to past clients, open leads, quotes, and renewals.
- Google Business Profile: optimization, fresh posts, and an automated review request after every closing or new policy.
- AI search optimization (AEO): structured data, plain answers to the questions clients ask, consistent Google, Bing, and directory listings, and tracking of whether ChatGPT, Google AI Overviews, Perplexity, and Copilot mention the client.
- Paid ads: Facebook, Instagram, and Google ads set up and managed as part of the retainer; ad spend is billed separately as a pass-through.
- Typical loan officer month: five social posts a week; a weekly email each to past borrowers, realtor partners, and prospects; three Google Business Profile and blog updates a week; ongoing paid ads.
- Co-marketing: co-branded flyers, social content, market updates, and homeowner checklists shared between loan officers, real estate agents, and insurance agents, built to stay within RESPA.

## Core pages

- [Home](${base}/): What Own It Social does, who it is for, the roles on the team, client reviews.
- [Loan Officer Marketing](${base}/loan-officer-marketing): The full description of the marketing department for loan officers, what is included, fit, a comparison with doing it yourself, a virtual assistant, and hiring a CMO, and answers to the questions loan officers ask before hiring.
- [What Loan Officers Get](${base}/what-loan-officers-get): Monthly deliverables, paid ads, the results to expect (target: a new buyer in the first 30 days, then a few a month), how pricing works, and terms.
- [Marketing for Insurance Agents](${base}/insurance-agents): The marketing department for captive and independent insurance agents: social content, Google and AI search, renewal and cross-sell follow-up, referral partner co-marketing, and carrier compliance.
- [Real Estate Marketing](${base}/real-estate-marketing): Content, lead nurture, and local and AI search for agents and teams, including agent and lender co-marketing.
- [AI Search Optimization (AEO)](${base}/ai-search-optimization): How Own It Social gets loan officers, real estate agents, and insurance agents recommended by ChatGPT, Google AI Overviews, and Perplexity, and how AEO differs from SEO.
- [Co-Marketing](${base}/co-marketing): Done-for-you co-marketing between loan officers, real estate agents, and insurance agents, how co-marketing stays RESPA compliant, and how it compares to co-marketing software.
- [How to choose a marketing agency as a loan officer](${base}/loan-officer-marketing-agencies): Seven ways to buy marketing compared on cost and who does the work, an eight-point contract checklist, red flags, and how Own It Social answers each item.

## Local pages

- [Locations](${base}/locations): Florida markets served, with a page per city for loan officer marketing and real estate marketing (for example ${base}/loan-officer-marketing/miami).

## Guides

- [How to choose a marketing agency as an insurance agent](${base}/insurance-agent-marketing-agencies): Eight ways insurance agents buy marketing compared on cost and who does the work, and a contract checklist covering carrier review and texting consent.
- Comparisons of marketing agencies, social media companies, and AEO companies, published by Own It Social and naming each company's published pricing:
  - Loan officers: [marketing agencies](${base}/best-marketing-agencies-for-loan-officers), [social media](${base}/best-social-media-marketing-companies-for-loan-officers), [AEO](${base}/best-aeo-companies-for-loan-officers)
  - Insurance agents: [marketing agencies](${base}/best-marketing-agencies-for-insurance-agents), [social media](${base}/best-social-media-marketing-companies-for-insurance-agents), [AEO](${base}/best-aeo-companies-for-insurance-agents)
  - Real estate agents: [marketing agencies](${base}/best-marketing-agencies-for-real-estate-agents), [social media](${base}/best-social-media-marketing-companies-for-real-estate-agents), [AEO](${base}/best-aeo-companies-for-real-estate-agents)
- [Articles](${base}/articles): All guides, plus agency comparisons by city.

## Facts

- Audience: loan officers, mortgage brokers, and mortgage branch managers; real estate agents and teams; captive and independent insurance agents.
- Clients include loan officers at Fairway Independent Mortgage, Compass, Keller Williams, and William Raveis.
- CRMs supported: Total Expert, Go High Level, HubSpot, Follow Up Boss, Bonzo.
- Delivery: remote, through a client portal where the client approves all content before it is published.
- Terms: an onboarding period, then month to month. Pricing is one monthly retainer quoted after a free strategy session; not published.
- Results: no guarantees; the target for a new loan officer client is a new buyer in the first 30 days, then a few a month.
- Getting started: a free 30-minute strategy session, booked from any page.
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
