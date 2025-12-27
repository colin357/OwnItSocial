import { seoConfig } from './config';

interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

interface ArticleSchema {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generates Organization structured data (JSON-LD)
 */
export function generateOrganizationSchema(
  data: Partial<OrganizationSchema> = {}
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name || seoConfig.organization.name,
    url: data.url || seoConfig.organization.url,
    logo: data.logo || `${seoConfig.siteUrl}${seoConfig.organization.logo}`,
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
}

/**
 * Generates Article structured data (JSON-LD)
 */
export function generateArticleSchema(data: ArticleSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    author: {
      '@type': 'Person',
      name: data.author,
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    ...(data.image && {
      image: data.image.startsWith('http')
        ? data.image
        : `${seoConfig.siteUrl}${data.image}`,
    }),
    publisher: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: `${seoConfig.siteUrl}${seoConfig.organization.logo}`,
      },
    },
  };
}

/**
 * Generates Breadcrumb structured data (JSON-LD)
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${seoConfig.siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generates FAQ structured data (JSON-LD)
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates LocalBusiness structured data (JSON-LD)
 */
export function generateLocalBusinessSchema(data: {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  telephone?: string;
  priceRange?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.street,
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      postalCode: data.address.postalCode,
      addressCountry: data.address.country,
    },
    ...(data.telephone && { telephone: data.telephone }),
    ...(data.priceRange && { priceRange: data.priceRange }),
  };
}

/**
 * Helper function to create structured data script tag
 * Usage in a React component:
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: getStructuredDataScript(data) }}
 * />
 */
export function getStructuredDataScript(data: object): string {
  return JSON.stringify(data);
}
