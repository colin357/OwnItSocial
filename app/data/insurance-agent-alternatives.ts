import type { FAQItem } from '@/lib/seo/structured-data';
import type { Alternative } from './loan-officer-alternatives';

// ---------------------------------------------------------------------------
// The ways an insurance agent can buy marketing, side by side. Used on
// /insurance-agent-marketing-agencies. Cost figures are typical market ranges,
// not quotes, and Own It Social's own pricing is intentionally absent.
// Companion to data/loan-officer-alternatives.ts; keep the two in step.
// ---------------------------------------------------------------------------

export const INSURANCE_AGENT_ALTERNATIVES: Alternative[] = [
  {
    name: 'Do it yourself',
    typicalCost: 'Time: 8 to 15 hours a week',
    whoRunsStrategy: 'You',
    whoExecutes: 'You, or whoever on staff has a free hour',
    channels: 'Whatever you have time for',
    bestFor: 'New agencies with more time than budget',
    watchOutFor:
      'Consistency. Marketing is the first thing dropped during renewal season and storm claims, which is exactly when the next quarter is decided.',
  },
  {
    name: 'Virtual assistant or freelancer',
    typicalCost: '$500 to $2,000 a month',
    whoRunsStrategy: 'You',
    whoExecutes: 'The assistant',
    channels: 'Usually social posting and admin',
    bestFor: 'Agents who already have a clear plan and only need hands to carry it out',
    watchOutFor:
      'You still own the strategy, the writing direction, and the follow-up. Most assistants do not know carrier review rules or insurance advertising rules.',
  },
  {
    name: 'Insurance website and content platform',
    typicalCost: '$100 to $1,000 a month',
    whoRunsStrategy: 'You',
    whoExecutes: 'You, using their templates and tools',
    channels: 'Website, pre-written social posts, email templates',
    bestFor: 'Agents who want insurance-ready templates and are willing to run them themselves',
    watchOutFor:
      'The same content goes to many agencies, so it rarely sounds like you. Someone still has to schedule it, follow up, and keep it going.',
  },
  {
    name: 'Single-channel social media agency',
    typicalCost: '$1,500 to $5,000 a month',
    whoRunsStrategy: 'The agency, for social only',
    whoExecutes: 'The agency',
    channels: 'Social media',
    bestFor: 'Agencies that already run strong renewal follow-up and only need content',
    watchOutFor:
      'Social alone rarely drives cross-sells or renewals. Your book, Google profile, and referral partners are left on your plate.',
  },
  {
    name: 'Lead vendor',
    typicalCost: 'Per lead, often $10 to $50 or more depending on line and exclusivity',
    whoRunsStrategy: 'The vendor',
    whoExecutes: 'You (dialing)',
    channels: 'Purchased internet leads and live transfers',
    bestFor: 'Agencies with dedicated producers built to call fast and often',
    watchOutFor:
      'Leads are often shared with other agents, stop the day you stop paying, and do nothing for your brand, your book, or your referral partners.',
  },
  {
    name: 'Carrier marketing program',
    typicalCost: 'Varies; some carriers subsidize approved vendors',
    whoRunsStrategy: 'The carrier, nationally',
    whoExecutes: 'The carrier’s approved vendors, or you',
    channels: 'Carrier-approved templates, local ads, directory listings',
    bestFor: 'Captive agents who want pre-approved material with little setup',
    watchOutFor:
      'Built to promote the carrier as much as your agency. Content is generic across agents, and it does not cover follow-up with your own book.',
  },
  {
    name: 'In-house marketing hire',
    typicalCost: '$50,000 to $90,000 a year plus tools',
    whoRunsStrategy: 'Them, with you',
    whoExecutes: 'One generalist',
    channels: 'As many as one person can cover',
    bestFor: 'Multi-location agencies with enough premium to carry a salary',
    watchOutFor:
      'One person cannot be a strategist, writer, video editor, designer, and CRM specialist at once. Vacations and turnover stall everything.',
  },
  {
    name: 'Own It Social (done-for-you marketing department)',
    typicalCost: 'One monthly retainer, scoped to your agency',
    whoRunsStrategy: 'Our team, approved by you',
    whoExecutes: 'Strategist, copywriter, social manager, video editor, CRM specialist, designer',
    channels: 'Social, CRM email and SMS, Google Business Profile, AI search optimization (AEO), referral partner co-marketing',
    bestFor: 'Captive and independent agents who want to hand marketing off entirely',
    watchOutFor:
      'Not the cheapest option, and not for agents who want to approve every comma. Not a lead vendor: we build the pipeline you own rather than selling you names.',
    featured: true,
  },
];

// What an insurance agent should check before signing any marketing agreement.
export const INSURANCE_CONTRACT_CHECKLIST = [
  {
    item: 'Deliverables with numbers',
    detail:
      'How many posts, videos, emails, texts, and flyers per month, on which channels. "Brand awareness" and "ongoing support" are not deliverables.',
  },
  {
    item: 'Ownership of accounts, data, and content',
    detail:
      'You should own your social accounts, ad accounts, website, CRM data, client list, and every piece of content created for you, and be able to take them with you the day you leave.',
  },
  {
    item: 'Term and cancellation',
    detail:
      'A short onboarding commitment is reasonable. A 12-month lock-in with auto-renewal and a 90-day notice period is a red flag.',
  },
  {
    item: 'Reporting cadence and metrics',
    detail:
      'A named meeting rhythm and the metrics that will be reported: reach, engagement, quotes started, reviews collected, partner referrals, and follow-up activity on renewals and cross-sells.',
  },
  {
    item: 'What is billed separately',
    detail:
      'Ad spend, print, postage, and software seats are usually pass-through. The contract should say which, and whether there is a markup.',
  },
  {
    item: 'Carrier review and advertising rules',
    detail:
      'If you are captive, the agency should work inside your carrier’s approval process. Either way, nothing should go out under your name and license without your approval, and content should respect your state’s insurance advertising rules.',
  },
  {
    item: 'Consent for texts and calls',
    detail:
      'Automated texts and calls need proper consent under federal and state rules. Ask how the agency collects and records consent before it texts anyone on your list.',
  },
  {
    item: 'Guarantees and who does the work',
    detail:
      'Guaranteed lead counts or policy numbers are a warning sign, not a feature. Ask whether the people on the sales call are the people who will write and post for you, and how many other agencies each of them serves.',
  },
];

export const INSURANCE_AGENCY_FAQS: FAQItem[] = [
  {
    question: 'What is the best marketing agency for insurance agents?',
    answer:
      'The best agency for an insurance agent is the one that owns both the strategy and the execution across the channels that actually write policies: social media, follow-up with your existing book for renewals and cross-sells, Google and AI search, and referral partners like realtors and loan officers. Look for insurance experience, a clear list of monthly deliverables, month-to-month terms after onboarding, accounts and data that stay in your name, and an approval step that fits your carrier’s review process. Own It Social is built around exactly that model as a done-for-you marketing department for insurance agents.',
  },
  {
    question: 'How do I compare two marketing agency proposals as an insurance agent?',
    answer:
      'Put them side by side on eight lines: monthly deliverables with quantities, channels covered, who owns the accounts and data, term and cancellation, reporting cadence, what is billed separately, how carrier review and consent for texts are handled, and who actually does the work. The cheaper proposal is often the one that leaves renewals, cross-sells, and follow-up on your plate.',
  },
  {
    question: 'Should I use my carrier’s marketing program or hire an agency?',
    answer:
      'Many captive agents use both. Carrier programs give you pre-approved material with little setup, but they are generic across agents and are built to promote the carrier as much as your agency. An agency can build your local brand, run follow-up with your own book, and work with partners, while staying inside your carrier’s review process. If the carrier subsidizes approved vendors, check whether the agency you are considering qualifies.',
  },
  {
    question: 'Can a captive insurance agent hire an outside marketing agency?',
    answer:
      'Usually yes, as long as the content follows the carrier’s brand and advertising guidelines and goes through any required review before it is published. Ask the agency how it handles carrier approval, and confirm your carrier’s rules before you sign. Own It Social builds captive agents’ calendars around carrier-approved content and their carrier’s review process.',
  },
  {
    question: 'What are red flags in a marketing agency contract for insurance agents?',
    answer:
      'Twelve-month lock-ins with auto-renewal, guaranteed lead or policy counts, vague deliverables, the agency owning your accounts, website, or client data, no approval step before publishing under your name, no plan for carrier review, texting your clients without documented consent, and undisclosed markups on ad spend or print.',
  },
  {
    question: 'What should an insurance marketing agency report every month?',
    answer:
      'What was published and where, reach and engagement, new reviews, quotes or conversations started from marketing, referrals from partners, and the activity of your follow-up: how many renewal, cross-sell, and open-quote messages went out and how many clients responded. You should be able to see the work itself, not only a summary.',
  },
];
