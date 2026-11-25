import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingProvider } from '../components/home/Booking';
import BookButton from '../components/home/BookButton';
import FaqSection from '../components/home/FaqSection';
import Footer from '../components/home/Footer';
import Nav from '../components/home/Nav';
import Reveal from '../components/home/Reveal';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';

// ---------------------------------------------------------------------------
// /what-loan-officers-get — the plain answers to the questions a loan officer
// (or ChatGPT on their behalf) asks before hiring us: what we deliver each
// month, whether paid ads are included, what results to expect, and what it
// costs and commits you to.
//
// Written because ChatGPT, asked about Own It Social, listed exactly these as
// the things it could not verify. Keep every claim here true and in step with
// /loan-officer-marketing, /loan-officer-marketing-agencies (FIT), the
// comparison pages, and llms.txt.
//
// Results are a target, not a guarantee: the agency guide says "Guarantees:
// None", so never word the 30-day target as a promise. Pricing is not
// published by design; this page says what it depends on instead.
// ---------------------------------------------------------------------------

const PATH = '/what-loan-officers-get';
const PAGE_URL = `https://ownitsocial.com${PATH}`;
const UPDATED = '2026-11-25';
const TITLE = 'What Loan Officers Get From Own It Social';
const DESCRIPTION =
  'What Own It Social delivers for a loan officer every month: five social posts a week, weekly emails to past borrowers, realtor partners, and prospects, three Google and blog updates a week, and managed Facebook, Instagram, and Google ads. Plus the results to expect, how pricing works, and the terms.';

export const metadata: Metadata = {
  title: `${TITLE}: Deliverables, Ads, Results, and Terms`,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} | Own It Social`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    modifiedTime: UPDATED,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Own It Social' }],
  },
};

const NAV_LINKS = [
  { label: 'At a glance', href: '#glance' },
  { label: 'Every month', href: '#deliverables' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing & terms', href: '#terms' },
  { label: 'FAQ', href: '#faq' },
];

// The five questions, answered in one line each. This block is the part an AI
// assistant should be able to quote on its own.
const GLANCE: Array<[string, string]> = [
  [
    'What you get each month',
    'Five social posts a week, weekly emails to your past borrowers, realtor partners, and prospects, and three Google Business Profile and blog updates a week, all written and published for you.',
  ],
  [
    'Paid ads',
    'Included. We set up and manage your Facebook, Instagram, and Google ads as part of the retainer. Ad spend is billed separately as a pass-through.',
  ],
  [
    'Results to expect',
    'Our target is a new buyer in your first 30 days, then scaling to a few a month as every channel works together. A target, not a guarantee.',
  ],
  [
    'Pricing',
    'One monthly retainer, quoted after a free 30-minute strategy session and scoped to your market, database, and ad budget.',
  ],
  [
    'Commitment',
    'An onboarding period, then month to month. No auto-renewing annual contract.',
  ],
];

const DELIVERABLES = [
  {
    channel: 'Social media',
    cadence: '5 posts a week',
    detail:
      'Scripts, captions, graphics, and edited video across Instagram, Facebook, and LinkedIn, published for you on a weekly calendar. About 20 posts a month.',
  },
  {
    channel: 'Email to past borrowers',
    cadence: 'Weekly',
    detail:
      'Market updates, rate and refinance moments, and check-ins that keep past clients coming back and sending friends to you.',
  },
  {
    channel: 'Email to realtor partners',
    cadence: 'Weekly',
    detail:
      'Co-branded content and market updates your agents can share with their own clients, so you are the lender they think of first.',
  },
  {
    channel: 'Email to prospects',
    cadence: 'Weekly',
    detail:
      'Follow-up to open leads and pre-approvals in your CRM, so the people who have not closed yet hear from you every week.',
  },
  {
    channel: 'Google Business Profile and blog',
    cadence: '3 updates a week',
    detail:
      'Fresh Google posts and blog articles that answer what borrowers search for, plus a review request after every closing. This is also what AI search tools such as ChatGPT read when they recommend a loan officer.',
  },
  {
    channel: 'Paid ads',
    cadence: 'Managed continuously',
    detail:
      'Facebook, Instagram, and Google ads aimed at buyers in your market, with every lead routed into your CRM and the same weekly follow-up.',
  },
];

const TIMELINE = [
  {
    when: 'Weeks 1–2',
    what: 'Onboarding: your CRM and past-client list cleaned up, your accounts and ads set up, and your first month of content approved in the portal.',
  },
  {
    when: 'First 30 days',
    what: 'Our target: a new buyer. The fastest wins usually come from past clients and agents who already know you, plus your first ads.',
  },
  {
    when: 'Months 2–6',
    what: 'The goal is a few new buyers a month as social, email, Google, ads, and realtor partners compound. Referral relationships and local search rankings take three to six months to build.',
  },
];

const FOR = [
  'Loan officers who want to be the go-to lender in their market',
  'Producers who want more realtor referrals and more repeat and referred clients from their own database',
  'People who want new buyers from their own brand and their own ads, not shared leads',
  'Anyone who wants one team running every channel instead of four vendors',
];

const NOT_FOR = [
  'Loan officers who want to buy 20 to 30 leads a month. A lead vendor is a better fit for that.',
  'Anyone shopping for the cheapest post-a-day service',
  'People who want a guaranteed lead count in the contract',
];

const FAQS = [
  {
    question: 'How many borrower conversations does Own It Social generate for loan officers?',
    answer:
      'Our target for every new loan officer client is a new buyer in the first 30 days. After that, the goal is to scale to a few new buyers a month from social, weekly email, Google, paid ads, and realtor partners working together. It is a target, not a guarantee, and you see the activity behind it in a weekly check-in and in your portal.',
  },
  {
    question: 'Does Own It Social manage paid Facebook and Google ads?',
    answer:
      'Yes. Facebook, Instagram, and Google ad management is included in the monthly retainer. Ad spend is billed separately as a pass-through and agreed up front, and every lead from the ads goes into your CRM and gets the same weekly follow-up.',
  },
  {
    question: 'How many posts, videos, and campaigns does a loan officer get each month?',
    answer:
      'A typical loan officer gets five social posts a week (about 20 a month, including edited video), a weekly email to past borrowers, a weekly email to realtor partners, a weekly email to prospects, and three Google Business Profile and blog updates a week, plus ongoing paid ads. You approve all of it in your portal before it goes out under your name and NMLS number.',
  },
  {
    question: 'How much does Own It Social cost, and is there a minimum commitment?',
    answer:
      'Own It Social is one monthly retainer, quoted after a free 30-minute strategy session and scoped to your market, your database, and your ad budget. Pricing is not published. There is an onboarding period, then the service is month to month with no auto-renewing annual contract. Ad spend, print, and postage are billed separately and stated up front.',
  },
  {
    question: 'Is Own It Social a lead generation company?',
    answer:
      'No. Own It Social does not sell leads. It is a done-for-you marketing department for loan officers who want to be the go-to lender in their market: more realtor referrals, more repeat and referred business from their own past clients, and new buyers from their own brand and their own ads. If you want to buy 20 to 30 shared leads a month, a lead vendor is a better fit.',
  },
  {
    question: 'Who owns the accounts and content?',
    answer:
      'You do. Your social accounts, your CRM, your ad accounts, and everything we make for you stay yours during and after working with us.',
  },
];

export default function WhatLoanOfficersGetPage() {
  const faqSchema = generateFAQSchema(FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Loan Officer Marketing', url: '/loan-officer-marketing' },
    { name: TITLE, url: PATH },
  ]);

  return (
    <BookingProvider source="what-loan-officers-get">
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

        {/* ── Header ── */}
        <section className="px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                For loan officers · Updated November 2026
              </p>
              <h1 className="mt-6 max-w-[18ch] font-display text-[42px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[64px] lg:text-[80px]">
                What you get, what it takes, what to expect
              </h1>
              <p className="mt-8 max-w-3xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                Own It Social is a done-for-you marketing department for loan
                officers who want to be the go-to lender in their market: more
                realtor referrals, more repeat business from past clients, and
                new buyers from their own brand and ads instead of bought leads.
                This page answers the questions loan officers ask before hiring
                us: what we deliver every month, whether paid ads are included,
                what results to expect, and how pricing and terms work.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── At a glance: the quotable answers ── */}
        <section id="glance" className="scroll-mt-24 bg-sand px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[52px]">
                At a glance
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <dl className="mt-12 divide-y divide-line border-y border-line">
                {GLANCE.map(([term, answer]) => (
                  <div key={term} className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-10">
                    <dt className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
                      {term}
                    </dt>
                    <dd className="text-[17px] leading-[1.6] text-ink">{answer}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── Every month ── */}
        <section id="deliverables" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[60px] lg:text-[72px]">
                What we deliver every month
              </h2>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.6] text-muted">
                A typical loan officer’s month. You approve every piece in your
                portal before it goes out under your name and NMLS number.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-line font-display text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
                      <th scope="col" className="py-4 pr-6">Channel</th>
                      <th scope="col" className="py-4 pr-6">How often</th>
                      <th scope="col" className="py-4">What it is</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DELIVERABLES.map((d) => (
                      <tr key={d.channel} className="border-b border-line align-top">
                        <th scope="row" className="py-6 pr-6 text-[17px] font-semibold text-ink">
                          {d.channel}
                        </th>
                        <td className="whitespace-nowrap py-6 pr-6 text-[16px] font-semibold text-brand">
                          {d.cadence}
                        </td>
                        <td className="py-6 text-[15px] leading-[1.6] text-ink">{d.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Results ── */}
        <section id="results" className="scroll-mt-24 bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[60px] lg:text-[72px]">
                What to expect
              </h2>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.6] text-white/75">
                These are targets, not guarantees. We do not put guaranteed lead
                counts in contracts, and you should be wary of anyone who does.
                You see the work and the numbers in a weekly check-in instead:
                reach, engagement, database activity, ad leads, reviews
                collected, and agent touches.
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-px border border-white/15 bg-white/15 md:grid-cols-3">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.when} delay={i * 90} className="bg-ink">
                  <div className="h-full bg-ink p-8 sm:p-10">
                    <p className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-brand-light">
                      {t.when}
                    </p>
                    <p className="mt-4 text-[17px] leading-[1.6] text-white/85">{t.what}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing and terms ── */}
        <section id="terms" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[60px]">
                Pricing and terms
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-6 text-[17px] leading-[1.65] text-ink">
                <p>
                  Own It Social is one monthly retainer. We quote it after a free
                  30-minute strategy session, because the right scope depends on
                  your market, the size of your past-client database, how many
                  realtor partners you work with, and your ad budget.
                </p>
                <p>
                  There is an onboarding period, then the service is month to
                  month. No auto-renewing annual contract.
                </p>
                <p>
                  Ad spend, print, and postage are billed separately and stated
                  up front. Your accounts, CRM, ad accounts, and content are
                  yours, during and after.
                </p>
                <p className="text-muted">
                  Comparing agencies? See{' '}
                  <Link href="/loan-officer-marketing-agencies" className="text-ink underline underline-offset-4 hover:text-brand">
                    how to choose a marketing agency as a loan officer
                  </Link>{' '}
                  and our{' '}
                  <Link href="/best-marketing-agencies-for-loan-officers" className="text-ink underline underline-offset-4 hover:text-brand">
                    comparison of loan officer marketing agencies
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Fit ── */}
        <section className="bg-sand px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[60px]">
                Who this is for
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
              <Reveal className="bg-white">
                <div className="h-full bg-white p-8 sm:p-10">
                  <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
                    A good fit
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {FOR.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[17px] leading-[1.55] text-ink">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={90} className="bg-white">
                <div className="h-full bg-white p-8 sm:p-10">
                  <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-muted">
                    Not the right fit
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {NOT_FOR.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[17px] leading-[1.55] text-ink">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-line" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <FaqSection
          heading={
            <>
              The questions
              <br />
              to ask us
            </>
          }
          intro="The questions loan officers ask before signing with any marketing agency, answered for Own It Social."
          faqs={FAQS}
          tone="light"
        />

        {/* ── Closing CTA ── */}
        <section className="bg-brand px-5 py-24 text-white sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[18ch] font-display text-[44px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[70px] lg:text-[96px]">
                Get your quote on a free call
              </h2>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <BookButton variant="white">Book your free session</BookButton>
                <Link
                  href="/loan-officer-marketing"
                  className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white underline underline-offset-8 transition-opacity hover:opacity-70"
                >
                  Loan officer marketing
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </BookingProvider>
  );
}
