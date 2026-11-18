import type { Metadata } from 'next';
import BestOfPage from '../components/guides/BestOfPage';
import { RE_MARKETING as data } from '../data/comparisons/real-estate';

// Copy and sources live in data/comparisons/real-estate.ts; layout in
// components/guides/BestOfPage.tsx.
export const metadata: Metadata = {
  title: `${data.title} (2026)`,
  description: data.description,
  alternates: { canonical: `https://ownitsocial.com${data.path}` },
  openGraph: {
    title: `${data.title} (2026) | Own It Social`,
    description: data.description,
    url: `https://ownitsocial.com${data.path}`,
    type: 'article',
    publishedTime: data.updated,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Own It Social' }],
  },
};

export default function Page() {
  return <BestOfPage data={data} />;
}
