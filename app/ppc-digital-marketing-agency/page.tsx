import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PPC Digital Marketing Agency: Paid Media Strategy That Scales Profitably',
  description:
    'Learn how to choose a paid media advertising agency. Includes channel mix guidance, budgeting, account structure, and KPI frameworks for sustainable PPC growth.',
  keywords: 'ppc digital marketing agency, paid media advertising agency, paid media agency',
};

export default function PPCDigitalMarketingAgencyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">How a PPC Digital Marketing Agency Should Actually Operate</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          A strong <strong>paid media agency</strong> does more than launch campaigns. It designs full-funnel architecture across search,
          social, remarketing, and conversion optimization so your ad spend compounds over time.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16 grid md:grid-cols-3 gap-6">
        {[
          ['Budget Planning', 'Start with contribution margin and payback period. Set spend ceilings per channel before creative production begins.'],
          ['Account Design', 'Separate campaigns by intent and customer type. Avoid blending cold and retargeting traffic in one ad set.'],
          ['Creative Operations', 'Ship new ads weekly. High-performing paid media depends on message velocity and clear offer testing.'],
          ['Landing Page Fit', 'Map ad promise to page headline, proof, and CTA. Message mismatch is a hidden CPC tax.'],
          ['Measurement', 'Track qualified leads, show rates, and sales conversion, not only CTR and CPL.'],
          ['Optimization Rhythm', 'Require weekly experiments and monthly strategic resets tied to business outcomes.'],
        ].map(([title, body]) => (
          <article key={title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
            <p className="text-gray-700">{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
