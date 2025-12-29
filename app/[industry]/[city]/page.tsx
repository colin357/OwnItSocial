import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getCityBySlug, getAllCitySlugs } from '@/app/data/cities';
import { getIndustryBySlug, getAllIndustrySlugs } from '@/app/data/industries';
import { notFound } from 'next/navigation';
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  getStructuredDataScript
} from '@/lib/seo/structured-data';

interface PageProps {
  params: Promise<{
    industry: string;
    city: string;
  }>;
}

// Generate all possible paths at build time
export async function generateStaticParams() {
  const cities = getAllCitySlugs();
  const industries = getAllIndustrySlugs();

  const params = [];
  for (const industry of industries) {
    for (const city of cities) {
      params.push({
        industry,
        city,
      });
    }
  }

  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: industrySlug, city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  const industry = getIndustryBySlug(industrySlug);

  if (!city || !industry) {
    return {
      title: 'Page Not Found',
    };
  }

  const title = `${industry.title} ${city.name} FL | Own It Social`;
  const description = `${industry.metaDescription} Serving ${city.name}, ${city.state}. ${city.description}`;

  return {
    title,
    description,
    keywords: [
      `${industry.title} ${city.name}`,
      `${industry.name} marketing ${city.name}`,
      `marketing for ${industry.name}s in ${city.name}`,
      ...city.keywords,
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function IndustryCityPage({ params }: PageProps) {
  const { industry: industrySlug, city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  const industry = getIndustryBySlug(industrySlug);

  if (!city || !industry) {
    notFound();
  }

  const localBusinessSchema = generateLocalBusinessSchema({
    name: `Own It Social - ${industry.title} in ${city.name}`,
    address: {
      street: '',
      city: city.name,
      state: city.state,
      postalCode: '',
      country: 'US',
    },
    priceRange: '$$',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: industry.title, url: `/${industrySlug}` },
    { name: `${city.name}, ${city.state}`, url: `/${industrySlug}/${citySlug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(breadcrumbSchema) }}
      />
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
            <a href="#how-it-works" className="text-gray-800 hover:text-gray-900 font-medium transition">How It Works</a>
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
            🎯 {industry.name} Marketing in {city.name}, FL
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-black">{industry.heroTitle}</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              in {city.name}
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {industry.heroSubtitle} Dominate the {city.name} market with marketing designed specifically for {industry.name}s.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
            >
              {industry.cta}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-sm hover:border-purple-600 hover:text-purple-600 transition-all duration-200 rounded-full"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* City Context Section */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            <span className="text-gray-900">Why {city.name}?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {city.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {city.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gray-900">Sound Familiar?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Most {industry.name}s in {city.name} face these same marketing challenges:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industry.challenges.map((challenge, index) => (
            <div key={index} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">{challenge}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gray-900">Our</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Done-for-you marketing designed specifically for {industry.name}s in {city.name}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industry.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-black">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gray-900">How It</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-700">Three simple steps to dominate {city.name}</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:scale-110 transition">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-3 text-gray-900">Strategy Session</h3>
                <p className="text-gray-700 leading-relaxed">
                  We analyze your {city.name} market, identify your ideal clients, and create a custom marketing strategy designed specifically for your business goals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:scale-110 transition">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-3 text-gray-900">Launch & Execute</h3>
                <p className="text-gray-700 leading-relaxed">
                  We build your complete marketing system—content calendars, ad campaigns, email sequences, and automation. Everything is done for you and ready to go within 2 weeks.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:scale-110 transition">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black mb-3 text-gray-900">Optimize & Dominate</h3>
                <p className="text-gray-700 leading-relaxed">
                  We continuously monitor performance, optimize campaigns, and scale what works. You get monthly reports showing exactly how we&apos;re helping you dominate {city.name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Real Results for {industry.name}s
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Our proven system helps {industry.name}s across Florida dominate their local markets
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
            Ready to Dominate {city.name}?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the top {industry.name}s in {city.name} who are already working with us. Book your free strategy session today.
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
                Marketing agency specializing in {industry.title.toLowerCase()} in {city.name} and across Florida.
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
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-800 pt-8">
            <p>© 2025 OwnItSocial.com | Serving {city.name}, {city.state} | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
