import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingProvider } from '../components/home/Booking';
import BookButton from '../components/home/BookButton';
import FaqSection from '../components/home/FaqSection';
import Footer from '../components/home/Footer';
import Nav from '../components/home/Nav';
import Reveal from '../components/home/Reveal';
import {
  AGENCY_FAQS,
  CONTRACT_CHECKLIST,
  LOAN_OFFICER_ALTERNATIVES,
} from '../data/loan-officer-alternatives';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';

// ---------------------------------------------------------------------------
// /loan-officer-marketing-agencies — a buyer's guide for the loan officer who
// is comparing agencies (or holding another agency's contract) and asking who
// would be a better fit. Honest about the alternatives, including the ones
// where we are not the answer. No Own It Social pricing on this page.
// ---------------------------------------------------------------------------

const PAGE_URL = 'https://ownitsocial.com/loan-officer-marketing-agencies';
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

const NAV_LINKS = [
  { label: 'Compare', href: '#compare' },
  { label: 'Contract checklist', href: '#contract' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Loan officer marketing', href: '/loan-officer-marketing' },
];

export default function LoanOfficerMarketingAgenciesPage() {
  const articleSchema = generateArticleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    author: 'Colin Hickmon',
    datePublished: PUBLISHED,
    image: '/og-image.png',
  });
  const faqSchema = generateFAQSchema(AGENCY_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Loan Officer Marketing', url: '/loan-officer-marketing' },
    { name: 'Choosing an agency', url: '/loan-officer-marketing-agencies' },
  ]);

  return (
    <BookingProvider source="loan-officer-marketing-agencies">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(breadcrumbSchema) }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add('js')`,
        }}
      />

      <div id="top" className="min-h-screen bg-white font-montserrat text-ink antialiased">
        <Nav links={NAV_LINKS} homeHref="/" />

        <article>
          {/* ── Title ── */}
          <header className="border-b border-line px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
            <div className="mx-auto max-w-[1400px]">
              <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                A buyer’s guide for loan officers
              </p>
              <h1 className="mt-6 max-w-[18ch] font-display text-[40px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[88px]">
                How to choose a marketing agency as a loan officer
              </h1>
              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
                <p className="max-w-2xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                  If you are holding a proposal, or a contract from another
                  agency, and wondering whether there is a better fit, this page
                  is the comparison we would want in your hands. It covers the
                  seven ways loan officers buy marketing, what each one costs,
                  who actually does the work, and the eight things to check in
                  any agreement before you sign. Own It Social is one of the
                  seven, and we say plainly where we are not the right answer.
                </p>
                <p className="text-[14px] leading-[1.6] text-muted">
                  Written by Colin Hickmon, founder of Own It Social. Cost
                  figures are typical market ranges in the United States as of
                  2026, not quotes. Updated {PUBLISHED}.
                </p>
              </div>
            </div>
          </header>

          {/* ── Comparison ── */}
          <section id="compare" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <h2 className="max-w-[16ch] font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  Seven ways to buy marketing, side by side
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-12 overflow-x-auto">
                  <table className="w-full min-w-[960px] border-collapse text-left text-[15px]">
                    <thead>
                      <tr className="border-b border-ink font-display text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
                        <th scope="col" className="py-4 pr-5">Option</th>
                        <th scope="col" className="py-4 pr-5">Typical cost</th>
                        <th scope="col" className="py-4 pr-5">Who runs strategy</th>
                        <th scope="col" className="py-4 pr-5">Who executes</th>
                        <th scope="col" className="py-4 pr-5">Channels</th>
                        <th scope="col" className="py-4 pr-5">Best for</th>
                        <th scope="col" className="py-4">Watch out for</th>
                      </tr>
                    </thead>
                    <tbody>
                      {LOAN_OFFICER_ALTERNATIVES.map((a) => (
                        <tr
                          key={a.name}
                          className={`border-b border-line align-top ${
                            a.featured ? 'bg-sand' : ''
                          }`}
                        >
                          <th scope="row" className="py-5 pr-5 text-[16px] font-semibold text-ink">
                            {a.name}
                          </th>
                          <td className="py-5 pr-5 text-ink">{a.typicalCost}</td>
                          <td className="py-5 pr-5 text-ink">{a.whoRunsStrategy}</td>
                          <td className="py-5 pr-5 leading-[1.55] text-ink">{a.whoExecutes}</td>
                          <td className="py-5 pr-5 leading-[1.55] text-ink">{a.channels}</td>
                          <td className="py-5 pr-5 leading-[1.55] text-ink">{a.bestFor}</td>
                          <td className="py-5 leading-[1.55] text-muted">{a.watchOutFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
                  {LOAN_OFFICER_ALTERNATIVES.filter((a) => !a.featured)
                    .slice(1, 4)
                    .map((a) => (
                      <div key={a.name} className="bg-white p-8">
                        <h3 className="text-[18px] font-semibold text-ink">
                          When {a.name.toLowerCase()} is the right call
                        </h3>
                        <p className="mt-3 text-[15px] leading-[1.65] text-muted">{a.bestFor}.</p>
                      </div>
                    ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── Contract checklist ── */}
          <section id="contract" className="scroll-mt-24 bg-sand px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                    Eight things to check before you sign
                  </h2>
                  <p className="mt-6 max-w-md text-[17px] leading-[1.6] text-muted">
                    Read any marketing agreement against this list. If a line is
                    missing or vague, ask for it in writing before you sign.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ol className="border-t border-line">
                  {CONTRACT_CHECKLIST.map((c, i) => (
                    <li key={c.item} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-7">
                      <span className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="text-[19px] font-semibold leading-[1.35] text-ink">{c.item}</h3>
                        <p className="mt-3 text-[16px] leading-[1.7] text-muted">{c.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </section>

          {/* ── How Own It Social fits ── */}
          <section className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              <Reveal>
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand-light">
                  Where we fit
                </p>
                <h2 className="mt-6 font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  How Own It Social answers the checklist
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <dl className="border-t border-white/15">
                  {[
                    ['Deliverables', 'Weekly social content across Instagram, Facebook, and LinkedIn; CRM email and SMS follow-up; Google Business Profile and review requests; handwritten cards; co-branded realtor material. Quantities are scoped to your book and written into the agreement.'],
                    ['Ownership', 'Your accounts, your CRM, your content. Everything we make for you is yours, during and after.'],
                    ['Term', 'An onboarding period, then month to month. No auto-renewing annual lock-in.'],
                    ['Reporting', 'A weekly check-in with reach, engagement, database activity, reviews collected, and agent touches, plus a portal that shows what was written, scheduled, and published.'],
                    ['Billed separately', 'Ad spend, print, and postage are pass-through and stated up front.'],
                    ['Compliance', 'You approve every post, email, and flyer in the portal before it goes out under your name and NMLS number.'],
                    ['Guarantees', 'None. We show you the work and the numbers every week instead.'],
                    ['Who does the work', 'A small team led by Colin. The people you meet are the people who write, film, edit, and post for you.'],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-1 gap-2 border-b border-white/15 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
                      <dt className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white">{k}</dt>
                      <dd className="text-[16px] leading-[1.7] text-white/75">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <BookButton variant="white">Book a strategy session</BookButton>
                  <Link
                    href="/loan-officer-marketing"
                    className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white underline decoration-white/40 underline-offset-8 transition-colors hover:text-brand-light"
                  >
                    See everything included
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          <FaqSection
            heading={
              <>
                Choosing an
                <br />
                agency: FAQ
              </>
            }
            faqs={AGENCY_FAQS}
            tone="light"
          />
        </article>

        <Footer />
      </div>
    </BookingProvider>
  );
}
