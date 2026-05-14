import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bellmore Web Design | Websites for Local Small Businesses",
  description: "Bellmore Web Design builds clean, mobile-friendly websites for local businesses that need services, photos, reviews, and contact info in one place.",
  openGraph: {
    title: "Bellmore Web Design | Websites for Local Small Businesses",
    description: "Bellmore Web Design builds clean, mobile-friendly websites for local businesses that need services, photos, reviews, and contact info in one place.",
    type: "website",
    locale: "en_US",
    siteName: "Bellmore Web Design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
