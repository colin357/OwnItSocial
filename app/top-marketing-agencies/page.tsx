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
  title:
    'Top Marketing Agencies & Firms (2026 Buyer\'s Guide) | PPC, NYC & National',
  description:
    'Compare big marketing agencies, top PPC agencies, and top advertising companies in NYC. Includes evaluation frameworks, pricing benchmarks, interview questions, and an agency comparison table to help you pick the right partner.',
  keywords:
    'big marketing agencies, top ppc agencies, top marketing agency, top marketing firms, top advertising companies nyc, top advertising companies in new york, best marketing agencies, top digital marketing companies',
  openGraph: {
    title: 'Top Marketing Agencies & Firms (2026 Buyer\'s Guide)',
    description:
      'Evaluation frameworks, pricing benchmarks, and interview questions to shortlist big marketing agencies, top PPC agencies, and top advertising companies in NYC.',
    type: 'article',
  },
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const agencies = [
  {
    name: 'Wpromote',
    focus: 'Enterprise performance marketing, paid media, SEO',
    bestFit: 'Brands spending $100K+/mo on media with complex attribution',
    validate:
      'Ask for senior-level access frequency and how they handle accounts under $100K/mo. Request case studies in your vertical.',
  },
  {
    name: 'Blue Fountain Media',
    focus: 'Brand strategy, web development, digital marketing',
    bestFit: 'Mid-market companies undergoing rebrand or site modernization',
    validate:
      'Project-based model can inflate timelines. Get fixed-price scoping and change-order terms in writing.',
  },
  {
    name: 'Sociallyin',
    focus: 'Social-first creative, influencer marketing, community management',
    bestFit: 'DTC and consumer brands needing high-volume platform-native content',
    validate:
      'Limited depth in SEO, CRO, or technical marketing. Best paired with a performance partner if you need full-funnel.',
  },
  {
    name: 'Tinuiti',
    focus: 'Full-funnel performance: paid search, paid social, Amazon, CTV',
    bestFit: 'E-commerce and retail brands scaling across multiple paid channels',
    validate:
      'Large client roster means account managers can be stretched. Confirm dedicated headcount and escalation paths.',
  },
  {
    name: 'NoGood',
    focus: 'Growth marketing, experimentation, B2B SaaS and healthcare',
    bestFit: 'Venture-backed startups needing rapid testing and channel validation',
    validate:
      'Startup DNA can mean less process rigor. Clarify reporting cadence and what happens when a test fails.',
  },
  {
    name: 'Own It Social',
    focus: 'Growth marketing with real estate and finance specialization',
    bestFit: 'Teams needing social, paid media, and lead nurturing tied to pipeline',
    validate:
      'Best suited for businesses that can support consistent content plus sales follow-up workflows.',
    featured: true,
  },
  {
    name: 'Disruptive Advertising',
    focus: 'PPC management, CRO, lifecycle marketing',
    bestFit: 'Lead-gen businesses spending $10K-$100K/mo on Google and Meta ads',
    validate:
      'Heavy focus on paid media. Ask about their organic and content capabilities if you need full-service.',
  },
  {
    name: 'R/GA',
    focus: 'Brand transformation, digital product design, marketing innovation',
    bestFit: 'Enterprise brands investing in long-term brand and digital transformation',
    validate:
      'Premium pricing. Engagements often start at $500K+. Ensure scope matches your actual needs, not aspirations.',
  },
];

const faqs = [
  {
    question: 'What makes a marketing agency a "top" agency?',
    answer:
      'A top marketing agency consistently delivers measurable business outcomes, not just campaign metrics. The markers include a documented track record of improving pipeline or revenue for clients in your vertical, transparent reporting tied to business KPIs, a team structure that pairs senior strategists with execution specialists,',
  },
  {
    question: 'How much do big marketing agencies charge per month?',
    answer:
      'Monthly retainers for big marketing agencies typically range from $10,000 to $50,000+ depending on scope. Boutique agencies start at $3,000-$8,000/month for focused channel work. Mid-market agencies charge $8,000-$25,000/month for multi-channel programs.',
  },
  {
    question: 'What is the difference between a marketing agency and an advertising agency?',
    answer:
      'Marketing agencies cover the full spectrum of customer acquisition and retention: SEO, content, email, social, paid media, analytics, and CRO. Advertising agencies traditionally focus on creative campaigns, brand messaging, and media buying. In practice, most modern agencies blur this line. When evaluating partners, focus less on what they call themselves and more on whether their core capabilities match your actual needs. A firm calling itself an "advertising agency" that excels at performance media may serve you better than a "full-service marketing agency" that spreads too thin.',
  },
  {
    question: 'How do I choose between a big marketing agency and a boutique firm?',
    answer:
      'Choose a big agency when you need multi-market execution, deep platform partnerships (e.g., Google Premier Partner status), or dedicated account teams across many channels simultaneously.',
  },
  {
    question: 'What should I look for in a top PPC agency?',
    answer:
      'Five non-negotiable capabilities: (1) First-party conversion tracking setup, not just relying on platform pixels. (2) A testing framework with defined statistical significance thresholds. (3) Landing page strategy, not just ad management. (4) Segmented reporting by funnel stage, not just aggregate ROAS.',
  },
  {
    question: 'Why are advertising companies in NYC more expensive?',
    answer:
      'NYC agencies carry higher overhead: office space, senior talent compensation, and the cost of maintaining relationships with major media companies headquartered in Manhattan. However, you also get access to a deeper talent pool, proximity to media buyers and publishers, and teams accustomed to working with demanding enterprise clients.',
  },
  {
    question: 'How long should I give a marketing agency before evaluating results?',
    answer:
      'For paid media (PPC, paid social), expect meaningful data within 60-90 days. The first 30 days are typically spent on audit, setup, and initial testing. By day 60, you should see clear trends in CPA, ROAS, and lead quality.',
  }
];

const evaluationCriteria = [
  {
    title: 'Channel Depth',
    description:
      'The best agencies go deep before they go wide. Ask how many channels they recommend starting with and what their ramp-up timeline looks like. A strong agency will suggest mastering 1-2 channels before expanding, not spreading budget across five platforms from day one.',
    question: 'How many channels have you profitably managed simultaneously for a client at our budget level?',
    scoring: 'Score 5 if they have documented playbooks and case studies for your primary channels.',
  },
  {
    title: 'Measurement Framework',
    description:
      'Agencies should tie media metrics to pipeline and revenue, not just platform-reported conversions. Ask about their attribution model, how they handle discrepancies between platform data and CRM data, and what their north-star KPI would be for your business.',
    question: 'Walk me through how you reconcile Google Ads conversion data with what actually closes in a CRM.',
    scoring: 'Score 5 if they routinely report cost-per-qualified-lead and customer acquisition cost from CRM data.',
  },
  {
    title: 'Creative Throughput',
    description:
      'High-performing paid media requires constant creative testing. Understand their production capacity: how many ad variations per month, what their testing methodology is,',
    question: 'What is your monthly creative output, and what does your ad testing framework look like?',
    scoring: 'Score 5 if they ship 10+ creative variations per month with documented testing protocols.',
  },
  {
    title: 'ICP Alignment',
    description:
      'An agency that has grown businesses with your exact customer profile will ramp faster and avoid costly learning curves. Ask for case studies from your industry, your average deal size range, and your sales cycle length. Generic "we work with everyone" positioning is a yellow flag.',
    question: 'Show me three clients in our industry with a similar average contract value and sales cycle.',
    scoring: 'Score 5 if they can name 3+ clients with your exact customer type and growth stage.',
  },
  {
    title: 'Team Structure',
    description:
      'Understand who owns strategy vs. execution. Many agencies put a VP on the pitch call and then hand you off to a junior account manager. Ask specifically who will be on your weekly calls, what their experience level is, and what the escalation path looks like when something goes wrong.',
    question: 'Who will be my day-to-day contact, how many other accounts do they manage, and when did they last run a campaign in my vertical?',
    scoring: 'Score 5 if a named senior strategist owns your account with 5-8 total accounts max.',
  },
  {
    title: 'Commercial Model',
    description:
      'The fee structure should align incentives. Percentage-of-spend models can incentivize agencies to recommend more budget rather than more efficiency.',
    question: 'Are you open to a performance component in the fee structure, and if not, why?',
    scoring: 'Score 5 if they offer performance-linked compensation or flat fees with clear deliverables.',
  },
];

const agencyTypes = [
  {
    type: 'Full-Service',
    description:
      'Handles everything from brand strategy to paid media to email automation under one roof.',
    pros: [
      'Single point of accountability across all channels',
      'Cohesive brand and messaging consistency',
      'Easier for businesses without internal marketing leadership',
    ],
    cons: [
      'Jack-of-all-trades risk: depth in any one channel may be limited',
      'Higher total retainers since you pay for breadth',
      'Harder to evaluate performance when one team controls all levers',
    ],
    bestFor: 'Companies with less than $20K/month in total marketing budget and no internal marketing director.',
    budget: '$8,000-$30,000+/mo',
  },
  {
    type: 'Performance / Growth',
    description:
      'Focused on measurable outcomes: paid acquisition, conversion rate optimization, and revenue attribution.',
    pros: [
      'Outcomes-oriented mindset with clear KPI accountability',
      'Strong technical capabilities in tracking and analytics',
      'Faster iteration cycles and data-driven decision making',
    ],
    cons: [
      'May underinvest in brand building and top-of-funnel awareness',
      'Can over-optimize for short-term metrics at the expense of LTV',
      'Creative quality sometimes takes a back seat to volume testing',
    ],
    bestFor: 'Businesses with existing brand awareness that need to scale profitable customer acquisition.',
    budget: '$5,000-$25,000+/mo plus ad spend',
  },
  {
    type: 'Creative / Brand',
    description:
      'Specializes in brand identity, campaign creative, video production, and storytelling.',
    pros: [
      'Strongest creative output and production quality',
      'Best for differentiation in crowded markets',
      'Deep expertise in consumer psychology and messaging',
    ],
    cons: [
      'Often lacks performance marketing infrastructure',
      'Harder to tie work directly to revenue metrics',
      'Project-based pricing can lead to scope creep and budget overruns',
    ],
    bestFor: 'Brands launching new products, entering new markets, or undergoing repositioning.',
    budget: '$10,000-$50,000+ per project',
  },
  {
    type: 'Specialized / Vertical',
    description:
      'Deep expertise in a specific industry (real estate, finance, healthcare, SaaS) or channel (Amazon, TikTok, programmatic).',
    pros: [
      'Fastest ramp-up time due to existing industry knowledge',
      'Pre-built playbooks and benchmarks for your vertical',
      'Understands compliance, audience behavior, and competitive dynamics',
    ],
    cons: [
      'Narrower capability set outside their specialty',
      'Smaller team size can limit bandwidth during scale-up',
      'May apply cookie-cutter strategies from other clients in your space',
    ],
    bestFor: 'Businesses in regulated industries or those that need an agency productive within 30 days.',
    budget: '$3,000-$15,000/mo',
  },
];

const interviewQuestions = [
  {
    question:
      'How do you handle conversion tracking when CRM attribution and platform attribution disagree?',
    why: 'Tests whether they understand the gap between platform-reported and actual business outcomes. A strong agency will describe a multi-touch model or a CRM reconciliation process.',
  },
  {
    question:
      'What is your creative testing cadence, and what sample size do you need before declaring a winner?',
    why: 'Reveals their statistical rigor. Agencies that "go with their gut" after 50 conversions are not running real tests.',
  },
  {
    question:
      'How do you segment campaigns by funnel stage rather than just by channel?',
    why: 'Distinguishes strategic thinkers from platform operators. Prospecting, retargeting, and retention should get different budgets, creatives, and KPIs.',
  },
  {
    question:
      'What is your process for improving lead quality, not just lowering cost per lead?',
    why: 'Critical for lead-gen businesses. A low CPL means nothing if sales cannot close the leads. Look for audience refinement, lead scoring, and feedback loops with your sales team.',
  },
  {
    question:
      'Who is accountable for weekly optimizations, and who owns monthly strategy pivots?',
    why: 'Clarifies the day-to-day vs. strategic ownership. You want to know that the person on your weekly call has the authority to make changes.',
  },
  {
    question:
      'Can you walk me through a campaign that failed and what you did about it?',
    why: 'An honest agency will discuss failures openly. Agencies that claim everything works are either lying or not testing aggressively enough.',
  },
  {
    question:
      'What does your onboarding process look like, and what do you need from us in the first 30 days?',
    why: 'Strong agencies have a documented onboarding process: asset collection, tracking audit, competitive analysis, and strategy development. No process means no scalability.',
  },
  {
    question:
      'How do you structure reporting, and what happens when metrics decline for two consecutive months?',
    why: 'Tests accountability. Good agencies have an escalation framework, not just a prettier dashboard.',
  },
  {
    question:
      'Do we own the ad accounts, creative assets, and data if we part ways?',
    why: 'Non-negotiable. If an agency insists on owning your ad accounts, walk away. You should always retain full ownership of your data and accounts.',
  },
  {
    question:
      'What percentage of your current clients are in our industry, and what is your average client retention?',
    why: 'Industry concentration shows expertise but also potential conflicts of interest. Retention rates below 12 months are a red flag.',
  },
  {
    question:
      'Are you open to a 90-day trial before a long-term commitment?',
    why: 'Confident agencies welcome trial periods. Those requiring 12-month contracts upfront may be compensating for high churn.',
  },
  {
    question:
      'How do you determine budget allocation between channels for a new client?',
    why: 'Look for agencies that start with your contribution margin and target payback period, then work backward. Agencies that simply ask "what is your budget?" lack sophistication.',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function TopMarketingAgenciesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Top Marketing Agencies', url: '/top-marketing-agencies' },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* ============================================================ */}
        {/* STICKY HEADER                                                 */}
        {/* ============================================================ */}
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
              Get Free Strategy Review
            </Link>
          </div>
        </header>

        {/* ============================================================ */}
        {/* HERO SECTION                                                  */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Authority Buyer&apos;s Guide &bull; Updated March 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900">
              Top Marketing Agencies:{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                The 2026 Evaluation Framework
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              If you are comparing <strong>big marketing agencies</strong>,{' '}
              <strong>top PPC agencies</strong>, or{' '}
              <strong>top advertising companies in New York</strong>, do not choose by
              brand name or awards list. The right agency is the one that matches your
              growth stage, margin profile, and sales process.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This guide gives you the specific frameworks, pricing benchmarks, and
              interview questions to shortlist and vet the right{' '}
              <strong>top marketing firm</strong> for your business &mdash; whether you are
              spending $5K or $500K per month.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get a Strategy Review
              </Link>
              <a
                href="#evaluation-framework"
                className="px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-all duration-200"
              >
                Jump to Evaluation Framework
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* HOW TO EVALUATE — 6-POINT FRAMEWORK                           */}
        {/* ============================================================ */}
        <section
          id="evaluation-framework"
          className="bg-white border-t-4 border-t-purple-500 shadow-sm py-20 md:py-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                How to Evaluate a Top Marketing Agency: The 6-Point Framework
              </h2>
              <p className="text-lg text-gray-600">
                Before you look at agency lists, you need a scoring system. These six
                criteria separate agencies that will move your revenue from agencies
                that will consume your budget. Use this as a literal scorecard &mdash; rate
                each agency 1-5 on every criterion during your evaluation calls.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {evaluationCriteria.map((criterion) => (
                <div
                  key={criterion.title}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {criterion.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {criterion.description}
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-100 mb-3">
                    <p className="text-sm font-semibold text-purple-700 mb-1">
                      Question to ask:
                    </p>
                    <p className="text-sm text-purple-900 italic">
                      &ldquo;{criterion.question}&rdquo;
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{criterion.scoring}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* AGENCY TYPES BREAKDOWN                                        */}
        {/* ============================================================ */}
        <section className="bg-gray-50/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Four Types of Big Marketing Agencies (and When Each One Fits)
            </h2>
            <p className="text-lg text-gray-600">
              Not all <strong>top marketing firms</strong> are built the same. Understanding
              the four agency archetypes helps you filter your shortlist before you
              ever schedule a discovery call.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {agencyTypes.map((agency) => (
              <div
                key={agency.type}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {agency.type}
                </h3>
                <p className="text-gray-700 mb-5">{agency.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <h4 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-2">
                      Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {agency.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-green-600 mt-0.5 flex-shrink-0">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-red-700 uppercase tracking-wide mb-2">
                      Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {agency.cons.map((con) => (
                        <li
                          key={con}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-red-600 mt-0.5 flex-shrink-0">&ndash;</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="font-bold">Best for:</span> {agency.bestFor}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Typical budget:</span> {agency.budget}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* NYC ADVERTISING COMPANIES                                     */}
        {/* ============================================================ */}
        <section className="bg-white border-t-4 border-t-blue-500 shadow-sm py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Top Advertising Companies in NYC: What You Need to Know
              </h2>
              <p className="text-lg text-gray-600">
                New York City is the densest agency market in the world. If you are
                evaluating <strong>top advertising companies in New York</strong>,
                understanding the market dynamics will save you months and tens of
                thousands of dollars.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  Market Dynamics
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">1.</span>
                    <span>
                      NYC has 10,000+ registered agencies &mdash; from solo freelancers to
                      holding company giants like WPP and Omnicom.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">2.</span>
                    <span>
                      The talent pool is deep but expensive. Average agency salaries are
                      25-40% higher than other US markets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">3.</span>
                    <span>
                      Many agencies maintain Manhattan offices as client-facing
                      spaces while execution teams work remotely.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">4.</span>
                    <span>
                      NYC serves the most competitive verticals: finance, fashion, media,
                      tech, and real estate.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">1.</span>
                    <span>
                      Higher-than-average retainers. Plan for a 20-40% premium over
                      comparable agencies in other cities.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">2.</span>
                    <span>
                      Stronger creative and brand capabilities. NYC attracts top creative
                      directors and production talent.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">3.</span>
                    <span>
                      Direct access to media companies, publishers, and ad tech platforms
                      headquartered in Manhattan.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">4.</span>
                    <span>
                      Talent density is high, but so is turnover. Ask about team stability
                      and average tenure.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  Typical NYC Pricing
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-xs bg-purple-100 text-purple-700 rounded-full px-2.5 py-0.5 flex-shrink-0">
                      Boutique
                    </span>
                    <span>$5,000 &ndash; $15,000/mo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-xs bg-purple-100 text-purple-700 rounded-full px-2.5 py-0.5 flex-shrink-0">
                      Mid-Market
                    </span>
                    <span>$15,000 &ndash; $50,000/mo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-xs bg-purple-100 text-purple-700 rounded-full px-2.5 py-0.5 flex-shrink-0">
                      Enterprise
                    </span>
                    <span>$50,000 &ndash; $250,000+/mo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-xs bg-purple-100 text-purple-700 rounded-full px-2.5 py-0.5 flex-shrink-0">
                      Holding Co.
                    </span>
                    <span>$100,000 &ndash; $1M+/mo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-xs bg-purple-100 text-purple-700 rounded-full px-2.5 py-0.5 flex-shrink-0">
                      Freelancer
                    </span>
                    <span>$150 &ndash; $350/hr senior talent</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Should You Hire a NYC Agency If You Are Not Based in New York?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It depends on what you are buying. If you need performance marketing
                (PPC, paid social, SEO), geography rarely matters &mdash; execution quality,
                industry expertise, and reporting rigor matter more than zip code. If you
                need brand-level creative, video production, or access to premium media
                relationships, the NYC talent advantage is real. For most mid-market
                businesses, the best move is finding a{' '}
                <strong>top marketing agency</strong> with deep experience in your
                vertical &mdash; regardless of where they are headquartered &mdash; and paying for
                NYC production talent only when specific projects demand it.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PPC AGENCY EVALUATION                                         */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Evaluating Top PPC Agencies: What Separates Good from Great
            </h2>
            <p className="text-lg text-gray-600">
              PPC is one of the most measurable channels, which means it is also one of
              the easiest to evaluate. Here is what to look for &mdash; and what to avoid &mdash; when
              shortlisting <strong>top PPC agencies</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What to look for */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-black text-green-700 mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                What to Look For
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 flex-shrink-0 font-bold">1.</span>
                  <span>
                    <strong>First-party tracking setup:</strong> They should implement
                    server-side conversion tracking or enhanced conversions &mdash; not just
                    rely on browser pixels that miss 20-40% of conversions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 flex-shrink-0 font-bold">2.</span>
                  <span>
                    <strong>Landing page ownership:</strong> Top PPC agencies build and
                    test landing pages, not just ads. The page is where conversion
                    happens &mdash; managing ads without controlling the page is leaving money
                    on the table.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 flex-shrink-0 font-bold">3.</span>
                  <span>
                    <strong>Funnel-stage segmentation:</strong> Prospecting, retargeting,
                    and retention campaigns should have separate budgets, creatives, and
                    success metrics.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 flex-shrink-0 font-bold">4.</span>
                  <span>
                    <strong>Negative keyword discipline:</strong>{' '}
                    Ask to see their negative keyword and audience exclusion strategy. Waste prevention is
                    as important as targeting.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 flex-shrink-0 font-bold">5.</span>
                  <span>
                    <strong>Platform certification plus real results:</strong> Google
                    Partner status is table stakes. Ask for actual client ROAS and CPA
                    numbers, not just badges.
                  </span>
                </li>
              </ul>
            </div>

            {/* Red flags */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-black text-red-700 mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.27 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                Red Flags
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0 font-bold">1.</span>
                  <span>
                    <strong>Guaranteed ROAS before an audit:</strong> No credible agency
                    can promise specific returns without understanding your funnel,
                    margins, and competitive landscape first.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0 font-bold">2.</span>
                  <span>
                    <strong>Agency-owned ad accounts:</strong> If they insist on running
                    ads through their own accounts rather than yours, you lose all data
                    and audience history when you leave.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0 font-bold">3.</span>
                  <span>
                    <strong>Reporting only platform metrics:</strong> If reports show
                    Google or Meta ROAS but never connect to CRM revenue, they are
                    optimizing for the platform, not your business.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0 font-bold">4.</span>
                  <span>
                    <strong>No creative testing process:</strong> Agencies that run the
                    same ads for months are leaving significant performance on the table.
                    Expect 10-20+ new variations tested per month.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0 font-bold">5.</span>
                  <span>
                    <strong>Percentage-of-spend-only pricing with no cap:</strong> This
                    incentivizes the agency to recommend increasing your budget whether
                    or not the incremental spend is profitable.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key PPC Metrics */}
          <div className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-xl font-black text-gray-900 mb-4">
              Key PPC Metrics Your Agency Should Report Weekly
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  metric: 'Cost Per Acquisition (CPA)',
                  note: 'Based on CRM-confirmed conversions, not platform conversions',
                },
                {
                  metric: 'Return on Ad Spend (ROAS)',
                  note: 'Blended across all campaigns, broken down by funnel stage',
                },
                {
                  metric: 'Lead-to-Close Rate',
                  note: 'Measures quality, not just volume of leads generated',
                },
                {
                  metric: 'Creative Win Rate',
                  note: 'Percentage of new creatives that beat the control',
                },
              ].map((item) => (
                <div
                  key={item.metric}
                  className="bg-white rounded-xl p-4 border border-purple-100"
                >
                  <p className="font-bold text-gray-900 mb-1 text-sm">{item.metric}</p>
                  <p className="text-sm text-gray-600">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* AGENCY COMPARISON TABLE                                       */}
        {/* ============================================================ */}
        <section className="bg-white border-t-4 border-t-purple-500 shadow-sm py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Agency Comparison: 8 Firms Often on the Shortlist
              </h2>
              <p className="text-lg text-gray-600">
                This is not a ranking. Each agency serves a different segment. Use this
                table to identify which 2-3 are worth a discovery call based on your
                specific situation.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-blue-50">
                    <th className="px-5 py-4 text-left font-black text-gray-900 whitespace-nowrap">
                      Agency
                    </th>
                    <th className="px-5 py-4 text-left font-black text-gray-900 whitespace-nowrap">
                      Core Focus
                    </th>
                    <th className="px-5 py-4 text-left font-black text-gray-900 whitespace-nowrap">
                      Best Fit
                    </th>
                    <th className="px-5 py-4 text-left font-black text-gray-900 whitespace-nowrap">
                      What to Validate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {agencies.map((agency) => (
                    <tr
                      key={agency.name}
                      className={`border-b border-gray-200 hover:bg-slate-50 transition-colors ${
                        'featured' in agency && agency.featured
                          ? 'bg-purple-50/40'
                          : ''
                      }`}
                    >
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">
                        {agency.name}
                      </td>
                      <td className="px-5 py-4 text-gray-700">{agency.focus}</td>
                      <td className="px-5 py-4 text-gray-700">{agency.bestFit}</td>
                      <td className="px-5 py-4 text-gray-700">{agency.validate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Disclosure: Own It Social is included in this comparison. We believe in
              transparent, side-by-side evaluation &mdash; which is why we list specific
              considerations for every agency, including ourselves.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PRICING BENCHMARKS                                            */}
        {/* ============================================================ */}
        <section className="bg-gray-50/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Marketing Agency Pricing Benchmarks (2026)
            </h2>
            <p className="text-lg text-gray-600">
              Pricing varies significantly by agency size, location, and service mix.
              These benchmarks reflect current market rates across US-based agencies to
              help you budget realistically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Boutique */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                Boutique Agency
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">
                $3K &ndash; $10K
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                + 10-15% of ad spend for media management
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Team size: 2-3 people on your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>1-2 channel focus (e.g., Google Ads + Meta)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Senior strategist directly on your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Typical contract: month-to-month or 3-month min</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Best for: $5K-$50K/mo ad spend</span>
                </li>
              </ul>
            </div>

            {/* Mid-Market */}
            <div className="bg-white rounded-2xl border-2 border-purple-300 p-6 shadow-md relative">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold">
                Most Common
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                Mid-Market Agency
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">
                $10K &ndash; $30K
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                + 8-15% of ad spend or blended into retainer
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Team size: 4-6 people on your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Multi-channel execution (3-5 channels)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Dedicated account manager + channel specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Typical contract: 6-month minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Best for: $50K-$300K/mo ad spend</span>
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4">
                Enterprise Agency
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">
                $30K &ndash; $150K+
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                + negotiated media fees or included in retainer
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Team size: 8-15+ people on your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Full-service with global capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Multiple pods: strategy, creative, media, analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Typical contract: 12-month commitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Best for: $300K+/mo ad spend, multi-market</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
            <p className="text-gray-800 font-semibold mb-2">
              A note on pricing transparency:
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              If an agency will not share their fee structure before a discovery call,
              that is worth noting. The most client-aligned agencies are transparent about
              how they charge because they want to attract the right fit, not just the most
              calls. Ask about setup fees, contract minimums, and what is included versus
              billed as an add-on before you commit.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* INTERVIEW QUESTIONS                                           */}
        {/* ============================================================ */}
        <section className="bg-white border-t-4 border-t-blue-500 shadow-sm py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                12 Questions to Ask Any Top Marketing Agency Before Signing
              </h2>
              <p className="text-lg text-gray-600">
                These are not softballs. Each question is designed to reveal how an
                agency actually operates &mdash; not how they pitch. Use them in discovery
                calls and pay attention to how confidently and specifically the agency
                responds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {interviewQuestions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold text-purple-700">
                          Why this matters:
                        </span>{' '}
                        {item.why}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FAQ SECTION                                                   */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Frequently Asked Questions About Top Marketing Agencies
            </h2>
            <p className="text-lg text-gray-600">
              Direct answers to the questions buyers ask most often when evaluating{' '}
              <strong>big marketing agencies</strong> and{' '}
              <strong>top marketing firms</strong>.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-lg font-black text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* CTA + CONTACT FORM                                            */}
        {/* ============================================================ */}
        <section
          id="contact"
          className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Not Sure Which Agency Type Fits Your Business?
                </h2>
                <p className="text-lg text-purple-200 leading-relaxed mb-6">
                  We will review your current marketing, ad spend, and growth goals &mdash;
                  then tell you honestly whether Own It Social is the right fit or
                  whether a different agency model would serve you better.
                </p>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-purple-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Free 30-minute strategy review
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-purple-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Honest assessment of your current spend efficiency
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-purple-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Actionable recommendations, even if we are not the right fit
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-black text-gray-900 mb-6">
                  Request Your Strategy Review
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOOTER                                                        */}
        {/* ============================================================ */}
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="font-black text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  OWN IT SOCIAL
                </div>
                <p className="text-gray-500 mb-4">
                  Growth marketing agency specializing in real estate and finance.
                  Helping businesses find the right marketing partner &mdash; whether that
                  is us or someone else.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/#services" className="hover:text-white transition">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/#how-it-works" className="hover:text-white transition">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/#about" className="hover:text-white transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="hover:text-white transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/articles" className="hover:text-white transition">
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/best-marketing-agencies-miami"
                      className="hover:text-white transition"
                    >
                      Best Agencies Miami
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/top-marketing-agencies"
                      className="hover:text-white transition"
                    >
                      Top Marketing Agencies
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations" className="hover:text-white transition">
                      All Locations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm border-t border-gray-800 pt-8">
              <p>&copy; 2026 OwnItSocial.com | All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
