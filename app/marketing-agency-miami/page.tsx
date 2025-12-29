import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { miamiMarketData, getServiceBySlug } from '@/app/data/miami-services';

const service = getServiceBySlug('marketing-agency')!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: 'marketing agency miami, miami marketing agency, marketing companies miami, advertising agency miami, digital marketing miami',
};

export default function MarketingAgencyMiamiPage() {
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
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-800 hover:text-gray-900 font-medium transition">Services</a>
            <a href="#about-miami" className="text-gray-800 hover:text-gray-900 font-medium transition">Miami Market</a>
            <a href="#results" className="text-gray-800 hover:text-gray-900 font-medium transition">Results</a>
          </nav>
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full"
          >
            Book Free Call
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            🌴 {miamiMarketData.city}, {miamiMarketData.state} Marketing Agency
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-black">{service.h1}</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              That Gets Results
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed">
            {service.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
            >
              Get Free Strategy Session
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="#about-miami"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-sm hover:border-purple-600 hover:text-purple-600 transition-all duration-200 rounded-full"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Miami Market Stats */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-sm text-gray-500 mb-8 tracking-wider">MIAMI MARKET AT A GLANCE</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {miamiMarketData.population}
              </div>
              <div className="text-sm text-gray-700">Metro Population</div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {miamiMarketData.businesses}
              </div>
              <div className="text-sm text-gray-700">Active Businesses</div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {miamiMarketData.demographics.hispanicLatino}
              </div>
              <div className="text-sm text-gray-700">Hispanic/Latino</div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {miamiMarketData.digitalLandscape.socialMediaUsers}
              </div>
              <div className="text-sm text-gray-700">Social Media Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section id="about-miami" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gray-900">Marketing in</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Miami is Different
            </span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Key Industries */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-black mb-6 text-gray-900">Miami&apos;s Major Industries</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {miamiMarketData.economy.majorIndustries.map((industry, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gray-900">Miami Marketing</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Challenges
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {service.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-gray-100">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="services" className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gray-900">Our Miami</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges of marketing in Miami—and we know how to win
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Neighborhoods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gray-900">We Know</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Miami Markets
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From Brickell to Wynwood, we understand what makes each Miami neighborhood unique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miamiMarketData.keyNeighborhoods.map((neighborhood, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-purple-200 transition">
              <h3 className="text-xl font-black text-gray-900 mb-2">{neighborhood.name}</h3>
              <p className="text-purple-600 font-semibold text-sm">{neighborhood.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results CTA */}
      <section id="results" className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Results That Matter
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We focus on metrics that actually grow your Miami business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="text-5xl font-black text-white mb-2">10x</div>
              <div className="text-purple-100">More Visibility</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="text-5xl font-black text-white mb-2">24/7</div>
              <div className="text-purple-100">Marketing Engine</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-purple-100">Done For You</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 shadow-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Dominate Miami?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a free strategy session and discover how we can help you win in the Magic City
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
          >
            Book Free Strategy Session
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
                Miami marketing agency helping businesses dominate the Magic City with proven strategies.
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
                <li><Link href="/marketing-agency-miami" className="hover:text-white transition">Marketing Agency</Link></li>
                <li><Link href="/digital-marketing-miami" className="hover:text-white transition">Digital Marketing</Link></li>
                <li><Link href="/best-marketing-agencies-miami" className="hover:text-white transition">Best Agencies Miami</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-800 pt-8">
            <p>© 2025 OwnItSocial.com | Serving Miami, FL | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
