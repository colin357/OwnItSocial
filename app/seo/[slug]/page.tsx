import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentGenerator } from '@/lib/seo/content-generator';
import { DataSourceManager, seoTemplates } from '@/lib/seo/data-sources';
import type { SEOPage } from '@/lib/seo/types';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all SEO pages
export async function generateStaticParams() {
  const paths: { slug: string }[] = [];

  // Generate paths for all template types
  const templateIds = DataSourceManager.getTemplateIds();

  for (const templateId of templateIds) {
    const template = seoTemplates[templateId];
    const data = DataSourceManager.getData(templateId);

    if (template && data) {
      const pages = ContentGenerator.generatePages(template, data);
      paths.push(...pages.map((page) => ({ slug: page.slug })));
    }
  }

  return paths;
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageData(slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
  };
}

// Fetch page data
async function getPageData(slug: string): Promise<SEOPage | null> {
  const templateIds = DataSourceManager.getTemplateIds();

  for (const templateId of templateIds) {
    const template = seoTemplates[templateId];
    const data = DataSourceManager.getData(templateId);

    if (template && data) {
      const pages = ContentGenerator.generatePages(template, data);
      const page = pages.find((p) => p.slug === slug);

      if (page) {
        return page;
      }
    }
  }

  return null;
}

export default async function SEOPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageData(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {page.title}
            </h1>
            {page.category && (
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                {page.category}
              </span>
            )}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {page.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              } else if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-4 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-6">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Keywords:</span>
              {page.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
