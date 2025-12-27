import Link from 'next/link';
import { ContentGenerator } from '@/lib/seo/content-generator';
import { DataSourceManager, seoTemplates } from '@/lib/seo/data-sources';

export default function Dashboard() {
  const allPages: { slug: string; title: string; category?: string }[] = [];

  // Generate all pages for display
  const templateIds = DataSourceManager.getTemplateIds();

  for (const templateId of templateIds) {
    const template = seoTemplates[templateId];
    const data = DataSourceManager.getData(templateId);

    if (template && data) {
      const pages = ContentGenerator.generatePages(template, data);
      allPages.push(
        ...pages.map((p) => ({
          slug: p.slug,
          title: p.title,
          category: p.category,
        }))
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            SEO Bot Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Manage and view your programmatically generated SEO pages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {allPages.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Pages Generated</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              {templateIds.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Active Templates</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400">SEO Optimized</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Generated Pages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allPages.map((page) => (
              <Link
                key={page.slug}
                href={`/seo/${page.slug}`}
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all"
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  {page.title}
                </h3>
                {page.category && (
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                    {page.category}
                  </span>
                )}
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  /seo/{page.slug}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Generate More Pages?</h2>
          <p className="mb-6 text-blue-100">
            Use the API endpoint to programmatically generate new SEO pages with custom templates
            and data.
          </p>
          <div className="bg-black/20 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`POST /api/seo/generate
{
  "templateId": "location",
  "data": {
    "service": "Web Design",
    "city": "Denver",
    "state": "CO"
  }
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
