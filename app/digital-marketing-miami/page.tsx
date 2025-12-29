import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { miamiMarketData, getServiceBySlug } from '@/app/data/miami-services';

const service = getServiceBySlug('digital-marketing')!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: 'digital marketing miami, miami digital marketing, digital marketing agency miami, online marketing miami, internet marketing miami',
};

export default function DigitalMarketingMiamiPage() {
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
            <a href="#results" className="text-gray-800 hover:text-gray-900 font-medium transition">Results</a>
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
            🚀 Miami Digital Marketing Agency
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-black">{service.h1}</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              That Drives Results
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed">
            {service.heroSubtitle}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
          >
            Get Free Digital Marketing Audit
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-sm text-gray-500 mb-8 tracking-wider">MIAMI DIGITAL LANDSCAPE</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {miamiMarketData.digitalLandscape.internetPenetration}
              </div>
              <div className="text-sm text-gray-700">Internet Penetration</div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {miamiMarketData.digitalLandscape.mobileUsage}
              </div>
              <div className="text-sm text-gray-700">Mobile Usage</div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {miamiMarketData.digitalLandscape.socialMediaUsers}
              </div>
              <div className="text-sm text-gray-700">Social Media Users</div>
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                +{miamiMarketData.digitalLandscape.ecommerceGrowth.replace('+', '').replace(' YoY', '')}
              </div>
              <div className="text-sm text-gray-700">E-commerce Growth YoY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gray-900">Complete Digital</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Marketing Services
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to dominate Miami&apos;s digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
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
      </section>

      {/* Challenges */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gray-900">Miami Digital Marketing</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Challenges
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We understand the unique obstacles of marketing in Miami&apos;s competitive digital space
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {service.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-2xl p-6">
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

      {/* Results */}
      <section id="results" className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Digital Marketing Results
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We focus on metrics that actually grow your Miami business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="text-5xl font-black text-white mb-2">10x</div>
              <div className="text-purple-100">More Online Visibility</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="text-5xl font-black text-white mb-2">24/7</div>
              <div className="text-purple-100">Lead Generation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="text-5xl font-black text-white mb-2">ROI</div>
              <div className="text-purple-100">Focused Campaigns</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 shadow-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Get Your Free Digital Marketing Audit
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            We&apos;ll analyze your current digital presence and show you exactly how to dominate Miami search results
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
          >
            Claim Your Free Audit
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
                Miami digital marketing agency driving measurable results.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/marketing-agency-miami" className="hover:text-white transition">Marketing Agency</Link></li>
                <li><Link href="/digital-marketing-miami" className="hover:text-white transition">Digital Marketing</Link></li>
                <li><Link href="/real-estate-marketing/miami" className="hover:text-white transition">Real Estate Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/best-marketing-agencies-miami" className="hover:text-white transition">Best Agencies</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-800 pt-8">
            <p>© 2025 OwnItSocial.com | Digital Marketing Miami, FL | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
