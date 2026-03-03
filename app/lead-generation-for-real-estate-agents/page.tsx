import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Generation for Real Estate Agents: Systems That Produce Closings',
  description:
    'Learn practical lead generation for real estate agents including lead sources, nurture workflows, ISA/Sales handoffs, and conversion benchmarks.',
  keywords: 'lead generation for real estate agents',
};

export default function LeadGenerationForRealEstateAgentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Lead Generation for Real Estate Agents: A Revenue-First Framework</h1>
        <p className="text-lg text-gray-700">Most teams do not have a lead problem—they have a conversion and follow-up problem. This framework covers both.</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-6">
        <article className="bg-white rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Top Lead Channels</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Google Search campaigns for high-intent buyer/seller terms.</li>
            <li>Meta lead ads with neighborhood-specific hooks.</li>
            <li>YouTube short-form market update content for trust and retargeting pools.</li>
            <li>Referral partner campaigns with mortgage, legal, and relocation partners.</li>
          </ul>
        </article>

        <article className="bg-white rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Nurture and Close System</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Speed-to-lead standard under 5 minutes during business hours.</li>
            <li>10-14 day omnichannel follow-up sequence (call, text, email, retargeting).</li>
            <li>Qualification script with timeline, financing status, and preferred areas.</li>
            <li>Weekly pipeline review: lead source to appointment to closing rate.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
