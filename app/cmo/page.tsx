import type { Metadata } from 'next';
import Image from 'next/image';
import CtaButton from './CtaButton';
import { BookingProvider } from './BookingModal';

// Paid-traffic campaign page — must NOT be indexed. This overrides the
// site-wide `index: true` / canonical set in app/layout.tsx.
export const metadata: Metadata = {
  title: 'Your New CMO — More Buyers in Your Pipeline, Consistently | Own It Social',
  description:
    'We become your entire marketing department, optimizing everything that brings buyers to you and building it into a consistent system — so you close more loans without hiring, managing, or posting anything yourself.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: 'https://ownitsocial.com/cmo' },
  openGraph: {
    title: 'Your New CMO — More Buyers in Your Pipeline, Consistently',
    description:
      'We optimize everything that brings buyers to you and turn it into a consistent system — a full marketing department for a rounding error against the cost of building one. Book your strategy call.',
    type: 'website',
  },
};

// The department, framed as outcomes (role) with the deliverable underneath.
const DEPARTMENT = [
  {
    role: 'A social presence that brings in buyers',
    outcome:
      'You stay in front of buyers and agents every week, so new conversations keep starting — without you ever opening the app.',
    deliverable:
      'Done-for-you content: scripts, captions, and a posting calendar across Instagram, Facebook, and LinkedIn, published for you.',
  },
  {
    role: 'Past clients who come back to you',
    outcome:
      'The clients you’ve already helped become repeat business, refis, and referrals — reached with the right message at the right time.',
    deliverable:
      'CRM setup and cleanup, plus automated email + SMS campaigns that keep you connected to your past-client list.',
  },
  {
    role: 'A Google profile that ranks and collects reviews',
    outcome:
      'When someone searches for a loan officer near them, you show up — with fresh 5-star reviews to close the deal.',
    deliverable:
      'Google Business Profile optimization and an automated review-request system after every closing.',
  },
  {
    role: 'Handwritten cards that make you unforgettable',
    outcome:
      'Clients remember you at the closing table and refer you at dinner parties — because you showed up in their mailbox.',
    deliverable:
      'Real handwritten thank-you cards sent to clients and partners at the moments that matter.',
  },
  {
    role: 'Co-marketing that makes agents want to send you deals',
    outcome:
      'Realtor partners see you as the loan officer who makes them look good — so they send business your way.',
    deliverable:
      'Co-branded flyers, social content, and market updates your agents can actually use with their clients.',
  },
];

const OUTCOMES = [
  {
    title: 'New buyers from social',
    body: 'We turn your social channels into a steady source of new buyer conversations — posting consistently so you stay in front of people ready to make a move.',
  },
  {
    title: 'Repeat and referral business',
    body: 'Your past clients are your warmest source of new deals. We reach them with the right message at the right time, turning them into refis, referrals, and repeat closings.',
  },
  {
    title: 'More deals from your agents',
    body: 'We give your realtor partners co-marketing they actually want to use, so you become the loan officer they send their buyers to.',
  },
  {
    title: 'A pipeline that stays full',
    body: 'Instead of feast-or-famine months, you get a consistent system that keeps new buyers coming in — without you having to run it.',
  },
];

const FOR = [
  'Loan officers who treat their book like a business, not a side hustle',
  'Owner-operators who want to grow purchase volume and referral partners',
  'People who&apos;d rather delegate marketing to a team than white-knuckle it alone',
  'Anyone tired of being the bottleneck in their own growth',
];

const NOT_FOR = [
  'Anyone shopping for the cheapest post-a-day service',
  'People who want to micromanage every caption and comma',
  'Someone looking for a quick hack instead of a real system',
  'Anyone not ready to invest in steady, long-term growth',
];

const FAQS = [
  {
    q: 'How is this different from an agency or a VA?',
    a: 'A VA needs you to hand them a plan. A typical agency runs one channel — social, or ads, or email. We do neither. We&apos;re your marketing department: we own the strategy AND the execution across every channel, and we report to your growth, not your task list. You get a CMO&apos;s thinking and a full team&apos;s output under one roof.',
  },
  {
    q: 'Do I actually have to do anything?',
    a: 'Almost nothing. We handle strategy, content, your CRM, your Google profile, the cards, the co-marketing — all of it. You approve what you want to approve, send us the occasional selfie video if you like being on camera, and close loans. That&apos;s the entire job.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Your presence goes live within the first couple of weeks, and reaching back out to your past clients often surfaces new buyer conversations in the first 30–60 days. Referral relationships and search rankings compound from there. This is a marketing department, not a lottery ticket — it builds a consistent pipeline of buyers, not a one-time spike.',
  },
  {
    q: 'What if I already post sometimes?',
    a: 'Good — you already know it works when you&apos;re consistent. The problem is &ldquo;sometimes.&rdquo; We make it every week, on strategy, without it depending on whether you had a free Sunday. We build on what&apos;s working and take the whole thing off your plate.',
  },
];

// Trust logos — same brand assets used across the rest of the site.
const TRUST_LOGOS = [
  { src: '/images/Fairway.webp', alt: 'Fairway Independent Mortgage' },
  { src: '/images/Compass Logo.png', alt: 'Compass' },
  { src: '/images/Keller Williams.png', alt: 'Keller Williams' },
  { src: '/images/William Raveis.png', alt: 'William Raveis' },
];

// Real client testimonials. The first is featured (long-form); the other two
// render as a compact pair below it.
const TESTIMONIALS = [
  {
    name: 'Justin Elkins',
    initials: 'JE',
    quote: [
      'I’ve had an outstanding experience working with the team at Own It Social. They consistently deliver high-quality print marketing materials on time, create engaging social media content, and provide a clear strategy that keeps my marketing moving forward.',
      'What I appreciate most is how collaborative the process is. We meet weekly to review performance metrics, discuss reach and engagement, brainstorm new ideas, and adjust our strategy based on what’s working. They don’t just hand me a marketing plan — they invite my input, encourage new ideas, and are always willing to take something I suggest and turn it into an effective campaign.',
      'The team is responsive, creative, organized, and genuinely invested in helping my business grow. If you’re a mortgage professional looking for a marketing partner that is proactive, dynamic, and easy to work with, I highly recommend Own It Social.',
    ],
  },
  {
    name: 'Taylor Eisenbarth',
    initials: 'TE',
    quote: [
      'Own It has helped me grow my social media by hundreds of thousands of views in just 30 days. It really has been exponential growth. They also make marketing through my CRM a breeze. I highly recommend this business. Consistent and professional.',
    ],
  },
  {
    name: 'Michael Martin',
    initials: 'MM',
    quote: [
      'I’ve been working with Colin now for two months and he has taken a giant weight off my shoulders — managing my entire social media presence and creating content and scripts for me to utilize. If you are looking for someone to take the burden of posting social media off your plate, Colin is your guy.',
    ],
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.375 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.453a1 1 0 00-1.176 0l-3.375 2.453c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.98 9.393c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.287-3.966z" />
        </svg>
      ))}
    </div>
  );
}

function Attribution({ name, initials }: { name: string; initials: string }) {
  return (
    <figcaption className="mt-6 flex items-center gap-3">
      <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-black text-sm">
        {initials}
      </span>
      <span className="text-sm">
        <span className="block font-bold text-gray-900">{name}</span>
        <span className="block text-gray-500">Own It Social client</span>
      </span>
    </figcaption>
  );
}

export default function CmoLandingPage() {
  return (
    <BookingProvider>
    <div className="min-h-screen bg-white text-gray-900">
      {/* Minimal header — no nav links, no escape routes. Logo + the one CTA. */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo is intentionally NOT a link — this is a single-purpose page. */}
          <span className="relative block h-9 w-48" aria-label="Own It Social">
            <Image
              src="/OWN IT SOCIAL.png"
              alt="Own It Social"
              fill
              priority
              sizes="192px"
              className="object-contain object-left"
            />
          </span>
          <CtaButton size="md" className="hidden sm:inline-flex">
            Book a Call
          </CtaButton>
        </div>
      </header>

      <main>
        {/* 1. HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
            <p className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-purple-100 text-sm font-bold tracking-wide text-purple-700">
              YOUR NEW CMO — BUILT FOR LOAN OFFICERS
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-balance">
              Your marketing shouldn’t stop
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                every time you’re closing a deal.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Right now, you’re the whole department — and it stalls the second
              you get busy. We become the team that keeps it running, so your
              pipeline fills whether you’ve got a free Sunday or not.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <CtaButton />
              <p className="text-sm text-gray-500">
                A 30-minute strategy call. No pitch decks, no pressure.
              </p>
            </div>
          </div>
        </section>

        {/* 2. THE OUTCOME */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              You close the loans.
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                We bring you the buyers.
              </span>
            </h2>
            <p className="mt-5 text-lg text-gray-600">
              We build one system that pulls new buyers in from every direction —
              and keeps it running month after month.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {OUTCOMES.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-gray-100 bg-gray-50/60 p-8"
              >
                <h3 className="text-xl font-black mb-3 text-gray-900">
                  {o.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. THE SHIFT / MECHANISM */}
        <section className="bg-gray-900 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold tracking-widest text-purple-400 mb-6">
              THE THIRD OPTION
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-10">
              Growing your marketing used to mean two options.
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
                <h3 className="text-xl font-black mb-3">Hire a real CMO</h3>
                <p className="text-gray-400 leading-relaxed">
                  A seasoned marketing leader runs $200k+ a year, fully loaded —
                  $15,000–$20,000 every month — before you&apos;ve hired a single
                  person to actually execute the work underneath them.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
                <h3 className="text-xl font-black mb-3">Do it all yourself</h3>
                <p className="text-gray-400 leading-relaxed">
                  Fit marketing in around your closings. It works when you have
                  time — but it&apos;s hard to keep consistent, and it&apos;s the
                  first thing to slip the moment business picks up.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-[1px]">
              <div className="rounded-3xl bg-gray-900 px-8 py-12">
                <h3 className="text-2xl md:text-3xl font-black mb-4">
                  &ldquo;Your New CMO&rdquo; is the third option.
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  A CMO&apos;s strategy plus a full team&apos;s execution — a
                  complete marketing department that brings you a steady flow of
                  new buyers, for a rounding error against the cost of building
                  one yourself.
                </p>
                <div className="mt-8">
                  <CtaButton variant="inverse">
                    Book Your CMO Strategy Call
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT YOU GET — the department */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              You don&apos;t get a freelancer.
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                You get a whole department.
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Every role a growing loan officer needs — filled, managed, and
              executed for you.
            </p>
          </div>
          <div className="space-y-5">
            {DEPARTMENT.map((item, i) => (
              <div
                key={item.role}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-black">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">
                      {item.role}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {item.outcome}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-purple-200 pl-4">
                      {item.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <CtaButton>Book Your CMO Strategy Call</CtaButton>
          </div>
        </section>

        {/* 5. WHO THIS IS FOR / NOT FOR */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Let&apos;s be honest about fit.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-black mb-6 text-gray-900">
                  This is for you if&hellip;
                </h3>
                <ul className="space-y-4">
                  {FOR.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-fairway-green mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-black mb-6 text-gray-900">
                  This is not for you if&hellip;
                </h3>
                <ul className="space-y-4">
                  {NOT_FOR.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-gray-300 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span
                        className="text-gray-500 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SOCIAL PROOF — placeholders, drop real ones in */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Loan officers who stopped doing their own marketing
            </h2>
            <p className="text-lg text-gray-600">
              Real words from loan officers who handed us their marketing.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Featured, long-form testimonial */}
            <figure className="rounded-2xl border border-gray-100 bg-gray-50/60 p-8 md:p-10">
              <Stars />
              <blockquote className="mt-5 space-y-4 text-gray-700 leading-relaxed md:text-lg">
                {TESTIMONIALS[0].quote.map((para, i, arr) => (
                  <p key={i}>
                    {i === 0 ? '“' : ''}
                    {para}
                    {i === arr.length - 1 ? '”' : ''}
                  </p>
                ))}
              </blockquote>
              <Attribution
                name={TESTIMONIALS[0].name}
                initials={TESTIMONIALS[0].initials}
              />
            </figure>

            {/* The two shorter testimonials */}
            <div className="grid md:grid-cols-2 gap-6">
              {TESTIMONIALS.slice(1).map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-gray-100 bg-gray-50/60 p-8 flex flex-col"
                >
                  <Stars />
                  <blockquote className="mt-5 text-gray-700 leading-relaxed flex-1">
                    {'“'}
                    {t.quote[0]}
                    {'”'}
                  </blockquote>
                  <Attribution name={t.name} initials={t.initials} />
                </figure>
              ))}
            </div>
          </div>
          {/* Trust logos — teams our loan officers come from. */}
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 mt-16 mb-8">
            TRUSTED BY TEAMS AT
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            {TRUST_LOGOS.map((logo) => (
              <div
                key={logo.src}
                className="relative h-10 w-32 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Questions loan officers ask us
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl bg-white p-6 shadow-sm"
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-lg text-gray-900">
                    {faq.q}
                    <svg
                      className="flex-shrink-0 ml-4 w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p
                    className="mt-4 text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA — button opens the booking modal */}
        <section className="bg-gradient-to-br from-purple-600 to-blue-600 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-balance">
              Ready to fill your pipeline with more buyers?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Book a 30-minute strategy call. We&apos;ll map out exactly how your
              new CMO brings more buyers into your pipeline across social, your
              past clients, Google, and your referral partners — so you can focus
              on closing loans.
            </p>
            <div className="mt-10">
              <CtaButton variant="inverse">
                Book Your CMO Strategy Call
              </CtaButton>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer — legal only, no link farm, no escape routes. */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-black text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
            OWN IT SOCIAL
          </div>
          <p className="text-sm text-gray-500">
            © 2026 OwnItSocial.com · All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Marketing services for loan officers. Results vary.
          </p>
        </div>
      </footer>
    </div>
    </BookingProvider>
  );
}
