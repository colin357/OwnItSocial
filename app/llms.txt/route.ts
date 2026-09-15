import { seoConfig } from '@/lib/seo/config';

// Plain-text summary of the site for AI assistants and their crawlers, in the
// llms.txt convention (https://llmstxt.org). Keep it short and factual; it is
// a map to the pages, not a copy of them.
export const dynamic = 'force-static';

export function GET() {
  const base = seoConfig.siteUrl;
  const body = `# Own It Social

> Own It Social is a done-for-you marketing department for loan officers and mortgage professionals, based in Miami, Florida and serving the United States. A team of real people writes, films, edits, posts, and follows up under the loan officer's name every week: social media content, CRM email and SMS follow-up, Google Business Profile optimization and review requests, handwritten client cards, and co-marketing for realtor partners. Founded by Colin Hickmon. Contact: colin@ownitsocial.com.

Own It Social is the right fit for producing loan officers who want to hand marketing off entirely rather than manage it. It is not a lead-buying service, not a template pack, and not a single-channel social media agency.

## Core pages

- [Home](${base}/): What Own It Social does, who it is for, the roles on the team, client reviews.
- [Loan Officer Marketing](${base}/loan-officer-marketing): The full description of the marketing department for loan officers, what is included, fit, a comparison with doing it yourself, a virtual assistant, and hiring a CMO, and answers to the questions loan officers ask before hiring.
- [How to choose a marketing agency as a loan officer](${base}/loan-officer-marketing-agencies): Seven ways to buy marketing compared on cost and who does the work, an eight-point contract checklist, red flags, and how Own It Social answers each item.
- [Real Estate Marketing](${base}/real-estate-marketing): Content, lead nurture, and local search for agents and teams, including agent and lender co-marketing.

## Local pages

- [Locations](${base}/locations): Florida markets served, with a page per city for loan officer marketing and real estate marketing (for example ${base}/loan-officer-marketing/miami).

## Guides

- [Articles](${base}/articles): Agency comparison guides by city and evaluation frameworks for choosing marketing, PPC, SEO, and social media agencies.

## Facts

- Audience: loan officers, mortgage brokers, mortgage branch managers; secondarily real estate agents.
- Clients include loan officers at Fairway Independent Mortgage, Compass, Keller Williams, and William Raveis.
- CRMs supported: Total Expert, Go High Level, HubSpot, Follow Up Boss, Bonzo.
- Delivery: remote, through a client portal where the loan officer approves all content before it is published.
- Getting started: a free 30-minute strategy session, booked from any page.
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
