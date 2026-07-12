import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/components/site/siteData";

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
  metadataBase: new URL(SITE_URL),
  title: "Bellmore Web Design | Websites, Social Media & Photography",
  description:
    "Bellmore Web Design builds custom websites and manages social media and on-site photography for local small businesses. Free homepage mockup, no commitment.",
  keywords: [
    "web design Nassau County",
    "small business websites",
    "social media management Long Island",
    "business photography Bellmore",
    "local web designer New York",
  ],
  authors: [{ name: "Lucas — Bellmore Web Design" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bellmore Web Design | Websites, Social Media & Photography",
    description:
      "Custom websites, social media management, and on-site photography for local small businesses. Free homepage mockup, no commitment.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bellmore Web Design",
    images: [{ url: "/straight_logo.png", width: 714, height: 290, alt: "Bellmore Web Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bellmore Web Design | Websites, Social Media & Photography",
    description:
      "Custom websites, social media management, and on-site photography for local small businesses.",
    images: ["/straight_logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF7",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bellmore Web Design",
  description:
    "Websites, social media management, and on-site photography for local small businesses.",
  url: SITE_URL,
  telephone: "+1-516-725-2774",
  email: "bellmorewebdesign@gmail.com",
  image: `${SITE_URL}/straight_logo.png`,
  founder: { "@type": "Person", name: "Lucas" },
  sameAs: ["https://www.instagram.com/bellmorewebdesign/"],
  serviceType: [
    "Website design",
    "Website redesign",
    "Social media management",
    "Business photography and content",
  ],
  areaServed: [
    { "@type": "State", name: "New York" },
    "Bellmore, NY",
    "Merrick, NY",
    "Wantagh, NY",
    "Seaford, NY",
    "Massapequa, NY",
    "East Meadow, NY",
    "Nassau County, NY",
  ],
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
        <script
          type="application/ld+json"
          // Structured data uses only real business information.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
