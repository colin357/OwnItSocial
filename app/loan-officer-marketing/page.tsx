import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookingProvider } from '../components/home/Booking';
import BookButton from '../components/home/BookButton';
import FaqSection from '../components/home/FaqSection';
import Footer from '../components/home/Footer';
import Hero from '../components/home/Hero';
import Nav from '../components/home/Nav';
import PortalPreview from '../components/home/PortalPreview';
import Reveal from '../components/home/Reveal';
import ServiceRail from '../components/home/ServiceRail';
import { LOAN_OFFICER_FAQS } from '../data/loan-officer-faqs';
import { cities } from '../data/cities';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';

// ---------------------------------------------------------------------------
// /loan-officer-marketing — the indexable home of "the marketing department
// for loan officers".
//
// /cmo carries most of this copy for paid traffic and is deliberately noindex.
// This page exists so search engines and AI assistants have a public page that
// answers, in plain text, what we do, who it is for, what is included, how it
// compares to the alternatives, and what loan officers ask before hiring us.
// It is also the parent of every /loan-officer-marketing/[city] page.
//
// No pricing here by design.
// ---------------------------------------------------------------------------

const PAGE_URL = 'https://ownitsocial.com/loan-officer-marketing';
const DESCRIPTION =
  'Own It Social is the marketing department for loan officers: weekly social content, CRM email and SMS follow-up, Google Business Profile, handwritten cards, and realtor co-marketing, all done for you. See what is included and what loan officers ask before hiring us.';

export const metadata: Metadata = {
  title: 'Loan Officer Marketing — a done-for-you marketing department',
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Loan Officer Marketing — a done-for-you marketing department | Own It Social',
    description:
      'Weekly social content, CRM follow-up, Google presence, and realtor co-marketing for loan officers, handled by one team. Book a free strategy session.',
    url: PAGE_URL,
    type: 'website',
  },
};

const NAV_LINKS = [
  { label: 'What we do', href: '#department' },
  { label: 'Fit', href: '#fit' },
  { label: 'Compare', href: '#compare' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Choosing an agency', href: '/loan-officer-marketing-agencies' },
];

// The department, framed as the outcome and the deliverable that produces it.
// Same claims as /cmo; keep the two in step.
const DEPARTMENT = [
  {
    role: 'A social presence that brings in buyers',
    outcome:
      'You stay in front of buyers and agents every week, so new conversations keep starting without you opening the app.',
    deliverable:
      'Done-for-you content: scripts, captions, and a posting calendar across Instagram, Facebook, and LinkedIn, published for you.',
  },
  {
    role: 'Past clients who come back to you',
    outcome:
      'The clients you have already helped become repeat business, refinances, and referrals, reached with the right message at the right time.',
    deliverable:
      'CRM setup and cleanup, plus automated email and SMS campaigns that keep you connected to your past-client list.',
  },
  {
    role: 'A Google profile that ranks and collects reviews',
    outcome:
      'When someone searches for a loan officer near them, you show up, with fresh five-star reviews to close the deal.',
    deliverable:
      'Google Business Profile optimization and an automated review-request system after every closing.',
  },
  {
    role: 'Handwritten cards that make you unforgettable',
    outcome:
      'Clients remember you at the closing table and refer you at dinner parties because you showed up in their mailbox.',
    deliverable:
      'Real handwritten thank-you cards sent to clients and partners at the moments that matter.',
  },
  {
    role: 'Co-marketing that makes agents want to send you deals',
    outcome:
      'Realtor partners see you as the loan officer who makes them look good, so they send business your way.',
    deliverable:
      'Co-branded flyers, social content, and market updates your agents can actually use with their clients.',
  },
];

const FOR = [
  'Loan officers who treat their book like a business, not a side hustle',
  'Owner-operators who want to grow purchase volume and referral partners',
  'People who would rather delegate marketing to a team than white-knuckle it alone',
  'Anyone tired of being the bottleneck in their own growth',
];

const NOT_FOR = [
  'Anyone shopping for the cheapest post-a-day service',
  'People who want to micromanage every caption and comma',
  'Someone looking for a quick hack instead of a real system',
  'Anyone not ready to invest in steady, long-term growth',
];

// The three ways a loan officer usually tries to solve this, and the one we
// offer. Market ranges only; our own pricing is not on this page.
const OPTIONS = [
  {
    name: 'Do it yourself',
    cost: 'Your evenings and weekends',
    pros: 'Free, and you know your market best.',
    cons: 'Stops the moment you get busy. You are the strategist, writer, editor, and CRM admin on top of closing loans.',
    featured: false,
  },
  {
    name: 'Hire a virtual assistant',
    cost: '$500 to $2,000 a month',
    pros: 'Inexpensive help with posting and admin.',
    cons: 'Needs you to hand them the plan, the scripts, and the design. The strategy is still on your plate.',
    featured: false,
  },
  {
    name: 'Hire a CMO or in-house marketer',
    cost: '$60,000 to $200,000+ a year',
    pros: 'Dedicated attention and real strategy.',
    cons: 'Out of reach for one producer, and a CMO still needs people underneath them to execute.',
    featured: false,
  },
  {
    name: 'Own It Social',
    cost: 'One monthly retainer, scoped to your book',
    pros: 'A CMO’s strategy and a full team’s execution: strategist, copywriter, social manager, video editor, CRM specialist, and designer.',
    cons: 'Not the cheapest option, and not built for people who want to run every detail themselves.',
    featured: true,
  },
];

const LOGOS = [
  { src: '/images/Fairway.webp', alt: 'Fairway Independent Mortgage Corporation' },
  { src: '/images/Compass Logo.png', alt: 'Compass' },
  { src: '/images/Keller Williams.png', alt: 'Keller Williams' },
  { src: '/images/William Raveis.png', alt: 'William Raveis' },
];

const TESTIMONIALS = [
  {
    quote:
      'I’ve been working with Colin now for two months and he has taken a giant weight off my shoulders and managing my entire social media platform and creating content for me and scripts for me to utilize. If you are looking for someone to help take the burden off of posting social media Colin is your guy.',
    name: 'Michael Martin',
  },
  {
    quote:
      'Own it has helped me grow my social media by hundreds of thousands of views in just 30 days. It really has been exponential growth. They also make marketing through my crm a breeze. I highly recommend this business. Consistent and professional.',
    name: 'Taylor Eisenbarth',
  },
  {
    quote:
      'I’ve had an outstanding experience working with the team at Own It Social. They consistently deliver high-quality print marketing materials on time, create engaging social media content, and provide a clear strategy that keeps my marketing moving forward.',
    name: 'Justin Elkins',
  },
];

export default function LoanOfficerMarketingPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Loan Officer Marketing',
    serviceType: 'Done-for-you marketing department for loan officers',
    description: DESCRIPTION,
    url: PAGE_URL,
    audience: 'Loan officers, mortgage brokers, and mortgage branch managers',
    offers: DEPARTMENT.map((d) => d.role),
  });
  const faqSchema = generateFAQSchema(LOAN_OFFICER_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Loan Officer Marketing', url: '/loan-officer-marketing' },
  ]);

  return (
    <BookingProvider source="loan-officer-marketing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(serviceSchema) }}
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

        <Hero
          eyebrow="Loan officer marketing"
          headline={
            <>
              Your marketing shouldn’t stop
              <br />
              every time you’re closing.
            </>
          }
          body="Right now you are the whole department, and it stalls the second you get busy. Own It Social is the team that keeps it running, so your pipeline fills whether you have a free Sunday or not."
        />

        {/* ── The plain answer. Written to be quoted. ── */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
                <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  The marketing
                  <br />
                  department for
                  <br />
                  <span className="text-brand">loan officers</span>
                </h2>
                <div className="lg:pt-3">
                  <p className="max-w-xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                    Own It Social is a done-for-you marketing department for
                    loan officers and mortgage teams. One team writes, films,
                    edits, posts, and follows up under your name every week:
                    social media content, CRM email and SMS follow-up, Google
                    Business Profile and reviews, handwritten client cards, and
                    co-marketing for your realtor partners. You approve the
                    work in your own portal. We are based in Miami and work with
                    loan officers across the United States.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <BookButton size="md">Get your free strategy session</BookButton>
                    <Link
                      href="/loan-officer-marketing-agencies"
                      className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-ink underline decoration-ink/30 underline-offset-8 transition-colors hover:text-brand"
                    >
                      How to choose an agency
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-20 border-t border-line pt-12">
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
                  Trusted by loan officers at
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-x-14 gap-y-9 sm:gap-x-20">
                  {LOGOS.map((logo) => (
                    <div key={logo.src} className="relative h-11 w-[132px] sm:w-[150px]">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="150px"
                        className="object-contain opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── What you get: the department ── */}
        <section id="department" className="scroll-mt-24 bg-sand px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-[14ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                  You don’t get a freelancer. You get a department.
                </h2>
                <p className="max-w-sm text-[17px] leading-[1.6] text-muted sm:text-[18px]">
                  Every role a growing loan officer needs, filled, managed, and
                  executed for you.
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
              {DEPARTMENT.map((item, i) => (
                <Reveal key={item.role} delay={(i % 3) * 90} className="bg-white">
                  <article className="flex h-full flex-col bg-white p-8 sm:p-10">
                    <span className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-[22px] font-semibold leading-[1.25] text-ink">
                      {item.role}
                    </h3>
                    <p className="mt-4 flex-1 text-[16px] leading-[1.65] text-ink">
                      {item.outcome}
                    </p>
                    <p className="mt-6 border-l-2 border-brand pl-4 text-[14px] leading-[1.6] text-muted">
                      {item.deliverable}
                    </p>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={180} className="bg-ink">
                <div className="flex h-full flex-col justify-between bg-ink p-8 text-white sm:p-10">
                  <p className="text-[17px] leading-[1.6] text-white/75">
                    All of it reviewed and approved by you before anything goes
                    out under your name and NMLS number.
                  </p>
                  <div className="mt-8">
                    <BookButton variant="white" size="md">
                      See how it would work for you
                    </BookButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Services rail, shared with the homepage ── */}
        <section id="services" className="scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[82px]">
                How we can
                <br />
                help you
              </h2>
            </Reveal>
            <Reveal delay={120} className="mt-14">
              <ServiceRail />
            </Reveal>
          </div>
        </section>

        {/* ── Compare the options ── */}
        <section id="compare" className="scroll-mt-24 bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand-light">
                The options
              </p>
              <h2 className="mt-6 max-w-[16ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[60px] lg:text-[72px]">
                Four ways to stop being your own CMO
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-14 overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/20 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-white/60">
                      <th scope="col" className="py-4 pr-6">Option</th>
                      <th scope="col" className="py-4 pr-6">Typical cost</th>
                      <th scope="col" className="py-4 pr-6">What works</th>
                      <th scope="col" className="py-4">What doesn’t</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OPTIONS.map((o) => (
                      <tr
                        key={o.name}
                        className={`border-b border-white/15 align-top ${
                          o.featured ? 'bg-white/5' : ''
                        }`}
                      >
                        <th scope="row" className="py-6 pr-6 text-[18px] font-semibold text-white">
                          {o.name}
                        </th>
                        <td className="py-6 pr-6 text-[15px] text-white/80">{o.cost}</td>
                        <td className="py-6 pr-6 text-[15px] leading-[1.6] text-white/80">{o.pros}</td>
                        <td className="py-6 text-[15px] leading-[1.6] text-white/60">{o.cons}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-12">
                <BookButton variant="white">Book your strategy session</BookButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Fit ── */}
        <section id="fit" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                Let’s be honest
                <br />
                about fit
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
              <Reveal className="bg-white">
                <div className="h-full bg-white p-8 sm:p-10">
                  <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
                    This is for you if
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
                    This is not for you if
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {NOT_FOR.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[17px] leading-[1.55] text-muted">
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

        {/* ── Portal ── */}
        <section id="portal" className="scroll-mt-24 border-t border-line bg-sand px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-[14ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                  Watch it all in one place
                </h2>
                <p className="max-w-sm text-[17px] leading-[1.6] text-muted sm:text-[18px]">
                  Your own portal: what is written, what is scheduled, what went
                  out. Approve a month of content in a couple of taps.
                </p>
              </div>
            </Reveal>
            <div className="mx-auto mt-14 max-w-5xl">
              <PortalPreview />
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section id="results" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                What loan officers say
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={(i % 3) * 90} className="bg-white">
                  <figure className="flex h-full flex-col bg-white p-8 sm:p-10">
                    <div className="flex gap-1 text-brand" role="img" aria-label="Rated 5 out of 5">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <svg key={s} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="mt-7 flex-1 text-[17px] leading-[1.65] text-ink">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-8 border-t border-line pt-5">
                      <span className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-ink">
                        {t.name}
                      </span>
                      <span className="mt-1 block text-[13px] text-muted">Google review</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          heading={
            <>
              Questions loan
              <br />
              officers ask us
            </>
          }
          intro="The things loan officers ask before they hire a marketing team, answered plainly."
          faqs={LOAN_OFFICER_FAQS}
        />

        {/* ── Markets ── */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[1400px]">
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
              Loan officer marketing by market
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/loan-officer-marketing/${city.slug}`}
                    className="text-[15px] text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
                  >
                    {city.name}, {city.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="bg-brand px-5 py-24 text-white sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[18ch] font-display text-[44px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[70px] lg:text-[96px]">
                Ready to hand off your marketing?
              </h2>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <BookButton variant="white">Book your free session</BookButton>
                <a
                  href="mailto:colin@ownitsocial.com"
                  className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white underline underline-offset-8 transition-opacity hover:opacity-70"
                >
                  colin@ownitsocial.com
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </BookingProvider>
  );
}
