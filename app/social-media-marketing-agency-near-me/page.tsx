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
  title: 'Social Media Marketing Agency Near Me | How to Choose the Right Social Media Company (2026)',
  description:
    'Find the right social media marketing agency near you. Compare services, pricing ($2K–$15K/mo), platform strategies, and evaluation frameworks for social media marketing firms near me.',
  keywords:
    'social media company, social media marketing agency near me, social media marketing firms near me',
};

const faqs = [
  {
    question: 'How much does a social media marketing agency cost per month?',
    answer:
      'Most social media marketing agencies charge between $2,000 and $15,000 per month depending on scope. A basic package covering 3–4 platforms with 12–16 posts per month, light community management, and monthly reporting typically runs $2,000–$4,000.',
  },
  {
    question: 'Do I need a local social media marketing agency or can I hire remotely?',
    answer:
      'It depends on your business model. If you need on-site content creation (product photography, event coverage, location-based Reels), a local agency has clear advantages.',
  },
  {
    question: 'What should I look for in a social media company portfolio?',
    answer:
      'Look beyond follower counts. Examine whether their content style matches your brand voice. Check if they have experience in your industry or with your target audience. Ask for engagement rate data, not just vanity metrics. Review the consistency of posting cadence.',
  },
  {
    question: 'How long does it take to see results from social media marketing?',
    answer:
      'Organic social media is a long game. Expect 3–6 months before you see consistent engagement growth and audience building. Paid social can deliver measurable results (traffic, leads, sales) within the first 2–4 weeks, though optimization improves performance over 60–90 days.',
  },
  {
    question: 'What is the difference between a social media manager and a social media marketing agency?',
    answer:
      'A social media manager is typically one person who handles content creation and posting, sometimes community management. An agency provides a team: strategist, content creators (designers, videographers, copywriters), a community manager, a paid media specialist, and an account manager.',
  },
  {
    question: 'How do I measure the ROI of social media marketing?',
    answer:
      'Track three layers. First, direct attribution: clicks, conversions, and revenue that can be directly traced to social media posts or ads using UTM parameters and pixel tracking. Second, assisted conversions: social media touchpoints that contributed to a conversion completed on another channel (check Google Analytics multi-channel funnels). Third, brand equity signals: branded search volume increases, direct traffic growth, and qualitative feedback like "I saw you on Instagram." Combine all three for a realistic picture rather than relying on any single metric.',
  },
  {
    question: 'Should I manage social media in-house or outsource to an agency?',
    answer:
      'In-house works well when you have a dedicated team member (not someone doing it "on the side"), your content needs are highly specialized or time-sensitive, and you have the tools and training budget to support them. Outsourcing makes sense when you need expertise across multiple platforms, you want to scale content production quickly, or you lack internal creative resources. Many successful companies run a hybrid model: in-house for real-time engagement and brand voice, agency for strategy, paid media, and content production.',
  }
];

export default function SocialMediaMarketingAgencyNearMePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Social Media Marketing Agency Near Me', url: '/social-media-marketing-agency-near-me' },
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
              Comprehensive Guide &bull; Updated 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-black">How to Find the Right</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Social Media Marketing Agency
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Searching for a <strong>social media company</strong> or <strong>social media marketing firms near me</strong>?
              This guide covers everything you need to evaluate, compare, and choose the right partner — whether they are
              across the street or across the country.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Talk to a Strategist
              </Link>
              <a
                href="#services"
                className="px-8 py-4 rounded-full border border-gray-300 text-gray-700 font-semibold text-lg hover:bg-gray-50 transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* Why "Near Me" Matters */}
        <section className="bg-gray-50/50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Does &quot;Near Me&quot; Actually Matter for Social Media Marketing?
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            When you search for a <strong>social media marketing agency near me</strong>, you are making an assumption that
            proximity equals better service. Sometimes that is true. Often it is not. Here is an honest breakdown.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When Local Matters</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg mt-0.5">1.</span>
                  <div>
                    <strong>In-person content production.</strong> If you need on-site photography, video shoots at your
                    location, or event coverage, a nearby team saves travel costs and allows for more frequent shoots.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg mt-0.5">2.</span>
                  <div>
                    <strong>Local market knowledge.</strong> Agencies embedded in your city understand local culture,
                    seasonal trends, competitor landscape, and community dynamics that outsiders may miss.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg mt-0.5">3.</span>
                  <div>
                    <strong>Face-to-face strategy sessions.</strong> Some clients and teams work better with periodic
                    in-person meetings for brand workshops, quarterly planning, and creative brainstorms.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg mt-0.5">4.</span>
                  <div>
                    <strong>Local event and partnership activation.</strong> Community-focused businesses benefit from
                    agencies that can physically attend events, coordinate with local influencers, and build grassroots presence.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When Remote Works Better</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg mt-0.5">1.</span>
                  <div>
                    <strong>Larger talent pool.</strong> You are not limited to agencies in your zip code. The best
                    strategist for your niche may be in a different city entirely.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg mt-0.5">2.</span>
                  <div>
                    <strong>Specialized expertise.</strong> If you operate in a niche industry (fintech, healthcare,
                    luxury real estate), a remote specialist will outperform a local generalist every time.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg mt-0.5">3.</span>
                  <div>
                    <strong>Lower overhead, often lower costs.</strong> Agencies outside major metros may offer the same
                    quality at 20–40% lower retainers due to reduced overhead.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg mt-0.5">4.</span>
                  <div>
                    <strong>Digital-native workflow.</strong> Social media is managed through screens. Content approvals,
                    reporting, and strategy can happen entirely through Slack, Loom, and shared dashboards.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
            <p className="text-gray-700 leading-relaxed">
              <strong>The practical takeaway:</strong> Start by defining what you actually need. If 80% of your social media
              work is strategy, content design, copywriting, and paid media management, geography is irrelevant. If you need
              weekly on-location shoots and local community engagement, proximity becomes a real advantage. Many businesses
              find the best solution is a capable remote agency paired with a local content creator for production days.
            </p>
          </div>
        </section>

        {/* Social Media Services Breakdown */}
        <section id="services" className="bg-white border-t-4 border-t-purple-500 shadow-sm py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What a Social Media Company Should Actually Provide
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Not all <strong>social media marketing firms</strong> offer the same depth. Here is what each core service
              should include and what to demand as deliverables.
            </p>

            <div className="space-y-8">
              {/* Strategy & Planning */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy &amp; Planning</h3>
                <p className="text-gray-700 mb-4">
                  Strategy is the foundation that separates a professional social media company from someone just posting content.
                  Without it, you are guessing.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Core Deliverables</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Monthly content calendars with themes tied to business goals</li>
                      <li>Platform selection rationale based on audience data</li>
                      <li>Audience persona development with psychographic and behavioral data</li>
                      <li>Competitor content audit (what is working for them and gaps you can fill)</li>
                      <li>Content pillar framework (3–5 recurring themes that map to your brand)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What to Expect</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Initial strategy document within first 2–3 weeks of engagement</li>
                      <li>Quarterly strategy refreshes based on performance data</li>
                      <li>Clear mapping of content types to funnel stages (awareness, consideration, conversion)</li>
                      <li>Documented brand voice guide for content consistency</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content Creation */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Creation</h3>
                <p className="text-gray-700 mb-4">
                  Content is the most visible output and the area where quality variance is highest. Be specific about what
                  you need and what formats are included.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Core Deliverables</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Photography (product, lifestyle, behind-the-scenes)</li>
                      <li>Short-form video production (Reels, TikToks, Shorts)</li>
                      <li>Graphic design for feed posts, carousels, and infographics</li>
                      <li>Copywriting for captions, hooks, and CTAs</li>
                      <li>UGC sourcing and management (user-generated content campaigns)</li>
                      <li>Long-form video for YouTube or LinkedIn</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What to Expect</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Defined number of assets per month (e.g., 15 feed posts, 20 Stories, 8 Reels)</li>
                      <li>Clear revision policy (typically 1–2 rounds included)</li>
                      <li>Content approval workflow with defined turnaround times</li>
                      <li>Asset library management and brand asset organization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Community Management */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Management</h3>
                <p className="text-gray-700 mb-4">
                  Posting content is only half the work. Engagement drives the algorithm and builds the relationships that
                  convert followers into customers.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Core Deliverables</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Daily comment monitoring and response</li>
                      <li>DM management with templated responses and escalation protocols</li>
                      <li>Proactive engagement (commenting on relevant accounts, industry conversations)</li>
                      <li>Review and reputation monitoring across platforms</li>
                      <li>Crisis management playbook for negative publicity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What to Expect</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Defined response time SLAs (e.g., under 2 hours during business hours)</li>
                      <li>Documented tone guidelines for community interactions</li>
                      <li>Escalation matrix for sensitive topics or complaints</li>
                      <li>Monthly community health report (sentiment, common questions, trends)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Paid Social Advertising */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paid Social Advertising</h3>
                <p className="text-gray-700 mb-4">
                  There is a massive difference between boosting a post and running a proper paid social campaign. Make sure
                  your agency understands the distinction.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Core Deliverables</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Campaign architecture (cold, warm, hot audience segmentation)</li>
                      <li>Custom audience creation (lookalikes, website visitors, email lists)</li>
                      <li>Ad creative production (multiple formats and variations for testing)</li>
                      <li>Retargeting sequences based on engagement and website behavior</li>
                      <li>A/B testing frameworks for creative, copy, and audience targeting</li>
                      <li>Conversion tracking setup and pixel management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What to Expect</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Clear distinction between management fee and ad spend</li>
                      <li>You should own your ad accounts (never let an agency own them)</li>
                      <li>Weekly optimization reports showing spend, results, and next actions</li>
                      <li>New creative rotated every 2–4 weeks to prevent ad fatigue</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analytics & Reporting */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics &amp; Reporting</h3>
                <p className="text-gray-700 mb-4">
                  Reporting is where many social media marketing firms fall short. A good report tells you what happened,
                  why it happened, and what changes are planned next.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Metrics That Matter</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Engagement rate (not just likes — saves, shares, comments, DMs)</li>
                      <li>Reach and impressions (with context on what drove changes)</li>
                      <li>Click-through rate to website or landing pages</li>
                      <li>Conversions attributed to social (leads, sales, sign-ups)</li>
                      <li>Follower growth rate (organic vs. paid-driven)</li>
                      <li>Content performance by type (video vs. static vs. carousel)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What Good Reporting Looks Like</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Monthly comprehensive reports with quarterly deep-dives</li>
                      <li>Narrative explanation, not just data dumps</li>
                      <li>Comparison to previous periods and stated goals</li>
                      <li>Actionable recommendations based on the data</li>
                      <li>Live dashboard access (Looker Studio, Sprout Social, etc.)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Influencer Marketing */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Influencer Marketing</h3>
                <p className="text-gray-700 mb-4">
                  Influencer marketing can be highly effective or a complete waste of money. The difference comes down to
                  vetting, structure, and measurement.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Core Deliverables</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Influencer identification and vetting (audience authenticity, engagement quality)</li>
                      <li>Micro-influencer campaigns (1K–50K followers, higher engagement, lower cost)</li>
                      <li>Macro-influencer management (50K+ followers, broader reach)</li>
                      <li>Contract negotiation including usage rights, exclusivity, and deliverable specs</li>
                      <li>Campaign performance tracking with unique links and promo codes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What to Expect</h4>
                    <ul className="list-disc ml-5 text-gray-700 space-y-1.5">
                      <li>Influencer fee is typically separate from agency management fee</li>
                      <li>Vetting report with audience demographics and fake follower analysis</li>
                      <li>Content review and approval process before influencer publishes</li>
                      <li>Post-campaign ROI report comparing cost to engagement, reach, and conversions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform-by-Platform Strategy Guide */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Platform-by-Platform Strategy Guide
          </h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Each platform has a different algorithm, audience, and content format. A competent <strong>social media
            marketing agency</strong> will tailor your approach to each one rather than cross-posting identical content everywhere.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Instagram */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Instagram</h3>
              <p className="text-sm text-purple-600 font-semibold mb-4">Visual-first, discovery-driven</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li><strong>Reels are the priority.</strong> Instagram&apos;s algorithm heavily favors short-form video for reach and discovery. Expect your agency to produce 3–5+ Reels per week.</li>
                <li><strong>Stories drive daily engagement.</strong> Polls, questions, behind-the-scenes, and quick updates keep your audience connected between feed posts.</li>
                <li><strong>Carousels for education.</strong> Multi-slide posts consistently earn high saves and shares, making them ideal for tips, guides, and process breakdowns.</li>
                <li><strong>Shopping features.</strong> If you sell products, Instagram Shopping and product tags in posts reduce friction from discovery to purchase.</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Best for:</strong> B2C brands, restaurants, retail, beauty, fitness, real estate, lifestyle businesses, and any brand with strong visual appeal.</p>
              </div>
            </div>

            {/* Facebook */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Facebook</h3>
              <p className="text-sm text-blue-600 font-semibold mb-4">Community-centric, broad demographics</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li><strong>Groups drive organic reach.</strong> Facebook&apos;s algorithm deprioritizes brand page content but amplifies group activity. Consider building or participating in a branded community.</li>
                <li><strong>Events are underutilized.</strong> Facebook Events still generate meaningful local engagement and reminder notifications.</li>
                <li><strong>Marketplace for local businesses.</strong> Product-based local businesses can tap into Facebook Marketplace as an additional channel.</li>
                <li><strong>Older demographics are strong.</strong> Facebook skews 35+ and is particularly effective for targeting homeowners, parents, and affluent professionals.</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Best for:</strong> Local businesses, service providers, community organizations, businesses targeting 35+ demographics, and companies with active customer communities.</p>
              </div>
            </div>

            {/* TikTok */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">TikTok</h3>
              <p className="text-sm text-pink-600 font-semibold mb-4">Algorithm-first, trend-driven</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li><strong>The algorithm rewards content, not followers.</strong> A brand-new account can go viral. This makes TikTok uniquely powerful for reach, but also requires consistent volume.</li>
                <li><strong>Creator-style content wins.</strong> Polished ads underperform. Content that looks and feels native to the platform — raw, personality-driven, fast-paced — gets distribution.</li>
                <li><strong>Trend participation matters.</strong> Your agency needs to monitor trends daily and produce relevant content within 24–48 hours while the trend is still active.</li>
                <li><strong>Younger demographics dominate.</strong> Core audience is 16–34, though 35+ is the fastest-growing segment.</li>
              </ul>
              <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Best for:</strong> DTC brands, food and beverage, entertainment, fashion, fitness, and any brand willing to show personality and move fast.</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">LinkedIn</h3>
              <p className="text-sm text-indigo-600 font-semibold mb-4">B2B authority, professional networking</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li><strong>Thought leadership is the game.</strong> Personal profiles outperform company pages. Your agency should develop executive profiles alongside your brand page.</li>
                <li><strong>Employee advocacy amplifies reach.</strong> Getting team members to share and engage with company content can multiply organic reach by 5–10x.</li>
                <li><strong>LinkedIn Newsletters build audience.</strong> Subscribers get notified of every issue, giving you a more reliable reach mechanism than the feed algorithm.</li>
                <li><strong>Document posts (PDFs) perform well.</strong> Carousels in PDF format consistently earn high engagement for educational content.</li>
              </ul>
              <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Best for:</strong> B2B companies, SaaS, professional services, recruiting, executive thought leadership, and companies where decision-makers are on LinkedIn.</p>
              </div>
            </div>

            {/* YouTube */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">YouTube</h3>
              <p className="text-sm text-red-600 font-semibold mb-4">Search + discovery, evergreen value</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li><strong>SEO benefits are unique.</strong> YouTube is the second largest search engine. Videos rank in both YouTube and Google search results, giving you dual visibility.</li>
                <li><strong>Long-form builds trust.</strong> In-depth tutorials, interviews, and how-to content establishes expertise in ways short-form cannot replicate.</li>
                <li><strong>Shorts capture the short-form audience.</strong> YouTube Shorts compete directly with TikTok and Reels, and they feed subscribers into your long-form content.</li>
                <li><strong>Evergreen content compounds.</strong> Unlike social posts that decay in 24–48 hours, a well-optimized YouTube video can drive traffic for years.</li>
              </ul>
              <div className="mt-4 p-3 bg-red-50 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Best for:</strong> Education-heavy businesses, SaaS (product demos), real estate (virtual tours), coaches, consultants, and any business where expertise sells.</p>
              </div>
            </div>

            {/* Pinterest */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Pinterest</h3>
              <p className="text-sm text-orange-600 font-semibold mb-4">Visual discovery, purchase intent</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li><strong>Users come to Pinterest to plan purchases.</strong> Unlike other platforms where users scroll passively, Pinterest users are actively looking for ideas and products to buy.</li>
                <li><strong>Product Pins drive e-commerce.</strong> Rich Pins with pricing and availability information can link directly to your product pages.</li>
                <li><strong>Seasonal planning is essential.</strong> Pinterest content should be published 45–60 days before seasonal events because users plan ahead on this platform.</li>
                <li><strong>Long content lifespan.</strong> A single Pin can drive traffic for 6–12 months, making it one of the best platforms for compounding organic reach.</li>
              </ul>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Best for:</strong> E-commerce, home decor, food and recipe brands, wedding industry, fashion, DIY, and businesses with visually inspiring products.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose an Agency */}
        <section className="bg-white border-t-4 border-t-blue-500 shadow-sm py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              How to Evaluate and Choose a Social Media Marketing Agency
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Use this framework when comparing <strong>social media marketing firms near me</strong> or remote agencies.
              These are the criteria that actually predict a successful partnership.
            </p>

            <div className="space-y-6">
              {/* Portfolio Review */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Portfolio Review — What to Actually Look For</h3>
                <p className="text-gray-700 mb-3">
                  Anyone can show you their best three posts. Here is how to evaluate a portfolio meaningfully:
                </p>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Ask for a full month of content for one client, not cherry-picked highlights</li>
                  <li>Check consistency — does the quality hold up across 30 days, or just in the showcase?</li>
                  <li>Look at engagement relative to follower count (2–5% is healthy, under 1% is a red flag)</li>
                  <li>Ask whether the content drove measurable business results, not just likes</li>
                  <li>Evaluate if their creative style can flex to match your brand or if everything looks the same</li>
                </ul>
              </div>

              {/* Pricing Models */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Pricing Models and Typical Ranges</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-gray-700 mt-2">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 pr-4 font-semibold text-gray-900">Model</th>
                        <th className="py-3 pr-4 font-semibold text-gray-900">Range</th>
                        <th className="py-3 font-semibold text-gray-900">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-3 pr-4 font-medium">Monthly Retainer</td>
                        <td className="py-3 pr-4">$2,000–$15,000/mo</td>
                        <td className="py-3">Ongoing social media management with consistent deliverables</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium">Project-Based</td>
                        <td className="py-3 pr-4">$5,000–$50,000+</td>
                        <td className="py-3">Campaign launches, brand overhauls, or platform launches</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium">Hybrid</td>
                        <td className="py-3 pr-4">Base retainer + project fees</td>
                        <td className="py-3">Baseline management with periodic campaign spikes</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium">Performance-Based</td>
                        <td className="py-3 pr-4">Base + bonus tied to KPIs</td>
                        <td className="py-3">Paid social where results are directly measurable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Ad spend is almost always billed separately. Typical paid social management fees are 15–20% of ad spend
                  or a flat monthly fee, whichever is higher.
                </p>
              </div>

              {/* Team Structure */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Team Structure — Who Is Actually Doing the Work?</h3>
                <p className="text-gray-700 mb-3">
                  Ask specifically who will work on your account. A healthy agency team for social media typically includes:
                </p>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li><strong>Account Manager:</strong> Your primary point of contact. Handles communication, approvals, and project management.</li>
                  <li><strong>Social Media Strategist:</strong> Develops the overall plan, analyzes data, and adjusts direction based on performance.</li>
                  <li><strong>Content Creator(s):</strong> Designers, videographers, and copywriters who produce the actual assets.</li>
                  <li><strong>Community Manager:</strong> Handles daily engagement, DMs, and reputation monitoring.</li>
                  <li><strong>Paid Media Specialist:</strong> Manages ad campaigns, budgets, and optimization (if paid social is in scope).</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  If one person is doing all five roles, you are getting a freelancer at agency prices. That is not necessarily
                  bad, but you should be paying freelancer rates.
                </p>
              </div>

              {/* Communication */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Communication Expectations</h3>
                <p className="text-gray-700 mb-3">
                  Miscommunication is the most common reason agency relationships fail. Define these upfront:
                </p>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Preferred communication channels (Slack, email, project management tools)</li>
                  <li>Response time expectations during business hours</li>
                  <li>Meeting cadence (weekly check-ins, monthly strategy reviews, quarterly planning)</li>
                  <li>Content approval workflow and deadlines (who approves, how many rounds, turnaround times)</li>
                  <li>Escalation process for urgent issues</li>
                </ul>
              </div>

              {/* Contract Terms */}
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Contract Terms</h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li><strong>Avoid long lock-ins.</strong> 12-month contracts protect the agency, not you. A 90-day initial commitment with 30-day rolling renewal is reasonable.</li>
                  <li><strong>Content ownership.</strong> Ensure your contract states that all content created for your brand belongs to you, including raw files.</li>
                  <li><strong>Account access.</strong> You must own all social media accounts and ad accounts. The agency should operate through delegated access, never as the account owner.</li>
                  <li><strong>Termination clause.</strong> Understand what happens to scheduled content, ad campaigns, and data if you end the relationship.</li>
                  <li><strong>Performance review points.</strong> Build in 90-day checkpoints where both parties evaluate whether the partnership is delivering results.</li>
                </ul>
              </div>

              {/* Red Flags */}
              <div className="bg-red-50 rounded-2xl border border-red-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">6. Red Flags to Watch For</h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li><strong>Guaranteed follower counts.</strong> No legitimate agency can guarantee specific follower growth. If they do, they are buying followers.</li>
                  <li><strong>No case studies or references.</strong> If they cannot show you real results for real clients, walk away.</li>
                  <li><strong>Cookie-cutter content.</strong> Look at their existing clients — if all the content looks identical regardless of brand, expect the same for you.</li>
                  <li><strong>They never say no.</strong> A good agency pushes back on bad ideas and provides strategic direction, not just order execution.</li>
                  <li><strong>Opaque reporting.</strong> If they are reluctant to share ad account access or detailed analytics, something is wrong.</li>
                  <li><strong>Prices that seem too low.</strong> Quality social media management requires real human hours. If the price seems too good to be true, you will get what you pay for.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media ROI Framework */}
        <section className="bg-gray-50/50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            How to Actually Measure Social Media ROI
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            The biggest frustration businesses have with social media is proving return on investment. Here is a practical
            framework that goes beyond vanity metrics.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Layer 1: Direct Attribution</h3>
              <p className="text-gray-700 mb-3">Revenue and conversions you can directly trace to social media.</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-1.5 text-sm">
                <li>UTM-tagged links on every post and ad</li>
                <li>Pixel tracking for website conversions</li>
                <li>Platform-native shopping and lead form conversions</li>
                <li>Promo codes unique to social channels</li>
              </ul>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 font-mono">
                  <strong>Formula:</strong><br />
                  Direct Social ROI = (Revenue from Social - Social Costs) / Social Costs x 100
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Layer 2: Assisted Conversions</h3>
              <p className="text-gray-700 mb-3">Social media touchpoints that contributed to conversions completed elsewhere.</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-1.5 text-sm">
                <li>Google Analytics multi-channel funnel reports</li>
                <li>Social in the customer journey as a discovery or consideration touchpoint</li>
                <li>View-through conversions from paid social campaigns</li>
                <li>Cross-device attribution where mobile social leads to desktop purchase</li>
              </ul>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Benchmark:</strong> Social media typically assists 15–25% of total conversions
                  even when it is credited with only 5–10% as last-click.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Layer 3: Brand Equity Signals</h3>
              <p className="text-gray-700 mb-3">Indicators that social media is building long-term brand value.</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-1.5 text-sm">
                <li>Branded search volume growth (Google Search Console)</li>
                <li>Direct traffic increases over time</li>
                <li>Customer survey data (&quot;How did you hear about us?&quot;)</li>
                <li>Share of voice compared to competitors</li>
              </ul>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Reality check:</strong> If branded search and direct traffic grow alongside your social investment,
                  social is working even when last-click attribution underreports it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Engagement Quality Over Vanity Metrics</h3>
            <p className="text-gray-700 mb-4">
              Stop fixating on follower counts. Here is what to prioritize instead:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">High-Value Engagement</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Saves (indicates bookmark-worthy content)</li>
                  <li>Shares (extends reach to warm audiences)</li>
                  <li>DMs and comments with purchase intent</li>
                  <li>Link clicks to conversion pages</li>
                  <li>Profile visits from non-followers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vanity Metrics (Limited Value)</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Total follower count (unless growing organically)</li>
                  <li>Raw impressions without context</li>
                  <li>Likes alone (lowest-effort engagement signal)</li>
                  <li>Reach on viral one-off posts (unsustainable)</li>
                  <li>Follower-to-following ratio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Calendar Template */}
        <section className="bg-white border-t-4 border-t-purple-500 shadow-sm py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Monthly Content Calendar Framework
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              A good <strong>social media company</strong> should build your content calendar around a repeatable
              weekly structure. Here is a practical template that balances content types and keeps your feed from
              feeling repetitive.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700 mb-8">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="py-3 px-4 font-semibold text-gray-900">Day</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Content Type</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Purpose</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Platform Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-4 font-medium">Monday</td>
                    <td className="py-3 px-4">Educational Carousel / Thread</td>
                    <td className="py-3 px-4">Establish authority, earn saves</td>
                    <td className="py-3 px-4">Instagram, LinkedIn</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-3 px-4 font-medium">Tuesday</td>
                    <td className="py-3 px-4">Short-Form Video (Reel / TikTok)</td>
                    <td className="py-3 px-4">Reach and discovery</td>
                    <td className="py-3 px-4">Instagram, TikTok, YouTube Shorts</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Wednesday</td>
                    <td className="py-3 px-4">Behind-the-Scenes / Culture</td>
                    <td className="py-3 px-4">Humanize the brand, build trust</td>
                    <td className="py-3 px-4">Instagram Stories, Facebook</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-3 px-4 font-medium">Thursday</td>
                    <td className="py-3 px-4">Client Story / Testimonial</td>
                    <td className="py-3 px-4">Social proof, conversion</td>
                    <td className="py-3 px-4">All platforms</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Friday</td>
                    <td className="py-3 px-4">Trending / Timely Content</td>
                    <td className="py-3 px-4">Relevance, shareability</td>
                    <td className="py-3 px-4">TikTok, Instagram Reels</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="py-3 px-4 font-medium">Saturday</td>
                    <td className="py-3 px-4">Lifestyle / Inspiration</td>
                    <td className="py-3 px-4">Engagement, brand identity</td>
                    <td className="py-3 px-4">Instagram, Pinterest</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Sunday</td>
                    <td className="py-3 px-4">Community Engagement / Polls</td>
                    <td className="py-3 px-4">Two-way interaction, audience insight</td>
                    <td className="py-3 px-4">Instagram Stories, Facebook</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">Monthly Themes</h4>
                <p className="text-gray-700 text-sm">
                  Assign a monthly theme that aligns with a business goal. Example: January = &quot;New Year, New
                  Goals&quot; (awareness push), February = customer appreciation (retention), March = product launch
                  (conversion). This prevents content from feeling aimless.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">Content Mix Ratio</h4>
                <p className="text-gray-700 text-sm">
                  Follow a 4-1-1 ratio as a starting point: 4 value/educational posts, 1 soft promotional post, 1 direct
                  promotional post. Adjust based on your funnel stage — awareness campaigns lean heavier on value content,
                  while launch periods can increase promotional mix.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-2">Flex Slots</h4>
                <p className="text-gray-700 text-sm">
                  Leave 20% of your calendar unscheduled for reactive content: trending audio, industry news, customer
                  shoutouts, and real-time moments. An overly rigid calendar misses the spontaneity that performs well
                  on social.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
            Frequently Asked Questions About Social Media Marketing Agencies
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section with ContactForm */}
        <section id="contact" className="bg-gradient-to-br from-purple-50 to-blue-50 border-t border-purple-100 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Ready to Find the Right Social Media Partner?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Whether you found us searching for a <strong>social media marketing agency near me</strong> or you
                  already know that expertise matters more than zip code — we would love to talk.
                </p>
                <ul className="space-y-4 text-gray-700 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free strategy consultation — no obligation, no pitch deck theater</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Honest assessment of what social media can (and cannot) do for your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Platform-specific recommendations based on your audience and goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear pricing and deliverable expectations from day one</span>
                  </li>
                </ul>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link href="/" className="relative inline-block h-10 w-56 mb-6">
              <Image
                src="/OWN IT SOCIAL.png"
                alt="Own It Social"
                fill
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm mb-4">
              A social media marketing agency built for businesses that want strategy, not just posts.
            </p>
            <div className="flex justify-center gap-6 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/social-media-marketing-dallas-tx" className="hover:text-white transition-colors">Dallas</Link>
              <Link href="/digital-marketing-miami" className="hover:text-white transition-colors">Miami</Link>
              <Link href="/top-marketing-agencies" className="hover:text-white transition-colors">Top Agencies</Link>
              <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Own It Social. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
