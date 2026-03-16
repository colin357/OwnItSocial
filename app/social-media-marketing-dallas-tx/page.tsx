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
  title: 'Social Media Marketing Dallas TX | Content Marketing Dallas | Social Media Dallas Guide 2026',
  description:
    'Expert social media marketing in Dallas TX. Comprehensive content marketing Dallas guide covering strategy, paid social, and industry-specific approaches for the DFW metroplex. Social media marketing Texas businesses trust.',
  keywords:
    'content marketing dallas, social media dallas, social media marketing dallas tx, social media marketing texas, dallas social media agency, DFW social media, dallas content strategy, texas digital marketing',
};

const breadcrumbData = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Social Media Marketing Dallas TX', url: '/social-media-marketing-dallas-tx' },
]);

const faqItems = [
  {
    question: 'How much does social media marketing cost in Dallas, TX?',
    answer:
      'Social media marketing in Dallas typically ranges from $1,500 to $10,000+ per month depending on scope. Basic packages covering 2-3 platforms with organic content start around $1,500-$3,000/month. Mid-tier packages that include paid social management, content creation, and community management run $3,000-$6,000/month.',
  },
  {
    question: 'Which social media platforms work best for Dallas businesses?',
    answer:
      'The best platforms depend on your industry and audience. For B2B companies in the Dallas Telecom Corridor or the financial district, LinkedIn is essential. Instagram and TikTok perform strongly for restaurants, retail, and real estate in areas like Deep Ellum, Uptown, and Bishop Arts. Facebook remains effective for reaching the suburban DFW audience, particularly in Plano, Frisco, and Allen.',
  },
  {
    question: 'How long does it take to see results from social media marketing in Dallas?',
    answer:
      'Most Dallas businesses begin seeing measurable engagement improvements within 60-90 days of consistent social media marketing. Lead generation results typically appear within 3-4 months, while significant ROI and brand authority gains usually take 6-12 months.',
  },
  {
    question: 'What makes social media marketing different in Dallas compared to other Texas cities?',
    answer:
      'Dallas has several unique characteristics that influence social media strategy. The DFW metroplex is the 4th largest metro in the US with nearly 8 million people, creating a massive but diverse audience. Dallas has a higher concentration of corporate headquarters than most US cities, making B2B content and LinkedIn strategies more effective here.',
  },
  {
    question: 'Should Dallas businesses focus on organic or paid social media?',
    answer:
      'The most effective approach for Dallas businesses is a hybrid strategy. Organic social media builds brand trust and community engagement, which is especially important in the relationship-driven Texas business culture. However, organic reach on platforms like Facebook and Instagram has declined significantly. Paid social allows you to precisely target DFW zip codes, demographics, and interests.',
  },
  {
    question: 'How do I create content that resonates with Dallas audiences?',
    answer:
      'Dallas audiences respond well to content that reflects local pride, community involvement, and professionalism. Reference local landmarks (Reunion Tower, the Margaret Hunt Hill Bridge, AT&T Discovery District), support local causes, and engage with Dallas-specific events like the State Fair of Texas, Dallas Arts District events, and neighborhood festivals.',
  },
  {
    question: 'What content marketing strategies work best for Dallas companies?',
    answer:
      'The most effective content marketing strategies for Dallas companies include: hyperlocal blog content targeting Dallas/DFW search terms, video content featuring local landmarks and culture, thought leadership articles positioned for the strong Dallas B2B market, email newsletters tied to local events and industry trends, and case studies featuring Dallas-based clients.',
  }
];

const faqSchema = generateFAQSchema(faqItems);

export default function SocialMediaMarketingDallasTXPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(faqSchema) }}
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
            <a href="#strategy" className="text-gray-800 hover:text-gray-900 font-medium transition">Strategy</a>
            <a href="#content-marketing" className="text-gray-800 hover:text-gray-900 font-medium transition">Content</a>
            <a href="#industries" className="text-gray-800 hover:text-gray-900 font-medium transition">Industries</a>
            <a href="#faq" className="text-gray-800 hover:text-gray-900 font-medium transition">FAQ</a>
          </nav>
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full"
          >
            Get Free Audit
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            Dallas Social Media Guide &bull; 2026
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-black">Social Media Marketing</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dallas, TX
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The DFW metroplex is the 4th largest metro in the United States with nearly 8 million residents and one of the highest concentrations of Fortune 500 headquarters in the country. Winning in this market requires more than posting &mdash; it demands a social media and content marketing system built for the scale, speed, and diversity of Dallas-Fort Worth.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
          >
            Get Your Free Dallas Social Media Audit
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Dallas Market Stats */}
      <section className="bg-white border-t-4 border-t-purple-500 shadow-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-sm text-gray-500 mb-8 tracking-wider">DALLAS-FORT WORTH MARKET SNAPSHOT</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">~8M</div>
              <div className="text-sm text-gray-700">DFW Metro Population</div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">22</div>
              <div className="text-sm text-gray-700">Fortune 500 Headquarters</div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">#1</div>
              <div className="text-sm text-gray-700">US Metro for Domestic Migration</div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">400K+</div>
              <div className="text-sm text-gray-700">Small Businesses in DFW</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dallas Market Overview */}
      <section className="bg-gray-50/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gray-900">Why the Dallas Market Demands a </span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Different Social Media Approach
            </span>
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Dallas-Fort Worth is not just another US metro. It is an economic powerhouse that has attracted corporate relocations from both coasts, creating a business environment that blends Southern hospitality with coastal ambition. Companies like AT&amp;T, Southwest Airlines, Texas Instruments, CBRE, Kimberly-Clark, and Tenet Healthcare call Dallas home. More recently, firms like Goldman Sachs, Charles Schwab, Caterpillar, and AECOM have moved or expanded major operations into the DFW area.
            </p>
            <p>
              This influx of businesses has created an intensely competitive digital landscape. Over 400,000 small businesses operate in the DFW metroplex, and they are all vying for attention from the same rapidly growing consumer base. Dallas&apos;s population growth has outpaced most major US metros for the past decade, driven by Texas&apos;s business-friendly tax climate (no state income tax), affordable cost of living relative to coastal cities, and a diverse economy that spans technology, healthcare, finance, energy, and logistics.
            </p>
            <p>
              The Dallas real estate market adds another dimension. Neighborhoods like Uptown, Deep Ellum, Bishop Arts District, Knox-Henderson, and the Design District each have distinct identities and demographics. Suburban communities like Plano, Frisco, McKinney, Allen, and Southlake are booming with young families and high household incomes. A social media strategy that treats &ldquo;Dallas&rdquo; as a monolith will underperform compared to one that speaks to these micro-markets individually.
            </p>
            <p>
              The cultural diversity of DFW also shapes social media strategy. Dallas has significant Hispanic, African American, Asian, and international communities, each with different platform preferences and content consumption habits. The city&apos;s strong sports culture (Cowboys, Mavericks, Rangers, Stars, FC Dallas), food scene, and arts community provide endless content hooks that resonate with local audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Strategy Section */}
      <section id="strategy" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gray-900">Social Media Strategy for </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Dallas Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A winning social media marketing strategy in Dallas TX starts with understanding which platforms your audience actually uses, then building a system that consistently delivers the right content at the right time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Platform Selection */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Platform Selection for the DFW Market</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>LinkedIn:</strong> Essential for B2B companies in the Dallas Telecom Corridor, the financial district, and the growing tech hub. Dallas has one of the highest LinkedIn engagement rates among US metros due to its corporate density.
                </p>
                <p>
                  <strong>Instagram:</strong> The dominant platform for Dallas lifestyle, real estate, restaurants, and retail. Visual content showcasing Dallas neighborhoods, food, and events consistently outperforms text-heavy posts.
                </p>
                <p>
                  <strong>Facebook:</strong> Still the strongest platform for reaching the suburban DFW audience, particularly in Collin County (Plano, Frisco, McKinney) and Denton County. Facebook Groups centered on Dallas communities drive exceptional engagement.
                </p>
                <p>
                  <strong>TikTok:</strong> Rapidly growing among Dallas consumers under 40. Dallas-based TikTok content—especially food reviews, neighborhood tours, and behind-the-scenes business content—sees strong local distribution.
                </p>
                <p>
                  <strong>YouTube:</strong> Underutilized in the Dallas market. Businesses investing in YouTube see less competition and strong long-tail search traffic for &ldquo;best [service] in Dallas&rdquo; queries.
                </p>
              </div>
            </div>

            {/* Content Pillars */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Content Pillars for Texas Businesses</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Local Community Involvement:</strong> Dallas audiences reward businesses that show up for the community. Spotlight local partnerships, charity events, neighborhood initiatives, and support for Dallas causes. The State Fair of Texas alone provides weeks of content opportunities each fall.
                </p>
                <p>
                  <strong>Behind-the-Scenes &amp; Culture:</strong> Texans value authenticity. Show your team, your process, your workspace. Dallas businesses that share founder stories and team culture see 2-3x higher engagement than those posting only promotional content.
                </p>
                <p>
                  <strong>Industry Expertise:</strong> Position your brand as the local authority. Dallas is full of experts competing for attention, so in-depth, opinionated content stands out more than generic tips.
                </p>
                <p>
                  <strong>Customer Stories &amp; Social Proof:</strong> Case studies and testimonials from recognizable Dallas businesses carry significant weight. Tag clients, feature their results, and let your work speak through their success.
                </p>
                <p>
                  <strong>Dallas Culture &amp; Lifestyle:</strong> Tie your brand to what makes Dallas unique—the food scene, sports, arts, seasonal events, and neighborhood culture. This humanizes your brand and drives local shares.
                </p>
              </div>
            </div>

            {/* Posting Cadence */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Posting Cadence &amp; Best Times for DFW</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  The DFW audience is active early. Data from Dallas-based accounts consistently shows strong engagement between <strong>7:00-9:00 AM CT</strong> as commuters scroll before work, and again during <strong>12:00-1:30 PM CT</strong> lunch breaks. Evening engagement peaks around <strong>7:00-9:00 PM CT</strong>, especially for consumer brands.
                </p>
                <p>
                  <strong>Recommended posting frequency:</strong> Instagram 4-7 times/week (with daily Stories), LinkedIn 3-5 times/week for B2B, Facebook 3-5 times/week, TikTok 5-7 times/week for maximum algorithmic distribution. Consistency matters more than volume—a predictable schedule builds audience habits.
                </p>
                <p>
                  <strong>Dallas-specific timing:</strong> Post before Cowboys game days for engagement spikes. The State Fair season (late September through mid-October), Dallas Marathon week, and major local events like Taste of Dallas and Deep Ellum Arts Festival create natural content windows.
                </p>
              </div>
            </div>

            {/* Hashtag Strategy */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Hashtag Strategy for Dallas/Texas</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Tier 1 — High-volume Dallas tags:</strong> #DallasTX, #Dallas, #DFW, #DallasTexas, #DTX. These cast a wide net but face heavy competition. Use 1-2 per post combined with more specific tags.
                </p>
                <p>
                  <strong>Tier 2 — Neighborhood &amp; community tags:</strong> #UptownDallas, #DeepEllum, #BishopArts, #KnoxHenderson, #DesignDistrict, #LowerGreenville, #LakewoodDallas, #FriscTX, #PlanoTX. These reach hyper-local audiences with less competition.
                </p>
                <p>
                  <strong>Tier 3 — Industry + location tags:</strong> #DallasRealEstate, #DallasFood, #DallasTech, #DFWBusiness, #DallasHealthcare, #DallasMarketing. These capture intent-driven audiences actively searching for local businesses.
                </p>
                <p>
                  <strong>Tier 4 — Community &amp; culture tags:</strong> #SupportLocalDallas, #ShopLocalDFW, #DallasEats, #DallasArts, #TexasBusiness, #MadeInTexas. These build community affinity and often have higher engagement rates.
                </p>
              </div>
            </div>
          </div>

          {/* Leveraging Dallas Events */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Leveraging Dallas Events &amp; Culture in Your Content</h3>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Dallas has a rich calendar of events that provide natural hooks for social media content. Smart social media marketing in Dallas TX means planning your content calendar around these moments:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>State Fair of Texas (Sep-Oct):</strong> The largest state fair in the US draws 2+ million visitors. Create content around Big Tex, fair food, and the experience—even if your business is unrelated, the cultural tie-in drives engagement.</li>
                  <li><strong>Dallas Cowboys Season (Sep-Jan):</strong> America&apos;s Team content is engagement gold in DFW. Game day posts, watch party promotions, and Cowboys-themed content see significant reach spikes.</li>
                  <li><strong>Dallas Arts District Events:</strong> The largest urban arts district in the US hosts year-round programming. Partner with or attend events at the Dallas Museum of Art, Nasher Sculpture Center, or AT&amp;T Performing Arts Center for content opportunities.</li>
                  <li><strong>Deep Ellum Live Music &amp; Festivals:</strong> The neighborhood&apos;s vibrant music and art scene attracts a younger, creative demographic. Street art, live music, and festival content performs well on Instagram and TikTok.</li>
                  <li><strong>Dallas Restaurant Week (Aug-Sep):</strong> Partner with participating restaurants or create food-focused content during this popular annual event.</li>
                  <li><strong>Seasonal Content:</strong> Texas summers are brutal—air conditioning, pool, and indoor activity content resonates May through September. Holiday season content around the Dallas Arboretum, Highland Park Village lights, and Galleria ice rink drives strong seasonal engagement.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Marketing Section */}
      <section id="content-marketing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gray-900">Content Marketing for </span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dallas Companies
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Content marketing in Dallas goes beyond social posts. It is the engine that fuels your entire digital presence—from SEO to email to paid social. Here is how to build a content system that drives measurable growth for your Dallas business.
          </p>
        </div>

        <div className="space-y-8">
          {/* Blog Content Strategy */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-black text-gray-900 mb-4">Blog Content Strategy for Dallas Businesses</h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Blog content is the foundation of content marketing in Dallas. It drives organic search traffic, establishes authority, and provides source material for social media and email campaigns. The most effective Dallas businesses publish 2-4 high-quality blog posts per month targeting local search intent.
              </p>
              <p>
                <strong>Topic categories that perform well in Dallas:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Local guides and resources:</strong> &ldquo;Best [your industry] services in Dallas,&rdquo; neighborhood-specific content, and DFW market analysis pieces attract high-intent local traffic.</li>
                <li><strong>Industry trend analysis:</strong> Cover trends affecting Dallas industries—commercial real estate shifts, healthcare innovations at UT Southwestern or Baylor, tech growth in the Richardson/Plano corridor.</li>
                <li><strong>Customer pain point content:</strong> Address the specific challenges Dallas businesses and consumers face. For B2B, topics around Texas regulatory compliance, managing distributed DFW workforces, and navigating the competitive hiring landscape resonate strongly.</li>
                <li><strong>Comparative and decision-making content:</strong> &ldquo;How to choose a [service provider] in Dallas&rdquo; posts capture bottom-of-funnel search traffic with high conversion potential.</li>
              </ul>
            </div>
          </div>

          {/* Video Content */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-black text-gray-900 mb-4">Video Content Production in DFW</h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Video is the highest-performing content format across every social platform, and Dallas offers a wealth of visual content opportunities. DFW has a thriving production community (thanks in part to the Texas film incentive program) and access to diverse filming locations from sleek corporate environments to gritty urban backdrops.
              </p>
              <p><strong>Short-form video (Reels, TikTok, Shorts):</strong> 15-60 second clips that capture attention fast. Popular formats for Dallas businesses include quick tips, behind-the-scenes clips, neighborhood spotlights, customer reaction videos, and trending audio adaptations. Production cost: $0 (smartphone) to $500-$2,000 per batch with a local videographer.</p>
              <p><strong>Long-form video (YouTube, LinkedIn Video):</strong> 5-15 minute deep dives on topics relevant to your audience. Dallas businesses see strong performance with interview-style content, market update videos, tutorial content, and virtual tours. Professional production in DFW typically runs $2,000-$8,000 per video depending on complexity.</p>
              <p><strong>Live video:</strong> Facebook Live and LinkedIn Live are underutilized in the Dallas market. Live Q&amp;A sessions, event coverage, and behind-the-scenes streams build real-time engagement and create FOMO among your audience.</p>
            </div>
          </div>

          {/* Email + SEO + Repurposing */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-4">Email Marketing Integration</h3>
              <p className="text-gray-700">
                The strongest content marketing Dallas companies use integrates email with social. Repurpose your best-performing social content into weekly or biweekly email newsletters. Dallas B2B companies see average email open rates of 22-28% when content is locally relevant and personalized. Use social engagement data to segment your email list—subscribers who engage with specific topics get targeted content flows that drive them toward conversion.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-4">SEO-Driven Content for Dallas</h3>
              <p className="text-gray-700">
                Every piece of content should target specific Dallas/Texas search terms. Use keyword research tools to identify what DFW audiences are searching for, then create content that answers those queries comprehensively. Target long-tail terms like &ldquo;social media marketing Dallas TX,&rdquo; &ldquo;content marketing Dallas,&rdquo; and &ldquo;social media Dallas&rdquo; alongside industry-specific local terms. Build topical authority by creating content clusters around your core services with Dallas-specific landing pages as pillar content.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-4">Content Repurposing Engine</h3>
              <p className="text-gray-700">
                One piece of content should never live in just one place. A single Dallas market analysis blog post becomes: 5-8 social media posts, 2-3 Instagram carousels, 1 short-form video, 1 email newsletter section, 1 LinkedIn article, and pull quotes for Stories. This repurposing approach means you create less while publishing more—critical for resource-constrained Dallas businesses competing against well-funded competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Strategies */}
      <section id="industries" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gray-900">Industry-Specific </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Social Media Strategies
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Social media marketing in Texas is not one-size-fits-all. Each of Dallas&apos;s major industries requires a tailored approach to platform selection, content creation, and audience engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real Estate */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Real Estate</h3>
              <p className="text-gray-700">
                The Dallas real estate market moves fast, and social media is where buyers and sellers start their search. Focus on Instagram Reels and TikTok for property tours and neighborhood spotlights (Uptown, Park Cities, Lakewood, Frisco). Use Facebook for community engagement in suburban markets. Post weekly market update videos covering DFW median prices, inventory levels, and interest rate impacts. Leverage drone footage of Dallas skyline views and neighborhood amenities. Tag locations aggressively and use neighborhood-specific hashtags. TREC advertising rules apply to all social content—include required disclosures.
              </p>
            </div>

            {/* Healthcare */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Healthcare &amp; Medical</h3>
              <p className="text-gray-700">
                Dallas is a major healthcare hub with UT Southwestern, Baylor Scott &amp; White, Texas Health Resources, and Parkland Health. Social media for healthcare must be HIPAA-compliant—never share patient information without explicit written consent. Focus on patient education content (condition awareness, treatment options, wellness tips), provider spotlights that humanize your practice, and community health event promotion. LinkedIn works well for physician recruitment and B2B healthcare partnerships. Facebook and Instagram reach patients effectively. Video content explaining procedures or featuring patient testimonials (with consent) builds trust.
              </p>
            </div>

            {/* Technology */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Technology &amp; SaaS</h3>
              <p className="text-gray-700">
                Dallas&apos;s tech scene has exploded with the Telecom Corridor in Richardson, the growing Innovation District in downtown, and major companies like Texas Instruments, AT&amp;T, and Match Group. B2B thought leadership on LinkedIn is the primary social channel—share original research, industry analysis, and engineering culture content. Twitter/X remains relevant for tech conversations. GitHub and developer community engagement build credibility with technical audiences. Content marketing Dallas tech companies should focus on case studies, whitepapers, and webinar promotion that demonstrate expertise to enterprise buyers.
              </p>
            </div>

            {/* Restaurants */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Restaurants &amp; Hospitality</h3>
              <p className="text-gray-700">
                Dallas has one of the most competitive restaurant scenes in Texas, from Tex-Mex institutions to James Beard-nominated fine dining. Instagram and TikTok are non-negotiable—invest in quality food photography and short-form video. User-generated content is your best asset: encourage diners to tag your restaurant, repost their content, and create shareable moments (signature dishes, unique decor, photo-worthy plating). Leverage #DallasEats, #DFWFoodie, and neighborhood-specific food tags. Partner with local food influencers (Dallas has a robust food blogger community). Promote events, specials, and seasonal menus consistently.
              </p>
            </div>

            {/* Professional Services */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Professional Services</h3>
              <p className="text-gray-700">
                Law firms, accounting firms, consultancies, and financial advisors in Dallas compete in a crowded market where trust is everything. LinkedIn is the primary platform—publish thought leadership content, share case study results (anonymized as needed), and engage in industry conversations. Build authority through long-form content: detailed blog posts, webinars, and white papers promoted across social channels. Client testimonials and before/after case studies are powerful social proof. Networking content from Dallas business events (Dallas Regional Chamber, industry conferences at the Kay Bailey Hutchison Convention Center) shows active community involvement.
              </p>
            </div>

            {/* E-commerce / Retail */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">E-Commerce &amp; Retail</h3>
              <p className="text-gray-700">
                Dallas&apos;s retail landscape spans from NorthPark Center and Highland Park Village to the eclectic shops of Deep Ellum and Bishop Arts. For brick-and-mortar retailers, Instagram and TikTok drive foot traffic through location-tagged content, product showcases, and new arrival announcements. For e-commerce brands based in DFW, leverage the local angle to build community even if you sell nationally. Influencer partnerships, unboxing content, and user-generated reviews fuel social commerce. Facebook and Instagram Shops allow direct purchasing. Seasonal campaigns around Texas-specific moments (rodeo season, back-to-school, State Fair) drive strong conversion spikes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Social Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gray-900">Paid Social Advertising in the </span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dallas Market
            </span>
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Organic reach alone is no longer enough to compete in the DFW market. Paid social media advertising allows Dallas businesses to precisely target their ideal customers by location, demographics, interests, and behavior. Here is what you need to know about running paid social in one of the largest metros in America.
            </p>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Facebook &amp; Instagram Ads for Dallas</h3>
              <p className="text-gray-700 text-lg mb-4">
                Meta&apos;s advertising platform remains the most versatile option for Dallas businesses. The DFW metro offers granular geo-targeting options—you can target by zip code, a radius around your business location, or specific neighborhoods. This is critical in a metro as sprawling as DFW, where a business in Plano has a very different customer base than one in Oak Cliff.
              </p>
              <p className="text-gray-700 text-lg">
                <strong>Typical DFW benchmarks:</strong> CPM (cost per 1,000 impressions) ranges from $8-$18 for B2C and $15-$35 for B2B. Cost per click averages $0.80-$2.50 for consumer products and $2.50-$7.00 for professional services. Cost per lead varies significantly by industry: $15-$35 for restaurants/retail, $25-$60 for real estate, $40-$100 for healthcare, and $50-$150 for B2B services. These are competitive with other major Texas metros but more affordable than coastal cities.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-4">LinkedIn Ads for Dallas B2B</h3>
              <p className="text-gray-700 text-lg mb-4">
                With its high concentration of corporate headquarters and professional services firms, Dallas is one of the best LinkedIn advertising markets in the US. You can target by company size, industry, job title, seniority, and specific companies headquartered or operating in DFW.
              </p>
              <p className="text-gray-700 text-lg">
                <strong>Dallas LinkedIn benchmarks:</strong> CPM typically ranges from $30-$80. Cost per click runs $5-$12 for sponsored content. Cost per lead through Lead Gen Forms averages $40-$120 depending on your offer and targeting specificity. While more expensive than Meta, LinkedIn leads in the Dallas B2B market tend to be significantly higher quality and closer to purchase decisions. Sponsored InMail campaigns targeting Dallas executives see 35-50% open rates when messaging is personalized and relevant.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-4">TikTok Ads for Dallas Consumer Brands</h3>
              <p className="text-gray-700 text-lg mb-4">
                TikTok advertising is still relatively new in the Dallas market, which means lower competition and CPMs compared to Meta. Dallas consumer brands—particularly in food, fitness, beauty, and entertainment—are seeing strong returns on TikTok ad spend.
              </p>
              <p className="text-gray-700 text-lg">
                <strong>DFW TikTok benchmarks:</strong> CPM ranges from $5-$12, making it the most affordable major social advertising platform. Cost per click averages $0.50-$2.00. The platform excels at top-of-funnel awareness and consideration, though Spark Ads (boosting organic content) are increasingly effective at driving direct conversions. For Dallas businesses, TikTok&apos;s location-based targeting covers the major DFW zip codes, and content featuring recognizable Dallas locations tends to perform well in local distribution.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Geo-Targeting Strategies for the Sprawling DFW Metro</h3>
              <p className="text-gray-700 text-lg">
                DFW is one of the largest metros by land area in the US, stretching across 12 counties and over 9,000 square miles. Effective paid social requires thoughtful geo-targeting. Avoid targeting the entire DFW metro unless your business truly serves the whole region. Instead, create separate campaigns for distinct areas: Dallas proper, Uptown/Downtown, North Dallas suburbs (Plano, Frisco, McKinney, Allen), East (Rockwall, Rowlett), West (Fort Worth, Arlington), and South (DeSoto, Cedar Hill, Duncanville). Each area has different demographics, income levels, and consumer behaviors. Test radius targeting around your physical location (5, 10, 15 miles) to find your optimal range, then layer on demographic and interest targeting for precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose a Dallas Agency */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gray-900">How to Choose a </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Dallas Social Media Agency
              </span>
            </h2>
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Dallas has hundreds of social media marketing agencies, from solo freelancers to full-service firms. Choosing the right partner is critical to your success. Here is what to evaluate.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-black text-gray-900 mb-4">Evaluation Criteria</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Local market knowledge:</strong> Do they understand DFW neighborhoods, demographics, and culture? Ask for Dallas-specific case studies.</li>
                    <li><strong>Industry experience:</strong> Have they worked with businesses in your industry within the Texas market?</li>
                    <li><strong>Transparency:</strong> Do they provide clear reporting on metrics that matter (leads, conversions, revenue) rather than vanity metrics?</li>
                    <li><strong>Content quality:</strong> Review their own social media presence and their clients&apos; content. Quality speaks for itself.</li>
                    <li><strong>Strategy-first approach:</strong> Do they start with a strategy tailored to your business, or do they jump straight to posting?</li>
                    <li><strong>Paid social expertise:</strong> Can they manage ad spend effectively and show positive ROAS?</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-black text-gray-900 mb-4">Pricing Ranges in the Texas Market</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Freelancer / Solo Consultant:</strong> $1,000-$3,000/month. Good for small businesses needing basic social media management on 1-2 platforms.</li>
                    <li><strong>Boutique Agency (2-10 people):</strong> $2,500-$6,000/month. Typically offers more strategic depth, content creation, and some paid social management.</li>
                    <li><strong>Mid-Size Agency (10-50 people):</strong> $5,000-$15,000/month. Full-service capabilities including strategy, content production, paid social, and analytics.</li>
                    <li><strong>Large Agency:</strong> $10,000-$50,000+/month. Enterprise-level service with dedicated teams, advanced analytics, and multi-channel integration.</li>
                    <li><strong>Ad spend management fees:</strong> Typically 15-25% of monthly ad spend, or flat fees for smaller budgets.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-black text-gray-900 mb-4">What to Expect in Proposals</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>A clear audit of your current social presence and competitive landscape</li>
                    <li>Specific strategy recommendations tailored to your Dallas market position</li>
                    <li>Defined deliverables (number of posts, platforms managed, content types)</li>
                    <li>Measurable KPIs and how they will be tracked</li>
                    <li>Team structure—who will manage your account day to day</li>
                    <li>Timeline with milestones for the first 90 days</li>
                    <li>References from current Dallas-area clients</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-black text-gray-900 mb-4">Red Flags to Watch For</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Guaranteed follower counts:</strong> No legitimate agency guarantees specific follower numbers. Growth depends on many variables.</li>
                    <li><strong>No Dallas-specific experience:</strong> Generic strategies that could apply to any city will underperform in DFW.</li>
                    <li><strong>Long-term contracts with no outs:</strong> Most reputable Dallas agencies offer month-to-month or 3-month initial terms with 30-day cancellation thereafter.</li>
                    <li><strong>No access to your own accounts:</strong> You should always own your social media accounts and ad accounts. The agency should operate under your access.</li>
                    <li><strong>Reporting only on vanity metrics:</strong> If they only report likes and impressions without connecting to business outcomes, look elsewhere.</li>
                    <li><strong>Outsourcing without disclosure:</strong> Some Dallas agencies outsource content creation offshore. Ask directly about their team structure.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Regulations */}
      <section className="bg-gray-50/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gray-900">Texas Social Media </span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Regulations &amp; Considerations
            </span>
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Social media marketing in Texas operates within a unique regulatory environment that Dallas businesses need to understand. While Texas is generally business-friendly, there are specific rules that affect how you market on social platforms.
            </p>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-4">TCPA Compliance for Follow-Up Communications</h3>
              <p className="text-gray-700">
                The Telephone Consumer Protection Act (TCPA) is especially relevant when your social media campaigns generate leads that you follow up with via phone or text. If you collect phone numbers through social media lead forms or landing pages, you must have express written consent before sending automated text messages or making robocalls. Texas has some of the most active TCPA litigants in the country, and penalties can reach $500-$1,500 per violation. Ensure your lead forms include clear opt-in language, and maintain records of consent for every contact.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-4">Texas Business and Commerce Code</h3>
              <p className="text-gray-700">
                The Texas Deceptive Trade Practices-Consumer Protection Act (DTPA) under the Texas Business and Commerce Code applies to social media advertising. Any claims made in social media posts, ads, or influencer partnerships must be truthful and not misleading. This includes product claims, service guarantees, testimonials, and before-and-after results. Texas enforcement of deceptive advertising is active, and the state Attorney General&apos;s office has pursued cases involving social media marketing claims. Always ensure promotional content is accurate and that material connections with influencers or endorsers are clearly disclosed.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-4">Industry-Specific Regulations in Texas</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Real Estate (TREC):</strong> The Texas Real Estate Commission requires specific disclosures in all advertising, including social media. Agent names, brokerage names, and license numbers may need to be included depending on the content type.</li>
                <li><strong>Healthcare (HIPAA + Texas Medical Board):</strong> Beyond federal HIPAA requirements, the Texas Medical Board has specific rules about physician advertising and patient testimonials on social media.</li>
                <li><strong>Legal (Texas Bar):</strong> The State Bar of Texas has detailed rules governing attorney advertising on social media, including requirements for disclaimers and restrictions on certain claims.</li>
                <li><strong>Financial Services:</strong> FINRA and SEC regulations apply to financial advisors&apos; social media activity, with Texas state securities board providing additional oversight.</li>
                <li><strong>Cannabis/CBD:</strong> Texas has strict regulations on hemp and CBD product marketing. Social media advertising for these products requires careful compliance with both platform policies and Texas Health and Safety Code provisions.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-4">Texas Data Privacy Considerations</h3>
              <p className="text-gray-700">
                The Texas Data Privacy and Security Act (TDPSA), effective July 2024, gives Texas consumers rights over their personal data, including data collected through social media pixels, retargeting campaigns, and lead forms. Dallas businesses must provide clear privacy disclosures when collecting data through social media marketing activities. This includes having a compliant privacy policy that covers social media data collection, honoring consumer opt-out requests for targeted advertising, and properly managing data obtained through social media lead generation campaigns. Ensure your social media marketing practices align with TDPSA requirements to avoid potential enforcement actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-gray-900">Frequently Asked Questions About </span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Social Media Marketing in Dallas
                </span>
              </h2>
              <p className="text-xl text-gray-700">
                Answers to the most common questions Dallas businesses ask about social media and content marketing.
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Contact Form Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gray-900">Ready to Dominate </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Social Media in Dallas?
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Stop posting without a plan. Our Dallas-based social media marketing team builds systems that turn content into leads and leads into revenue. Whether you need social media management, content marketing, paid social advertising, or a complete digital strategy, we will craft a custom approach for the DFW market.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700 text-lg">Free social media audit of your current Dallas presence</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700 text-lg">Custom strategy built for the DFW market and your industry</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700 text-lg">Competitive analysis against other Dallas businesses in your space</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700 text-lg">Clear pricing with no long-term contracts required</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700 text-lg">ROI-focused reporting tied to real business outcomes</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="relative inline-block h-10 w-56 mb-4">
                <Image
                  src="/OWN IT SOCIAL.png"
                  alt="Own It Social"
                  fill
                  className="object-contain object-left brightness-200"
                />
              </Link>
              <p className="text-sm">
                Social media marketing and content marketing agency serving Dallas, TX and the entire DFW metroplex. We help businesses grow through strategic social media, content creation, and paid advertising.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/social-media-marketing-dallas-tx" className="hover:text-white transition">Social Media Marketing Dallas TX</Link></li>
                <li><Link href="/social-media-marketing-agency-near-me" className="hover:text-white transition">Social Media Marketing Agency Near Me</Link></li>
                <li><Link href="/ppc-digital-marketing-agency" className="hover:text-white transition">PPC Digital Marketing</Link></li>
                <li><Link href="/best-marketing-agencies-dallas" className="hover:text-white transition">Best Marketing Agencies Dallas</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Markets We Serve</h4>
              <ul className="space-y-2 text-sm">
                <li>Dallas, TX</li>
                <li>Fort Worth, TX</li>
                <li>Plano, TX</li>
                <li>Frisco, TX</li>
                <li>McKinney, TX</li>
                <li>Arlington, TX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Own It Social. All rights reserved. | Social Media Marketing Dallas TX</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
