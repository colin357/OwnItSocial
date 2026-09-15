import { seoConfig } from './config';

interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  description?: string;
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

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceSchema {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  audience?: string;
  offers?: string[];
}

export interface ReviewItem {
  author: string;
  body: string;
  rating?: number;
  datePublished?: string;
}

function absolute(path: string): string {
  return path.startsWith('http') ? path : `${seoConfig.siteUrl}${path}`;
}

/** Strips the HTML entities some page copy carries so JSON-LD text is plain. */
export function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&apos;|&rsquo;|&lsquo;/g, '’')
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&hellip;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ');
}

/**
 * Generates Organization structured data (JSON-LD). Defaults come from
 * seoConfig.organization so every page describes the same entity.
 */
export function generateOrganizationSchema(
  data: Partial<OrganizationSchema> = {}
): object {
  const org = seoConfig.organization;
  const sameAs = data.sameAs ?? org.sameAs;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${seoConfig.siteUrl}/#organization`,
    name: data.name || org.name,
    legalName: org.legalName,
    url: data.url || org.url,
    logo: absolute(data.logo || org.logo),
    description: data.description || org.description,
    email: org.email,
    founder: {
      '@type': 'Person',
      name: org.founder,
    },
    areaServed: {
      '@type': 'Country',
      name: org.areaServed,
    },
    knowsAbout: org.knowsAbout,
    contactPoint: {
      '@type': 'ContactPoint',
      email: org.email,
      contactType: 'sales',
      availableLanguage: 'English',
    },
    ...(sameAs.length > 0 && { sameAs }),
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
    ...(data.image && { image: absolute(data.image) }),
    publisher: {
      '@type': 'Organization',
      '@id': `${seoConfig.siteUrl}/#organization`,
      name: seoConfig.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: absolute(seoConfig.organization.logo),
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
      item: absolute(item.url),
    })),
  };
}

/**
 * Generates FAQ structured data (JSON-LD). Answers are flattened to plain text.
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: plainText(faq.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainText(faq.answer),
      },
    })),
  };
}

/**
 * Generates Service structured data (JSON-LD) for a service page.
 */
export function generateServiceSchema(data: ServiceSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    url: absolute(data.url),
    serviceType: data.serviceType || 'Marketing services',
    provider: {
      '@type': 'Organization',
      '@id': `${seoConfig.siteUrl}/#organization`,
      name: seoConfig.organization.name,
      url: seoConfig.organization.url,
    },
    areaServed: {
      '@type': 'Country',
      name: seoConfig.organization.areaServed,
    },
    ...(data.audience && {
      audience: {
        '@type': 'BusinessAudience',
        name: data.audience,
      },
    }),
    ...(data.offers && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${data.name} — what is included`,
        itemListElement: data.offers.map((offer) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: offer },
        })),
      },
    }),
  };
}

/**
 * Generates Review structured data (JSON-LD) for verbatim client reviews.
 * Only pass real, published reviews.
 */
export function generateReviewSchema(reviews: ReviewItem[]): object[] {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      '@id': `${seoConfig.siteUrl}/#organization`,
      name: seoConfig.organization.name,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewBody: review.body,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating ?? 5,
      bestRating: 5,
      worstRating: 1,
    },
    ...(review.datePublished && { datePublished: review.datePublished }),
  }));
}

/**
 * Generates LocalBusiness structured data (JSON-LD). Empty address parts are
 * left out rather than emitted as blank strings.
 */
export function generateLocalBusinessSchema(data: {
  name: string;
  address: {
    street?: string;
    city: string;
    state: string;
    postalCode?: string;
    country: string;
  };
  telephone?: string;
  priceRange?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    url: seoConfig.organization.url,
    image: absolute(seoConfig.organization.logo),
    email: seoConfig.organization.email,
    parentOrganization: { '@id': `${seoConfig.siteUrl}/#organization` },
    address: {
      '@type': 'PostalAddress',
      ...(data.address.street && { streetAddress: data.address.street }),
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      ...(data.address.postalCode && { postalCode: data.address.postalCode }),
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
