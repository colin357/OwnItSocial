import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="relative h-8 w-48">
            <Image
              src="/OWN IT SOCIAL.png"
              alt="Own It Social"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition">How It Works</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition">About</a>
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              🚀 Full-Service Marketing Agency
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-gray-600">Own Your Market</span>
              <br />
              <span className="relative bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Dominate Online
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C100 2 200 2 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              We handle your social media, email marketing, paid ads, and online visibility—so you can focus on closing deals and growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
              >
                Get Started Free
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

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Marketing Engine</div>
              </div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">10x</div>
                <div className="text-sm text-gray-600 mt-1">More Visibility</div>
              </div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-600 mt-1">Done For You</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-business.png"
                alt="Marketing team collaboration and success"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-sm text-gray-500 mb-8 tracking-wider">TRUSTED BY LEADING BRANDS</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-2xl font-black text-gray-300 hover:text-gray-600 transition">FAIRWAY</div>
            <div className="text-2xl font-black text-gray-300 hover:text-gray-600 transition">COMPASS</div>
            <div className="text-2xl font-black text-gray-300 hover:text-gray-600 transition">KW</div>
            <div className="text-2xl font-black text-gray-300 hover:text-gray-600 transition">BAIRD & WARNER</div>
            <div className="text-2xl font-black text-gray-300 hover:text-gray-600 transition">THE BROKERAGE</div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <Image
                src="/images/video-production.webp"
                alt="Video content creation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <Image
                src="/images/chatgpt-phone.webp"
                alt="AI-powered marketing"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 col-span-2">
              <Image
                src="/images/success-team.webp"
                alt="Marketing success and growth"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Your Complete
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Marketing System
              </span>
            </h2>
            <p className="text-lg mb-6 text-gray-600 leading-relaxed">
              Stop juggling multiple agencies and freelancers. We provide everything you need to grow your business in one place—from content creation to lead generation.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Consistent Content</div>
                  <div className="text-gray-600">Professional social media that positions you as the expert</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Automated Nurture</div>
                  <div className="text-gray-600">Email sequences that turn leads into clients</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Quality Leads</div>
                  <div className="text-gray-600">Targeted ads that drive real business results</div>
                </div>
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
            >
              Start Growing Today
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              How It <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600">Three simple steps to consistent growth</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:scale-110 transition">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Discovery & Strategy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We analyze your business, target audience, and goals to create a custom marketing strategy. We&apos;ll identify exactly what you need to dominate your local market.
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
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Setup & Launch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We build your marketing engine from the ground up—content calendars, email sequences, ad campaigns, and automated systems. Everything is ready to go within 2 weeks.
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
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Optimize & Scale</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We continuously monitor performance, optimize campaigns, and scale what works. You get monthly reports and have full visibility into every aspect of your marketing through our client portal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
            >
              I&apos;m Interested
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to dominate your market—all managed by our expert team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
          {/* Social Media Content & Strategy */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">Social Media Content & Strategy</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We plan, script, edit, and post short and long form content that positions you as the local expert.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Content ideas & filming guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Posting strategy & optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Instagram, Facebook, TikTok, YouTube, LinkedIn</span>
              </li>
            </ul>
          </div>

          {/* CRM & Email Marketing */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">CRM & Email Marketing</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We build and manage automated email and follow up campaigns that turn leads into conversations.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Database segmentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Nurture & post-close campaigns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Referral requests & re-engagement</span>
              </li>
            </ul>
          </div>

          {/* AI Optimization */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">AI Optimization (AIO)</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We help your brand show up in AI driven search results like ChatGPT, Google AI, and voice search.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>AI-optimized content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Authority signals & structured pages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Future-proof visibility strategies</span>
              </li>
            </ul>
          </div>

          {/* Paid Advertising & Lead Generation */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 lg:col-start-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">Paid Advertising & Lead Gen</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We run targeted ad campaigns designed to generate high quality leads, not vanity metrics.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Funnel setup & landing pages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Meta ads management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Offer positioning & optimization</span>
              </li>
            </ul>
          </div>

          {/* Brand Systems & Client Portals */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">Brand Systems & Client Portals</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our revolutionary client portal gives you complete visibility and control over your marketing.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Content approval workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Video uploads & campaign tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Centralized access to all assets</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
          >
            Book Free Discovery Call
          </Link>
        </div>
      </section>

      {/* About Colin Section */}
      <section id="about" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Meet <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Colin Hickmon</span>
            </h2>
            <p className="text-xl text-gray-300">Founder & Marketing Strategist</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-30 blur-2xl"></div>
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/colin-portrait.webp"
                  alt="Colin Hickmon - Founder of Own It Social"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Most business owners do everything right—they build a website, post content, and collect leads—but often lack a strategic direction that delivers real results.
              </p>
              <p>
                I started Own It Social because I saw how frustrating it was for business owners to waste time and money on marketing that wasn&apos;t working. Too many entrepreneurs hustle relentlessly only to feel confused when what used to work suddenly stops delivering.
              </p>
              <p>
                The marketing landscape has changed dramatically. What worked five years ago doesn&apos;t work today. Social media algorithms shift constantly. New platforms emerge. AI is transforming search. Most business owners can&apos;t keep up—and they shouldn&apos;t have to.
              </p>
              <p>
                At Own It Social, we stay ahead of every trend and platform change so you don&apos;t have to. We provide a complete, modern marketing system that actually generates leads and grows your business—not just likes and vanity metrics.
              </p>
              <p className="text-purple-400 font-semibold text-lg">
                I built this company around one mission: helping businesses dominate their local markets with marketing that actually works.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the businesses already dominating their local markets. Book your free consultation today and discover how we can transform your marketing.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
          >
            Book Your Free Call Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Let&apos;s <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ready to dominate your market? Fill out the form below and we&apos;ll be in touch.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <iframe
            src="https://links.ownitsocial.com/widget/form/4yr6BnwxXsUbggVUhexB"
            style={{width: '100%', height: '500px', border: 'none', borderRadius: '12px'}}
            id="inline-4yr6BnwxXsUbggVUhexB"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Form-prebuilt"
            data-height="500"
            data-layout-iframe-id="inline-4yr6BnwxXsUbggVUhexB"
            data-form-id="4yr6BnwxXsUbggVUhexB"
            title="Contact Form"
          />
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
                Full-service marketing agency helping businesses dominate their local markets with social media, email marketing, paid ads, and more.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-800 pt-8">
            <p>© 2025 OwnItSocial.com | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    <Script src="https://links.ownitsocial.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
