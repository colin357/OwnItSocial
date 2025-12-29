import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { sarasotaCompetitors, ownItSocial } from '@/app/data/competitors';

export const metadata: Metadata = {
  title: 'Best Marketing Agencies in Sarasota, FL 2025 | Independent Comparison',
  description: 'Unbiased comparison of the top marketing agencies in Sarasota, Florida. Compare pricing, services, and reviews to find the perfect fit for your business.',
  keywords: 'best marketing agencies sarasota, top marketing agencies sarasota fl, sarasota marketing companies, marketing firms sarasota florida',
};

export default function BestMarketingAgenciesSarasotaPage() {
  const allAgencies = [ownItSocial, ...sarasotaCompetitors];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
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
            href="/#contact"
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
            🏆 Independent Comparison • Updated 2025
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-black">Best Marketing Agencies</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              in Sarasota, FL
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed">
            An honest, unbiased comparison of Sarasota&apos;s top marketing agencies to help you make the right choice for your business.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
          <h2 className="text-2xl font-black mb-4 text-gray-900">How We Evaluated These Agencies</h2>
          <p className="text-gray-700 mb-4">
            We&apos;ve researched Sarasota&apos;s most prominent marketing agencies based on:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Services offered:</strong> Breadth and depth of marketing capabilities</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Pricing structure:</strong> Value for money and transparency</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Client experience:</strong> Onboarding process, communication, and support</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Industry expertise:</strong> Specialization and track record</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Agency Comparison Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8">
          {allAgencies.map((agency, index) => (
            <div
              key={agency.name}
              className={`bg-white rounded-3xl p-8 md:p-12 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                agency.name === 'Own It Social' ? 'border-purple-500 bg-gradient-to-br from-purple-50/30 to-blue-50/30' : 'border-gray-200'
              }`}
            >
              {agency.name === 'Own It Social' && (
                <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold">
                  ⭐ Specialized in Real Estate & Finance Marketing
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                    {index + 1}. {agency.name}
                  </h3>
                  <a
                    href={`https://${agency.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2"
                  >
                    {agency.website}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div className="flex gap-4 text-sm">
                  {agency.founded && (
                    <div className="text-center">
                      <div className="font-bold text-gray-900">Founded</div>
                      <div className="text-gray-600">{agency.founded}</div>
                    </div>
                  )}
                  {agency.employees && (
                    <div className="text-center">
                      <div className="font-bold text-gray-900">Team Size</div>
                      <div className="text-gray-600">{agency.employees}</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="font-bold text-gray-900">Pricing</div>
                    <div className="text-gray-600">{agency.pricing}</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Specialties */}
                <div>
                  <h4 className="font-black text-lg mb-4 text-gray-900">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {agency.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <h4 className="font-black text-lg mb-4 text-gray-900">Best For</h4>
                  <p className="text-gray-700 leading-relaxed">{agency.bestFor}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Pros */}
                <div>
                  <h4 className="font-black text-lg mb-4 text-green-700 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {agency.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <h4 className="font-black text-lg mb-4 text-red-700 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {agency.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-600 mt-1">×</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {agency.name === 'Own It Social' && (
                <div className="mt-8 pt-8 border-t border-purple-200">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
                  >
                    Get Free Strategy Session
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="text-gray-900">Quick</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Comparison
            </span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <th className="px-6 py-4 text-left font-black text-gray-900">Agency</th>
                  <th className="px-6 py-4 text-left font-black text-gray-900">Pricing</th>
                  <th className="px-6 py-4 text-left font-black text-gray-900">Team Size</th>
                  <th className="px-6 py-4 text-left font-black text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {allAgencies.map((agency, index) => (
                  <tr
                    key={agency.name}
                    className={`border-b border-gray-200 ${agency.name === 'Own It Social' ? 'bg-purple-50/50' : ''}`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{agency.name}</td>
                    <td className="px-6 py-4 text-gray-700">{agency.pricing}</td>
                    <td className="px-6 py-4 text-gray-700">{agency.employees || 'N/A'}</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{agency.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-black text-center mb-12">
          <span className="text-gray-900">How to</span>{' '}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Choose
          </span>
        </h2>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-black mb-3 text-gray-900">1. Define Your Budget</h3>
            <p className="text-gray-700">
              Marketing agencies in Sarasota range from $1,500/month to $8,000+/month. Know your budget before you start shopping.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-black mb-3 text-gray-900">2. Identify Your Needs</h3>
            <p className="text-gray-700">
              Do you need full-service marketing, or just specific services like SEO or social media? Specialized agencies often deliver better results in their niche.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-black mb-3 text-gray-900">3. Check Industry Experience</h3>
            <p className="text-gray-700">
              An agency with experience in your industry will understand your customers, competitors, and unique challenges better.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-black mb-3 text-gray-900">4. Meet the Team</h3>
            <p className="text-gray-700">
              Schedule consultations with 2-3 agencies. You&apos;ll be working closely with these people—chemistry matters.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free strategy session with Own It Social and see if we&apos;re the right fit for your business
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
          >
            Book Free Consultation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="font-black text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                OWN IT SOCIAL
              </div>
              <p className="text-gray-500 mb-4">
                Marketing agency specializing in real estate and finance marketing, serving Sarasota and the Gulf Coast.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/#services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link href="/#about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/articles" className="hover:text-white transition">Articles</Link></li>
                <li><Link href="/marketing-agency-miami" className="hover:text-white transition">Marketing Agency Miami</Link></li>
                <li><Link href="/best-marketing-agencies-miami" className="hover:text-white transition">Best Agencies Miami</Link></li>
                <li><Link href="/best-marketing-agencies-sarasota" className="hover:text-white transition">Best Agencies Sarasota</Link></li>
                <li><Link href="/locations" className="hover:text-white transition">All Locations</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-800 pt-8">
            <p>© 2025 OwnItSocial.com | Serving Sarasota, FL | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
