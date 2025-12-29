import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { cities } from '@/app/data/cities';
import { industries } from '@/app/data/industries';

export const metadata: Metadata = {
  title: 'Service Areas - Florida Marketing Agency | Own It Social',
  description: 'We provide real estate and loan officer marketing services across Florida. Find your city and learn how we can help you dominate your local market.',
  keywords: 'marketing services Florida, real estate marketing, loan officer marketing, service areas',
};

export default function LocationsPage() {
  const industryList = Object.values(industries);

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
            <Link href="/#services" className="text-gray-800 hover:text-gray-900 font-medium transition">Services</Link>
            <Link href="/#how-it-works" className="text-gray-800 hover:text-gray-900 font-medium transition">How It Works</Link>
            <Link href="/#about" className="text-gray-800 hover:text-gray-900 font-medium transition">About</Link>
          </nav>
          <Link
            href="/#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full"
          >
            Book Free Call
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            <span className="text-black">Serving Florida&apos;s Top</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Real Estate Markets
            </span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We specialize in marketing for real estate agents and loan officers across Florida&apos;s most competitive markets.
          </p>
        </div>

        {/* Industries */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            <span className="text-gray-900">Our</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Specializations
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industryList.map((industry) => (
              <div
                key={industry.slug}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-black mb-4 text-gray-900">{industry.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {industry.metaDescription}
                </p>
                <div className="font-semibold text-purple-600 mb-2">Available in all {cities.length} Florida markets:</div>
                <div className="flex flex-wrap gap-2">
                  {cities.slice(0, 5).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${industry.slug}/${city.slug}`}
                      className="text-sm px-3 py-1 bg-purple-50 text-purple-700 rounded-full hover:bg-purple-100 transition"
                    >
                      {city.name}
                    </Link>
                  ))}
                  <span className="text-sm px-3 py-1 text-gray-500">
                    +{cities.length - 5} more
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            <span className="text-gray-900">Service</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Areas
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div
                key={city.slug}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-black text-gray-900">{city.name}</h3>
                    <p className="text-sm text-gray-500">{city.state}</p>
                  </div>
                  {city.population && (
                    <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full">
                      {city.population}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3">
                  {city.description}
                </p>
                <div className="space-y-2">
                  {industryList.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/${industry.slug}/${city.slug}`}
                      className="block text-sm px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 rounded-lg hover:from-purple-100 hover:to-blue-100 transition font-medium"
                    >
                      {industry.title} in {city.name} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Don&apos;t See Your City?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            We work with real estate professionals across Florida. Contact us to discuss your specific market.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
          >
            Contact Us
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
                Full-service marketing agency helping real estate professionals dominate their local markets across Florida.
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
              <h4 className="font-bold text-white mb-4">Service Areas</h4>
              <ul className="space-y-2">
                {cities.slice(0, 4).map((city) => (
                  <li key={city.slug}>
                    <Link href={`/real-estate-marketing/${city.slug}`} className="hover:text-white transition">
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-800 pt-8">
            <p>© 2025 OwnItSocial.com | Serving All of Florida | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
