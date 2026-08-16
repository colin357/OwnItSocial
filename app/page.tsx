import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookingProvider } from './components/home/Booking';
import BookButton from './components/home/BookButton';
import Nav from './components/home/Nav';
import PortalPreview from './components/home/PortalPreview';
import Reveal from './components/home/Reveal';
import WorkGallery from './components/home/WorkGallery';
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

// Brand assets already in the repo. Each sits in a fixed box and is fitted with
// object-contain, so wildly different logo ratios still read as one row.
const LOGOS = [
  { src: '/images/Fairway.webp', alt: 'Fairway Independent Mortgage Corporation' },
  { src: '/images/Compass Logo.png', alt: 'Compass' },
  { src: '/images/Keller Williams.png', alt: 'Keller Williams' },
  { src: '/images/William Raveis.png', alt: 'William Raveis' },
];

// Verbatim five-star Google reviews. Justin's runs to three paragraphs on
// Google; the first is quoted here in full and unaltered rather than stitched
// together from parts. Adding an entry with an empty `quote` renders a marked
// slot instead, so the section still works while a new review is pending.
const TESTIMONIALS = [
  {
    quote:
      'I’ve been working with Colin now for two months and he has taken a giant weight off my shoulders and managing my entire social media platform and creating content for me and scripts for me to utilize. If you are looking for someone to help take the burden off of posting social media Colin is your guy.',
    name: 'Michael Martin',
    role: 'Google review',
  },
  {
    quote:
      'Own it has helped me grow my social media by hundreds of thousands of views in just 30 days. It really has been exponential growth. They also make marketing through my crm a breeze. I highly recommend this business. Consistent and professional.',
    name: 'Taylor Eisenbarth',
    role: 'Google review',
  },
  {
    quote:
      'I’ve had an outstanding experience working with the team at Own It Social. They consistently deliver high-quality print marketing materials on time, create engaging social media content, and provide a clear strategy that keeps my marketing moving forward.',
    name: 'Justin Elkins',
    role: 'Google review',
  },
];

// The department framed as the roles you would otherwise have to hire for.
// Each one maps to work already described on /cmo — no new claims.
const ROLES = [
  { role: 'Strategist', work: 'Decides what to say and when' },
  { role: 'Copywriter', work: 'Scripts, captions, and emails' },
  { role: 'Social manager', work: 'Posts and schedules every week' },
  { role: 'Video editor', work: 'Cuts your clips into content' },
  { role: 'CRM specialist', work: 'Runs the follow-up automatically' },
  { role: 'Designer', work: 'Flyers and co-branded material' },
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

      <div id="top" className="min-h-screen bg-white font-montserrat text-ink antialiased">
        <Nav />

        {/* ── Hero ── */}
        <section className="px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[14px] font-medium text-navy">
                Built exclusively for loan officers
              </p>
              {/* -0.03em, not tighter: Montserrat's round geometric forms
                  collide before Inter's do. */}
              <h1 className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[56px] lg:text-[68px]">
                You close loans.
                <br />
                We do the rest.
              </h1>
              {/* Wider than the Inter version — Montserrat runs about 8% wider,
                  which pushed a single word onto a fourth line. */}
              <p className="mx-auto mt-7 max-w-2xl text-[19px] leading-[1.55] text-muted sm:text-[21px]">
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
                Trusted by teams at
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-14 gap-y-9 sm:gap-x-20">
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
            </Reveal>
          </div>
        </section>

        {/* ── What you get ── */}
        <section
          id="services"
          className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
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

        {/* ── Our work — text rail left, tilted mosaic bleeding off the right.
             The section clips the overflow, which is what lets the grid run
             past the edge instead of forcing a horizontal scrollbar. ── */}
        <section className="overflow-hidden border-t border-line bg-sand px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
            <Reveal>
              <div>
                <p className="text-[14px] font-medium text-navy">Our work</p>
                <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[44px]">
                  A few things
                  <br className="hidden sm:block" /> we&rsquo;re proud of.
                </h2>
                <p className="mt-7 max-w-md text-[19px] leading-[1.55] text-muted">
                  Every graphic, script, and caption is made for one loan
                  officer and one market. Nothing here came out of a template
                  pack.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <WorkGallery />
            </Reveal>
          </div>
        </section>

        {/* ── Your new CMO — the one dark moment on the page.
             Asymmetric: the pitch holds the left rail, the roster fills the
             right, so it reads as a team sheet rather than a poster. ── */}
        <section className="bg-navy px-5 py-24 text-white sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="text-[14px] font-medium text-white/50">
                  Your new CMO
                </p>
                <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[44px]">
                  Meet your marketing department
                </h2>
                <p className="mt-7 max-w-md text-[19px] leading-[1.55] text-white/70">
                  Every role you would otherwise have to hire, interview, train,
                  and manage. One team, one retainer, and nothing for you to run.
                </p>
                {/* Stacked, not inline — the left rail is too narrow to hold
                    the button and the link on one line without wrapping. */}
                <div className="mt-10 flex flex-col items-start gap-6">
                  <BookButton variant="white" className="whitespace-nowrap">
                    Get your free strategy session
                  </BookButton>
                  <Link
                    href="/cmo"
                    className="text-[16px] text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                  >
                    See everything included
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="border-t border-white/10">
                {ROLES.map((item) => (
                  <li
                    key={item.role}
                    className="group flex flex-col gap-1 border-b border-white/10 py-6 transition-colors duration-300 hover:border-white/25 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="text-[19px] tracking-[-0.02em] text-white sm:text-[21px]">
                      {item.role}
                    </span>
                    <span className="text-[15px] text-white/55 transition-colors duration-300 group-hover:text-white/80 sm:text-right">
                      {item.work}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-sand px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="mx-auto max-w-2xl text-center text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[44px]">
                What loan officers say
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-3">
              {TESTIMONIALS.map((item, i) => (
                <Reveal key={i} delay={(i % 3) * 90}>
                  <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-9">
                    {item.quote ? (
                      <div
                        className="flex gap-0.5 text-navy"
                        role="img"
                        aria-label="Rated 5 out of 5"
                      >
                        {[0, 1, 2, 3, 4].map((s) => (
                          <svg
                            key={s}
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
                          </svg>
                        ))}
                      </div>
                    ) : (
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-navy/25"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.5 5C6.5 6.9 5 9.6 5 13v6h6v-6H8.2c0-2.3.9-4 2.8-5.2L9.5 5Zm9 0c-3 1.9-4.5 4.6-4.5 8v6h6v-6h-2.8c0-2.3.9-4 2.8-5.2L18.5 5Z" />
                      </svg>
                    )}

                    {item.quote ? (
                      <>
                        <blockquote className="mt-6 flex-1 text-[18px] leading-[1.6] text-ink">
                          {item.quote}
                        </blockquote>
                        <figcaption className="mt-7 border-t border-line pt-5 text-[14px]">
                          <span className="text-ink">{item.name}</span>
                          <span className="text-muted"> — {item.role}</span>
                        </figcaption>
                      </>
                    ) : (
                      <>
                        <div className="mt-6 flex-1 space-y-2.5" aria-hidden="true">
                          <span className="block h-2.5 w-full rounded-full bg-sand" />
                          <span className="block h-2.5 w-11/12 rounded-full bg-sand" />
                          <span className="block h-2.5 w-4/5 rounded-full bg-sand" />
                          <span className="block h-2.5 w-2/3 rounded-full bg-sand" />
                        </div>
                        <figcaption className="mt-7 border-t border-line pt-5 text-[13px] text-muted">
                          [NEEDS CONTENT: client quote, name, and title]
                        </figcaption>
                      </>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
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
