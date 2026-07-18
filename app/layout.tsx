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
  title: {
    default: "Nassau County Web Design & Website Developer",
    template: "%s | Bellmore Web Design",
  },
  description:
    "Nassau County web designer and website developer creating custom, mobile-friendly websites for local businesses. Based in Bellmore, NY. Free homepage mockup.",
  keywords: [
    "web design Nassau County",
    "website developer Nassau County",
    "web designer Nassau County",
    "small business web design Long Island",
    "website design Bellmore NY",
    "small business websites",
    "social media management Long Island",
    "business photography Bellmore",
    "local web designer New York",
  ],
  authors: [{ name: "Lucas, Bellmore Web Design" }],
  creator: "Bellmore Web Design",
  publisher: "Bellmore Web Design",
  alternates: { canonical: "/" },
  category: "Web Design",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Nassau County Web Design & Website Developer",
    description:
      "Custom, mobile-friendly websites for Nassau County and Long Island small businesses. Based in Bellmore, NY.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bellmore Web Design",
    images: [{ url: "/straight_logo.png", width: 714, height: 290, alt: "Bellmore Web Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nassau County Web Design & Website Developer",
    description:
      "Custom, mobile-friendly websites for Nassau County and Long Island small businesses.",
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
  "@id": `${SITE_URL}/#business`,
  name: "Bellmore Web Design",
  description:
    "Web design, website development, website redesign, social media management, and business photography for small businesses in Nassau County and throughout New York.",
  url: SITE_URL,
  telephone: "+1-516-725-2774",
  email: "bellmorewebdesign@gmail.com",
  image: `${SITE_URL}/straight_logo.png`,
  logo: `${SITE_URL}/straight_logo.png`,
  priceRange: "$250+",
  founder: { "@type": "Person", name: "Lucas" },
  sameAs: ["https://www.instagram.com/bellmorewebdesign/"],
  serviceType: [
    "Website design",
    "Website development",
    "Website redesign",
    "Social media management",
    "Business photography and content",
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Nassau County, New York" },
    { "@type": "State", name: "New York" },
    ...["Bellmore", "Merrick", "Wantagh", "Seaford", "Massapequa", "East Meadow"].map(
      (name) => ({ "@type": "City", name: `${name}, New York` }),
    ),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital services",
    itemListElement: [
      "Custom website design",
      "Small business website development",
      "Website redesign",
      "Website maintenance",
      "Social media management",
      "Business photography and content",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
