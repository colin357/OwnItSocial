import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-black text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            OWN IT SOCIAL
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
              🚀 AI-Powered Marketing Agency
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Be The Business{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI
              </span>{' '}
              Recommends
              <br />
              <span className="relative">
                Every Time
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
              We train AI assistants like ChatGPT to recommend your business when potential customers are searching for solutions.
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
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">34%</div>
                <div className="text-sm text-gray-600 mt-1">Use ChatGPT Daily</div>
              </div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">10x</div>
                <div className="text-sm text-gray-600 mt-1">More Visibility</div>
              </div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600 mt-1">AI Recommends You</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 h-[500px] rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-gray-600 text-lg font-medium">AI-Powered Growth</div>
              </div>
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

      {/* Lead Gen System Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-200 to-purple-100 h-48 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-sm font-semibold text-purple-900">Analytics</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-200 to-blue-100 h-48 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-sm font-semibold text-blue-900">Targeting</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-200 to-indigo-100 h-48 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-105 col-span-2">
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-sm font-semibold text-indigo-900">AI-Powered Growth</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Meet Your New
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Lead Gen System
              </span>
            </h2>
            <p className="text-lg mb-6 text-gray-600 leading-relaxed">
              34% of Americans turn to ChatGPT for answers. We ensure your business is the one AI recommends when potential customers start searching.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">AI-First Optimization</div>
                  <div className="text-gray-600">Get recommended by ChatGPT, Gemini, and more</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Automated Lead Flow</div>
                  <div className="text-gray-600">Consistent quality leads while you focus on closing</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Full Transparency</div>
                  <div className="text-gray-600">Track every recommendation and conversion</div>
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
            <p className="text-xl text-gray-600">Three simple steps to AI-powered growth</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:scale-110 transition">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Audit Your Presence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We analyze your current online presence and identify opportunities to optimize how AI assistants discover and recommend your business. We&apos;ll show you exactly where you stand and what&apos;s possible.
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
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Optimize & Build</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We rebuild and future-proof your online presence to ensure AI platforms recognize your expertise. From content optimization to strategic placement, we handle everything to make you the top recommendation.
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
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Watch Leads Flow In</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your business starts appearing in AI recommendations across all major platforms. Watch as ChatGPT, Gemini, and other AI assistants recommend you to thousands of potential customers actively searching for your services.
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

      {/* What We Do Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive marketing solutions designed to make your business the AI&apos;s top recommendation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Optimization */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">AI Optimization</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your customers are already asking ChatGPT, Gemini, and other AI assistants for recommendations. We make sure you&apos;re top-of-mind.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We optimize your presence across the world&apos;s most popular AI platforms, so when people ask &quot;Who should I work with?&quot; the answer is always: <strong>You</strong>.
            </p>
            <div className="text-purple-600 font-semibold group-hover:translate-x-2 transition">
              Learn more →
            </div>
          </div>

          {/* Social Media Management */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">Social Media Management</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Building a strong social presence is one of the best investments for your business. Let us handle your social media while you focus on what you do best.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We plan, design, and post engaging content that positions you as an expert, builds your audience, and drives real business results.
            </p>
            <div className="text-purple-600 font-semibold group-hover:translate-x-2 transition">
              Learn more →
            </div>
          </div>

          {/* Database Management */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">Database Management</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your database is your most valuable asset—when it&apos;s organized, active, and nurtured correctly.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We transform contacts into relationships by cleaning your data, segmenting your audience, and building automated email sequences. Nurturing on autopilot means no more missed opportunities.
            </p>
            <div className="text-purple-600 font-semibold group-hover:translate-x-2 transition">
              Learn more →
            </div>
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
            <p className="text-xl text-gray-300">Founder & AI Marketing Strategist</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-30 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 h-96 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-gray-300">Colin Hickmon</div>
                </div>
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
                When ChatGPT and AI assistants started recommending businesses, the game changed overnight. I watched as half my clients lost their lead flow because they weren&apos;t visible to AI platforms.
              </p>
              <p>
                At Own It Social, we help businesses get discovered inside AI platforms—because that&apos;s where customers are searching now. We partner with business owners who don&apos;t just want to rank for keywords like &quot;best leads in Miami&quot; or &quot;top realtor in Houston&quot;—they want to be <strong className="text-white">the answer</strong> AI gives.
              </p>
              <p className="text-purple-400 font-semibold text-lg">
                I&apos;ve built this entire company around one mission: helping businesses thrive using AIO (AI Optimization). It&apos;s where visibility meets innovation, and it&apos;s transforming how entrepreneurs grow.
              </p>
              <p className="italic text-gray-400 border-l-4 border-purple-600 pl-4">
                &quot;Because in today&apos;s world, if AI doesn&apos;t know your name, your audience never will.&quot;
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
            Join the businesses already dominating AI recommendations. Book your free consultation today and discover how we can transform your lead generation.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
          >
            Book Your Free Call Now
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
                AI-powered marketing agency helping businesses dominate AI recommendations and generate consistent leads.
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
  );
}
