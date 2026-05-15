import type { Metadata } from 'next';
import Image from 'next/image';
import LeadCaptureForm from './LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Free Reverse Mortgage Guide | Dave Davis, NMLS #391214',
  description:
    'Learn how a reverse mortgage (HECM) can help you access your home equity in retirement — without selling your home or making monthly payments. Free guide from Dave Davis at Fairway Independent Mortgage Corporation.',
  robots: { index: false, follow: false },
};

const guideTopics = [
  { icon: '🏠', title: 'What Is a HECM?', desc: 'The real definition — not the myths' },
  { icon: '✅', title: 'Who Qualifies?', desc: 'Age, equity, and property requirements' },
  { icon: '💰', title: 'How Much Can You Access?', desc: 'Worked dollar-for-dollar examples' },
  { icon: '📋', title: 'All Payout Options', desc: 'Lump sum, line of credit, monthly income' },
  { icon: '🔢', title: 'Every Cost Explained', desc: 'No surprises — origination, MIP, closing' },
  { icon: '🛡️', title: 'Non-Recourse Protection', desc: 'Why you can never owe more than the home' },
  { icon: '⚖️', title: 'vs. HELOCs & Alternatives', desc: 'Side-by-side comparison' },
  { icon: '❌', title: 'Myths Debunked', desc: '8 common misconceptions — cleared up' },
];

export default function ReverseMortgageGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Fairway.webp"
              alt="Fairway Independent Mortgage Corporation"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-900 text-sm">Dave Davis</p>
            <p className="text-xs text-gray-500">Reverse Mortgage Specialist · NMLS #391214</p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <span className="inline-block bg-fairway-green text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Free Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Is a Reverse Mortgage Right For You?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how homeowners 62+ can tap into their home equity — without monthly mortgage payments, without selling, and without giving up ownership.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Learn exactly how much equity you can access',
                'Understand ALL the costs — no surprises',
                'Compare reverse mortgages vs. HELOCs and other options',
                '11 sections of expert, unbiased guidance',
                'Common myths debunked with real facts',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-fairway-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">
              Prepared by <span className="font-semibold text-gray-700">Dave Davis, NMLS #391214</span> ·{' '}
              Fairway Independent Mortgage Corporation NMLS #2289
            </p>
          </div>

          {/* Right column — form */}
          <div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">What&apos;s Inside the Guide</h2>
          <p className="text-gray-500 text-center mb-10">11 sections of real, valuable information — not a sales pitch</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guideTopics.map((topic) => (
              <div key={topic.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{topic.title}</h3>
                <p className="text-sm text-gray-500">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dave */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dave Davis</h2>
            <p className="text-gray-600 mb-6">
              Dave Davis is a licensed mortgage professional with Fairway Independent Mortgage Corporation, specializing in helping retirement-aged homeowners understand all of their options. He&apos;s helped hundreds of families make informed, confident decisions about their home equity — and he&apos;s passionate about cutting through the noise with honest, straightforward guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+19045098762"
                className="inline-flex items-center gap-2 px-6 py-3 bg-fairway-green text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call / Text Dave: (904) 509-8762
              </a>
              <a
                href="mailto:dave.davis@fairwaymc.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-fairway-green text-fairway-green font-semibold rounded-full hover:bg-green-50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Dave
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            Dave Davis | NMLS #391214 | Fairway Independent Mortgage Corporation | NMLS #2289 | Equal Housing Lender
            <br /><br />
            This is not a commitment to lend. Loan terms and conditions are subject to change without notice. These materials are not from HUD or FHA and were not approved by HUD or a government agency. These advertisements and materials are not provided nor approved by the US Department of Housing and Urban Development (HUD) or the Federal Housing Administration (FHA). A reverse mortgage increases the principal mortgage loan amount and decreases home equity (it is a negative-amortization loan). Borrowers are still responsible for property taxes and homeowner&apos;s insurance. Borrower must occupy home as primary residence and remain current on property taxes, homeowner&apos;s insurance, and any HOA fees.
          </p>
        </div>
      </footer>
    </div>
  );
}
