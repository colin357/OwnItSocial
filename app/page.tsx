import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookingProvider } from './components/home/Booking';
import BookButton from './components/home/BookButton';
import Nav from './components/home/Nav';
import PortalPreview from './components/home/PortalPreview';
import Reveal from './components/home/Reveal';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';

export const metadata: Metadata = {
  title: 'Own It Social — the marketing department for loan officers',
  description:
    'Done-for-you social content, CRM follow-up, and Google presence for loan officers. One team handles the marketing, you stay focused on closing loans. Book a free strategy session.',
  alternates: { canonical: 'https://ownitsocial.com' },
  openGraph: {
    title: 'Own It Social — the marketing department for loan officers',
    description:
      'Done-for-you social content, CRM follow-up, and Google presence for loan officers. Book a free strategy session.',
    url: 'https://ownitsocial.com',
    type: 'website',
  },
};

// Pain points — kept to a label each, no paragraph copy.
// NEEDS CONFIRMATION (Colin): are these the three things LOs actually say?
const PAIN_POINTS = [
  {
    label: 'No time to post',
    // lucide "clock"
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    label: 'Leads go cold',
    // lucide "trending-down"
    icon: (
      <>
        <path d="M22 17 13.5 8.5 8.5 13.5 2 7" />
        <path d="M16 17h6v-6" />
      </>
    ),
  },
  {
    label: 'No CMO in-house',
    // lucide "briefcase"
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
];

// Condensed from the deliverables on /cmo — Colin's own copy, not new claims.
const SERVICES = [
  {
    title: 'Social that brings in buyers',
    body: 'Scripts, captions, and a posting calendar across Instagram, Facebook, and LinkedIn — written and published for you, every week.',
  },
  {
    title: 'Past clients who come back',
    body: 'CRM setup and cleanup, plus automated email and SMS campaigns that keep you connected to the people you have already closed.',
  },
  {
    title: 'A Google profile that ranks',
    body: 'Google Business Profile optimization and an automated review request after every closing, so you show up with fresh five-star reviews.',
  },
  {
    title: 'Co-marketing agents want to use',
    body: 'Co-branded flyers, social content, and market updates your realtor partners can actually put in front of their own clients.',
  },
];

const INCLUDED = [
  'Social',
  'CRM',
  'Content',
  'Google Business Profile',
  'Handwritten cards',
  'Co-marketing',
];

const FOOTER_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portal', href: '#portal' },
  { label: 'Results', href: '#results' },
];

export default function Home() {
  const organizationSchema = generateOrganizationSchema({
    name: 'Own It Social',
    url: 'https://ownitsocial.com',
    logo: 'https://ownitsocial.com/OWN IT SOCIAL.png',
    sameAs: ['https://twitter.com/ownitsocial'],
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'Own It Social',
    address: {
      street: '',
      city: 'Miami',
      state: 'FL',
      postalCode: '',
      country: 'US',
    },
    priceRange: '$$',
  });

  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(localBusinessSchema) }}
      />
      {/* Arms the scroll reveal only when JS is available, before first paint. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add('js')`,
        }}
      />

      <div id="top" className="min-h-screen bg-white font-inter text-ink antialiased">
        <Nav />

        {/* ── Hero ── */}
        <section className="px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[14px] font-medium text-navy">
                Built exclusively for loan officers
              </p>
              <h1 className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[56px] lg:text-[68px]">
                Your marketing department,
                <br className="hidden sm:block" /> without the department.
              </h1>
              <p className="mx-auto mt-7 max-w-xl text-[19px] leading-[1.55] text-muted sm:text-[21px]">
                We write and post your social content, run the follow-up in your
                CRM, and keep your Google profile working — so the pipeline
                stays warm while you stay on the loans.
              </p>
              <div className="mt-9">
                <BookButton />
              </div>
            </div>

            {/* The product itself, as proof — pinned while it steps through
                the dashboard, review, and calendar. */}
            <div id="portal" className="mx-auto mt-16 max-w-5xl scroll-mt-24 sm:mt-20">
              <PortalPreview />
            </div>
          </div>
        </section>

        {/* ── Social proof ── */}
        <section
          id="results"
          className="scroll-mt-20 border-y border-line bg-sand px-5 py-14 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-center text-[14px] text-muted">
                Trusted by loan officers at
              </p>
              {/*
                Fairway is the one brand already used across the rest of the
                site, so it is the only logo here. Add the others once Colin
                confirms which clients are cleared to appear — the row is
                already a flex wrap, so they slot straight in.
              */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
                <Image
                  src="/images/Fairway.webp"
                  alt="Fairway Independent Mortgage Corporation"
                  width={190}
                  height={54}
                  className="h-[52px] w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
              <p className="mt-8 text-center text-[12px] text-muted/70">
                [NEEDS CONTENT: additional client logos, or one confirmed stat
                line]
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Pain points — sets up the offer that answers them ── */}
        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[44px]">
                  Sound familiar?
                </h2>
                <p className="mt-6 text-[19px] leading-[1.55] text-muted">
                  You closed the loans. The marketing waited until you had a
                  free evening, and then it waited some more.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-3">
              {PAIN_POINTS.map((point, i) => (
                <Reveal key={point.label} delay={i * 90}>
                  <div className="group h-full rounded-2xl border border-line bg-white px-7 py-11 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <svg
                      className="mx-auto h-7 w-7 text-navy"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {point.icon}
                    </svg>
                    <p className="mt-5 text-[17px] tracking-[-0.01em] text-ink">
                      {point.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── What you get ── */}
        <section
          id="services"
          className="scroll-mt-20 border-t border-line bg-sand px-5 py-24 sm:px-8 sm:py-32"
        >
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-[14px] font-medium text-navy">What you get</p>
                <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[44px]">
                  Everything a marketing hire would do. None of the hiring.
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2">
              {SERVICES.map((service, i) => (
                <Reveal key={service.title} delay={(i % 2) * 90}>
                  <div className="h-full rounded-2xl border border-line bg-white p-9 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <h3 className="text-[21px] font-medium leading-[1.25] tracking-[-0.02em]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.65] text-muted">
                      {service.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Your new CMO — the one dark moment on the page ── */}
        <section className="bg-navy px-5 py-24 text-white sm:px-8 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[48px]">
                Your new CMO
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-[19px] leading-[1.55] text-white/70 sm:text-[21px]">
                One team runs your entire marketing department for less than the
                cost of hiring anyone to do part of it.
              </p>

              <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/20 px-4 py-2 text-[14px] text-white/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-11 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                <BookButton variant="white">
                  Get your free strategy session
                </BookButton>
                <Link
                  href="/cmo"
                  className="text-[16px] text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                >
                  See everything that&rsquo;s included
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[44px]">
              Ready to hand off your marketing?
            </h2>
            <div className="mt-9">
              <BookButton />
            </div>
          </Reveal>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-line px-5 py-14 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[17px] font-medium tracking-[-0.02em]">
              Own It Social
            </span>
            <nav className="flex flex-wrap gap-x-7 gap-y-2" aria-label="Footer">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:colin@ownitsocial.com"
                className="text-[15px] text-muted transition-colors hover:text-ink"
              >
                colin@ownitsocial.com
              </a>
            </nav>
          </div>
          <p className="mx-auto mt-10 max-w-6xl text-[13px] text-muted">
            &copy; {new Date().getFullYear()} Own It Social
          </p>
        </footer>
      </div>
    </BookingProvider>
  );
}
