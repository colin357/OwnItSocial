import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingProvider } from './components/home/Booking';
import BookButton from './components/home/BookButton';
import Nav from './components/home/Nav';
import PortalPreview from './components/home/PortalPreview';
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

const INCLUDED = ['Social', 'CRM', 'Content', 'Google Business Profile'];

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

      <div id="top" className="min-h-screen bg-white font-inter text-ink antialiased">
        <Nav />

        {/* ── Hero ── */}
        <section className="border-b border-line px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-[26px] font-medium leading-[1.25] tracking-[-0.01em] sm:text-[32px] lg:text-[40px]">
                The marketing department built exclusively for loan officers
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-[1.7] text-muted">
                We write and post your social content, run the follow-up in your
                CRM, and keep your Google profile working — so the pipeline
                stays warm while you stay on the loans.
              </p>
              <div className="mt-8">
                <BookButton />
              </div>
            </div>

            {/* The product itself, as proof — pinned while it steps through
                review, upload, and calendar. */}
            <div id="portal" className="mx-auto mt-12 max-w-4xl scroll-mt-20 sm:mt-16">
              <PortalPreview />
            </div>
          </div>
        </section>

        {/* ── Social proof ── */}
        <section
          id="results"
          className="scroll-mt-16 border-b border-line bg-sand px-5 py-10 sm:px-8"
        >
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-[13px] text-muted">
              Trusted by Fairway loan officers nationwide
            </p>
            {/*
              Deliberately not shipping logos or a headcount until Colin confirms
              which clients can be named and what the real number is. Replace this
              block with either a muted logo row or a single stat line — not both.
            */}
            <div className="mx-auto mt-5 max-w-2xl rounded-lg border border-dashed border-line px-6 py-6">
              <p className="text-[13px] font-medium text-ink">
                [NEEDS CONTENT: client logos, or one confirmed stat line]
              </p>
              <p className="mt-2 text-[13px] leading-[1.7] text-muted">
                e.g. &ldquo;25+ loan officers on retainer&rdquo; — confirm the
                number, or the list of clients cleared to appear here, before
                launch.
              </p>
            </div>
          </div>
        </section>

        {/* ── Pain points — sets up the offer block that answers them ── */}
        <section className="border-b border-line px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-[24px] font-medium leading-[1.25] tracking-[-0.01em]">
                Sound familiar?
              </h2>
              <p className="mt-4 text-base leading-[1.7] text-muted">
                You closed the loans. The marketing waited until you had a
                free evening, and then it waited some more.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3">
              {PAIN_POINTS.map((point) => (
                <div
                  key={point.label}
                  className="rounded-lg border border-line px-6 py-7 text-center sm:py-9"
                >
                  <svg
                    className="mx-auto h-6 w-6 text-navy"
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
                  <p className="mt-4 text-[15px] text-ink">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Your new CMO ── */}
        <section
          id="services"
          className="scroll-mt-16 border-b border-line bg-sand px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-[560px] rounded-xl bg-navy px-7 py-10 text-center sm:px-10">
            <h2 className="text-[24px] font-medium leading-[1.25] tracking-[-0.01em] text-white">
              Your new CMO
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-white/75">
              One team runs your entire marketing department for less than the
              cost of hiring anyone to do part of it.
            </p>
            <ul className="mt-7 flex flex-wrap justify-center gap-2">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/25 px-3 py-1 text-[13px] text-white/90"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/cmo"
              className="mt-7 inline-block text-[15px] text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              See everything that&rsquo;s included
            </Link>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="border-b border-line px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="text-[24px] font-medium leading-[1.25] tracking-[-0.01em]">
            Ready to hand off your marketing?
          </h2>
          <div className="mt-7">
            <BookButton />
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="px-5 py-10 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[16px] font-medium tracking-[-0.01em]">
              Own It Social
            </span>
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
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
          <p className="mx-auto mt-8 max-w-6xl text-[13px] text-muted">
            &copy; {new Date().getFullYear()} Own It Social
          </p>
        </footer>
      </div>
    </BookingProvider>
  );
}
