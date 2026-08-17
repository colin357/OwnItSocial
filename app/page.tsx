import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookingProvider } from './components/home/Booking';
import BookButton from './components/home/BookButton';
import Hero from './components/home/Hero';
import Marquee from './components/home/Marquee';
import Nav from './components/home/Nav';
import PortalPreview from './components/home/PortalPreview';
import Reveal from './components/home/Reveal';
import ServiceRail from './components/home/ServiceRail';
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

const FOOTER_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Portal', href: '#portal' },
  { label: 'Results', href: '#results' },
  { label: 'Articles', href: '/articles' },
  { label: 'Locations', href: '/locations' },
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

        <Hero />

        {/* Ticker directly under the hero, the way the eye expects the page to
            keep moving after a full-bleed image. */}
        <Marquee text="You close loans. We do the rest." />

        {/* ── Positioning statement + logos ── */}
        <section
          id="results"
          className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
                {/* Sized so each written line survives as a line — at anything
                    larger "department for" wraps and leaves "for" stranded. */}
                <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  We are the
                  <br />
                  marketing
                  <br />
                  department for
                  <br />
                  <span className="text-brand">loan officers</span>
                </h2>
                <div className="lg:pt-3">
                  <p className="max-w-xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                    Not a freelancer, not a template pack, not another tool for
                    you to learn. A team that writes, films, edits, posts, and
                    follows up — every week, under your name.
                  </p>
                  <div className="mt-9">
                    <BookButton size="md">
                      Get your free strategy session
                    </BookButton>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-20 border-t border-line pt-12">
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
                  Trusted by teams at
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

        {/* ── Work rail. Blurb and CTA on the left, oversized heading pushed to
             the right edge, rail spanning the full width beneath both. ── */}
        <section
          id="work"
          className="scroll-mt-24 overflow-hidden bg-sand px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <div className="max-w-md">
                  <p className="text-[17px] font-medium leading-[1.5] text-ink sm:text-[19px]">
                    Every graphic, script, and caption is made for one loan
                    officer and one market. Nothing here came out of a template
                    pack.
                  </p>
                  <div className="mt-7">
                    <BookButton size="md">See more</BookButton>
                  </div>
                </div>
                <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] md:text-right lg:text-[82px]">
                  A glimpse at
                  <br />
                  our work
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-14">
              <WorkGallery />
            </Reveal>
          </div>
        </section>

        {/* ── Services rail ── */}
        <section
          id="services"
          className="scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[82px]">
                  How we can
                  <br />
                  help you
                </h2>
                <div className="max-w-sm md:text-right">
                  <p className="text-[17px] font-medium leading-[1.5] text-ink sm:text-[19px]">
                    We are relentlessly focused on one thing: keeping your
                    pipeline full without adding to your workload.
                  </p>
                  <div className="mt-7">
                    <BookButton size="md">Learn more</BookButton>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-14">
              <ServiceRail />
            </Reveal>
          </div>
        </section>

        {/* ── The portal, as proof — pinned while it steps through the
             dashboard, review, and calendar views. ── */}
        <section
          id="portal"
          className="scroll-mt-24 border-t border-line bg-sand px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-[14ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                  Watch it all
                  <br />
                  in one place
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

        {/* ── Your new CMO — the one black moment on the page. Asymmetric: the
             pitch holds the left rail, the roster fills the right, so it reads
             as a team sheet rather than a poster. ── */}
        <section className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand-light">
                  Your new CMO
                </p>
                <h2 className="mt-6 font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[60px] lg:text-[72px]">
                  Meet your
                  <br />
                  marketing
                  <br />
                  department
                </h2>
                <p className="mt-8 max-w-md text-[17px] leading-[1.6] text-white/70 sm:text-[19px]">
                  Every role you would otherwise have to hire, interview, train,
                  and manage. One team, one retainer, and nothing for you to run.
                </p>
                <div className="mt-10 flex flex-col items-start gap-6">
                  <BookButton variant="white" className="whitespace-nowrap">
                    Get your free strategy session
                  </BookButton>
                  <Link
                    href="/cmo"
                    className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white underline decoration-white/40 underline-offset-8 transition-colors hover:text-brand-light"
                  >
                    See everything included
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="border-t border-white/15">
                {ROLES.map((item) => (
                  <li
                    key={item.role}
                    className="group flex flex-col gap-1 border-b border-white/15 py-7 transition-colors duration-300 hover:border-brand sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-display text-[26px] font-black uppercase leading-none tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-brand-light sm:text-[32px]">
                      {item.role}
                    </span>
                    <span className="text-[15px] text-white/55 transition-colors duration-300 group-hover:text-white/85 sm:text-right">
                      {item.work}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                What loan
                <br />
                officers say
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
              {TESTIMONIALS.map((item, i) => (
                <Reveal key={i} delay={(i % 3) * 90} className="bg-white">
                  <figure className="flex h-full flex-col bg-white p-8 sm:p-10">
                    {item.quote ? (
                      <div
                        className="flex gap-1 text-brand"
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
                        className="h-6 w-6 flex-shrink-0 text-brand/30"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.5 5C6.5 6.9 5 9.6 5 13v6h6v-6H8.2c0-2.3.9-4 2.8-5.2L9.5 5Zm9 0c-3 1.9-4.5 4.6-4.5 8v6h6v-6h-2.8c0-2.3.9-4 2.8-5.2L18.5 5Z" />
                      </svg>
                    )}

                    {item.quote ? (
                      <>
                        <blockquote className="mt-7 flex-1 text-[17px] leading-[1.65] text-ink">
                          {item.quote}
                        </blockquote>
                        <figcaption className="mt-8 border-t border-line pt-5">
                          <span className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-ink">
                            {item.name}
                          </span>
                          <span className="mt-1 block text-[13px] text-muted">
                            {item.role}
                          </span>
                        </figcaption>
                      </>
                    ) : (
                      <>
                        <div className="mt-7 flex-1 space-y-2.5" aria-hidden="true">
                          <span className="block h-2.5 w-full rounded-full bg-sand" />
                          <span className="block h-2.5 w-11/12 rounded-full bg-sand" />
                          <span className="block h-2.5 w-4/5 rounded-full bg-sand" />
                          <span className="block h-2.5 w-2/3 rounded-full bg-sand" />
                        </div>
                        <figcaption className="mt-8 border-t border-line pt-5 text-[13px] text-muted">
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

        {/* Black here, not purple: the closing CTA below is a full purple
            field, and two purple bands stacked read as one shapeless block. */}
        <Marquee text="Human made marketing." repeat={8} tone="dark" />

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

        {/* ── Footer ── */}
        <footer className="bg-ink px-5 pb-12 pt-20 text-white sm:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-12 border-b border-white/15 pb-12 lg:flex-row lg:items-start lg:justify-between">
              <span className="font-display text-[46px] uppercase leading-none tracking-[-0.03em] sm:text-[72px] lg:text-[96px]">
                <span className="font-black">Own It</span>{' '}
                <span className="font-semibold text-white/55">Social</span>
              </span>
              <nav
                className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3"
                aria-label="Footer"
              >
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-white/50">
                &copy; {new Date().getFullYear()} Own It Social
              </p>
              <a
                href="mailto:colin@ownitsocial.com"
                className="text-[13px] text-white/50 transition-colors hover:text-white"
              >
                colin@ownitsocial.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BookingProvider>
  );
}
