import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Marketing Agency Resources & City Guides | Own It Social',
  description: 'Comprehensive guides comparing the best marketing agencies across major US cities. Independent reviews, pricing comparisons, and expert insights.',
  keywords: 'marketing agency guides, marketing agency comparisons, best marketing agencies, marketing agency reviews',
};

const articles = [
  {
    title: 'Best Marketing Agencies in Miami, FL',
    description: 'Comprehensive comparison of top marketing agencies in Miami, including pricing, services, and expert reviews.',
    url: '/best-marketing-agencies-miami',
    location: 'Miami, FL',
    category: 'City Guide',
  },
  {
    title: 'Best Marketing Agencies in Chicago, IL',
    description: 'Find the perfect marketing agency in Chicago with our detailed comparison of top agencies.',
    url: '/best-marketing-agencies-chicago',
    location: 'Chicago, IL',
    category: 'City Guide',
  },
  {
    title: 'Best Marketing Agencies in New York, NY',
    description: 'Independent comparison of New York\'s leading marketing agencies with pricing and service details.',
    url: '/best-marketing-agencies-new-york',
    location: 'New York, NY',
    category: 'City Guide',
  },
  {
    title: 'Best Marketing Agencies in Los Angeles, CA',
    description: 'Discover the top marketing agencies in Los Angeles and compare their services and pricing.',
    url: '/best-marketing-agencies-los-angeles',
    location: 'Los Angeles, CA',
    category: 'City Guide',
  },
  {
    title: 'Best Marketing Agencies in Dallas, TX',
    description: 'Expert comparison of Dallas marketing agencies to help you choose the right partner.',
    url: '/best-marketing-agencies-dallas',
    location: 'Dallas, TX',
    category: 'City Guide',
  },
  {
    title: 'Best Marketing Agencies in Naples, FL',
    description: 'Compare top marketing agencies in Naples, Florida with our comprehensive guide.',
    url: '/best-marketing-agencies-naples',
    location: 'Naples, FL',
    category: 'City Guide',
  },
  {
    title: 'Best Marketing Agencies in Sarasota, FL',
    description: 'Find the best marketing agency in Sarasota with detailed comparisons and reviews.',
    url: '/best-marketing-agencies-sarasota',
    location: 'Sarasota, FL',
    category: 'City Guide',
  },
  {
    title: 'Best Marketing Agencies in Tampa, FL',
    description: 'Unbiased comparison of Tampa\'s top marketing agencies with pricing and service information.',
    url: '/best-marketing-agencies-tampa',
    location: 'Tampa, FL',
    category: 'City Guide',
  },
  {
    title: 'Marketing Agency in Miami',
    description: 'Learn about Own It Social\'s marketing services in Miami and how we help businesses grow.',
    url: '/marketing-agency-miami',
    location: 'Miami, FL',
    category: 'Landing Page',
  },
];

export default function ArticlesPage() {
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
            📚 Marketing Resources & Guides
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-black">Marketing Agency</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Resources & Guides
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed">
            Independent comparisons and comprehensive guides to help you find the perfect marketing agency for your business.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.url}
              href={article.url}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-2">
                  {article.category}
                </span>
                {article.location && (
                  <span className="inline-block ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    📍 {article.location}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {article.description}
              </p>

              <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                Read Article
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
                Full-service marketing agency specializing in real estate and finance marketing.
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
                <li><Link href="/locations" className="hover:text-white transition">All Locations</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-800 pt-8">
            <p>© 2025 OwnItSocial.com | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
