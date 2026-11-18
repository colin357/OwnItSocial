import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingProvider } from '../components/home/Booking';
import BookButton from '../components/home/BookButton';
import FaqSection from '../components/home/FaqSection';
import Footer from '../components/home/Footer';
import Nav from '../components/home/Nav';
import Reveal from '../components/home/Reveal';
import type { FAQItem } from '@/lib/seo/structured-data';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';

// ---------------------------------------------------------------------------
// /ai-search-optimization — AEO as part of the done-for-you department.
//
// Written for the prompts an AEO tracker showed us at zero visibility:
// "agencies that focus on AI search optimization for real estate", "firms for
// loan officers needing help with AI content and search ranking", "difference
// between SEO and AEO", "why optimize a business profile for AI search".
// AEO is sold as part of the full department, not as a standalone product, so
// the page says so. No pricing here by design.
// ---------------------------------------------------------------------------

const PAGE_URL = 'https://ownitsocial.com/ai-search-optimization';
const TITLE = 'AI Search Optimization (AEO) for Loan Officers, Agents, and Insurance';
const DESCRIPTION =
  'Own It Social gets loan officers, real estate agents, and insurance agents recommended by ChatGPT, Google AI Overviews, and Perplexity. AI search optimization (AEO) is built into our done-for-you marketing department.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} | Own It Social`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    siteName: 'Own It Social',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Own It Social' }],
  },
};

const NAV_LINKS = [
  { label: 'What it is', href: '#what' },
  { label: 'SEO vs AEO', href: '#compare' },
  { label: 'What we do', href: '#work' },
  { label: 'FAQ', href: '#faq' },
];

// How a classic search result and an AI answer differ, side by side.
const COMPARE: Array<[string, string, string]> = [
  ['Where people ask', 'Google and Bing search boxes', 'ChatGPT, Google AI Overviews, Perplexity, Copilot, Gemini'],
  ['What they get back', 'Ten links to choose from', 'One answer that names two to five professionals'],
  ['What wins', 'Rankings, backlinks, keywords', 'Clear, consistent facts and quotable answers the assistant can trust'],
  ['What you measure', 'Rank and clicks', 'Whether you are mentioned, how often, and next to whom'],
  ['How they relate', 'The foundation', 'Built on top of SEO: AI assistants read the same web pages and listings'],
];

// The work, in plain deliverables. Keep these in step with llms.txt.
const WORK = [
  {
    title: 'A website AI can read',
    body: 'Structured data that tells assistants who you are, what you do, where you work, and who you serve, plus an llms.txt summary and crawler access for the AI bots that matter.',
  },
  {
    title: 'Answers worth quoting',
    body: 'Plain, stand-alone answers to the questions your clients actually ask an AI assistant, written so a model can lift them word for word, and published on pages built to be cited.',
  },
  {
    title: 'Consistent listings everywhere',
    body: 'Your Google Business Profile, Bing Places, and the directories AI assistants pull from all say the same thing. ChatGPT search leans on Bing, so Bing gets as much care as Google.',
  },
  {
    title: 'Reviews and mentions',
    body: 'Automated review requests after every closing or new policy, and content your partners share with your name on it. Assistants recommend people other sources talk about.',
  },
  {
    title: 'Content that keeps you current',
    body: 'Your weekly social and email content gives the web a steady stream of fresh, consistent signals about you, so AI answers do not go stale.',
  },
  {
    title: 'Tracking what AI says about you',
    body: 'We check the prompts your future clients ask across the major assistants, see who gets named, and adjust the work toward the questions you are missing.',
  },
];

const AUDIENCES = [
  {
    label: 'Loan officers',
    body: '“Who is a good loan officer for first-time buyers in Tampa?” Borrowers ask this exact question. We make sure the answer has your name, your NMLS number, and your reviews behind it.',
    href: '/loan-officer-marketing',
  },
  {
    label: 'Real estate agents',
    body: '“Best listing agent near me” is moving from Google to ChatGPT. We build the facts, reviews, and local content that get you named for your neighborhoods.',
    href: '/real-estate-marketing',
  },
  {
    label: 'Insurance agents',
    body: '“Find an independent insurance agent who bundles home and auto near me.” We make your agency the one the assistant suggests, captive or independent.',
    href: '/insurance-agents',
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'What is AI search optimization (AEO)?',
    answer:
      'AI search optimization, also called answer engine optimization or AEO, is the work of getting a business named in the answers AI assistants give, such as ChatGPT, Google AI Overviews, Perplexity, Copilot, and Gemini. Instead of ranking a page in a list of links, the goal is to be one of the few professionals the assistant recommends by name. It relies on clear, consistent information about the business across its website and listings, answers to common questions written so they can be quoted, structured data, and reviews and mentions from other sources.',
  },
  {
    question: 'What is the difference between SEO and AEO?',
    answer:
      'SEO aims to rank your pages in a list of search results that a person clicks through. AEO aims to get you named inside a single AI-written answer, where there may be no click at all. SEO rewards rankings, backlinks, and keywords. AEO rewards facts that are consistent everywhere, answers an assistant can quote directly, structured data, and third-party mentions and reviews. The two overlap: AI assistants read the same web pages and listings that search engines index, so good SEO is the foundation and AEO builds on it.',
  },
  {
    question: 'Are there agencies that focus on AI search optimization for real estate, mortgage, and insurance?',
    answer:
      'Yes. Own It Social is a done-for-you marketing department for loan officers, real estate agents, and insurance agents, and AI search optimization is part of every engagement alongside social media content, CRM follow-up, Google Business Profile, and co-marketing. Because the same team runs every channel, the content that keeps you visible on social and in your clients’ inboxes also feeds the signals AI assistants use to decide whom to recommend.',
  },
  {
    question: 'Why is it important to optimize a business profile for AI search?',
    answer:
      'AI assistants answer local questions like “who is a good insurance agent near me” by pulling from business profiles such as Google Business Profile and Bing Places, along with reviews and directory listings. If your profile is thin, out of date, or says something different from your website, the assistant has less reason to trust it and is more likely to name a competitor. A complete, consistent profile with steady, recent reviews is one of the strongest local signals you control.',
  },
  {
    question: 'What are the best practices for appearing in AI-generated answers?',
    answer:
      'Keep your name, services, service area, and contact details identical across your website, Google Business Profile, Bing Places, and directories. Publish plain answers to the questions your clients ask, each one complete on its own so it can be quoted. Add structured data (Organization, Service, and FAQ markup) so assistants can parse who you are. Allow AI crawlers in robots.txt. Earn reviews continuously rather than in bursts. Get mentioned by partners and local sources. Then track the prompts that matter to you and fill the gaps where competitors are named instead of you.',
  },
  {
    question: 'How does AI optimization help local search rankings?',
    answer:
      'The work overlaps. Complete and consistent business profiles, steady reviews, and clear service-area pages help you in Google’s local map results and are also what AI assistants draw on when someone asks for a recommendation near them. Google AI Overviews appear above many local searches, so being named there is now part of ranking locally.',
  },
  {
    question: 'Can I buy AI search optimization on its own?',
    answer:
      'Own It Social includes AI search optimization in its done-for-you marketing department rather than selling it as a stand-alone project. AEO works best when fresh content, reviews, partner mentions, and consistent listings keep flowing, and that is the work the department already does every week. Book a strategy session and we will show you what AI assistants say about you today.',
  },
  {
    question: 'How long does AEO take to work?',
    answer:
      'Website and listing fixes are usually live within the first few weeks, and AI assistants that browse the web, such as ChatGPT search and Perplexity, can pick them up soon after. Becoming a consistent recommendation takes longer, typically several months, because it depends on reviews, mentions, and content building up. Results vary by market and by how often assistants refresh what they know.',
  },
  {
    question: 'Can you guarantee ChatGPT will recommend me?',
    answer:
      'No, and be wary of anyone who does. No one controls what an AI assistant says. What we can do is make you the clearest, most consistent, best-reviewed option in your market, track the prompts your clients ask, and show you every month where you are being named and where you are not.',
  },
];

export default function AiSearchOptimizationPage() {
  const serviceSchema = generateServiceSchema({
    name: 'AI Search Optimization (AEO)',
    serviceType: 'Answer engine optimization for loan officers, real estate agents, and insurance agents',
    description: DESCRIPTION,
    url: PAGE_URL,
    audience: 'Loan officers, mortgage brokers, real estate agents, and insurance agents',
    offers: WORK.map((w) => w.title),
  });
  const faqSchema = generateFAQSchema(FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Search Optimization', url: '/ai-search-optimization' },
  ]);

  return (
    <BookingProvider source="ai-search-optimization">
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

        <header className="border-b border-line px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
              AI search optimization (AEO)
            </p>
            <h1 className="mt-6 max-w-[16ch] font-display text-[40px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[88px]">
              Be the name ChatGPT recommends
            </h1>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
              <p className="max-w-2xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                Your next client may never see a page of search results. They
                will ask ChatGPT, Google, or Perplexity for a loan officer, an
                agent, or an insurance agent, and get two or three names back.
                Own It Social makes sure one of them is yours, as part of the
                done-for-you marketing department that already runs your social,
                follow-up, and Google presence.
              </p>
              <div>
                <BookButton size="md">See what AI says about you</BookButton>
              </div>
            </div>
          </div>
        </header>

        {/* ── The plain answer ── */}
        <section id="what" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
            <Reveal>
              <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                What AEO
                <br />
                <span className="text-brand">actually is</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-6 text-[17px] leading-[1.7] text-ink sm:text-[19px]">
                <p>
                  Answer engine optimization (AEO) is the work of getting your
                  business named inside the answers AI assistants give. Search
                  engines hand people a list of links. Assistants hand them a
                  short answer with a few recommendations, and most people
                  never look further.
                </p>
                <p>
                  Assistants recommend the professionals they can describe with
                  confidence: the ones whose facts match everywhere, who answer
                  common questions plainly, and who have reviews and mentions
                  from other sources. AEO is building that, on purpose, and
                  checking that it works.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SEO vs AEO ── */}
        <section id="compare" className="scroll-mt-24 bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand-light">
                SEO vs AEO
              </p>
              <h2 className="mt-6 max-w-[18ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[60px] lg:text-[72px]">
                Same foundation, different finish line
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-14 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/20 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-white/60">
                      <th scope="col" className="py-4 pr-6"><span className="sr-only">Aspect</span></th>
                      <th scope="col" className="py-4 pr-6">Traditional SEO</th>
                      <th scope="col" className="py-4">AI search (AEO)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE.map(([k, seo, aeo]) => (
                      <tr key={k} className="border-b border-white/15 align-top">
                        <th scope="row" className="py-6 pr-6 text-[16px] font-semibold text-white">{k}</th>
                        <td className="py-6 pr-6 text-[15px] leading-[1.6] text-white/70">{seo}</td>
                        <td className="py-6 text-[15px] leading-[1.6] text-white/90">{aeo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── The work ── */}
        <section id="work" className="scroll-mt-24 bg-sand px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-[14ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                  What we do for you
                </h2>
                <p className="max-w-sm text-[17px] leading-[1.6] text-muted sm:text-[18px]">
                  AEO is part of the department, not a one-off audit. It runs
                  every week alongside your content and follow-up.
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
              {WORK.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 90} className="bg-white">
                  <article className="flex h-full flex-col bg-white p-8 sm:p-10">
                    <span className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-4 text-[22px] font-semibold leading-[1.25] text-ink">{item.title}</h3>
                    <p className="mt-4 text-[16px] leading-[1.65] text-muted">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who it's for ── */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                Built for the
                <br />
                questions your
                <br />
                clients ask AI
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
              {AUDIENCES.map((a, i) => (
                <Reveal key={a.label} delay={i * 90} className="bg-white">
                  <div className="flex h-full flex-col bg-white p-8 sm:p-10">
                    <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-brand">{a.label}</h3>
                    <p className="mt-5 flex-1 text-[16px] leading-[1.7] text-ink">{a.body}</p>
                    <Link
                      href={a.href}
                      className="mt-8 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-ink underline decoration-ink/30 underline-offset-8 transition-colors hover:text-brand"
                    >
                      The full department for {a.label.toLowerCase()}
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          heading={
            <>
              AI search,
              <br />
              answered
            </>
          }
          intro="The questions people ask about AEO, answered plainly."
          faqs={FAQS}
        />

        <section className="bg-brand px-5 py-24 text-white sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[18ch] font-display text-[44px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[70px] lg:text-[96px]">
                Find out what ChatGPT says about you
              </h2>
              <div className="mt-12">
                <BookButton variant="white">Book your free session</BookButton>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </BookingProvider>
  );
}
