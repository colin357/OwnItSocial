import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Company Near Me | How to Choose the Right Partner',
  description:
    'Compare social media marketing firms near you. Learn service models, deliverables, reporting expectations, and what to ask before signing a social media contract.',
  keywords: 'social media company, social media marketing agency near me, social media marketing firms near me',
};

export default function SocialMediaMarketingAgencyNearMePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">How to Choose a Social Media Marketing Agency Near You</h1>
        <p className="text-lg text-gray-700">The best local social media company combines platform expertise, consistent creative output, and clear reporting tied to business outcomes.</p>
      </section>
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ['Deliverables', 'Ask for exact monthly outputs: reels, short-form videos, static posts, stories, captions, and community management hours.'],
            ['Process', 'Require a documented workflow for briefing, approvals, publishing, and escalation if post performance drops.'],
            ['Strategy', 'They should map content themes to funnel stages: awareness, consideration, and conversion.'],
            ['Reporting', 'Dashboard should include reach, saves, clicks, leads, and assisted conversions by campaign theme.'],
          ].map(([title, text]) => (
            <article key={title} className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
              <p className="text-gray-700">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
