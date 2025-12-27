import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OwnItSocial - Programmatic SEO",
  description: "A Next.js website with programmatic SEO capabilities",
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
