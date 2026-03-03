import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orlando SEO Company & Services | Local SEO Blueprint for 2026',
  description:
    'Looking for Orlando SEO services? Learn how to evaluate an Orlando SEO company, set realistic timelines, and prioritize technical, local, and content SEO work.',
  keywords: 'orlando seo, orlando seo company, orlando seo services',
};

export default function OrlandoSEOCompanyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Orlando SEO Services: A Practical Guide for Local Growth</h1>
        <p className="text-lg text-gray-700">If you need an <strong>Orlando SEO company</strong>, prioritize providers that can improve local visibility and convert traffic into qualified leads.</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What Good Orlando SEO Looks Like</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Service + city pages built around true search intent.</li>
            <li>Internal links connecting core services to FAQs and proof pages.</li>
            <li>GBP optimization and location citation consistency.</li>
            <li>Technical fixes for speed, mobile UX, and schema coverage.</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Expected Timeline</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Month 1: Audit, tracking, and technical stabilization.</li>
            <li>Months 2-3: Core service page upgrades and local authority signals.</li>
            <li>Months 4-6: Consistent content publishing and conversion optimization.</li>
            <li>Ongoing: Link acquisition, entity building, and SERP feature expansion.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
