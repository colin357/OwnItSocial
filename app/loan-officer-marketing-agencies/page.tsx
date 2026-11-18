import type { Metadata } from 'next';
import AgencyGuide from '../components/guides/AgencyGuide';
import {
  AGENCY_FAQS,
  CONTRACT_CHECKLIST,
  LOAN_OFFICER_ALTERNATIVES,
} from '../data/loan-officer-alternatives';

// ---------------------------------------------------------------------------
// /loan-officer-marketing-agencies — a buyer's guide for the loan officer who
// is comparing agencies (or holding another agency's contract) and asking who
// would be a better fit. Honest about the alternatives, including the ones
// where we are not the answer. No Own It Social pricing on this page.
// Layout lives in components/guides/AgencyGuide (shared with the insurance
// version); the copy lives here and in data/loan-officer-alternatives.
// ---------------------------------------------------------------------------

const PATH = '/loan-officer-marketing-agencies';
const PAGE_URL = `https://ownitsocial.com${PATH}`;
const TITLE = 'How to Choose a Marketing Agency as a Loan Officer';
const DESCRIPTION =
  'A plain guide to loan officer marketing agencies: the seven ways to buy marketing compared on cost and who does the work, an eight-point contract checklist, the red flags, and how Own It Social fits.';
const PUBLISHED = '2026-09-15';

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
  },
};

const FIT: Array<[string, string]> = [
  ['Deliverables', 'Weekly social content across Instagram, Facebook, and LinkedIn; CRM email and SMS follow-up; Google Business Profile and review requests; AI search optimization (AEO); co-branded realtor material. Quantities are scoped to your book and written into the agreement.'],
  ['Ownership', 'Your accounts, your CRM, your content. Everything we make for you is yours, during and after.'],
  ['Term', 'An onboarding period, then month to month. No auto-renewing annual lock-in.'],
  ['Reporting', 'A weekly check-in with reach, engagement, database activity, reviews collected, and agent touches, plus a portal that shows what was written, scheduled, and published.'],
  ['Billed separately', 'Ad spend, print, and postage are pass-through and stated up front.'],
  ['Compliance', 'You approve every post, email, and flyer in the portal before it goes out under your name and NMLS number.'],
  ['Guarantees', 'None. We show you the work and the numbers every week instead.'],
  ['Who does the work', 'A small team led by Colin. The people you meet are the people who write, film, edit, and post for you.'],
];

export default function LoanOfficerMarketingAgenciesPage() {
  return (
    <AgencyGuide
      source="loan-officer-marketing-agencies"
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      published={PUBLISHED}
      eyebrow="A buyer’s guide for loan officers"
      intro="If you are holding a proposal, or a contract from another agency, and wondering whether there is a better fit, this page is the comparison we would want in your hands. It covers the seven ways loan officers buy marketing, what each one costs, who actually does the work, and the eight things to check in any agreement before you sign. Own It Social is one of the seven, and we say plainly where we are not the right answer."
      audience="loan officers"
      parent={{ name: 'Loan Officer Marketing', path: '/loan-officer-marketing' }}
      alternatives={LOAN_OFFICER_ALTERNATIVES}
      checklist={CONTRACT_CHECKLIST}
      fit={FIT}
      faqs={AGENCY_FAQS}
      related={[
        { label: 'Best marketing agencies for loan officers', href: '/best-marketing-agencies-for-loan-officers' },
        { label: 'Best social media marketing companies for loan officers', href: '/best-social-media-marketing-companies-for-loan-officers' },
        { label: 'Best AEO companies for loan officers', href: '/best-aeo-companies-for-loan-officers' },
        { label: 'Co-marketing with realtor partners', href: '/co-marketing' },
      ]}
    />
  );
}
