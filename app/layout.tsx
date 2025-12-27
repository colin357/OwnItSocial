import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Own It Social - Full-Service Marketing Agency | Social Media, Email & Paid Ads",
  description: "Full-service marketing agency providing social media management, email marketing, paid advertising, and AI optimization. Done-for-you marketing that drives real results.",
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
