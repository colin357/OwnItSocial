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
  title: 'Lead Generation for Real Estate Agents: The Complete System (2026)',
  description:
    'Comprehensive lead generation guide for real estate agents. Covers lead sources with cost benchmarks, nurture sequences, conversion frameworks, CRM setup, and the math behind building a predictable pipeline.',
  keywords: 'lead generation for real estate agents, real estate lead generation, real estate leads, realtor lead generation',
  openGraph: {
    title: 'Lead Generation for Real Estate Agents: The Complete System',
    description: 'Every lead source, nurture workflow, and conversion benchmark real estate agents need to build a predictable pipeline.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the best lead source for real estate agents?',
    answer: 'There is no single best source. Google Search ads deliver the highest-intent leads (3-5% conversion to appointment) but cost $25-$50+ per lead. Meta/Facebook ads provide the highest volume at $5-$20 per lead but require more nurturing. Referrals from past clients and partners convert at the highest rate (15-25%) but are harder to scale. The most successful agents use 2-3 sources simultaneously and measure cost per closing, not just cost per lead, to determine which sources perform best for their market.',
  },
  {
    question: 'How much should a real estate agent spend on lead generation?',
    answer: 'A common benchmark is 10-15% of your target gross commission income (GCI). If your goal is $200,000 GCI, plan to invest $20,000-$30,000 per year ($1,700-$2,500/month) across all lead gen activities including ad spend, technology, and agency fees. New agents or those entering a new market may need to invest 15-20% initially to build pipeline. The key is tracking cost per closing, not just cost per lead, and ensuring your CAC stays below 20% of average commission per transaction.',
  },
  {
    question: 'How many leads does it take to get one real estate closing?',
    answer: 'For internet leads (Google, Meta, Zillow), the typical funnel is: 100 leads → 20 conversations (20% contact rate) → 8 appointments (40% of conversations) → 2-3 closings (25-35% close rate from appointments). This means roughly 35-50 internet leads per closing. For referral leads, the ratio is much better: approximately 4-6 referral leads per closing. These ratios improve significantly with speed-to-lead under 5 minutes, structured follow-up sequences, and consistent long-term nurture.',
  },
  {
    question: 'What is speed-to-lead and why does it matter for real estate?',
    answer: 'Speed-to-lead measures how quickly you respond to a new inquiry. Studies show that responding within 5 minutes makes you 21 times more likely to qualify a lead compared to responding after 30 minutes. The average real estate agent takes 47+ hours to respond to an internet lead. By the time most agents call back, the lead has already spoken with 2-3 other agents. Implementing a sub-5-minute response protocol (even if it is just a text saying "Got your message, calling you in 2 minutes") is the single highest-impact change most agents can make.',
  },
  {
    question: 'Should I buy leads from Zillow or Realtor.com?',
    answer: 'Zillow Premier Agent and Realtor.com OpCity leads can work, but understand the economics: leads typically cost $20-$100+ each depending on zip code, they are often shared with 2-3 other agents, conversion rates average 1-3%, and quality varies significantly by market. The ROI math works best in markets where average commission exceeds $10,000 and you have a disciplined follow-up system. Many top-producing agents have shifted budget from portal leads to Google Ads and Meta campaigns where they own the audience data and are not competing with other agents on the same lead.',
  },
  {
    question: 'What CRM should real estate agents use for lead generation?',
    answer: 'The best CRM is the one you will actually use consistently. For agents focused on lead gen: Follow Up Boss is the industry standard for internet lead management with strong automation and routing features ($69-$499/mo per user). Sierra Interactive combines CRM with IDX website and marketing automation ($500-$1,000+/mo). KvCORE offers an all-in-one platform popular with teams ($500+/mo). For solo agents on a budget, LionDesk ($25-$83/mo) provides solid automation. The critical features are: automatic lead routing, text/email automation, pipeline tracking, and source attribution.',
  },
  {
    question: 'How do I generate seller leads in real estate?',
    answer: 'Seller leads require different strategies than buyer leads. Effective approaches include: (1) Google Ads targeting "sell my house in [city]" and "home value [city]" keywords; (2) Home valuation landing pages (via Homebot, Ylopo, or custom) that capture seller contact info; (3) Just Listed/Just Sold direct mail and social campaigns in target neighborhoods; (4) Circle prospecting around your recent listings and sales; (5) Content marketing with market update videos and neighborhood analysis; (6) Expired listing and FSBO outreach. Sellers are higher value (they often buy too) but harder to acquire than buyers.',
  },
  {
    question: 'What is an ISA in real estate and should I hire one?',
    answer: 'An ISA (Inside Sales Agent) is a dedicated person who handles initial lead follow-up, qualification, and appointment setting so agents can focus on showing homes and closing deals. Hire an ISA when you are generating 50+ leads per month and cannot personally follow up within 5 minutes, or when your leads-to-appointment conversion rate is below 10% due to inconsistent follow-up. ISAs typically cost $3,000-$5,000/month (salary + bonus per appointment set). The math works when your average commission exceeds $5,000 and your ISA sets 15-20+ appointments per month.',
  },
  {
    question: 'How long does it take for real estate lead generation to work?',
    answer: 'Paid advertising (Google, Meta) generates leads within days but pipeline builds over 30-60 days. Expect your first closing from internet leads at 60-90 days minimum, with most closing at 90-180 days because real estate has a long sales cycle. SEO and content marketing take 6-12 months to generate consistent organic leads. Sphere of influence and referral campaigns can produce results in 30-60 days if you have an existing database. The critical mistake is stopping after 30 days because "it is not working." Real estate lead gen is a 6-12 month commitment to see true ROI.',
  },
  {
    question: 'How do I convert more real estate leads into clients?',
    answer: 'Focus on three areas: (1) Speed - respond within 5 minutes, every time, no exceptions. (2) Persistence - most leads require 6-8 contact attempts before connecting. Follow a structured sequence: call-text-email on day 1, call-text on day 2, email on day 3, continue for 14 days. (3) Value - provide market insights, neighborhood data, or property alerts that keep leads engaged before they are ready to transact. Agents who implement all three consistently convert 3-5x more leads than those who call once and move on.',
  },
];

const leadSources = [
  {
    source: 'Google Search Ads',
    costPerLead: '$25 - $50+',
    conversionRate: '3-5% to appointment',
    intent: 'Very High',
    volume: 'Medium',
    description: 'Captures active buyers and sellers searching terms like "homes for sale in [city]" or "sell my house fast [city]." Highest intent of any paid channel because users are actively searching.',
    strategy: 'Target high-intent keywords: "[city] homes for sale," "real estate agent near me," "sell my house [city]." Use location-specific landing pages with IDX property search or home valuation tools. Separate buyer and seller campaigns. Exclude broad informational terms.',
    bestFor: 'Agents who want high-quality leads and can invest $2,000+/month in ad spend.',
  },
  {
    source: 'Meta/Facebook & Instagram Ads',
    costPerLead: '$5 - $25',
    conversionRate: '1-2% to appointment',
    intent: 'Low to Medium',
    volume: 'High',
    description: 'Targets users by interest, behavior, and demographics. Higher volume at lower cost but leads require more nurturing since they were not actively searching for an agent.',
    strategy: 'Lead magnet offers work best: "Free list of homes under $400K in [area]," "What is your home worth?" instant valuation, neighborhood guides. Use lookalike audiences from past clients. Retarget website visitors and video viewers. Creative should feel native, not like an ad.',
    bestFor: 'Agents who have a strong follow-up system and can nurture leads over 30-90+ days.',
  },
  {
    source: 'YouTube & Video Marketing',
    costPerLead: '$10 - $30',
    conversionRate: '2-4% to appointment',
    intent: 'Medium',
    volume: 'Medium',
    description: 'Weekly market updates, neighborhood tours, and listing walkthroughs build trust and create retargeting audiences. YouTube videos also rank in Google search results, providing long-term SEO value.',
    strategy: 'Publish weekly market updates (2-5 min). Create neighborhood tour videos for target areas. Record listing walkthrough videos. Use YouTube ads to promote top-performing organic videos. Build retargeting audiences from viewers for Meta and Google campaigns.',
    bestFor: 'Agents willing to be on camera consistently and who serve specific neighborhoods.',
  },
  {
    source: 'Zillow / Realtor.com Portal Leads',
    costPerLead: '$20 - $100+',
    conversionRate: '1-3% to closing',
    intent: 'Medium to High',
    volume: 'Medium',
    description: 'Purchased leads from listing portals. Often shared with multiple agents in the same zip code. Quality and cost vary dramatically by market.',
    strategy: 'Only invest if you can guarantee sub-5-minute response time (most agents on these platforms are slow). Request exclusive leads when available. Track cost per closing, not just cost per lead. Monitor quality monthly and cut underperforming zip codes quickly.',
    bestFor: 'New agents building initial pipeline, or teams with ISAs who can respond instantly.',
  },
  {
    source: 'Referral & Sphere of Influence',
    costPerLead: '$0 - $50',
    conversionRate: '15-25% to closing',
    intent: 'Very High',
    volume: 'Low to Medium',
    description: 'Past clients, personal network, and partner referrals (lenders, title companies, attorneys). Highest conversion rate of any source because trust is pre-established.',
    strategy: 'Monthly touchpoints with your database: market updates, birthday/anniversary messages, quarterly check-in calls. Build referral partnerships with 3-5 lenders and 2-3 title companies. Send "just sold" postcards to past clients. Host client appreciation events 2x/year.',
    bestFor: 'Every agent. This should be a core part of your lead gen regardless of other sources.',
  },
  {
    source: 'SEO & Organic Content',
    costPerLead: '$5 - $15 (after ramp-up)',
    conversionRate: '3-5% to appointment',
    intent: 'High',
    volume: 'Grows over time',
    description: 'Neighborhood pages, market reports, and blog content that rank in Google search results. Takes 6-12 months to build but creates a compounding, "free" lead source.',
    strategy: 'Create neighborhood pages with market data, schools, lifestyle info. Publish monthly market reports. Write guides: "First-time homebuyer guide in [city]," "Best neighborhoods for families in [city]." Optimize Google Business Profile with posts, reviews, and photos.',
    bestFor: 'Agents committed to a 12+ month content strategy who want to reduce paid ad dependency.',
  },
  {
    source: 'Open Houses',
    costPerLead: '$0 - $10',
    conversionRate: '5-10% to appointment',
    intent: 'Medium to High',
    volume: 'Low',
    description: 'In-person lead capture at open houses. Attendees are often active buyers, but some are neighbors or casual browsers. Digital sign-in captures contact info for follow-up.',
    strategy: 'Use digital sign-in (Spacio, Curb Hero, or Open Home Pro) to capture phone and email. Follow up within 2 hours. Ask qualifying questions at the event: timeline, financing status, working with an agent. Promote open houses on social media to drive traffic beyond just MLS exposure.',
    bestFor: 'Agents who hold 2+ open houses per month and have listings in high-traffic areas.',
  },
];

export default function LeadGenerationForRealEstateAgentsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Lead Generation for Real Estate Agents', url: '/lead-generation-for-real-estate-agents' },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: getStructuredDataScript(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: getStructuredDataScript(faqSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="relative h-10 w-56">
              <Image src="/OWN IT SOCIAL.png" alt="Own It Social" fill className="object-contain object-left" priority />
            </Link>
            <Link href="/#contact" className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full">
              Get Free Consultation
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            Real Estate Lead Gen Guide &bull; 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Lead Generation for Real Estate Agents: A Revenue-First Framework
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl">
            Most agents do not have a lead problem &mdash; they have a <strong>conversion and follow-up problem</strong>. The average agent converts just 1-2% of internet leads, responds in 47+ hours, and gives up after one follow-up attempt. This guide fixes that with actionable systems for every stage of the pipeline.
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Whether you are a solo agent spending $500/month or a team investing $20,000+, this framework scales to your budget and gives you the math to know exactly what to expect.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg transition-all">
              Get a Lead Gen Strategy
            </Link>
            <a href="#lead-sources" className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all">
              View Lead Sources
            </a>
          </div>
        </section>

        {/* The Real Problem */}
        <section className="bg-white border-y border-gray-100 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Why Most Real Estate Lead Gen Fails</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              The problem is not that leads are &quot;bad.&quot; The problem is that most agents lack the systems to convert them. Here are the numbers:
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { stat: '47+ Hours', label: 'Average agent response time to internet leads', context: 'By then, the lead has spoken with 2-3 other agents' },
                { stat: '1-2%', label: 'Average internet lead conversion rate', context: 'Top performers convert 5-8% with proper systems' },
                { stat: '80%', label: 'Of leads never receive a second follow-up', context: 'Most conversions happen between attempt 5-8' },
                { stat: '6-8', label: 'Contact attempts needed to reach a lead', context: 'Most agents give up after 1-2 attempts' },
              ].map((item) => (
                <div key={item.label} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100 text-center">
                  <p className="text-3xl font-black text-purple-600 mb-2">{item.stat}</p>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.label}</p>
                  <p className="text-xs text-gray-600">{item.context}</p>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
              <p className="text-gray-800 font-semibold mb-2">The bottom line:</p>
              <p className="text-gray-700 text-sm">
                Before spending another dollar on lead generation, fix your follow-up system. A mediocre lead source with excellent follow-up will outperform an excellent lead source with mediocre follow-up every single time. Speed-to-lead, consistent multi-channel follow-up, and disciplined pipeline management are the foundation everything else builds on.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Sources */}
        <section id="lead-sources" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Lead Source Breakdown: Cost, Intent, and Strategy</h2>
          <p className="text-gray-700 mb-8">Every lead source has different economics. Understanding the cost per lead, intent level, and required follow-up investment helps you allocate your budget effectively.</p>
          <div className="space-y-6">
            {leadSources.map((source) => (
              <div key={source.source} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{source.source}</h3>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">CPL: {source.costPerLead}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Conv: {source.conversionRate}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Intent: {source.intent}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{source.description}</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Strategy:</p>
                    <p className="text-gray-600">{source.strategy}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Best For:</p>
                    <p className="text-gray-600">{source.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Nurture System */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-y border-purple-100 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">The Lead Nurture System That Converts</h2>
            <p className="text-gray-700 mb-8">Follow-up is where money is made or lost. Here is the exact sequence top-producing agents use.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Day 1-14: Aggressive Follow-Up</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex gap-3 items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <div><strong>Minute 0-5:</strong> Text message: &quot;Hi [Name], this is [Agent] with [Brokerage]. I just got your inquiry about [topic]. I have some great info for you. Can I call you in 2 minutes?&quot;</div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <div><strong>Minute 5-10:</strong> Phone call. Leave voicemail if no answer. Reference the text you just sent.</div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <div><strong>Minute 15:</strong> Email with value (market data, property matches, or a relevant guide).</div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                    <div><strong>Day 2:</strong> Call + text. Different angle: &quot;I found 3 properties that match what you were looking at. Want me to send them over?&quot;</div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                    <div><strong>Days 3-14:</strong> Alternate call/text/email every 1-2 days. Each touch provides new value (new listing, market update, neighborhood info).</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Day 15+: Long-Term Nurture</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex gap-3 items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <div><strong>Automated property alerts:</strong> Set up saved searches in your MLS/IDX that send new listings matching their criteria automatically.</div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <div><strong>Monthly market email:</strong> Share local market stats, price trends, and inventory data. Position yourself as the local market expert.</div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <div><strong>Quarterly phone check-in:</strong> Brief call to see if their timeline or needs have changed. Many leads that seemed cold convert 6-12 months later.</div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                    <div><strong>Retargeting ads:</strong> Show your listings and market content to leads who visited your website. Keeps you top-of-mind at low cost ($3-$5 CPM).</div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                    <div><strong>Annual review:</strong> Every lead in your database gets at least one personal outreach per year. A simple &quot;Are you still thinking about buying/selling?&quot; reactivates more leads than you expect.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-purple-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">ISA vs. Self-Follow-Up: When to Hire</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Self-Follow-Up Works When:</p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>You generate fewer than 50 leads/month</li>
                    <li>You can personally respond within 5 minutes during business hours</li>
                    <li>You enjoy the sales conversation and lead qualification process</li>
                    <li>Your average commission is under $5,000</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Hire an ISA When:</p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>You generate 50+ leads/month and cannot follow up consistently</li>
                    <li>Your time is more valuable showing homes and closing deals</li>
                    <li>Your average commission exceeds $5,000</li>
                    <li>Budget allows $3,000-$5,000/month for a dedicated ISA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Gen Math */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">The Lead Generation Math</h2>
          <p className="text-gray-700 mb-8">Work backward from your income goal to determine exactly how many leads and how much budget you need.</p>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Example: $200,000 GCI Goal</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 font-bold text-gray-900">Step</th>
                    <th className="py-3 pr-4 font-bold text-gray-900">Metric</th>
                    <th className="py-3 pr-4 font-bold text-gray-900">Calculation</th>
                    <th className="py-3 font-bold text-gray-900">Result</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">1</td>
                    <td className="py-3 pr-4">Income Goal</td>
                    <td className="py-3 pr-4">Target gross commission income</td>
                    <td className="py-3 font-semibold">$200,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">2</td>
                    <td className="py-3 pr-4">Avg Commission per Deal</td>
                    <td className="py-3 pr-4">$400K avg price &times; 3% &times; 0.7 split</td>
                    <td className="py-3 font-semibold">$8,400</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">3</td>
                    <td className="py-3 pr-4">Closings Needed</td>
                    <td className="py-3 pr-4">$200,000 &divide; $8,400</td>
                    <td className="py-3 font-semibold">24 closings</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">4</td>
                    <td className="py-3 pr-4">Appointments Needed</td>
                    <td className="py-3 pr-4">24 &divide; 30% close rate</td>
                    <td className="py-3 font-semibold">80 appointments</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">5</td>
                    <td className="py-3 pr-4">Leads Needed</td>
                    <td className="py-3 pr-4">80 &divide; 20% appt rate from leads</td>
                    <td className="py-3 font-semibold">400 leads/year</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold">6</td>
                    <td className="py-3 pr-4">Monthly Lead Target</td>
                    <td className="py-3 pr-4">400 &divide; 12 months</td>
                    <td className="py-3 font-semibold">~34 leads/month</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">7</td>
                    <td className="py-3 pr-4">Monthly Budget</td>
                    <td className="py-3 pr-4">34 leads &times; $20 avg CPL (blended)</td>
                    <td className="py-3 font-semibold text-purple-600">~$680/month in ad spend</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Note: This assumes a blended model with some paid leads and some referral/organic leads. If 100% of leads come from paid sources at $30 CPL, budget increases to ~$1,020/month. Add agency/technology costs of $500-$2,000/month on top of ad spend.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Budget Allocation by Experience Level</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-xl p-4 border border-purple-100">
                <p className="font-bold text-gray-900 mb-2">New Agent (Year 1-2)</p>
                <p className="text-gray-700">$1,000-$2,500/month total. Focus 60% on Meta ads (volume), 30% on Google (intent), 10% on SOI nurture. Goal: build database and learn what converts.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-purple-100">
                <p className="font-bold text-gray-900 mb-2">Growing Agent (Year 3-5)</p>
                <p className="text-gray-700">$2,500-$5,000/month. Balance: 40% Google, 30% Meta, 20% SOI/referral, 10% content/SEO. Goal: predictable monthly pipeline.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-purple-100">
                <p className="font-bold text-gray-900 mb-2">Top Producer / Team</p>
                <p className="text-gray-700">$5,000-$20,000+/month. Diversify: 30% Google, 25% Meta, 20% SOI/referral, 15% content/SEO, 10% video/YouTube. Goal: dominate market share.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-white border-y border-gray-100 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Recommended Technology Stack</h2>
            <p className="text-gray-700 mb-8">You do not need every tool. Start with a CRM and one lead source, then add as your pipeline grows.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { category: 'CRM & Lead Management', tools: 'Follow Up Boss ($69-$499/mo), Sierra Interactive ($500+/mo), KvCORE ($500+/mo), LionDesk ($25-$83/mo)', priority: 'Essential - Start here' },
                { category: 'IDX Website & Landing Pages', tools: 'Ylopo, Real Geeks ($299/mo), Lofty (formerly Chime), Sierra Interactive (includes IDX)', priority: 'Essential for internet lead gen' },
                { category: 'Email & Text Automation', tools: 'Built into most CRMs above. Standalone: Mailchimp ($13+/mo), ActiveCampaign ($49+/mo)', priority: 'Essential - Automate follow-up' },
                { category: 'Call Tracking', tools: 'CallRail ($45+/mo), CallAction ($199+/mo), built into Follow Up Boss', priority: 'Important for attribution' },
                { category: 'Social Scheduling', tools: 'Later ($25+/mo), Hootsuite ($99+/mo), Buffer ($6+/mo per channel)', priority: 'Important for consistency' },
                { category: 'Video Production', tools: 'iPhone (free), CapCut (free), Descript ($24+/mo) for editing. Canva Pro ($13/mo) for thumbnails', priority: 'Important for brand building' },
              ].map((item) => (
                <div key={item.category} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.category}</h3>
                  <p className="text-xs text-purple-600 font-semibold mb-3">{item.priority}</p>
                  <p className="text-gray-700 text-sm">{item.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">10 Lead Generation Mistakes Real Estate Agents Make</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { mistake: 'Slow response time', fix: 'Implement a sub-5-minute response protocol. Use text automation for instant acknowledgment when you cannot call immediately.' },
              { mistake: 'Giving up after 1-2 attempts', fix: 'Follow the 14-day sequence above. Most conversions happen between contact attempts 5-8.' },
              { mistake: 'Judging leads after 30 days', fix: 'Internet lead gen is a 6-12 month game. Track cost per closing at 90 and 180 days, not cost per lead at 30 days.' },
              { mistake: 'No lead source tracking', fix: 'Use UTM parameters, unique phone numbers, and CRM source fields to know exactly which sources produce closings.' },
              { mistake: 'Running the same ads for months', fix: 'Refresh ad creative every 2-3 weeks. Test new hooks, images, and offers. Creative fatigue kills performance.' },
              { mistake: 'Targeting too broad an area', fix: 'Hyper-focus on 3-5 neighborhoods or zip codes where you want to dominate. Go deep before going wide.' },
              { mistake: 'No long-term nurture system', fix: 'Set up automated monthly market updates, property alerts, and quarterly personal outreach for every lead in your database.' },
              { mistake: 'Ignoring past client database', fix: 'Your existing clients are your highest-converting lead source. Monthly touches with past clients should be non-negotiable.' },
              { mistake: 'Spending on leads without a follow-up system', fix: 'Fix your CRM, automation, and follow-up process before increasing ad spend. Leads without follow-up are wasted money.' },
              { mistake: 'Not tracking the right metrics', fix: 'Track cost per closing and ROI by source, not just cost per lead. A $50 lead that closes is better than a $5 lead that never converts.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-600 font-bold text-sm flex items-center justify-center">{i + 1}</span>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{item.mistake}</p>
                    <p className="text-gray-600 text-sm">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gradient-to-br from-slate-50 to-white border-y border-gray-100 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Build a Predictable Lead Pipeline?</h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              Own It Social specializes in marketing for real estate agents. We will build your lead gen system, manage your campaigns, and set up the CRM workflows that convert leads into closings.
            </p>
            <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-white font-bold text-lg">Own It Social</p>
                <p className="text-sm">Real estate marketing that produces closings, not just leads.</p>
              </div>
              <div className="flex gap-6 text-sm">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/lead-generation-for-real-estate-agents" className="hover:text-white transition-colors">RE Lead Gen</Link>
                <Link href="/social-media-marketing-agency-near-me" className="hover:text-white transition-colors">Social Media</Link>
                <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              &copy; {new Date().getFullYear()} Own It Social. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
