import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Marketing Agencies, Firms & PPC Partners (2026 Buyer\'s Guide)',
  description:
    'Compare big marketing agencies, top PPC agencies, and top advertising companies in NYC and New York. Use our criteria, pricing benchmarks, and interview questions to pick the right partner.',
  keywords:
    'big marketing agencies, top ppc agencies, top marketing agency, top marketing firms, top advertising companies nyc, top advertising companies in new york',
};

const agencies = [
  {
    name: 'Wpromote',
    focus: 'Enterprise performance marketing and paid media',
    fit: 'Brands with significant ad budgets and complex attribution needs',
    watchOut: 'Higher minimum retainers and less hands-on senior access for smaller accounts',
  },
  {
    name: 'Blue Fountain Media',
    focus: 'Brand + web + digital marketing execution',
    fit: 'Mid-market companies undergoing rebrand or site modernization',
    watchOut: 'Project-heavy model can increase timelines and change-order costs',
  },
  {
    name: 'Sociallyin',
    focus: 'Social-first creative and influencer operations',
    fit: 'DTC and consumer brands needing high-volume platform-native content',
    watchOut: 'Not ideal if SEO, CRO, and deep technical marketing are core priorities',
  },
  {
    name: 'Own It Social',
    focus: 'Growth marketing with real estate and finance specialization',
    fit: 'Teams needing a blend of social, paid media, and lead nurturing strategy',
    watchOut: 'Best suited for businesses that can support consistent content + sales follow-up',
  },
];

export default function TopMarketingAgenciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
          Authority Guide • Updated 2026
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
          Top Marketing Agencies in NYC: 2026 Buyer&apos;s Guide
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          If you are comparing <strong>big marketing agencies</strong>, <strong>top PPC agencies</strong>, or <strong>top advertising companies in New York</strong>,
          avoid choosing by brand name alone. The best agency is the one that matches your growth stage, margin profile, and sales process.
          This page gives you practical frameworks to shortlist and interview the right partner.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold">
            Get a Strategy Review
          </Link>
          <a href="#scorecard" className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold">
            Jump to Agency Scorecard
          </a>
        </div>
      </section>

      <section id="scorecard" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">A Practical Scorecard for Top Marketing Firms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {[
            'Channel-depth: Can they execute deeply in 1–2 channels before expanding?',
            'Measurement: Do they tie media metrics to pipeline and revenue?',
            'Creative throughput: How quickly can they produce and test new assets?',
            'ICP alignment: Have they grown businesses with your exact customer profile?',
            'Team structure: Who owns strategy vs. execution day-to-day?',
            'Commercial model: Is retainer/media fee structure aligned with outcomes?',
          ].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Sample Agencies Often Considered in New York</h2>
          <div className="space-y-5">
            {agencies.map((agency) => (
              <article key={agency.name} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-white to-slate-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{agency.name}</h3>
                <p className="text-gray-700"><strong>Core focus:</strong> {agency.focus}</p>
                <p className="text-gray-700"><strong>Best fit:</strong> {agency.fit}</p>
                <p className="text-gray-700"><strong>What to validate:</strong> {agency.watchOut}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Questions to Ask Any Top PPC Agency</h2>
        <ol className="list-decimal ml-6 space-y-3 text-gray-700">
          <li>How do you handle conversion tracking when CRM attribution and platform attribution disagree?</li>
          <li>What is your creative testing cadence and what counts as a statistically valid test?</li>
          <li>How do you segment campaigns by funnel stage, not just by channel?</li>
          <li>What is your process for controlling lead quality (not just lowering CPL)?</li>
          <li>Who is accountable for weekly optimizations and monthly strategy pivots?</li>
        </ol>
      </section>
    </main>
  );
}
