import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="min-h-screen flex flex-col items-center justify-center p-8 backdrop-blur-sm bg-white/10">
        <main className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Welcome to OwnItSocial
          </h1>
          <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            A powerful Next.js platform with programmatic SEO bot capabilities. Generate hundreds of SEO-optimized pages automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-xl"
            >
              View Dashboard
            </Link>
            <Link
              href="/seo/web-design-new-york-ny"
              className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition shadow-xl"
            >
              See Example Page
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-8 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition border border-white/30">
              <div className="text-5xl mb-4">🤖</div>
              <h2 className="text-2xl font-semibold mb-3 text-white">SEO Bot</h2>
              <p className="text-white/90">
                Automated SEO page generation with customizable templates and data sources
              </p>
            </div>
            <div className="p-8 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition border border-white/30">
              <div className="text-5xl mb-4">📄</div>
              <h2 className="text-2xl font-semibold mb-3 text-white">Dynamic Pages</h2>
              <p className="text-white/90">
                Programmatically generated content pages with full SEO metadata
              </p>
            </div>
            <div className="p-8 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition border border-white/30">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-2xl font-semibold mb-3 text-white">Vercel Ready</h2>
              <p className="text-white/90">
                Optimized for deployment on Vercel with static generation
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white/20 backdrop-blur-md rounded-xl text-left border border-white/30">
              <h3 className="text-2xl font-bold mb-4 text-white">Features</h3>
              <ul className="space-y-2 text-white/90">
                <li>✓ Multiple SEO templates (Location, Category, Comparison)</li>
                <li>✓ Automatic sitemap generation</li>
                <li>✓ Rich metadata and structured data</li>
                <li>✓ TypeScript for type safety</li>
                <li>✓ Tailwind CSS for styling</li>
                <li>✓ API routes for programmatic generation</li>
              </ul>
            </div>

            <div className="p-8 bg-white/20 backdrop-blur-md rounded-xl text-left border border-white/30">
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Start</h3>
              <div className="space-y-3 text-white/90">
                <p>1. View the <Link href="/dashboard" className="underline font-semibold">Dashboard</Link> to see generated pages</p>
                <p>2. Explore sample SEO pages with optimized content</p>
                <p>3. Use the API to generate custom pages</p>
                <p>4. Deploy to Vercel with one click</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
