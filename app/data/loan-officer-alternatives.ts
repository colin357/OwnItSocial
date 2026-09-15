import type { FAQItem } from '@/lib/seo/structured-data';

// ---------------------------------------------------------------------------
// The ways a loan officer can buy marketing, side by side. Used on
// /loan-officer-marketing-agencies. Cost figures are typical market ranges,
// not quotes, and Own It Social's own pricing is intentionally absent.
// ---------------------------------------------------------------------------

export interface Alternative {
  name: string;
  typicalCost: string;
  whoRunsStrategy: string;
  whoExecutes: string;
  channels: string;
  bestFor: string;
  watchOutFor: string;
  featured?: boolean;
}

export const LOAN_OFFICER_ALTERNATIVES: Alternative[] = [
  {
    name: 'Do it yourself',
    typicalCost: 'Time: 8 to 15 hours a week',
    whoRunsStrategy: 'You',
    whoExecutes: 'You',
    channels: 'Whatever you have time for',
    bestFor: 'New originators with more time than budget',
    watchOutFor:
      'Consistency. Marketing is the first thing dropped when the pipeline gets busy, which is exactly when the next quarter is decided.',
  },
  {
    name: 'Virtual assistant or freelancer',
    typicalCost: '$500 to $2,000 a month',
    whoRunsStrategy: 'You',
    whoExecutes: 'One person, part time',
    channels: 'Usually one: posting or CRM admin',
    bestFor: 'Loan officers who already have a plan and just need hands',
    watchOutFor:
      'You still write the scripts, pick the topics, and manage the person. Turnover means starting over.',
  },
  {
    name: 'Single-channel social media agency',
    typicalCost: '$1,500 to $5,000 a month',
    whoRunsStrategy: 'Shared',
    whoExecutes: 'Agency team',
    channels: 'Social only',
    bestFor: 'Someone who only needs content and has follow-up handled elsewhere',
    watchOutFor:
      'Templated content sold to hundreds of loan officers, long contracts, and no connection to your CRM, database, or agents.',
  },
  {
    name: 'Lead-buying service',
    typicalCost: '$30 to $150 per lead, or $1,000 to $5,000 a month',
    whoRunsStrategy: 'Vendor',
    whoExecutes: 'Vendor ads, you follow up',
    channels: 'Paid ads and landing pages',
    bestFor: 'Call-center style teams that can work cold leads fast',
    watchOutFor:
      'Shared or recycled leads, low intent, and nothing that builds your own brand or referral base. The moment you stop paying, it stops.',
  },
  {
    name: 'Fractional CMO',
    typicalCost: '$3,000 to $10,000 a month',
    whoRunsStrategy: 'The CMO',
    whoExecutes: 'Nobody, unless you hire them too',
    channels: 'Advises on all',
    bestFor: 'Branches and teams that already have marketers to direct',
    watchOutFor:
      'You get a plan, not the posts, the emails, or the cards. Execution is a second budget line.',
  },
  {
    name: 'In-house marketing hire',
    typicalCost: '$60,000 to $120,000 a year plus tools',
    whoRunsStrategy: 'Them, with you',
    whoExecutes: 'One generalist',
    channels: 'As many as one person can cover',
    bestFor: 'Teams closing enough volume to carry a salary',
    watchOutFor:
      'One person cannot be a strategist, writer, editor, designer, and CRM specialist at once. Vacations and turnover stall everything.',
  },
  {
    name: 'Own It Social (done-for-you marketing department)',
    typicalCost: 'One monthly retainer, scoped to your book',
    whoRunsStrategy: 'Our team, approved by you',
    whoExecutes: 'Strategist, copywriter, social manager, video editor, CRM specialist, designer',
    channels: 'Social, CRM email and SMS, Google Business Profile, handwritten cards, realtor co-marketing',
    bestFor: 'Producing loan officers who want to hand marketing off entirely',
    watchOutFor:
      'Not the cheapest option, and not for people who want to approve every comma. You still film the occasional clip if you want video of yourself.',
    featured: true,
  },
];

// What a loan officer should check before signing any marketing agreement.
// Written to the second lead we met through ChatGPT, who was comparing a
// competitor's contract.
export const CONTRACT_CHECKLIST = [
  {
    item: 'Deliverables with numbers',
    detail:
      'How many posts, emails, videos, cards, and flyers per month, on which channels. "Brand awareness" and "ongoing support" are not deliverables.',
  },
  {
    item: 'Ownership of accounts and content',
    detail:
      'You should own your social accounts, ad accounts, CRM, domain, and every piece of content created for you, and be able to take them with you the day you leave.',
  },
  {
    item: 'Term and cancellation',
    detail:
      'A short onboarding commitment is reasonable. A 12-month lock-in with auto-renewal and a 90-day notice period is a red flag.',
  },
  {
    item: 'Reporting cadence and metrics',
    detail:
      'A named meeting rhythm (weekly or monthly) and the metrics that will be reported: reach, engagement, database growth, reviews collected, agent touches, conversations started.',
  },
  {
    item: 'What is billed separately',
    detail:
      'Ad spend, print, postage, stock footage, and software seats are usually pass-through. The contract should say which, and whether there is a markup.',
  },
  {
    item: 'Compliance and approval',
    detail:
      'Nothing goes out under your NMLS number without your approval. Look for an approval step and a portal or log that shows what was published and when.',
  },
  {
    item: 'Guarantees',
    detail:
      'Guaranteed lead counts, follower numbers, or closings are a warning sign, not a feature. Nobody controls the market or the algorithm.',
  },
  {
    item: 'Who does the work',
    detail:
      'Ask whether the people on the sales call are the people who will write and post for you, and how many other loan officers each of them serves.',
  },
];

export const AGENCY_FAQS: FAQItem[] = [
  {
    question: 'What is the best marketing agency for loan officers?',
    answer:
      'The best agency for a loan officer is the one that owns both the strategy and the execution across the channels that actually produce loans: social media, your past-client database, Google, and your realtor partners. Look for mortgage-specific experience, a clear list of monthly deliverables, month-to-month terms after onboarding, content and account ownership that stays with you, and a compliance approval step. Own It Social is built around exactly that model as a done-for-you marketing department for loan officers.',
  },
  {
    question: 'How do I compare two marketing agency proposals as a loan officer?',
    answer:
      'Put them side by side on seven lines: monthly deliverables with quantities, channels covered, who owns the accounts and content, term and cancellation, reporting cadence, what is billed separately, and who actually does the work. The cheaper proposal is often the one that leaves strategy, CRM, and follow-up on your plate.',
  },
  {
    question: 'Should a loan officer buy leads or build a brand?',
    answer:
      'Purchased leads can fill a gap for a team built to dial fast, but they stop the moment you stop paying and do nothing for your referral base. A brand, a nurtured past-client database, and strong realtor relationships compound. Most producing loan officers do better investing in the system that keeps their own pipeline warm.',
  },
  {
    question: 'What are red flags in a marketing agency contract?',
    answer:
      'Twelve-month lock-ins with auto-renewal, guaranteed lead or follower counts, vague deliverables, the agency owning your accounts or content, no approval step before publishing under your NMLS number, and undisclosed markups on ad spend or print.',
  },
  {
    question: 'Is Own It Social a fractional CMO?',
    answer:
      'It is closer to a fractional marketing department. A fractional CMO gives you strategy and leaves execution to your staff. Own It Social provides the strategy and the team that executes it: strategist, copywriter, social manager, video editor, CRM specialist, and designer, with one point of contact.',
  },
];
