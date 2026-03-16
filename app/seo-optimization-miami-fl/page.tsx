import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';
import ContactForm from '@/app/components/ContactForm';

export const metadata: Metadata = {
  title: 'SEO Optimization Miami FL | Florida Search Engine Optimization Company',
  description:
    'Comprehensive guide to SEO optimization in Miami, FL. Learn how a Florida search engine optimization company approaches local SEO, technical audits, content strategy, and link building for Miami businesses.',
  keywords:
    'seo optimization miami fl, florida search engine optimization company, miami seo services, miami seo agency, florida seo company, local seo miami, seo company miami florida',
  openGraph: {
    title: 'SEO Optimization Miami FL | Florida Search Engine Optimization Company',
    description:
      'Actionable SEO strategies for Miami and Florida businesses. Local SEO, technical foundations, bilingual content strategy, and how to choose the right Florida SEO partner.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'How much does SEO optimization cost in Miami, FL?',
    answer:
      'SEO pricing in Miami typically ranges from $1,500 to $5,000 per month for small to mid-size businesses. Enterprise-level campaigns for competitive industries like real estate or legal can run $5,000 to $15,000 or more per month.',
  },
  {
    question: 'How long does it take to see SEO results in the Miami market?',
    answer:
      'Most Miami businesses start seeing measurable improvements in 3 to 6 months, with significant results typically appearing around months 6 to 12.',
  },
  {
    question: 'Do I need bilingual SEO for my Miami business?',
    answer:
      'If a significant portion of your customer base speaks Spanish, bilingual SEO is not optional, it is a competitive advantage. Over 70% of Miami-Dade County residents speak a language other than English at home.',
  },
  {
    question: 'What is the difference between local SEO and organic SEO for Miami businesses?',
    answer:
      'Local SEO focuses on ranking in the Google Map Pack and local results, which is driven by your Google Business Profile, reviews, citations, and proximity to the searcher. Organic SEO targets the traditional blue-link results through on-page optimization, content strategy, and backlinks. Miami businesses typically need both: local SEO captures high-intent nearby searches like "attorney near me," while organic SEO builds broader visibility for informational and comparison queries.',
  },
  {
    question: 'What industries are most competitive for SEO in Miami?',
    answer:
      'The most competitive SEO verticals in Miami include real estate and property management, personal injury and immigration law, plastic surgery and cosmetic procedures, luxury hospitality and tourism, yacht and marine services, and financial advisory.',
  },
  {
    question: 'Should I hire a local Miami SEO company or a national agency?',
    answer:
      'A Florida-based SEO company often has a meaningful advantage for local and regional campaigns. They understand the Miami market dynamics, seasonal patterns, bilingual audience, and local link building opportunities. However, what matters most is the provider methodology and track record.',
  },
  {
    question: 'How do I know if my current SEO company is doing a good job?',
    answer:
      'Evaluate your SEO provider against these benchmarks: Are you seeing month-over-month growth in organic traffic and impressions? Are you ranking for keywords that actually drive leads or sales,',
  }
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'SEO Optimization Miami FL', url: '/seo-optimization-miami-fl' },
];

const localBusinessData = {
  name: 'Own It Social - Miami SEO Services',
  address: {
    street: '1001 Brickell Bay Drive',
    city: 'Miami',
    state: 'FL',
    postalCode: '33131',
    country: 'US',
  },
  telephone: '+1-305-204-4668',
  priceRange: '$$',
};

export default function SEOOptimizationMiamiFLPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const faqSchema = generateFAQSchema(faqItems);
  const localBusinessSchema = generateLocalBusinessSchema(localBusinessData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(localBusinessSchema) }}
      />

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
          <nav className="hidden md:flex items-center gap-8">
            <a href="#miami-market" className="text-gray-800 hover:text-gray-900 font-medium transition">Market</a>
            <a href="#local-seo" className="text-gray-800 hover:text-gray-900 font-medium transition">Local SEO</a>
            <a href="#technical-seo" className="text-gray-800 hover:text-gray-900 font-medium transition">Technical</a>
            <a href="#faq" className="text-gray-800 hover:text-gray-900 font-medium transition">FAQ</a>
          </nav>
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full"
          >
            Get Free SEO Audit
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            Miami SEO Guide &bull; 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="text-black">SEO Optimization in Miami, FL:</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              The Complete Guide for Florida Businesses
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Miami is one of the fastest-growing and most competitive digital markets in the United States.
            Whether you are evaluating a <strong>Florida search engine optimization company</strong> or building
            an in-house program, this guide covers the technical foundations, local strategies, and content
            approaches that actually move the needle for <strong>SEO optimization in Miami, FL</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
            >
              Get a Free SEO Audit
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="#miami-market"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-sm hover:border-gray-400 transition-all duration-200 rounded-full"
            >
              Read the Full Guide
            </a>
          </div>
        </div>
      </section>

      {/* Miami Market Overview */}
      <section id="miami-market" className="bg-white border-t-4 border-t-purple-500 shadow-sm py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why the Miami Market Demands a Different SEO Approach
            </h2>
            <p className="text-lg text-gray-700">
              Miami is not a typical U.S. metro. The combination of bilingual search behavior, tourism-driven
              seasonality, and rapid population growth creates a unique SEO landscape that generic strategies fail to address.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                6.1M+
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Metro Population</h3>
              <p className="text-gray-700 text-sm">
                The Miami-Fort Lauderdale-Pompano Beach metro is the 8th largest in the U.S. and one of the
                fastest growing. More people means more businesses competing for every search query, from
                &quot;plumber near me&quot; to &quot;luxury condo Brickell.&quot;
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                70%+
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Bilingual Households</h3>
              <p className="text-gray-700 text-sm">
                Over 70% of Miami-Dade residents speak a language other than English at home. Spanish-language
                search queries represent a massive, often under-served opportunity. A Florida search engine
                optimization company that ignores bilingual search is leaving revenue on the table.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                26M+
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Annual Tourists</h3>
              <p className="text-gray-700 text-sm">
                Greater Miami welcomes over 26 million visitors annually. Tourism-adjacent businesses need
                SEO strategies that account for seasonal search volume spikes, especially November through
                April when snowbirds and international visitors flood the market.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Hyper-Competitive Industries</h3>
              <p className="text-gray-700 text-sm">
                Real estate, personal injury law, plastic surgery, hospitality, yacht services, immigration
                law, and financial advisory are the most competitive SEO verticals in Miami. These industries
                have high customer lifetime values, meaning established players invest heavily in search visibility.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Neighborhood-Level Search Intent</h3>
              <p className="text-gray-700 text-sm">
                Miami searchers think in neighborhoods, not just the city name. Brickell, Wynwood, Coral Gables,
                Coconut Grove, Doral, and Miami Beach each carry distinct search intent and audience expectations.
                Successful SEO strategies create content at the neighborhood level, not just city-wide pages.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Mobile-First Market</h3>
              <p className="text-gray-700 text-sm">
                Miami has one of the highest mobile search rates in the country, driven by a younger
                demographic and tourism activity. If your site does not load fast and perform well on mobile
                devices, you are losing visibility in the market that matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical SEO Foundations */}
      <section id="technical-seo" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Technical SEO Foundations for Miami Businesses
            </h2>
            <p className="text-lg text-gray-700">
              Before investing in content or link building, your technical foundation must be solid. These
              are the non-negotiable technical SEO elements every Miami business should audit first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Site Speed and Core Web Vitals</h3>
              <p className="text-gray-700 mb-4">
                In a mobile-first market like Miami, page speed is directly tied to both rankings and conversions.
                Google uses Core Web Vitals as a ranking signal, and Miami users on cellular connections are
                especially sensitive to slow-loading pages.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Largest Contentful Paint (LCP):</strong> Target under 2.5 seconds. Compress images, use next-gen formats (WebP/AVIF), and implement lazy loading for below-fold content.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Interaction to Next Paint (INP):</strong> Target under 200ms. Minimize JavaScript execution time, defer non-critical scripts, and audit third-party tag load.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Cumulative Layout Shift (CLS):</strong> Target under 0.1. Set explicit dimensions on images and ads, use font-display: swap, and avoid injecting content above existing content.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Crawlability and Indexation</h3>
              <p className="text-gray-700 mb-4">
                Many Miami business websites waste crawl budget on duplicate, thin, or irrelevant pages.
                Clean indexation is especially important for multi-location businesses serving areas across
                South Florida.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>XML Sitemaps:</strong> Submit clean, up-to-date sitemaps via Google Search Console. Exclude noindexed pages and redirects from your sitemap.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Canonical Tags:</strong> Prevent duplicate content issues across HTTP/HTTPS, www/non-www, and URL parameter variations. Critical for e-commerce sites with filtered product pages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Crawl Budget Optimization:</strong> Block low-value pages (admin, search results, tag archives) in robots.txt. Use internal linking to prioritize your money pages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>HTTPS:</strong> Non-negotiable. Ensure all pages load over HTTPS with no mixed-content warnings. Check that HTTP versions 301-redirect to HTTPS.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Structured Data Markup</h3>
              <p className="text-gray-700 mb-4">
                Structured data helps Google understand your business and can earn rich results in SERPs,
                including star ratings, FAQ dropdowns, and local business information.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>LocalBusiness Schema:</strong> Include your business name, address, phone, hours, and service area. Use the most specific business type available (e.g., Attorney, Dentist, RealEstateAgent).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>FAQ Schema:</strong> Add FAQ markup to service pages and guide content. This can earn expanded SERP real estate and improve click-through rates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Breadcrumb Schema:</strong> Helps Google understand your site hierarchy and displays breadcrumb paths in search results.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Review/AggregateRating Schema:</strong> If you have reviews on your site, mark them up properly to potentially display star ratings in search results.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bilingual Technical Setup</h3>
              <p className="text-gray-700 mb-4">
                For Miami businesses serving both English and Spanish-speaking audiences, proper bilingual
                technical implementation prevents duplicate content penalties and ensures each language
                version ranks in the right search results.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Hreflang Tags:</strong> Implement hreflang annotations to signal English and Spanish page relationships. Use &quot;en-US&quot; and &quot;es-US&quot; to target U.S. Spanish speakers specifically.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>URL Structure:</strong> Use subdirectories (/es/) or subdomains (es.domain.com) for Spanish content. Subdirectories are simpler to manage and consolidate domain authority.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Content Parity:</strong> Spanish pages should not be direct translations. Adapt content, keywords, and calls to action for Spanish-speaking user intent, which often differs from English queries.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO for Miami */}
      <section id="local-seo" className="bg-white border-t-4 border-t-blue-500 shadow-sm py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Local SEO for Miami: Dominating the Map Pack
            </h2>
            <p className="text-lg text-gray-700">
              For service-based businesses, the Google Map Pack drives the highest-converting traffic. Local
              SEO in Miami requires a systematic approach to your Google Business Profile, citations, reviews,
              and local authority signals.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Google Business Profile Optimization</h3>
              <p className="text-gray-700 mb-4">
                Your Google Business Profile is the single most important local SEO asset. For Miami businesses,
                a well-optimized GBP can generate dozens of calls and direction requests per week.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Choose the most specific primary category (e.g., &quot;Immigration Attorney&quot; not just &quot;Attorney&quot;)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Add all relevant secondary categories (up to 9 additional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Write a keyword-rich business description using natural language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Add all services with descriptions and pricing when possible</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Upload high-quality photos weekly (exterior, interior, team, work)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Post Google Business updates at least weekly with offers or news</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Enable messaging and respond within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Add products or menu items if applicable to your business type</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Citations and NAP Consistency</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Your business Name, Address, and Phone number must be identical across every online
                  listing. Even small variations (Suite vs Ste, Street vs St) can dilute your local signals.
                </p>
                <p className="font-semibold text-gray-900 text-sm mb-2">Priority citation sources for Miami businesses:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>- Yelp, Better Business Bureau, and industry directories</li>
                  <li>- Apple Maps and Bing Places</li>
                  <li>- Miami-Dade County Chamber of Commerce</li>
                  <li>- Coral Gables, Doral, and Miami Beach chambers</li>
                  <li>- South Florida Business Journal directory</li>
                  <li>- Florida-specific directories (VisitFlorida, FloridaTrend)</li>
                  <li>- Industry-specific platforms (Avvo for attorneys, Zocdoc for doctors, Zillow for real estate)</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Review Management Strategy</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Reviews are a top-three ranking factor for the Google Map Pack. In competitive Miami
                  verticals, businesses with more high-quality reviews consistently outrank those without.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Build a systematic review request process (email/SMS after service completion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Respond to every review, positive and negative, within 48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Include keywords naturally in review responses (location, service type)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Diversify review platforms: Google, Yelp, Facebook, and industry-specific sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                    <span>Never buy or incentivize fake reviews, Google penalties are severe and permanent</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Schema Markup for Miami Businesses</h3>
              <p className="text-gray-700 mb-4">
                Beyond basic LocalBusiness schema, Miami businesses should implement location-specific
                structured data to help Google understand their service areas and stand out in search results.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Service Area Business</h4>
                  <p className="text-gray-600 text-xs">
                    If you serve multiple Miami-area locations without a storefront in each, use
                    ServiceAreaBusiness schema to define your coverage (Miami Beach, Coral Gables, Doral, etc.).
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">GeoCoordinates</h4>
                  <p className="text-gray-600 text-xs">
                    Include latitude and longitude in your LocalBusiness schema to help Google pinpoint
                    your location precisely, improving proximity-based ranking signals.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">OpeningHoursSpecification</h4>
                  <p className="text-gray-600 text-xs">
                    Specify your operating hours in schema markup, including variations for holidays
                    and seasonal changes common in tourism-driven Miami businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy for Florida Businesses */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Content Strategy for Florida Businesses
            </h2>
            <p className="text-lg text-gray-700">
              Content is what separates businesses that rank temporarily from those that dominate long-term.
              In Miami, effective content strategy must account for bilingual audiences, seasonal patterns,
              and hyper-local search intent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Neighborhood-Specific Content</h3>
              <p className="text-gray-700 text-sm mb-4">
                Miami searchers use neighborhood names as qualifiers. Creating dedicated content for each
                area you serve captures long-tail traffic that generic city-level pages miss.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Create unique landing pages for each neighborhood you serve (Brickell, Wynwood, Coral Gables, Coconut Grove, Doral, Kendall, Aventura)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Include genuinely unique content on each page, not just swapped city names. Reference local landmarks, demographics, and specific needs of that area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Build internal links between neighborhood pages and your main service pages to create a strong topical cluster</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seasonal Content Calendar</h3>
              <p className="text-gray-700 text-sm mb-4">
                Miami search patterns follow distinct seasonal rhythms. Aligning your content calendar with
                these patterns ensures you rank before the surge, not during or after it.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Nov-Apr (Peak Season):</strong> Tourism, snowbird, real estate, and luxury service content. Publish 2-3 months before the season begins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Jun-Nov (Hurricane Season):</strong> Insurance, restoration, preparedness, and contractor content sees massive spikes during active storms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Year-round:</strong> Evergreen service pages, FAQ content, and comparison guides that build authority independent of season</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Event-driven:</strong> Art Basel (December), Ultra Music Festival (March), Boat Show (February) create short-term spikes for relevant businesses</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bilingual Content Strategy</h3>
              <p className="text-gray-700 text-sm mb-4">
                A genuine bilingual content strategy goes far beyond running your site through Google Translate.
                Spanish-speaking searchers in Miami use different keywords, have different questions, and
                respond to different calls to action.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Conduct separate keyword research in Spanish, not just translate English keywords</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Create original Spanish content addressing the specific concerns and questions of that audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Build Spanish-language backlinks from Hispanic media, community organizations, and directories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Consider Spanglish search patterns common in Miami (e.g., mixing English service terms with Spanish modifiers)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-Tail Keyword Opportunities</h3>
              <p className="text-gray-700 text-sm mb-4">
                While everyone fights over &quot;Miami real estate agent&quot; or &quot;Miami personal injury lawyer,&quot;
                smart businesses capture high-intent long-tail queries with less competition and higher conversion rates.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Service + neighborhood: &quot;roof repair Coral Gables,&quot; &quot;family dentist Doral&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Problem + location: &quot;flooding restoration Miami Beach,&quot; &quot;mold inspection Kendall&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Comparison queries: &quot;best [service] in [neighborhood] Miami,&quot; &quot;[service] cost Miami FL&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">&#10003;</span>
                  <span>Question-based: &quot;do I need a permit for [service] in Miami-Dade?&quot; captures informational intent and builds trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Link Building in the Florida Market */}
      <section className="bg-white border-t-4 border-t-purple-500 shadow-sm py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Link Building Strategies for the Florida Market
            </h2>
            <p className="text-lg text-gray-700">
              Backlinks remain one of the strongest ranking signals. For Miami and Florida businesses,
              the best link building strategies leverage local relationships and community presence
              rather than relying on generic outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Chamber of Commerce and Business Associations</h3>
              <p className="text-gray-700 text-sm">
                Miami-Dade County has numerous chambers of commerce (Greater Miami, Coral Gables, Doral,
                Miami Beach, and neighborhood-level chambers). Membership typically includes a directory listing
                with a backlink, plus networking opportunities that lead to additional partnerships and links.
                Also consider the Florida Chamber of Commerce and industry-specific Florida trade associations.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Local Media and PR</h3>
              <p className="text-gray-700 text-sm">
                South Florida has active local media outlets that cover business news. The Miami Herald, South
                Florida Business Journal, Miami New Times, and local TV news sites regularly feature local
                businesses. Contribute expert commentary, publish data-driven studies relevant to Miami, or pitch
                newsworthy angles. HARO and similar platforms can also connect you with journalists writing
                Florida-focused stories.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">University Partnerships</h3>
              <p className="text-gray-700 text-sm">
                South Florida is home to the University of Miami, Florida International University, Florida
                Atlantic University, and Nova Southeastern University. Opportunities include sponsoring student
                events, offering internships (which earn .edu backlinks from career pages), guest lecturing,
                and collaborating on research relevant to your industry.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Community Sponsorships</h3>
              <p className="text-gray-700 text-sm">
                Miami has a vibrant event and nonprofit scene. Sponsoring local events, charities, sports leagues,
                or cultural organizations (Wynwood Arts District events, Miami Book Fair, neighborhood festivals)
                generates natural backlinks from event pages, press coverage, and social mentions. Focus on
                organizations whose audience overlaps with your target customer.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Strategic Local Partnerships</h3>
              <p className="text-gray-700 text-sm">
                Partner with complementary (non-competing) Miami businesses for co-created content, mutual
                referral pages, or joint events. A real estate agent might partner with a mortgage broker, home
                inspector, and interior designer, each linking to shared resource content. These reciprocal
                relationships build genuine authority signals Google values.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Content-Driven Link Acquisition</h3>
              <p className="text-gray-700 text-sm">
                Create resources that naturally attract links: original research on the Miami market, comprehensive
                neighborhood guides, annual industry reports, or interactive tools. A &quot;Cost of Living in Miami
                by Neighborhood&quot; calculator or &quot;Miami Real Estate Market Report&quot; earns links from journalists,
                bloggers, and other businesses referencing your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose a Florida SEO Company */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              How to Choose a Florida Search Engine Optimization Company
            </h2>
            <p className="text-lg text-gray-700">
              The Miami SEO market is full of providers making big promises. Here is how to separate
              legitimate <strong>Florida search engine optimization companies</strong> from those that will waste your budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Look For</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Case studies with verifiable results</strong> from Miami or Florida clients in your industry or similar verticals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Clear process documentation</strong> showing what they do in months 1, 3, 6, and beyond</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Transparent reporting</strong> tied to business metrics (leads, revenue), not just ranking reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Technical competency</strong> demonstrated by their own website speed, structure, and SEO execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>Understanding of Miami market dynamics</strong> including bilingual search, seasonal patterns, and local competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
                  <span><strong>You own all work product</strong> including content, optimizations, and any assets they create on your behalf</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Red Flags to Watch For</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&#10007;</span>
                  <span><strong>Guaranteed rankings</strong> for specific keywords. No one can guarantee rankings because Google controls the algorithm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&#10007;</span>
                  <span><strong>Extremely low pricing</strong> ($200-400/month). Quality SEO execution in Miami requires meaningful labor hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&#10007;</span>
                  <span><strong>Long-term contracts without exit clauses.</strong> Reputable agencies earn retention through results, not legal lock-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&#10007;</span>
                  <span><strong>Vague about their methods.</strong> If they cannot explain exactly what they will do, they are likely reselling cheap outsourced work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&#10007;</span>
                  <span><strong>Reporting only on rankings</strong> without connecting to traffic, leads, and revenue impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">&#10007;</span>
                  <span><strong>No mention of technical SEO.</strong> Agencies focused only on content or links without technical foundations produce fragile results</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Realistic SEO Timeline for Miami Businesses</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold mb-3">1</div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">Month 1: Foundation</h4>
                <p className="text-gray-600 text-xs">
                  Comprehensive technical audit, Google Search Console and Analytics setup, keyword research,
                  competitor analysis, Google Business Profile audit, and strategic roadmap development.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold mb-3">2-3</div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">Months 2-3: Technical + Local</h4>
                <p className="text-gray-600 text-xs">
                  Fix critical technical issues, optimize existing service pages, build and clean citation
                  profiles, implement structured data, begin core content creation and on-page optimization.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold mb-3">4-6</div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">Months 4-6: Growth</h4>
                <p className="text-gray-600 text-xs">
                  Consistent content publishing, link building campaigns, local authority building, conversion
                  optimization on landing pages, and first measurable improvements in rankings and traffic.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold mb-3">7+</div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">Months 7+: Scale</h4>
                <p className="text-gray-600 text-xs">
                  Expand keyword targeting, scale content production, pursue competitive link opportunities,
                  optimize for SERP features, and focus on conversion rate optimization to maximize ROI.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Miami SEO Pricing Ranges (2026)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-1">Small Business / Local</h4>
                <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">$1,500 - $3,000/mo</div>
                <p className="text-gray-600 text-xs">
                  Local SEO focus, GBP optimization, citation building, 2-4 content pieces per month, basic technical maintenance.
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-1">Mid-Market / Multi-Location</h4>
                <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">$3,000 - $7,500/mo</div>
                <p className="text-gray-600 text-xs">
                  Comprehensive SEO including technical, content, link building, and local optimization across multiple locations.
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-1">Enterprise / Competitive</h4>
                <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">$7,500 - $15,000+/mo</div>
                <p className="text-gray-600 text-xs">
                  Full-service SEO for highly competitive verticals (legal, real estate, medical) with aggressive content and link building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Metrics That Matter */}
      <section className="bg-white border-t-4 border-t-blue-500 shadow-sm py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              SEO Metrics That Matter for Miami Businesses
            </h2>
            <p className="text-lg text-gray-700">
              Stop measuring SEO success by rankings alone. These are the metrics that connect your SEO
              investment to actual business growth, along with realistic benchmarks for the Miami market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Organic Traffic Growth</h3>
              <p className="text-gray-700 text-sm mb-3">
                Track month-over-month and year-over-year organic session growth in Google Analytics.
                Filter by landing page to see which pages drive growth.
              </p>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-600">
                  <strong>Benchmark:</strong> Expect 15-30% organic traffic growth in the first 6 months for
                  a new SEO engagement. Established sites in competitive verticals may see 5-15% monthly growth
                  after the initial ramp-up period.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Local Pack Visibility</h3>
              <p className="text-gray-700 text-sm mb-3">
                Monitor your appearance in the Google Map Pack for target keywords using tools like
                BrightLocal or Whitespark. Track your ranking grid across Miami zip codes.
              </p>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-600">
                  <strong>Benchmark:</strong> Top-3 Map Pack placement for primary service + location keywords
                  within 3-6 months. Track visibility at the zip code level, as Map Pack rankings vary
                  significantly by searcher proximity.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Keyword Rankings</h3>
              <p className="text-gray-700 text-sm mb-3">
                Track rankings for your target keywords, but focus on keywords that drive conversions,
                not just high-volume vanity terms. Separate tracking for English and Spanish keywords.
              </p>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-600">
                  <strong>Benchmark:</strong> Movement from page 3+ to page 1 for 20-40% of target keywords
                  within 6 months. Long-tail keywords often move faster than head terms.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Phone Calls and Form Submissions</h3>
              <p className="text-gray-700 text-sm mb-3">
                Use call tracking (CallRail, WhatConverts) and form tracking to attribute leads directly
                to organic search. This is the metric that ties SEO to revenue.
              </p>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-600">
                  <strong>Benchmark:</strong> Service businesses should see organic lead volume increase
                  20-50% within the first 6-12 months of a comprehensive SEO program. Track cost per lead
                  against paid channels.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Revenue Attribution</h3>
              <p className="text-gray-700 text-sm mb-3">
                Connect organic leads to closed revenue in your CRM. This is the ultimate measure of SEO
                ROI and justifies ongoing investment to stakeholders.
              </p>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-600">
                  <strong>Benchmark:</strong> Most Miami businesses see positive ROI from SEO within
                  9-18 months. High-value verticals (legal, medical, real estate) often see faster
                  ROI due to higher per-client revenue.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Health Scores</h3>
              <p className="text-gray-700 text-sm mb-3">
                Regularly audit Core Web Vitals, crawl errors, indexation status, and structured data
                validation. Technical debt compounds over time if ignored.
              </p>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-600">
                  <strong>Benchmark:</strong> Maintain all Core Web Vitals in the &quot;Good&quot; range, zero critical
                  crawl errors, and 95%+ of target pages indexed and error-free in Google Search Console.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Frequently Asked Questions About SEO in Miami, FL
            </h2>
            <p className="text-lg text-gray-700">
              Answers to the most common questions businesses ask when evaluating
              SEO optimization in Miami and choosing a Florida search engine optimization company.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Ready to Grow Your Miami Business with SEO?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Whether you need a full SEO program or a one-time audit, our team brings deep experience
                in the Miami market. We focus on the metrics that matter: leads, revenue, and sustainable growth.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Free technical SEO audit of your current site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Competitive analysis for your Miami market</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Custom strategy roadmap with realistic timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-xl mt-0.5">&#10003;</span>
                  <span className="text-gray-300">No long-term contracts required</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm">
                Trusted by Miami businesses in real estate, legal, healthcare, hospitality, and finance.
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="relative h-8 w-44">
                <Image
                  src="/OWN IT SOCIAL.png"
                  alt="Own It Social"
                  fill
                  className="object-contain object-left brightness-200"
                />
              </Link>
              <span className="text-gray-500 text-sm">|</span>
              <span className="text-gray-500 text-sm">Miami, FL SEO Services</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition">Home</Link>
              <Link href="/digital-marketing-miami" className="text-gray-400 hover:text-white text-sm transition">Digital Marketing</Link>
              <Link href="/marketing-agency-miami" className="text-gray-400 hover:text-white text-sm transition">Marketing Agency</Link>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Own It Social. All rights reserved. |
              SEO Optimization Miami FL | Florida Search Engine Optimization Company
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
