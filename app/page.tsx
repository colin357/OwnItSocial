import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="font-bold text-xl">
          <div>OWN IT</div>
          <div>SOCIAL</div>
        </div>
        <Link
          href="#contact"
          className="px-6 py-2 bg-[#C5FF00] text-black font-bold text-sm hover:bg-[#B0E600] transition rounded"
        >
          BOOK FREE CALL
        </Link>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              BE THE BUSINESS{' '}
              <span className="bg-[#C5FF00] px-2">AI</span> RECOMMENDS
              <br />
              EVERY TIME
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              We train the AI assistant to search and become the business
              ChatGPT recommends.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-[#C5FF00] text-black font-bold text-sm hover:bg-[#B0E600] transition rounded"
            >
              BOOK FREE CONSULTATION
            </Link>
          </div>
          <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              [Business Team Image]
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center font-bold text-xl mb-8">TRUSTED BY</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="text-lg font-semibold">FAIRWAY</div>
            <div className="text-lg font-semibold">COMPASS</div>
            <div className="text-lg font-semibold">KW</div>
            <div className="text-lg font-semibold">BAIRD & WARNER</div>
            <div className="text-lg font-semibold">THE BROKERAGE</div>
          </div>
        </div>
      </section>

      {/* Lead Gen System Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-400">
              [Image 1]
            </div>
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-400">
              [Image 2]
            </div>
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-400 col-span-2">
              [Image 3]
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              MEET YOUR NEW
              <br />
              <span className="bg-[#C5FF00] px-2">LEAD GEN SYSTEM</span>
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              34% of Americans are turning to ChatGPT for answers. We ensure your business is the one it
              recommends when potential customers start searching.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-[#C5FF00] text-black font-bold text-sm hover:bg-[#B0E600] transition rounded"
            >
              BOOK FREE CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            <span className="bg-[#C5FF00] px-3 py-1">HOW IT WORKS</span>
          </h2>
          <div className="text-left space-y-4 mb-8">
            <p className="text-lg">
              <span className="font-bold">1. Audit</span> - We analyze how to train your business.
            </p>
            <p className="text-lg">
              <span className="font-bold">2. Optimize</span> - We identify, rebuild, and future-proof your online presence.
            </p>
            <p className="text-lg">
              <span className="font-bold">3. Build</span> - You&#39;re appearing in AI recommendations across platforms.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-[#C5FF00] text-black font-bold text-sm hover:bg-[#B0E600] transition rounded"
          >
            I&apos;M INTERESTED
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">WHAT WE DO</h2>

        <div className="space-y-12">
          {/* AI Optimization */}
          <div className="border-2 border-gray-200 p-8 md:p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-400">
                [AI Optimization Image]
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4">AI OPTIMIZATION</h3>
                <p className="text-gray-700 mb-4">
                  Your customers are already asking ChatGPT, Gemini, and Grok for
                  recommendations — but question is, are you top-of-mind?
                </p>
                <p className="text-gray-700 mb-4">
                  We help you become the business that AI assistants recommend. By optimizing
                  the world&#39;s most popular AI platforms, we optimize your online presence, so when
                  people ask &#34;Who should I work with?&#34; the answer is always: <strong>You</strong>.
                </p>
                <p className="text-gray-700 italic">
                  Stop guessing what works — let AI work for you.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Management */}
          <div className="border-2 border-gray-200 p-8 md:p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-400">
                [Social Media Image]
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4">SOCIAL MEDIA MANAGEMENT</h3>
                <p className="text-gray-700 mb-4">
                  Building an already to social status presence is one of the best things you
                  can do to grow your business, but here&#39;s the thing: connecting, Let us
                  handling your social media.
                </p>
                <p className="text-gray-700 mb-4">
                  We plan and design your content so your feeds of experts still spend their energy
                  running your business the best way possible, while we do the heavy lifting
                  to make sure the accounts look amazing.
                </p>
                <p className="text-gray-700">
                  Too many businesses have a lackluster presence on social media, losing out
                  on building a specific audience. We&#39;re here to make sure that doesn&#39;t
                  happen.
                </p>
              </div>
            </div>
          </div>

          {/* Database Management */}
          <div className="border-2 border-gray-200 p-8 md:p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-400">
                [Database Image]
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4">DATABASE MANAGEMENT</h3>
                <p className="text-gray-700 mb-4">
                  Your database is your most valuable asset — or it&#39;s organized, active, and
                  nurtured correctly.
                </p>
                <p className="text-gray-700 mb-4">
                  We help you turn into little into real relationships by cleaning your data,
                  segmenting your audience, and building email sequences that follow
                  up automatically. Think of it as nurturing on autopilot, so your database
                  doesn&#39;t just sit there doing nothing—it&#39;s working for you.
                </p>
                <p className="text-gray-700">
                  We track the leads. No more missed opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-[#C5FF00] text-black font-bold text-sm hover:bg-[#B0E600] transition rounded"
          >
            BOOK FREE DISCOVERY CALL
          </Link>
        </div>
      </section>

      {/* About Colin Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">I&#39;M COLIN HICKMON</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center text-gray-400">
              [Colin&#39;s Photo]
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Most business owners do everything light — they build a website, post content, and collect
                contact names leads—but these often lack direction without a plan.
              </p>
              <p>
                I started Own It Social because I saw how frustrating it was for business owners to
                waste time and money on marketing that wasn&#39;t working. Too many entrepreneurs are
                hustling like crazy only to be left confused because what used to work on
                marketing, has stopped. ChatGPT, Gemini and AI have changed the game where AI started
                recommending businesses; suddenly, half my clients lost their streams.
              </p>
              <p>
                At Own It Social, we hand business get discovered inside AI platforms — because that&#39;s
                where customers are searching. We partner with a share actionable where owners don&#39;t
                only &#34;do the best leads in Miami&#34; or &#34;a top realtor in Houston.&#34;
              </p>
              <p>
                I&#39;ve built this entire company around one thing: businesses and did not
                <strong> using experience with a new type of </strong>AIO + AI Optimization. It&#39;s
                where visibility meets innovation, that way too entrepreneurs.
              </p>
              <p className="italic">
                Because in today&#39;s world, if AI doesn&#39;t know your name, your
                audience never will.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-[#C5FF00] text-black font-bold text-sm hover:bg-[#B0E600] transition rounded"
            >
              BOOK FREE DISCOVERY CALL
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>© ownitsocial.com | Terms. Privacy. Accessibility.</p>
        </div>
      </footer>
    </div>
  );
}
