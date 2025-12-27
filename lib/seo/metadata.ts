import { Metadata } from 'next';
import { seoConfig } from './config';

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
}

/**
 * Generates comprehensive SEO metadata for Next.js pages
 */
export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = '/og-image.png',
  url = '',
  type = 'website',
  publishedTime,
  authors,
}: SEOMetadataProps): Metadata {
  const fullTitle = title.includes(seoConfig.siteName)
    ? title
    : `${title} | ${seoConfig.siteName}`;

  const fullUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;
  const fullImage = image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: authors?.map((name) => ({ name })),
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
