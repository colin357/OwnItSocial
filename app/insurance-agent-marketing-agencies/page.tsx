import type { Metadata } from 'next';
import AgencyGuide from '../components/guides/AgencyGuide';
import {
  INSURANCE_AGENCY_FAQS,
  INSURANCE_AGENT_ALTERNATIVES,
  INSURANCE_CONTRACT_CHECKLIST,
} from '../data/insurance-agent-alternatives';

// ---------------------------------------------------------------------------
// /insurance-agent-marketing-agencies — the insurance version of the loan
// officer buyer's guide. Same layout (components/guides/AgencyGuide), with
// insurance-specific options (lead vendors, carrier programs), carrier review,
// and consent for texts in the checklist. No Own It Social pricing.
// ---------------------------------------------------------------------------

const PATH = '/insurance-agent-marketing-agencies';
const PAGE_URL = `https://ownitsocial.com${PATH}`;
const TITLE = 'How to Choose a Marketing Agency as an Insurance Agent';
const DESCRIPTION =
  'A plain guide for insurance agents comparing marketing agencies: eight ways to buy marketing compared on cost and who does the work, an eight-point contract checklist with carrier review and texting consent, the red flags, and how Own It Social fits.';
const PUBLISHED = '2026-11-18';

export const metadata: Metadata = {
  title: `${TITLE} (and how Own It Social compares)`,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} | Own It Social`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    publishedTime: PUBLISHED,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Own It Social' }],
  },
};

const FIT: Array<[string, string]> = [
  ['Deliverables', 'Weekly social content across Instagram, Facebook, and LinkedIn; CRM email and SMS follow-up for open quotes, renewals, and cross-sells; Google Business Profile and review requests; AI search optimization (AEO); co-branded material for realtor and loan officer partners. Quantities are scoped to your agency and written into the agreement.'],
  ['Ownership', 'Your accounts, your CRM data, your content. Everything we make for you is yours, during and after.'],
  ['Term', 'An onboarding period, then month to month. No auto-renewing annual lock-in.'],
  ['Reporting', 'A regular check-in with reach, engagement, reviews collected, partner activity, and follow-up results, plus a portal that shows what was written, scheduled, and published.'],
  ['Billed separately', 'Ad spend, print, and postage are pass-through and stated up front.'],
  ['Compliance', 'Captive agents: we build around carrier-approved content and your carrier’s review process. Everyone: you approve every post, email, and flyer in the portal before it goes out under your name.'],
  ['Guarantees', 'None. We show you the work and the numbers instead.'],
  ['Who does the work', 'A small team led by Colin. The people you meet are the people who write, film, edit, and post for you.'],
];

export default function InsuranceAgentMarketingAgenciesPage() {
  return (
    <AgencyGuide
      source="insurance-agent-marketing-agencies"
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      published={PUBLISHED}
      eyebrow="A buyer’s guide for insurance agents"
      intro="If you are weighing a marketing proposal, a lead vendor, or your carrier’s program, and wondering what would actually grow your book, this page is the comparison we would want in your hands. It covers the eight ways insurance agents buy marketing, what each one costs, who actually does the work, and the eight things to check in any agreement before you sign, including carrier review and consent for texts. Own It Social is one of the eight, and we say plainly where we are not the right answer."
      audience="insurance agents"
      parent={{ name: 'Insurance Agent Marketing', path: '/insurance-agents' }}
      alternatives={INSURANCE_AGENT_ALTERNATIVES}
      checklist={INSURANCE_CONTRACT_CHECKLIST}
      fit={FIT}
      faqs={INSURANCE_AGENCY_FAQS}
      related={[
        { label: 'Best marketing agencies for insurance agents', href: '/best-marketing-agencies-for-insurance-agents' },
        { label: 'Best social media marketing companies for insurance agents', href: '/best-social-media-marketing-companies-for-insurance-agents' },
        { label: 'Best AEO companies for insurance agents', href: '/best-aeo-companies-for-insurance-agents' },
        { label: 'Co-marketing with realtors and loan officers', href: '/co-marketing' },
      ]}
    />
  );
}
