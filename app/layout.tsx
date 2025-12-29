import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#9333ea',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ownitsocial.com'),
  title: {
    default: "Own It Social - Full-Service Marketing Agency | Social Media, Email & Paid Ads",
    template: "%s | Own It Social",
  },
  description: "Full-service marketing agency providing social media management, email marketing, paid advertising, and AI optimization. Done-for-you marketing that drives real results.",
  keywords: [
    'marketing agency',
    'social media management',
    'email marketing',
    'paid advertising',
    'digital marketing',
    'AI optimization',
    'full-service marketing',
  ],
  authors: [{ name: 'Colin Hickmon' }, { name: 'Own It Social' }],
  creator: 'Own It Social',
  publisher: 'Own It Social',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ownitsocial.com',
    siteName: 'Own It Social',
    title: 'Own It Social - Full-Service Marketing Agency',
    description: 'Full-service marketing agency providing social media management, email marketing, paid advertising, and AI optimization. Done-for-you marketing that drives real results.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Own It Social - Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Own It Social - Full-Service Marketing Agency',
    description: 'Full-service marketing agency providing social media management, email marketing, paid advertising, and AI optimization.',
    creator: '@ownitsocial',
    images: ['/og-image.png'],
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
  alternates: {
    canonical: 'https://ownitsocial.com',
  },
  verification: {
    google: '', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
