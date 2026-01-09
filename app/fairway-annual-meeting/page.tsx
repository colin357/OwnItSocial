import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import ScrollToTop from './ScrollToTop';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  getStructuredDataScript
} from '@/lib/seo/structured-data';

export const metadata: Metadata = {
  title: 'Fairway Annual Meeting Special - Own It Social | $995/mo Marketing for Loan Officers',
  description: 'Exclusive Fairway Annual Meeting offer: Complete done-for-you marketing for loan officers at $995/mo (normally $1,500/mo). Content, CRM follow-ups, and lead generation.',
  keywords: [
    'fairway loan officer marketing',
    'mortgage marketing',
    'loan officer social media',
    'total expert crm',
    'mortgage lead generation',
  ],
  openGraph: {
    title: 'Fairway Annual Meeting Special - Own It Social',
    description: 'Stop posting. Start closing more loans. Complete marketing system for $995/mo.',
    type: 'website',
  },
};

const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/4gM28rdrj6WD12dgJg2Fa00';
const VSL_URL = 'https://vimeo.com/1143153318?fl=tl&fe=ec';

export default function FairwayAnnualMeetingPage() {
  const organizationSchema = generateOrganizationSchema({
    name: 'Own It Social',
    url: 'https://ownitsocial.com',
    logo: 'https://ownitsocial.com/OWN IT SOCIAL.png',
    sameAs: [
      'https://twitter.com/ownitsocial',
    ],
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'Own It Social - Fairway Loan Officer Marketing',
    address: {
      street: '',
      city: 'Miami',
      state: 'FL',
      postalCode: '',
      country: 'US',
    },
    priceRange: '$$',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(localBusinessSchema) }}
      />
      <ScrollToTop />

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
              <a href="#vsl" className="text-gray-800 hover:text-gray-900 font-medium transition">Watch Video</a>
              <a href="#what-you-get" className="text-gray-800 hover:text-gray-900 font-medium transition">What You Get</a>
              <a href="#pricing" className="text-gray-800 hover:text-gray-900 font-medium transition">Pricing</a>
            </nav>
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-full"
            >
              Book a Call
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative mt-10 order-1 md:order-2 md:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
              {/* VSL Video */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1152804772?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Fairway Annual Meeting"
                ></iframe>
              </div>
            </div>

            <div className="order-2 md:order-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                <span className="text-black">Stop Posting.</span>
                <br />
                <span className="relative bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Start Closing More Loans.
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
              <p className="text-xl mb-6 text-gray-700 leading-relaxed">
                Own It Social builds your content plan, CRM follow-ups, and lead flow so you stay top of mind and close more purchase business in 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
                >
                  Book a Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href={STRIPE_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-sm hover:border-purple-600 hover:text-purple-600 transition-all duration-200 rounded-full"
                >
                  Get Started Now
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">30+</div>
                  <div className="text-sm text-gray-700 mt-1">Posts Per Month</div>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-gray-700 mt-1">Done For You</div>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-700 mt-1">CRM Follow-ups</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Trusted By Section */}
        <section className="bg-white border-y border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-bold text-sm text-gray-500 mb-8 tracking-wider">TRUSTED BY TEAMS AT</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition opacity-70 hover:opacity-100">
                <Image
                  src="/images/Fairway.webp"
                  alt="Fairway Independent Mortgage"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition opacity-70 hover:opacity-100">
                <Image
                  src="/images/Compass Logo.png"
                  alt="Compass"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition opacity-70 hover:opacity-100">
                <Image
                  src="/images/Keller Williams.png"
                  alt="Keller Williams"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition opacity-70 hover:opacity-100">
                <Image
                  src="/images/William Raveis.png"
                  alt="William Raveis"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section id="what-you-get" className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="text-gray-900">What You</span>{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Get Each Month
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Everything you need to stay top of mind and generate more purchase business
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">Monthly Customized Content Plan</h3>
                <p className="text-gray-700">
                  Tailored to your niche and referral partners. Scripts, captions, and posting schedule included.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">We Script, Edit & Post For You</h3>
                <p className="text-gray-700">
                  You just film—we handle everything else. Or we can create content entirely for you so you always have something going up. Instagram Reels, TikTok, and LinkedIn ready to convert.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">Total Expert Follow-Ups</h3>
                <p className="text-gray-700">
                  Email + SMS sequences to nurture leads and past clients. Stay top of mind without lifting a finger.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">Optional Ad Support & Landing Pages</h3>
                <p className="text-gray-700">
                  Lead capture pages and ad guidance for those ready to scale with paid traffic.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg md:col-span-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">Simple Approval Workflow & Client Portal</h3>
                <p className="text-gray-700">
                  Review and approve content in minutes. Full access to all your assets and performance metrics in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gray-900">How It</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-700">Five simple steps to consistent growth</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:scale-110 transition">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Pay on Stripe</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Secure your annual meeting pricing ($995/mo) with a quick checkout. Locks in your spot immediately.
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
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Access the Customer Portal</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Get instant access to your personalized client portal where everything lives.
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
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Fill Out Quick Onboarding Questions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tell us about your niche, referral partners, and brand voice. Takes 10 minutes max.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:scale-110 transition">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-3 text-gray-900">Receive Your Customized Plan</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Within 5-7 business days, get your first month&apos;s content plan and follow-up sequences ready to go.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:scale-110 transition">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-3 text-gray-900">We Publish & Optimize Monthly</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We handle posting and optimization, or deliver assets for your team. Either way, you stay consistent without the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Annual Meeting Special Pricing
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Lock in this exclusive rate and start building your marketing machine today
            </p>

            <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="text-6xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  $995
                  <span className="text-3xl">/month</span>
                </div>
                <p className="text-xl text-gray-500 line-through mb-2">Originally $1,500/month</p>
                <p className="text-lg font-semibold text-purple-600">Save $505/month with annual meeting pricing</p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                <p className="text-sm font-bold text-purple-900 mb-3">⏰ Limited Annual Meeting Spots</p>
                <p className="text-sm text-gray-700">
                  This special pricing is only available to Fairway loan officers who attended the annual meeting. Once spots fill, pricing returns to standard rate.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={STRIPE_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
                >
                  Get Started Now
                </a>
                <Link
                  href="#contact"
                  className="block w-full px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-200 rounded-full"
                >
                  Book a Call First
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gray-900">Frequently Asked</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <details className="bg-white rounded-2xl p-6 shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What do I get each month?
                <svg className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Each month you receive: (1) A customized content plan with 30+ posts, scripts, and captions, (2) Total Expert email and SMS follow-up sequences, (3) Posting schedule and approval workflow, (4) Optional ad support and landing pages, and (5) Full access to your client portal with all assets and analytics.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                How fast do we get started after payment?
                <svg className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                After payment, you&apos;ll receive portal access within 24 hours. Complete the onboarding questionnaire (takes ~10 minutes), and we&apos;ll deliver your first customized content plan within 5-7 business days. Most clients are posting within 2 weeks.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Do you post for me or just provide content?
                <svg className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We offer both options! We can handle all posting and optimization for you, or deliver the assets and schedule for your team to post. Most loan officers prefer us to handle it completely so they can focus on closing loans.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Can you match my voice and brand?
                <svg className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Absolutely! During onboarding, we ask detailed questions about your brand voice, target audience, referral partners, and messaging preferences. We&apos;ll review examples of your existing content and match your unique style. You approve everything before it goes live.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                What if I already have a CRM?
                <svg className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Perfect! We specialize in Total Expert but can work with most major CRMs including Surefire, Velocify, and others. We&apos;ll build the sequences and either set them up for you or provide templates you can import into your existing system.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Is the annual meeting price locked in?
                <svg className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes! As long as you maintain an active subscription, your $995/month rate is locked in permanently. This pricing is exclusive to annual meeting attendees and won&apos;t be offered again.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Can I cancel anytime?
                <svg className="w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes, absolutely. There&apos;s no long-term contract. You can cancel anytime through your Stripe portal. We recommend giving it at least 3 months to see the full impact of consistent marketing, but you&apos;re never locked in.
              </p>
            </details>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gray-900">Questions?</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Let&apos;s Talk
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Not ready to commit yet? Book a quick call and we&apos;ll walk you through everything.
            </p>
          </div>
          <ContactForm />
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
                    className="object-cover"
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

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="font-black text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  OWN IT SOCIAL
                </div>
                <p className="text-gray-500 mb-4">
                  Done-for-you marketing for loan officers who want to close more purchase business without the posting grind.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#vsl" className="hover:text-white transition">Watch Video</a></li>
                  <li><a href="#what-you-get" className="hover:text-white transition">What You Get</a></li>
                  <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                  <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-white transition">Main Site</Link></li>
                  <li><Link href="/articles" className="hover:text-white transition">Articles</Link></li>
                  <li><Link href="/locations" className="hover:text-white transition">Service Areas</Link></li>
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
              <p>© 2025 OwnItSocial.com | Fairway Annual Meeting Exclusive | All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
