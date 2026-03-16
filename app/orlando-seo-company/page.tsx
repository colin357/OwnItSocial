import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';
import ContactForm from '@/app/components/ContactForm';

export const metadata: Metadata = {
  title: 'Orlando SEO Company & Services | Local SEO Blueprint for 2026',
  description:
    'The definitive guide to Orlando SEO services. Learn how to evaluate an Orlando SEO company, understand realistic pricing ($1,500-$10,000/mo), and build a strategy for Orlando\'s $75B+ tourism economy.',
  keywords: 'orlando seo, orlando seo company, orlando seo services, seo orlando, orlando seo agency, orlando search engine optimization',
};

const faqs = [
  {
    question: 'How much do Orlando SEO services cost?',
    answer:
      'Orlando SEO services typically range from $1,500 to $10,000 per month depending on scope. Basic local SEO packages covering Google Business Profile optimization and citation management start around $1,500-$2,500/mo. Mid-tier packages that add content creation, technical SEO, and link building run $3,000-$5,000/mo.',
  },
  {
    question: 'How long does it take to see results from Orlando SEO?',
    answer:
      'Most Orlando businesses see measurable improvements within 3 to 6 months, with significant results by month 6 to 12. Month 1 focuses on technical fixes and foundation work. Months 2-3 bring initial ranking movement for lower-competition keywords. Months 4-6 typically show meaningful traffic increases and local pack visibility. Competitive keywords like "Orlando personal injury lawyer" or "Orlando hotels" may take 12+ months. The timeline depends on your current site authority, competition level, and how aggressively you invest in content and links.',
  },
  {
    question: 'What should I look for in an Orlando SEO company?',
    answer:
      'Look for an Orlando SEO company that provides transparent reporting with actual business metrics (leads, calls, revenue) rather than just rankings. They should conduct a thorough audit before proposing a strategy, have documented case studies from Orlando or similar markets, avoid guaranteeing specific rankings,',
  },
  {
    question: 'Is local SEO different from regular SEO for Orlando businesses?',
    answer:
      'Yes. Local SEO for Orlando businesses focuses on appearing in Google\'s local map pack and location-specific searches, while regular SEO targets broader organic results. Local SEO requires Google Business Profile optimization, consistent NAP (name, address, phone) citations across Orlando-specific directories, local review management, and geo-targeted content. For Orlando specifically, local SEO also means optimizing for neighborhood-level searches like "restaurants near International Drive" or "dentist in Winter Park" and managing seasonal traffic patterns tied to tourism.',
  },
  {
    question: 'Do Orlando businesses need different SEO strategies for tourism seasons?',
    answer:
      'Absolutely. Orlando\'s tourism-driven economy creates distinct seasonal search patterns that smart SEO strategies account for. Peak season (June-August and December-January) sees massive spikes in visitor-related searches. Orlando businesses should publish seasonal content 2-3 months before peak periods, adjust Google Business Profile hours and offerings seasonally, create content targeting both tourist and local intent, and build landing pages around major Orlando events like Orlando Fringe Festival, IAAPA Expo, and UCF football season. Businesses that plan content calendars around these patterns consistently outperform competitors.',
  },
  {
    question: 'How important is Google Business Profile for Orlando SEO?',
    answer:
      'Google Business Profile (GBP) is critical for Orlando SEO because 46% of all Google searches have local intent, and the local map pack appears above organic results for most service-based queries.',
  },
  {
    question: 'What Orlando-specific directories should my business be listed on?',
    answer:
      'Beyond the national directories (Google, Bing, Apple Maps, Yelp), Orlando businesses should ensure consistent listings on Orlando-specific platforms: Visit Orlando (visitorlando.com), Orlando Business Journal directory, Orlando Sentinel business listings, Orlando Regional Chamber of Commerce, Central Florida Tourism Oversight District resources, Orlando Weekly,',
  }
];

export default function OrlandoSEOCompanyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Orlando SEO Company', url: '/orlando-seo-company' },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="relative h-10 w-56">
              <Image
                src="/OWN IT SOCIAL.png"
                alt="Own It Social"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full"
            >
              Get Free Consultation
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Orlando SEO Guide &bull; 2026
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-black">Orlando SEO Services</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                That Drive Real Revenue
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The complete guide to hiring an Orlando SEO company, building a local search strategy, and turning
              organic traffic into qualified leads in one of the most competitive metro markets in the Southeast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
              >
                Get a Free SEO Audit
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-white text-gray-900 font-bold text-lg border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200 rounded-full"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Orlando Market Overview */}
        <section className="bg-gray-50/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              Why Orlando SEO Is Uniquely Competitive
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Orlando is not a typical mid-size metro for search marketing. With a $75 billion+ annual tourism
              economy, a population that has grown over 25% in the last decade, and a business landscape shaped by
              theme parks, tech migration, and healthcare expansion, the Orlando search ecosystem demands strategies
              built for this market specifically.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl font-black text-purple-600 mb-2">$75B+</div>
                <div className="font-semibold text-gray-900 mb-2">Tourism Economy</div>
                <p className="text-gray-600 text-sm">
                  Orlando welcomes 74+ million visitors annually, making tourism-related keywords among the most
                  competitive in any U.S. metro. Businesses competing for visitor attention face international
                  hotel chains, Disney, Universal, and SeaWorld all investing heavily in digital visibility.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl font-black text-purple-600 mb-2">2.1M+</div>
                <div className="font-semibold text-gray-900 mb-2">Metro Population</div>
                <p className="text-gray-600 text-sm">
                  The Orlando-Kissimmee-Sanford metro has been one of the fastest-growing in the U.S. since 2015.
                  This growth drives intense competition for local service searches from healthcare to home services
                  to legal.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl font-black text-purple-600 mb-2">73,000+</div>
                <div className="font-semibold text-gray-900 mb-2">UCF Students</div>
                <p className="text-gray-600 text-sm">
                  The University of Central Florida is one of the largest universities in the U.S. by enrollment.
                  This creates a massive youth demographic that searches differently, with mobile-first and
                  voice search adoption rates above the national average.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl font-black text-purple-600 mb-2">Growing</div>
                <div className="font-semibold text-gray-900 mb-2">Tech &amp; Innovation Hub</div>
                <p className="text-gray-600 text-sm">
                  The Lake Nona Medical City, simulation and training tech corridor, and growing startup scene
                  bring B2B search competition into Orlando. Companies in SaaS, healthtech, and defense tech
                  now compete for high-value informational and commercial keywords.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl font-black text-purple-600 mb-2">Booming</div>
                <div className="font-semibold text-gray-900 mb-2">Real Estate Market</div>
                <p className="text-gray-600 text-sm">
                  Orlando&apos;s real estate sector has exploded with new construction in communities like Lake Nona,
                  Horizon West, and Celebration. Realtors and developers face fierce search competition across
                  neighborhood-level and community-specific queries.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl font-black text-purple-600 mb-2">Major</div>
                <div className="font-semibold text-gray-900 mb-2">Healthcare Corridor</div>
                <p className="text-gray-600 text-sm">
                  Orlando Health, AdventHealth, Nemours, and the VA Medical Center anchor a healthcare ecosystem
                  where practices must compete on YMYL (Your Money, Your Life) search terms that demand E-E-A-T
                  signals and authoritative content.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What This Means for Your SEO Strategy</h3>
              <p className="text-gray-700 leading-relaxed">
                Orlando&apos;s market density means generic SEO playbooks fail here. A restaurant on International Drive
                competes with global brands for tourist attention. A personal injury firm downtown competes with
                firms spending $50,000+/mo on paid search. An HVAC company in Winter Park competes with franchise
                operations running multi-location SEO. Winning in Orlando requires a strategy built for
                Orlando&apos;s specific competitive dynamics, seasonal patterns, and neighborhood-level search behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services Breakdown */}
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
              Orlando SEO Services: What a Complete Program Includes
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              When you hire an Orlando SEO company, here is exactly what each component of the engagement should
              cover and why it matters for your bottom line.
            </p>

            {/* Technical SEO */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Technical SEO Audit &amp; Fixes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Technical SEO is the foundation everything else builds on. If search engines cannot efficiently
                crawl, render, and index your site, no amount of content or link building will compensate. For
                Orlando businesses, this is especially important because many local sites were built quickly by
                web designers without SEO training.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What Gets Audited</h4>
                  <ul className="space-y-1.5 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>Site speed and Core Web Vitals (LCP, FID, CLS) across mobile and desktop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>Crawl budget efficiency and indexation coverage via Google Search Console</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>XML sitemap accuracy, robots.txt configuration, and canonical tag implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>Schema markup coverage (LocalBusiness, Service, FAQ, Review)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>Internal linking architecture and orphan page identification</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What Gets Fixed</h4>
                  <ul className="space-y-1.5 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>Broken links, redirect chains, and 404 errors cleaned up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>Image compression and next-gen format implementation (WebP/AVIF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>Mobile usability issues (tap targets, viewport, font sizing)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>HTTPS enforcement and mixed content resolution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">&#10003;</span>
                      <span>JavaScript rendering issues that hide content from Google</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* On-Page Optimization */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. On-Page Optimization</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                On-page SEO ensures each page on your site clearly communicates its topic, relevance, and value
                to both search engines and users. For Orlando businesses, this means building pages around the
                specific way Orlando residents and visitors search.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Title tag and meta description optimization</strong> targeting Orlando-specific search intent with click-worthy copy that differentiates you from the 10+ other results on the page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Header hierarchy (H1-H4) restructuring</strong> to create a logical content outline that search engines can parse and that qualifies for featured snippets and AI overviews.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Content gap analysis</strong> comparing your pages against the top 10 ranking results in Orlando for each target keyword. Identifying and filling missing subtopics, questions, and data points.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Internal linking strategy</strong> connecting service pages, blog content, location pages, and conversion pages into a cohesive site architecture that distributes authority.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Image optimization</strong> with descriptive alt text, proper file naming, and lazy loading for pages with photo-heavy content (common in Orlando hospitality and real estate).</span>
                </li>
              </ul>
            </div>

            {/* Local SEO & GBP */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Local SEO &amp; Google Business Profile</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For most Orlando businesses, the local map pack (the 3 businesses shown with a map at the top of
                local searches) drives more calls, directions, and website visits than any other SERP feature.
                Local SEO is what gets you there.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Google Business Profile full optimization</strong> including category selection, service area definition, attribute completion, product/service listings, and weekly post schedule.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Citation building and cleanup</strong> across 50+ directories ensuring your name, address, and phone number are identical everywhere Google crawls.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Review generation and management</strong> system to systematically request, monitor, and respond to reviews on Google, Yelp, and industry-specific platforms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Local landing pages</strong> for each neighborhood and service area you cover in the Orlando metro, built around genuine local knowledge rather than thin templated content.</span>
                </li>
              </ul>
            </div>

            {/* Content Strategy */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Content Strategy &amp; Creation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Content is the engine that drives sustainable organic growth. For Orlando businesses, an effective
                content strategy must account for both local audiences and the massive tourist population searching
                for information about the area.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Keyword research and content mapping</strong> identifying what Orlando audiences actually search for, the intent behind each query, and which page type (service, blog, guide, comparison) best serves it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Pillar page and topic cluster development</strong> building comprehensive resource hubs that establish topical authority in your industry within the Orlando market.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Blog content production</strong> at a cadence of 4-8 posts per month covering industry insights, local market analysis, how-to guides, and seasonal content tied to Orlando events.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Content refresh and optimization</strong> of existing pages that have lost rankings or never performed, updating data, expanding depth, and improving user engagement signals.</span>
                </li>
              </ul>
            </div>

            {/* Link Building */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Link Building</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Backlinks remain one of the strongest ranking factors in Google&apos;s algorithm. For Orlando SEO,
                the most effective link building strategies combine local relevance with industry authority.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Local partnership outreach</strong> earning links from Orlando Business Journal, Orlando Sentinel, local chambers of commerce, and community organizations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Digital PR and data-driven content</strong> creating original research, surveys, or data analysis about the Orlando market that earns natural editorial links.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Guest contribution and thought leadership</strong> on industry publications and Orlando-focused media that build both links and brand recognition.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Broken link reclamation and competitor backlink analysis</strong> identifying link opportunities your Orlando competitors have that you can replicate or improve upon.</span>
                </li>
              </ul>
            </div>

            {/* Reporting */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Monthly Reporting &amp; Analytics</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Reporting is where accountability lives. Any Orlando SEO company worth hiring should provide
                monthly reports that connect SEO activity to business outcomes, not just ranking charts.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Organic traffic trends</strong> segmented by page type, landing page, and device with month-over-month and year-over-year comparisons.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Keyword ranking movement</strong> for your target Orlando SEO keywords showing position changes, new keyword entries, and SERP feature appearances.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Lead and conversion tracking</strong> showing how many calls, form submissions, and booked appointments came from organic search versus other channels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5">&#8226;</span>
                  <span><strong>Work completed and upcoming</strong> a transparent log of what was done that month and the plan for the next 30-60 days, so you always know what you are paying for.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local SEO for Orlando */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
                Local SEO for Orlando: Neighborhoods, Districts &amp; the Map Pack
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Orlando&apos;s local search landscape is fragmented across distinct neighborhoods and districts, each
                with its own search behavior patterns. A one-size-fits-all approach to local SEO misses the
                nuance that separates businesses ranking in the map pack from those stuck on page two.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">International Drive (I-Drive)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The tourist corridor demands content that targets visitor-intent keywords. Businesses here
                    compete with major attractions and chains. Local SEO must emphasize review volume (tourists
                    rely heavily on reviews), multilingual GBP optimization, and proximity to landmarks like the
                    Orlando Eye and Convention Center. Seasonal content calendars aligned with convention schedules
                    and school break periods are essential.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Downtown Orlando</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Downtown targets a professional and nightlife demographic. Legal firms, financial services, and
                    creative agencies cluster here. SEO strategies should focus on commercial intent keywords,
                    B2B content, and Google Business Profile categories that distinguish your practice area. The
                    dining and entertainment scene requires event-driven content and real-time GBP updates.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Winter Park</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Winter Park&apos;s affluent demographic searches differently than the broader Orlando market.
                    Luxury service keywords, boutique business terms, and lifestyle content perform well. Local SEO
                    here benefits from Winter Park Chamber membership links, Park Avenue business directory listings,
                    and content that reflects the community&apos;s distinct identity separate from greater Orlando.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lake Nona</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    As Orlando&apos;s fastest-growing planned community, Lake Nona attracts healthcare, wellness, and
                    tech searches. The Medical City creates opportunities for healthcare SEO with E-E-A-T-focused
                    content. New resident searches (movers, home services, schools) spike continuously. Early SEO
                    investment here pays outsized returns as the community&apos;s population doubles.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Celebration</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Disney&apos;s planned community has a unique identity that blends residential and tourism search
                    intent. Businesses here should target &quot;near Disney&quot; and &quot;Celebration FL&quot;
                    modifiers. Real estate, dining, and family services dominate local search. Community-focused
                    content about Celebration events and lifestyle earns engagement and local links.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">UCF / East Orlando</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The UCF corridor is defined by student and young professional search behavior. Mobile-first
                    optimization is non-negotiable. Budget-conscious keywords, student discounts, and content
                    geared toward the academic calendar perform well. Restaurants, fitness, and entertainment
                    businesses thrive with social proof and TikTok-era content strategies.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Rank in Orlando&apos;s Local Map Pack</h3>
                <p className="text-gray-700 mb-4">
                  Google&apos;s local pack rankings depend on three factors: relevance, distance, and prominence.
                  Here is how to optimize each for Orlando.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Relevance</h4>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      <li>&#8226; Select the most specific GBP primary category</li>
                      <li>&#8226; Add all applicable secondary categories</li>
                      <li>&#8226; Write a keyword-rich business description</li>
                      <li>&#8226; List every service with detailed descriptions</li>
                      <li>&#8226; Keep your website content aligned with GBP categories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Distance</h4>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      <li>&#8226; Define accurate service areas in GBP</li>
                      <li>&#8226; Create neighborhood-specific landing pages</li>
                      <li>&#8226; Embed Google Maps on your contact page</li>
                      <li>&#8226; Use consistent address formatting everywhere</li>
                      <li>&#8226; Add location schema markup to your site</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Prominence</h4>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      <li>&#8226; Generate 5+ new Google reviews per month</li>
                      <li>&#8226; Respond to every review within 24 hours</li>
                      <li>&#8226; Build citations on 40-50 quality directories</li>
                      <li>&#8226; Earn local backlinks from Orlando media</li>
                      <li>&#8226; Post weekly GBP updates with photos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Orlando Citation Sources to Prioritize</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Beyond national directories (Google, Bing, Apple Maps, Yelp, Facebook), Orlando businesses
                  should ensure listings on these local and regional platforms:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <ul className="space-y-1.5">
                    <li>&#8226; Visit Orlando (visitorlando.com)</li>
                    <li>&#8226; Orlando Business Journal directory</li>
                    <li>&#8226; Orlando Sentinel business listings</li>
                    <li>&#8226; Orlando Regional Chamber of Commerce</li>
                    <li>&#8226; Central Florida Tourism Oversight District</li>
                  </ul>
                  <ul className="space-y-1.5">
                    <li>&#8226; Orlando Weekly</li>
                    <li>&#8226; Winter Park Chamber of Commerce</li>
                    <li>&#8226; Lake Nona Social</li>
                    <li>&#8226; Downtown Orlando Partnership</li>
                    <li>&#8226; Better Business Bureau - Central Florida</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific SEO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              Industry-Specific SEO Strategies for Orlando
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Different industries face different SEO challenges in Orlando. Here is how the approach changes
              based on your sector and the specific competitive dynamics you face.
            </p>

            <div className="space-y-6">
              {/* Tourism & Hospitality */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tourism &amp; Hospitality</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Orlando&apos;s tourism industry presents a unique SEO challenge: you are competing against the
                  marketing budgets of Disney, Universal, and Marriott while serving a transient audience that
                  searches in bursts. Success requires understanding seasonal search patterns and building content
                  that captures demand before it peaks.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Strategies</h4>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      <li>&#8226; Publish seasonal content 60-90 days before peak periods</li>
                      <li>&#8226; Build experience-based landing pages (not just service pages)</li>
                      <li>&#8226; Target &quot;things to do in Orlando&quot; long-tail variations</li>
                      <li>&#8226; Create comparison content (your experience vs. alternatives)</li>
                      <li>&#8226; Optimize for Google&apos;s &quot;Things to do&quot; SERP feature</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Seasonal Calendar</h4>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      <li>&#8226; Jan-Feb: Spring break content goes live</li>
                      <li>&#8226; Mar-Apr: Summer planning guides published</li>
                      <li>&#8226; May-Jun: Hurricane season preparedness content</li>
                      <li>&#8226; Aug-Sep: Fall/Halloween season content</li>
                      <li>&#8226; Oct-Nov: Holiday season and New Year guides</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Healthcare */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Healthcare SEO in Orlando falls under Google&apos;s YMYL (Your Money, Your Life) guidelines,
                  meaning content is held to higher quality standards. The Lake Nona Medical City and major
                  hospital systems create both competition and opportunity for independent practices.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Strategies</h4>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      <li>&#8226; Build E-E-A-T signals: physician author bios, credentials, publications</li>
                      <li>&#8226; Create condition-specific landing pages with medical accuracy</li>
                      <li>&#8226; Target &quot;[specialty] near me&quot; and &quot;[specialty] Orlando&quot; keywords</li>
                      <li>&#8226; Implement MedicalBusiness and Physician schema markup</li>
                      <li>&#8226; Generate patient reviews systematically (HIPAA-compliant process)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">E-E-A-T Checklist</h4>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      <li>&#8226; Content authored/reviewed by licensed practitioners</li>
                      <li>&#8226; Author pages with credentials and board certifications</li>
                      <li>&#8226; Citations to peer-reviewed medical sources</li>
                      <li>&#8226; Clear editorial and medical review process documented</li>
                      <li>&#8226; Updated content with &quot;medically reviewed&quot; dates</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Real Estate */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Orlando&apos;s real estate boom means realtors and developers are competing fiercely for search
                  visibility. The key differentiator is neighborhood-level expertise content that national
                  portals like Zillow and Realtor.com cannot replicate.
                </p>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>&#8226; Build hyper-local neighborhood guide pages (Lake Nona, Horizon West, Baldwin Park, Thornton Park, Mills 50)</li>
                  <li>&#8226; Publish monthly Orlando housing market updates with original data analysis</li>
                  <li>&#8226; Create relocation guides targeting &quot;moving to Orlando&quot; search intent</li>
                  <li>&#8226; Target new construction community keywords before listings appear on Zillow</li>
                  <li>&#8226; Use video content tours of neighborhoods to capture YouTube and video SERP results</li>
                </ul>
              </div>

              {/* Legal Services */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Services</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Orlando&apos;s legal market is one of the most expensive for paid search in Florida, with personal
                  injury keywords exceeding $50-$100 per click. SEO offers law firms a lower cost-per-case
                  alternative, but the competition is intense and requires sustained investment.
                </p>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>&#8226; Target practice-area + city combinations: &quot;Orlando car accident lawyer,&quot; &quot;DUI attorney Orlando FL&quot;</li>
                  <li>&#8226; Build case result pages and verdict/settlement content as social proof</li>
                  <li>&#8226; Create &quot;what to do after&quot; guides that capture high-intent searches immediately after incidents</li>
                  <li>&#8226; Invest heavily in review generation (80%+ of legal prospects check reviews before calling)</li>
                  <li>&#8226; Target Orange County and Osceola County courthouse-related informational queries</li>
                </ul>
              </div>

              {/* Technology & SaaS */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology &amp; SaaS</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Orlando&apos;s growing tech sector, anchored by simulation/training companies, healthtech startups,
                  and a maturing SaaS ecosystem, requires B2B SEO strategies that differ fundamentally from
                  local consumer-facing SEO.
                </p>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>&#8226; Focus on informational and commercial investigation keywords (buyers research 70%+ of the journey online)</li>
                  <li>&#8226; Build thought leadership content: whitepapers, case studies, benchmark reports</li>
                  <li>&#8226; Create comparison and alternative pages targeting competitor brand searches</li>
                  <li>&#8226; Develop a programmatic SEO strategy for feature/integration/use-case pages at scale</li>
                  <li>&#8226; Leverage Orlando tech events (Orlando Tech Association, Starter Studio) for local brand links</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose an Orlando SEO Company */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
                How to Choose the Right Orlando SEO Company
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Orlando has dozens of agencies and consultants offering SEO services. Here is a practical
                framework for evaluating them so you invest with the right partner.
              </p>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Evaluation Criteria</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proven Results in Your Market</h4>
                      <p className="text-gray-600 text-sm">Ask for case studies from Orlando-area businesses, ideally in your industry. Verify their claims by checking if those client sites actually rank for competitive terms. An agency that has ranked Orlando businesses before understands the local competitive dynamics.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparent Process and Deliverables</h4>
                      <p className="text-gray-600 text-sm">Before signing, you should receive a clear list of what will be done each month: how many pages optimized, how much content created, how many links built, and how reporting will work. Vague proposals like &quot;we optimize your site&quot; are a red flag.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Strategy, Not a Template</h4>
                      <p className="text-gray-600 text-sm">Any agency that pitches a standard package without first auditing your site and understanding your competitive landscape is selling a commodity. Legitimate Orlando SEO companies invest time in discovery before proposing a scope.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Clear Communication Cadence</h4>
                      <p className="text-gray-600 text-sm">You should have a dedicated point of contact, monthly reporting calls (not just emailed PDFs), and responsive communication for questions. Ask about their average response time and whether you will work with the same team member consistently.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ethical Link Building Practices</h4>
                      <p className="text-gray-600 text-sm">Ask specifically how they build links. If the answer involves PBNs (private blog networks), paid link schemes, or anything that violates Google&apos;s guidelines, walk away. Penalties from black-hat tactics can take years to recover from and cost far more than the initial investment.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Tiers */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Orlando SEO Pricing: What to Expect</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="text-sm font-semibold text-purple-600 mb-2">FOUNDATION</div>
                  <div className="text-3xl font-black text-gray-900 mb-1">$1,500 - $2,500</div>
                  <div className="text-sm text-gray-500 mb-4">per month</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Best for small local businesses with a single location and limited competition.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Technical SEO audit and core fixes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Google Business Profile optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Citation building (20-30 directories)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>On-page optimization of 5-10 key pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>2 blog posts per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Monthly reporting dashboard</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border-2 border-purple-300 p-6 shadow-md relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                  <div className="text-sm font-semibold text-purple-600 mb-2">GROWTH</div>
                  <div className="text-3xl font-black text-gray-900 mb-1">$3,000 - $5,000</div>
                  <div className="text-sm text-gray-500 mb-4">per month</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Best for established businesses in competitive Orlando industries seeking significant growth.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Everything in Foundation, plus:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Comprehensive content strategy and topic clusters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>4-6 blog posts + 2 pillar pages per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Active link building (5-10 quality links/mo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Conversion rate optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Bi-weekly strategy calls</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="text-sm font-semibold text-purple-600 mb-2">ENTERPRISE</div>
                  <div className="text-3xl font-black text-gray-900 mb-1">$5,000 - $10,000</div>
                  <div className="text-sm text-gray-500 mb-4">per month</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Best for multi-location businesses or those in highly competitive verticals (legal, healthcare).
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Everything in Growth, plus:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Multi-location GBP management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>8+ content pieces per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Digital PR and earned media campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Advanced analytics and attribution modeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">&#10003;</span>
                      <span>Dedicated strategist + weekly calls</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contract &amp; Timeline Expectations</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Most reputable Orlando SEO companies work on a 6 to 12 month initial engagement with
                  month-to-month options after the initial term. Be wary of agencies requiring 24-month contracts
                  without performance guarantees. A reasonable contract includes:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">&#10003;</span>
                    <span><strong>6-month minimum commitment</strong> because SEO takes time to produce results. Agencies that promise results in 30 days are either targeting non-competitive terms or using risky tactics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">&#10003;</span>
                    <span><strong>30-day cancellation clause</strong> after the initial term, so you are not locked in if the relationship is not working.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">&#10003;</span>
                    <span><strong>You own all work product</strong> including content, website changes, and access to all accounts and tools. Never sign a contract where the agency retains ownership of content created for your site.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">&#10003;</span>
                    <span><strong>Performance benchmarks at 90 days</strong> not guaranteed rankings, but agreed-upon milestones like technical fixes completed, content published, and initial traffic benchmarks.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Timeline & Expectations */}
        <section className="bg-gray-50/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              SEO Timeline: What to Expect Month by Month
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Here is a realistic month-by-month timeline for an Orlando business starting SEO from scratch.
              Results vary based on industry competition, current site authority, and investment level, but this
              framework reflects what we consistently see across Orlando engagements.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">M1</div>
                  <div className="w-0.5 flex-1 bg-purple-200 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Month 1: Foundation &amp; Discovery</h3>
                  <ul className="text-gray-600 space-y-1.5 text-sm">
                    <li>&#8226; Comprehensive technical SEO audit (100+ point checklist)</li>
                    <li>&#8226; Keyword research and competitive analysis for Orlando market</li>
                    <li>&#8226; Google Analytics 4 and Search Console setup/audit</li>
                    <li>&#8226; Call tracking implementation (CallRail or similar)</li>
                    <li>&#8226; Google Business Profile audit and initial optimization</li>
                    <li>&#8226; Content audit of existing pages with priority scoring</li>
                    <li>&#8226; Strategy document delivered with 6-month roadmap</li>
                  </ul>
                  <p className="text-purple-600 text-sm font-semibold mt-2">Expected results: Baseline established. No ranking changes yet.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">M2</div>
                  <div className="w-0.5 flex-1 bg-purple-200 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Month 2: Technical Fixes &amp; On-Page</h3>
                  <ul className="text-gray-600 space-y-1.5 text-sm">
                    <li>&#8226; Critical technical fixes implemented (speed, mobile, crawl errors)</li>
                    <li>&#8226; Schema markup added (LocalBusiness, Service, FAQ)</li>
                    <li>&#8226; Top 10 priority pages optimized (titles, headers, content, internal links)</li>
                    <li>&#8226; Citation building begins (first 20-30 directories submitted)</li>
                    <li>&#8226; First 2-4 new content pieces published</li>
                    <li>&#8226; Review generation process launched</li>
                  </ul>
                  <p className="text-purple-600 text-sm font-semibold mt-2">Expected results: Crawl improvements visible. Low-competition keywords begin moving.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">M3</div>
                  <div className="w-0.5 flex-1 bg-purple-200 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Month 3: Content Velocity &amp; Link Building</h3>
                  <ul className="text-gray-600 space-y-1.5 text-sm">
                    <li>&#8226; Full content production cadence established (4-8 pieces/month)</li>
                    <li>&#8226; Link building campaigns launched (outreach, digital PR, partnerships)</li>
                    <li>&#8226; Remaining on-page optimizations completed</li>
                    <li>&#8226; GBP posting schedule active (weekly updates with photos)</li>
                    <li>&#8226; First performance review: comparing to month 1 baseline</li>
                  </ul>
                  <p className="text-purple-600 text-sm font-semibold mt-2">Expected results: 10-20% organic traffic increase. Several keywords enter top 20. GBP visibility improving.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">M4-6</div>
                  <div className="w-0.5 flex-1 bg-purple-200 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Months 4-6: Acceleration Phase</h3>
                  <ul className="text-gray-600 space-y-1.5 text-sm">
                    <li>&#8226; Content library growing, internal linking architecture strengthening</li>
                    <li>&#8226; Link building producing 5-15 quality backlinks per month</li>
                    <li>&#8226; Local map pack appearances for primary service + city terms</li>
                    <li>&#8226; Conversion rate optimization based on initial traffic data</li>
                    <li>&#8226; Secondary keyword targets being addressed</li>
                    <li>&#8226; First organic leads attributable directly to SEO work</li>
                  </ul>
                  <p className="text-purple-600 text-sm font-semibold mt-2">Expected results: 30-60% organic traffic growth from baseline. Top 10 rankings for mid-competition terms. Consistent GBP calls and directions.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">M7-12</div>
                  <div className="w-0.5 flex-1 bg-purple-200 mt-2 opacity-0"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Months 7-12: Compounding Growth</h3>
                  <ul className="text-gray-600 space-y-1.5 text-sm">
                    <li>&#8226; Topical authority established in your primary service area</li>
                    <li>&#8226; Competitive keywords entering top 5-10 positions</li>
                    <li>&#8226; Featured snippets and SERP features captured</li>
                    <li>&#8226; Organic channel becoming a reliable, measurable lead source</li>
                    <li>&#8226; Content refresh cycles begin for early content</li>
                    <li>&#8226; Strategy expands into adjacent keyword territories</li>
                  </ul>
                  <p className="text-purple-600 text-sm font-semibold mt-2">Expected results: 100-200%+ organic traffic growth from baseline. ROI-positive for most Orlando businesses. Reduced dependency on paid channels.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-10 text-gray-900 text-center">
                Frequently Asked Questions About Orlando SEO
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Contact Form */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                Ready to Grow Your Orlando Business with SEO?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Get a free SEO audit and custom strategy proposal for your Orlando business. No contracts, no
                pressure. We will show you exactly where the opportunities are and what it takes to capture them.
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <Link href="/" className="relative h-8 w-44">
                  <Image
                    src="/OWN IT SOCIAL.png"
                    alt="Own It Social"
                    fill
                    className="object-contain object-left"
                  />
                </Link>
                <span className="text-sm text-gray-500">Orlando SEO Services</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                <Link href="/#services" className="hover:text-gray-900 transition-colors">Services</Link>
                <Link href="/#contact" className="hover:text-gray-900 transition-colors">Contact</Link>
              </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Own It Social. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
