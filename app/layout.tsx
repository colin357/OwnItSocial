import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

// One family for the whole site. The variable is set on <html> and globals.css
// points `body` at it, so every page picks it up — `font-montserrat` in
// Tailwind is there for elements that need it explicitly (e.g. the booking
// modal, which renders outside the page wrapper).
// 700 is here for the older landing pages, which lean on font-bold and
// font-black — without it the browser fakes them by smearing 600. The homepage
// tops out at 600 by design.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFFFFF',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ownitsocial.com'),
  title: {
    default: "Own It Social — Human Made Marketing | Social Media, Email & Paid Ads",
    template: "%s | Own It Social",
  },
  description: "A full-service marketing agency where real people write, film, and edit the work. Social media, email marketing, paid ads, and AI optimization — made by humans, built to drive real results.",
  keywords: [
    'marketing agency',
    'social media management',
    'email marketing',
    'paid advertising',
    'digital marketing',
    'AI optimization',
    'full-service marketing',
    'human made marketing',
  ],
  authors: [{ name: 'Colin Hickmon' }, { name: 'Own It Social' }],
  creator: 'Own It Social',
  publisher: 'Own It Social',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ownitsocial.com',
    siteName: 'Own It Social',
    title: 'Own It Social — Human Made Marketing',
    description: 'A full-service marketing agency where real people write, film, and edit the work. Social media, email marketing, paid ads, and AI optimization — made by humans.',
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
    title: 'Own It Social — Human Made Marketing',
    description: 'A full-service marketing agency where real people write, film, and edit the work. Social media, email marketing, paid ads, and AI optimization.',
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
    <html lang="en" className={montserrat.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11353830288"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11353830288');
          `}
        </Script>
        <Script id="facebook-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '5180983065461089');
          fbq('track', 'PageView');`}
        </Script>
        <Script id="openai-pixel" strategy="afterInteractive">
          {`!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"Q3EEHmNNmitscStzPbzSGs",debug:true});`}
        </Script>
      </head>
      <body>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=5180983065461089&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
