import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/app/components/ContactForm';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';

export const metadata: Metadata = {
  title: 'PPC Digital Marketing Agency | Paid Media Advertising Agency Guide (2026)',
  description:
    'The definitive guide to choosing a PPC digital marketing agency. Includes channel strategies, budget frameworks, KPI formulas, account structure best practices, and what to demand from any paid media advertising agency.',
  keywords:
    'ppc digital marketing agency, paid media advertising agency, paid media agency, ppc agency, paid search agency, paid social agency, google ads agency, meta ads agency',
  openGraph: {
    title: 'PPC Digital Marketing Agency | Paid Media Strategy That Scales Profitably',
    description:
      'Real frameworks for choosing and working with a paid media advertising agency. Channel benchmarks, budget planning, KPI formulas, and red flags to avoid.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What does a PPC digital marketing agency actually do?',
    answer:
      'A PPC digital marketing agency manages paid advertising across platforms like Google Ads, Meta, LinkedIn, and TikTok. Core responsibilities include keyword and audience research, campaign architecture design, bid strategy selection, ad creative production and testing, landing page optimization, conversion tracking setup, and ongoing performance optimization. A strong agency ties every metric back to revenue, not just clicks or impressions.',
  },
  {
    question: 'How much should I budget for a paid media agency?',
    answer:
      'Most agencies charge a management fee of 10-20% of ad spend or a flat monthly retainer between $2,500 and $15,000 depending on scope. On top of that, you need actual media budget. For lead generation, plan a minimum of $3,000-5,000 per month in ad spend per channel to generate statistically meaningful data. For ecommerce, $5,000-10,000 per month minimum. Total investment (management + media) typically starts at $5,000-7,000 per month for meaningful results.',
  },
  {
    question: 'How long before PPC campaigns become profitable?',
    answer:
      'Most campaigns need 60-90 days to reach stable performance. The first 30 days are for data collection, conversion tracking validation, and initial audience testing. Days 30-60 focus on bid optimization and creative iteration. By day 90, you should have clear unit economics: cost per acquisition, return on ad spend, and lead quality data. Some campaigns hit profitability in week two; others take a full quarter. The key variable is your sales cycle length and conversion tracking maturity.',
  },
  {
    question: 'What is the difference between a PPC agency and a paid media agency?',
    answer:
      'PPC (pay-per-click) traditionally refers to search advertising where you pay per click, primarily Google and Bing. Paid media is a broader term that includes PPC search, paid social (Meta, LinkedIn, TikTok), display advertising, programmatic, connected TV, and sponsored content. Most modern agencies operate across all paid channels, so the terms are increasingly interchangeable. When evaluating agencies, focus on which specific channels they have proven depth in rather than what they call themselves.',
  },
  {
    question: 'How do I know if my PPC agency is doing a good job?',
    answer:
      'Evaluate on three levels. First, activity: are they making weekly optimizations, testing new creatives, and adjusting bids? Second, leading indicators: are click-through rates improving, cost per click stable or declining, and quality scores increasing? Third, business outcomes: is cost per qualified lead going down, is ROAS improving, and is pipeline value increasing? If an agency only reports on impressions and clicks but cannot tie performance to revenue, that is a red flag.',
  },
  {
    question: 'Should I hire an in-house PPC specialist or use an agency?',
    answer:
      'If your monthly ad spend is under $30,000, an agency typically offers better value because you get a team (strategist, media buyer, creative, analyst) for less than one full-time salary. Above $50,000 per month, a hybrid model works well: in-house strategist for institutional knowledge plus an agency for execution and cross-client benchmarks. Above $150,000 per month, building an internal team often makes sense, potentially with an agency retained for specific channels or strategic oversight.',
  },
  {
    question: 'What reporting should I expect from a paid media advertising agency?',
    answer:
      'At minimum: weekly performance snapshots covering spend, conversions, CPA, and ROAS by channel. Monthly strategic reports should include funnel analysis (impressions to clicks to leads to qualified leads to revenue), creative performance rankings, audience segment analysis, competitive landscape changes, and a clear action plan for the next period. The best agencies also provide quarterly business reviews connecting media performance to overall revenue goals and customer lifetime value.',
  },
  {
    question: 'What platforms should a paid media agency run ads on for my business?',
    answer:
      'It depends on your buyer. B2B companies typically start with Google Search and LinkedIn. B2C ecommerce performs well on Meta (Facebook/Instagram), Google Shopping, and TikTok. Local service businesses should prioritize Google Search and Local Services Ads. The right agency will recommend starting with one to two channels where your audience has the highest purchase intent, prove profitability there, then expand to awareness and remarketing channels.',
  },
  {
    question: 'How much creative testing should a PPC agency be doing?',
    answer:
      'A serious paid media agency tests at minimum three to five new ad variations per campaign per month. On Meta, this means new hooks, visuals, and copy angles weekly. On Google Search, it means ongoing responsive search ad pin testing and new headline variations. Testing should follow a structured framework: one variable at a time (headline, image, CTA, offer), statistical significance thresholds before declaring winners, and a clear process for scaling winners and killing losers.',
  },
  {
    question: 'What questions should I ask before hiring a PPC agency?',
    answer:
      'Ask these ten questions: (1) What is your campaign structure methodology? (2) How do you handle conversion tracking and attribution disagreements between platforms and your CRM? (3) What is your creative testing cadence? (4) Who will be my day-to-day contact and what is their experience level? (5) How do you define and measure lead quality, not just volume? (6) What is your minimum contract term? (7) Do you own the ad accounts or do I? (8) What happens if performance drops—what is your escalation process? (9) Can you share anonymized case studies with actual numbers? (10) How do you stay current with platform changes and beta features?',
  },
];

export default function PPCDigitalMarketingAgencyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'PPC Digital Marketing Agency', url: '/ppc-digital-marketing-agency' },
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
        {/* Header */}
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
              Get Free PPC Audit
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Definitive Guide &bull; Updated 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-black">How to Choose a PPC Digital</span>
              <br />
              <span className="text-black">Marketing Agency That</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Actually Drives Revenue
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Most businesses waste 40-60% of their ad spend because they chose the wrong{' '}
              <strong>paid media advertising agency</strong> or lacked the frameworks to hold one accountable.
              This guide gives you everything you need to evaluate, hire, and manage a{' '}
              <strong>paid media agency</strong> that treats your budget like their own money.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Get a Free PPC Strategy Review
              </Link>
              <a
                href="#what-ppc-agency-does"
                className="px-8 py-4 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm hover:border-gray-500 transition"
              >
                Read the Full Guide
              </a>
            </div>
          </div>
        </section>

        {/* What a PPC Agency Actually Does */}
        <section id="what-ppc-agency-does" className="bg-white border-y border-gray-100 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What a PPC Digital Marketing Agency Actually Does
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              A competent <strong>paid media agency</strong> does far more than &ldquo;set up Google Ads.&rdquo;
              Here is every function a serious agency should perform, and what you should expect at each stage.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Account Architecture Design',
                  body: 'Structuring campaigns by funnel stage, audience type, and intent level. This means separating branded vs. non-branded search, prospecting vs. remarketing, and high-intent vs. awareness campaigns. Poor structure is the number one reason accounts plateau.',
                },
                {
                  title: 'Audience Research and Segmentation',
                  body: 'Building detailed audience profiles based on first-party data, CRM exports, purchase behavior, and platform signals. On Meta, this means creating lookalike audiences from your best customers. On Google, it means layering in-market and affinity audiences onto search campaigns.',
                },
                {
                  title: 'Bid Strategy Selection and Management',
                  body: 'Choosing between manual CPC, target CPA, target ROAS, and maximize conversions based on data volume and business goals. New campaigns with fewer than 30 conversions per month often need manual or enhanced CPC. Mature campaigns with 50+ monthly conversions can leverage smart bidding effectively.',
                },
                {
                  title: 'Creative Testing Frameworks',
                  body: 'Running structured tests across headlines, images, video hooks, offers, and CTAs. Each test isolates one variable, runs until statistical significance (typically 95% confidence), then winners scale and losers are replaced. Expect three to five new variations per campaign per month.',
                },
                {
                  title: 'Landing Page Optimization',
                  body: 'Ensuring ad message matches landing page headline, proof elements, and CTA. Message mismatch increases cost per click by 20-40% through lower quality scores. A good agency tests page layouts, form lengths, social proof placement, and above-the-fold offers.',
                },
                {
                  title: 'Conversion Tracking and Attribution',
                  body: 'Setting up server-side tracking, offline conversion imports, and multi-touch attribution models. Platform-reported conversions often overcount by 20-50%. Your agency should reconcile platform data with CRM data weekly and flag discrepancies before they inflate reported ROAS.',
                },
              ].map((item) => (
                <article key={item.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Channel-by-Channel Strategy Guide */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Channel-by-Channel Paid Media Strategy Guide
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Every paid channel operates differently. A strong <strong>PPC digital marketing agency</strong>{' '}
              knows which channels to prioritize based on your buyer, budget, and sales cycle. Here is what
              to expect from each.
            </p>

            {/* Google Search */}
            <div className="mb-10">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Google Search Ads</h3>
                <p className="text-sm font-semibold text-purple-600 mb-4">Best for: High-intent capture and bottom-of-funnel lead generation</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Google Search is the highest-intent paid channel because users are actively searching for solutions.
                  Your agency should build campaigns around keyword intent tiers: branded terms (your company name),
                  competitor terms, high-intent commercial terms (&ldquo;ppc agency near me&rdquo;), and informational
                  terms (&ldquo;how to lower cost per lead&rdquo;).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Match type strategy matters enormously. Broad match with smart bidding works well for accounts with
                  50+ monthly conversions. For newer accounts, exact and phrase match give you more control while you
                  build data. Negative keyword management is equally critical: expect your agency to review search term
                  reports weekly and maintain lists of 200-500+ negative keywords per campaign.
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Typical Benchmarks (2026)</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                    <div><span className="font-semibold">Avg CPC:</span> $2-8 (B2B services: $5-15)</div>
                    <div><span className="font-semibold">CTR:</span> 3-6% (search), 0.5-1% (display)</div>
                    <div><span className="font-semibold">Conv Rate:</span> 3-8% landing page</div>
                    <div><span className="font-semibold">CPL Range:</span> $30-200+ by industry</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Display / YouTube */}
            <div className="mb-10">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Google Display and YouTube Ads</h3>
                <p className="text-sm font-semibold text-purple-600 mb-4">Best for: Awareness, remarketing, and video-driven education</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Display and YouTube are top-of-funnel and mid-funnel channels. They build remarketing audiences
                  cheaply and reinforce brand presence. Your agency should use display primarily for remarketing
                  (showing ads to people who already visited your site) and YouTube for educational content that
                  pre-qualifies prospects before they convert on search.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Avoid running cold prospecting on display unless you have strong creative and a well-defined
                  custom intent audience. The click-through rates are naturally low, but the CPM is also low,
                  making it efficient for brand recall. YouTube pre-roll and in-feed ads work best when the
                  first five seconds deliver a strong hook tied to a specific pain point.
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Typical Benchmarks (2026)</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                    <div><span className="font-semibold">Display CPM:</span> $2-6</div>
                    <div><span className="font-semibold">Display CTR:</span> 0.3-0.8%</div>
                    <div><span className="font-semibold">YouTube CPV:</span> $0.03-0.12</div>
                    <div><span className="font-semibold">View Rate:</span> 15-35%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta / Facebook / Instagram */}
            <div className="mb-10">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Meta Ads (Facebook and Instagram)</h3>
                <p className="text-sm font-semibold text-purple-600 mb-4">Best for: Demand generation, lookalike audiences, and creative-driven conversion</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Meta is the largest paid social platform and excels at creating demand among people who are not
                  actively searching but match your ideal customer profile. The algorithm is powerful at finding
                  converters if you feed it clean data: proper pixel setup, Conversions API (CAPI) integration,
                  and offline conversion uploads from your CRM.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Audience strategy has shifted dramatically. Broad targeting with strong creative now often
                  outperforms narrow interest-based targeting because Meta&apos;s algorithm has enough signal to
                  optimize. Lookalike audiences built from your highest-value customers (not just all customers)
                  still deliver strong results. Creative fatigue is the biggest challenge: expect ad performance
                  to decline after 7-14 days of heavy delivery, requiring constant creative refreshes.
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Typical Benchmarks (2026)</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                    <div><span className="font-semibold">CPM:</span> $8-20 (US avg)</div>
                    <div><span className="font-semibold">CTR:</span> 1-3% (feed ads)</div>
                    <div><span className="font-semibold">Conv Rate:</span> 2-5% (landing page)</div>
                    <div><span className="font-semibold">CPL:</span> $15-80 (lead gen)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="mb-10">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">LinkedIn Ads</h3>
                <p className="text-sm font-semibold text-purple-600 mb-4">Best for: B2B targeting by job title, company size, and industry</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  LinkedIn offers the most precise B2B targeting available in paid media. You can target by
                  exact job title, seniority level, company size, industry, and even specific company lists.
                  The tradeoff is cost: LinkedIn CPMs run 3-5x higher than Meta, and CPCs typically range from
                  $8-15 for sponsored content.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The key to LinkedIn ROI is aligning your offer to the funnel stage. Cold audiences respond best
                  to thought leadership and educational content (webinars, guides, reports). Retargeting audiences
                  convert on demo requests and consultation offers. Document ads (carousel PDFs) often deliver the
                  lowest cost per engagement. Message ads (InMail) can work but suffer from fatigue if overused in
                  your target market.
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Typical Benchmarks (2026)</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                    <div><span className="font-semibold">CPM:</span> $30-80</div>
                    <div><span className="font-semibold">CPC:</span> $8-15</div>
                    <div><span className="font-semibold">CTR:</span> 0.4-1.0%</div>
                    <div><span className="font-semibold">CPL:</span> $50-250+ (B2B)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* TikTok */}
            <div>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">TikTok Ads</h3>
                <p className="text-sm font-semibold text-purple-600 mb-4">Best for: Creative-first brands, younger demographics, and viral reach</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TikTok is a creative-first platform where production quality matters less than authenticity and
                  hook strength. Ads that look like native content outperform polished brand spots by 2-3x on
                  average. The algorithm heavily favors engagement signals in the first two seconds, so your
                  agency needs to produce UGC-style content with strong pattern interrupts.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TikTok&apos;s targeting is still maturing relative to Meta, but Spark Ads (boosting organic
                  posts) and broad targeting with creative variation perform well. For ecommerce, TikTok Shop
                  integration creates a direct path from discovery to purchase. For lead gen, use instant forms
                  within the platform to reduce friction. The audience skews younger but the 25-44 demographic
                  has grown significantly.
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm font-bold text-gray-900 mb-2">Typical Benchmarks (2026)</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                    <div><span className="font-semibold">CPM:</span> $5-12</div>
                    <div><span className="font-semibold">CTR:</span> 0.8-2.5%</div>
                    <div><span className="font-semibold">CPC:</span> $0.50-2.00</div>
                    <div><span className="font-semibold">Conv Rate:</span> 1-4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Planning Framework */}
        <section className="bg-white border-y border-gray-100 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Budget Planning Framework for Paid Media
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Your <strong>paid media advertising agency</strong> should help you set budgets based on unit
              economics, not arbitrary round numbers. Here is how to think about budget allocation by business model.
            </p>

            <div className="space-y-8">
              {/* Ecommerce */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ecommerce Budget Framework</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Start with your target ROAS (return on ad spend). If your gross margin is 60%, you need at
                      minimum a 1.7x ROAS to break even. To be profitable, target 3-4x ROAS on prospecting and
                      6-10x on remarketing.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Minimum viable budget:</strong> $5,000-10,000/month in ad spend across Meta and
                      Google Shopping. Below this, you lack the data volume for the algorithm to optimize.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5">
                    <p className="font-bold text-gray-900 mb-3">Typical Budget Split</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex justify-between"><span>Meta prospecting:</span> <span className="font-semibold">35-40%</span></li>
                      <li className="flex justify-between"><span>Google Shopping/Search:</span> <span className="font-semibold">30-35%</span></li>
                      <li className="flex justify-between"><span>Remarketing (all platforms):</span> <span className="font-semibold">15-20%</span></li>
                      <li className="flex justify-between"><span>Testing (new channels/creative):</span> <span className="font-semibold">10-15%</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lead Gen */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Generation Budget Framework</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Calculate your maximum allowable cost per lead by working backward from revenue. If your average
                      deal is worth $10,000, your close rate is 20%, and you want a 3:1 LTV:CAC ratio, your target
                      CPL is roughly $667. Most businesses can tolerate CPLs of $50-200 for qualified leads.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Minimum viable budget:</strong> $3,000-5,000/month per channel. You need at least
                      30-50 conversions per month per campaign for smart bidding to work effectively.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5">
                    <p className="font-bold text-gray-900 mb-3">Typical Budget Split</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex justify-between"><span>Google Search (high-intent):</span> <span className="font-semibold">40-50%</span></li>
                      <li className="flex justify-between"><span>Meta/LinkedIn prospecting:</span> <span className="font-semibold">25-35%</span></li>
                      <li className="flex justify-between"><span>Remarketing (cross-platform):</span> <span className="font-semibold">10-15%</span></li>
                      <li className="flex justify-between"><span>Testing budget:</span> <span className="font-semibold">10%</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SaaS */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SaaS Budget Framework</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      SaaS businesses should budget based on LTV:CAC ratios. A healthy ratio is 3:1 or higher. If
                      your average customer LTV is $12,000, target a blended CAC under $4,000. Factor in that
                      paid channels typically run higher CAC than organic, so a paid-specific target of $5,000-6,000
                      can still work if blended CAC stays healthy.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Minimum viable budget:</strong> $7,000-15,000/month. SaaS sales cycles are longer
                      (30-90 days), requiring sustained spend and patience through the learning period.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5">
                    <p className="font-bold text-gray-900 mb-3">Typical Budget Split</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex justify-between"><span>Google Search (branded + non-branded):</span> <span className="font-semibold">35-45%</span></li>
                      <li className="flex justify-between"><span>LinkedIn (B2B targeting):</span> <span className="font-semibold">20-30%</span></li>
                      <li className="flex justify-between"><span>Meta (retargeting + lookalikes):</span> <span className="font-semibold">15-20%</span></li>
                      <li className="flex justify-between"><span>Content syndication/testing:</span> <span className="font-semibold">10-15%</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scaling Rules */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scaling Rules Your Agency Should Follow</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold shrink-0">01.</span>
                    <span>Never increase spend by more than 20% per week on a campaign. Larger jumps reset the algorithm&apos;s learning phase and spike CPAs.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold shrink-0">02.</span>
                    <span>Test budget should be separate from scaling budget. Allocate 10-15% of total spend to experiments that may fail.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold shrink-0">03.</span>
                    <span>Scale winners horizontally (new audiences, new geos, new placements) before vertically (more budget to the same campaign).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold shrink-0">04.</span>
                    <span>Set a CPA ceiling, not a spend target. Your agency should pull back immediately when unit economics break, not wait until the monthly budget is exhausted.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold shrink-0">05.</span>
                    <span>Review efficiency at 7-day windows, not daily. Daily fluctuations cause overreaction. Weekly trends reveal true performance.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Evaluate a Paid Media Agency */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              How to Evaluate a Paid Media Advertising Agency
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Not all agencies are equal. Here are the signals that separate serious{' '}
              <strong>paid media agencies</strong> from those that are just managing dashboards.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Green Flags */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Green Flags</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-green-600 shrink-0 mt-1">&#10003;</span>
                    <span>They ask about your sales process, close rates, and customer LTV before discussing ad tactics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 shrink-0 mt-1">&#10003;</span>
                    <span>You own the ad accounts and all data, even if you leave the agency</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 shrink-0 mt-1">&#10003;</span>
                    <span>They share anonymized case studies with real CAC and ROAS numbers, not just &ldquo;500% increase&rdquo;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 shrink-0 mt-1">&#10003;</span>
                    <span>Reporting includes CRM-verified conversions, not just platform-reported leads</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 shrink-0 mt-1">&#10003;</span>
                    <span>They proactively recommend reducing spend on underperforming channels rather than protecting their fee</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 shrink-0 mt-1">&#10003;</span>
                    <span>A named strategist with 3+ years of experience manages your account day-to-day</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 shrink-0 mt-1">&#10003;</span>
                    <span>They can explain their testing methodology for creative, audiences, and landing pages</span>
                  </li>
                </ul>
              </div>

              {/* Red Flags */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-red-700 mb-4">Red Flags</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-red-600 shrink-0 mt-1">&times;</span>
                    <span>They require long-term contracts (12+ months) with no performance exit clause</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 shrink-0 mt-1">&times;</span>
                    <span>They own the ad accounts and won&apos;t give you direct access</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 shrink-0 mt-1">&times;</span>
                    <span>Reporting only shows vanity metrics (impressions, reach, clicks) with no revenue attribution</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 shrink-0 mt-1">&times;</span>
                    <span>They guarantee specific results like &ldquo;10x ROAS in 30 days&rdquo; before seeing your data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 shrink-0 mt-1">&times;</span>
                    <span>No clear answer on who manages your account daily (often means it is a junior or automated)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 shrink-0 mt-1">&times;</span>
                    <span>They charge a percentage of spend with no cap, incentivizing them to increase your budget regardless of performance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 shrink-0 mt-1">&times;</span>
                    <span>Their &ldquo;strategy call&rdquo; is a sales pitch with no analysis of your current data</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What Reporting Should Look Like */}
            <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Good Agency Reporting Looks Like</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Weekly (5-minute snapshot)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Total spend vs. budget</li>
                    <li>- Conversions and CPA by channel</li>
                    <li>- Spend pacing alert if off-track</li>
                    <li>- Any critical issues flagged</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Monthly (strategic review)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Full funnel analysis by channel</li>
                    <li>- Creative performance rankings</li>
                    <li>- Audience segment insights</li>
                    <li>- CRM-reconciled lead quality data</li>
                    <li>- Next month action plan</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Quarterly (business review)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>- Revenue attributed to paid media</li>
                    <li>- CAC and LTV:CAC trends</li>
                    <li>- Channel efficiency comparison</li>
                    <li>- Competitive landscape update</li>
                    <li>- Budget reallocation recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Account Structure Best Practices */}
        <section className="bg-white border-y border-gray-100 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              PPC Account Structure Best Practices
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Account structure determines performance ceilings. A well-organized account makes optimization
              faster and scaling predictable. Here is how a serious <strong>PPC digital marketing agency</strong>{' '}
              should organize your campaigns.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <article className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Hierarchy</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Organize campaigns by objective first, then by audience or keyword theme. A typical Google Ads
                  structure for lead gen:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>- Brand Campaign (exact match brand terms)</li>
                  <li>- Competitor Campaign (competitor brand terms)</li>
                  <li>- High-Intent Non-Brand (service + intent keywords)</li>
                  <li>- Mid-Intent Non-Brand (informational keywords)</li>
                  <li>- Remarketing Campaign (site visitors, 7/30/90 day)</li>
                  <li>- DSA/Broad Match (catch-all for discovery)</li>
                </ul>
              </article>

              <article className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Naming Conventions</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Consistent naming conventions save hours of reporting time and reduce errors. Use a structured format:
                </p>
                <div className="bg-slate-50 rounded-lg p-3 text-sm font-mono text-gray-800 mb-3">
                  [Platform]_[Objective]_[Audience]_[Geo]_[Detail]
                </div>
                <p className="text-gray-700 text-sm mb-2">Examples:</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>- GGL_LeadGen_NonBrand_US_ExactMatch</li>
                  <li>- META_Prospecting_LAL1pct_US_VideoViews</li>
                  <li>- LI_Awareness_CMOs_US_DocumentAd</li>
                </ul>
              </article>

              <article className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Audience Isolation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Never mix cold prospecting and remarketing in the same campaign. Remarketing audiences convert
                  at 3-5x the rate of cold audiences, which inflates apparent performance and masks true
                  acquisition costs. Use exclusion lists aggressively: exclude converters from prospecting
                  campaigns, exclude remarketing audiences from cold campaigns, and exclude existing customers
                  from all acquisition campaigns unless running upsell or cross-sell.
                </p>
              </article>

              <article className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Testing Methodology</h3>
                <p className="text-gray-700 leading-relaxed">
                  Test one variable at a time across these dimensions in order of impact: (1) offer/value
                  proposition, (2) headline/hook, (3) creative format (image vs. video vs. carousel),
                  (4) body copy, (5) CTA. Run each test until you reach 95% statistical significance or
                  500+ impressions per variant, whichever comes later. Rotate in 3-5 new creative concepts
                  per month per campaign. Archive learnings in a shared creative insights document.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* KPI Framework */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              PPC KPI Framework: What Metrics Matter at Each Funnel Stage
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Your <strong>paid media agency</strong> should track metrics at every funnel stage, not just
              the top. Here is the complete framework from impression to revenue.
            </p>

            <div className="space-y-6">
              {/* Top of Funnel */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-100 text-purple-700 text-sm font-bold px-3 py-1 rounded-full">Top of Funnel</span>
                  <span className="text-gray-500 text-sm">Awareness and Reach</span>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">Impressions</p>
                    <p className="text-gray-600 text-sm">How many times your ads are seen. Baseline for reach.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">CPM</p>
                    <p className="text-gray-600 text-sm">Cost per 1,000 impressions. Measures market efficiency.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">Reach</p>
                    <p className="text-gray-600 text-sm">Unique people who saw your ad. Watch for frequency creep.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">Frequency</p>
                    <p className="text-gray-600 text-sm">Avg times each person sees your ad. Keep under 3-4 for cold.</p>
                  </div>
                </div>
              </div>

              {/* Mid Funnel */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full">Mid Funnel</span>
                  <span className="text-gray-500 text-sm">Engagement and Traffic</span>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">CTR</p>
                    <p className="text-gray-600 text-sm">Clicks / Impressions. Measures ad relevance and creative strength.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">CPC</p>
                    <p className="text-gray-600 text-sm">Cost per click. Function of CTR, bid, and competition.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">Quality Score</p>
                    <p className="text-gray-600 text-sm">Google&apos;s 1-10 rating of ad relevance. Directly impacts CPC.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">Bounce Rate</p>
                    <p className="text-gray-600 text-sm">Visitors who leave without action. High bounce = message mismatch.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Funnel */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">Bottom Funnel</span>
                  <span className="text-gray-500 text-sm">Conversions and Revenue</span>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">Conversion Rate</p>
                    <p className="text-gray-600 text-sm">Leads / Clicks. Measures landing page and offer strength.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">CPL / CPA</p>
                    <p className="text-gray-600 text-sm">Cost per lead or acquisition. Your primary efficiency metric.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">Lead-to-SQL Rate</p>
                    <p className="text-gray-600 text-sm">Percentage of leads that become sales-qualified. Measures quality.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-gray-900 text-sm">ROAS</p>
                    <p className="text-gray-600 text-sm">Revenue / Ad Spend. The ultimate performance measure.</p>
                  </div>
                </div>
              </div>

              {/* Key Formulas */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Formulas Every Business Owner Should Know</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-5">
                    <p className="font-bold text-gray-900 mb-1">Customer Acquisition Cost (CAC)</p>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm font-mono text-gray-800 mb-2">
                      CAC = Total Marketing Spend / New Customers Acquired
                    </div>
                    <p className="text-gray-600 text-sm">Include agency fees, ad spend, creative costs, and tools. A fully-loaded CAC gives you the real picture.</p>
                  </div>
                  <div className="bg-white rounded-xl p-5">
                    <p className="font-bold text-gray-900 mb-1">Return on Ad Spend (ROAS)</p>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm font-mono text-gray-800 mb-2">
                      ROAS = Revenue from Ads / Ad Spend
                    </div>
                    <p className="text-gray-600 text-sm">A 4x ROAS means $4 revenue for every $1 spent. Breakeven ROAS = 1 / Gross Margin (e.g., 60% margin = 1.67x breakeven).</p>
                  </div>
                  <div className="bg-white rounded-xl p-5">
                    <p className="font-bold text-gray-900 mb-1">LTV:CAC Ratio</p>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm font-mono text-gray-800 mb-2">
                      LTV:CAC = Customer Lifetime Value / CAC
                    </div>
                    <p className="text-gray-600 text-sm">Target 3:1 or higher. Below 1:1 means you lose money on every customer. Between 1:1 and 3:1 is break-even territory.</p>
                  </div>
                  <div className="bg-white rounded-xl p-5">
                    <p className="font-bold text-gray-900 mb-1">Cost Per Qualified Lead (CPQL)</p>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm font-mono text-gray-800 mb-2">
                      CPQL = Ad Spend / Qualified Leads (not total leads)
                    </div>
                    <p className="text-gray-600 text-sm">More meaningful than CPL. A $200 CPQL that closes at 25% is better than a $30 CPL that closes at 1%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white border-y border-gray-100 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 text-center">
              Frequently Asked Questions About PPC Agencies
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <article key={faq.question} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Contact Form */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Ready to Work With a Paid Media Agency That Drives Real Revenue?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help businesses build profitable paid media systems across Google, Meta, LinkedIn, and
                emerging platforms. Fill out the form below and we will send you a free audit of your
                current ad accounts with specific, actionable recommendations.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="font-black text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  OWN IT SOCIAL
                </div>
                <p className="text-gray-500 mb-4">
                  Full-service <strong className="text-gray-400">PPC digital marketing agency</strong> and{' '}
                  <strong className="text-gray-400">paid media advertising agency</strong> helping businesses
                  scale profitably through data-driven paid media strategy.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="/articles" className="hover:text-white transition">Articles</Link></li>
                  <li><Link href="/locations" className="hover:text-white transition">Service Areas</Link></li>
                  <li><Link href="/top-marketing-agencies" className="hover:text-white transition">Top Agencies</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                  <li><a href="#what-ppc-agency-does" className="hover:text-white transition">PPC Guide</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm border-t border-gray-800 pt-8">
              <p>&copy; {new Date().getFullYear()} OwnItSocial.com | All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
