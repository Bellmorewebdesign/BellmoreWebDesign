import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bellmore Web Design | Websites for Local Small Businesses",
  description:
    "Bellmore Web Design builds clean, mobile-friendly websites for local businesses in Nassau County that need services, photos, reviews, and contact info in one place.",
  keywords: [
    "web design Nassau County",
    "small business websites",
    "local web design",
    "Long Island web designer",
    "mobile friendly websites",
  ],
  authors: [{ name: "Lucas Capo" }],
  openGraph: {
    title: "Bellmore Web Design | Websites for Local Small Businesses",
    description:
      "Clean, mobile-friendly websites for local businesses in Nassau County that need more than a Facebook page. Free homepage mockups.",
    type: "website",
    locale: "en_US",
    siteName: "Bellmore Web Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bellmore Web Design | Websites for Local Small Businesses",
    description:
      "Clean, mobile-friendly websites for local businesses in Nassau County that need more than a Facebook page.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
