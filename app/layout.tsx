import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "QuickFinance Tools – Free Personal Finance Calculators",
    template: "%s | QuickFinance Tools",
  },
  description:
    "Free personal finance calculators for freelancers, gig workers, and independent earners in the US, UK, and Canada. Estimate self-employment tax, debt payoff, emergency fund, compound interest, and savings goals.",
  keywords: [
    // Core US
    "personal finance calculator",
    "freelancer tax calculator",
    "self employment tax calculator",
    "1099 tax calculator",
    "debt snowball calculator",
    "debt payoff calculator",
    "emergency fund calculator",
    "compound interest calculator",
    "savings goal calculator",
    "quarterly estimated tax calculator",
    "free finance tools",
    "gig worker finance",
    // UK
    "compound interest calculator UK",
    "self employed tax calculator UK",
    "debt payoff calculator UK",
    "savings calculator UK",
    "emergency fund calculator UK",
    "sole trader tax calculator UK",
    // Canada
    "compound interest calculator Canada",
    "self employed tax calculator Canada",
    "freelancer tax calculator Canada",
    "savings goal calculator Canada",
    "debt payoff calculator Canada",
    "TFSA calculator",
    // General international
    "financial calculator online free",
    "personal finance tools",
    "investment growth calculator",
    "debt free calculator",
  ],
  authors: [{ name: "QuickFinance Tools" }],
  creator: "QuickFinance Tools",
  metadataBase: new URL("https://quickfinance.tools"),
  alternates: {
    canonical: "https://quickfinance.tools",
    languages: {
      "en-US": "https://quickfinance.tools",
      "en-GB": "https://quickfinance.tools",
      "en-CA": "https://quickfinance.tools",
      "x-default": "https://quickfinance.tools",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_CA"],
    url: "https://quickfinance.tools",
    siteName: "QuickFinance Tools",
    title: "QuickFinance Tools – Free Personal Finance Calculators",
    description:
      "Free personal finance calculators for freelancers and independent earners in the US, UK, and Canada. No sign-up. Instant results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickFinance Tools – Free Personal Finance Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickFinance Tools – Free Personal Finance Calculators",
    description:
      "Free personal finance calculators for freelancers and independent earners in the US, UK, and Canada. No sign-up. Instant results.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "QuickFinance Tools",
  url: "https://quickfinance.tools",
  description: "Free personal finance calculators for freelancers, 1099 contractors, and independent earners in the US, UK, and Canada.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://quickfinance.tools/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QuickFinance Tools",
  url: "https://quickfinance.tools",
  description: "Free personal finance calculators for freelancers and independent earners in the US, UK, and Canada.",
  areaServed: [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "Ireland" },
  ],
  knowsAbout: [
    "Personal Finance",
    "Self-Employment Tax",
    "Freelancer Tax",
    "Debt Payoff Strategies",
    "Compound Interest",
    "Emergency Fund Planning",
    "Savings Goal Planning",
    "1099 Contractor Taxes",
    "TFSA Planning",
    "ISA Planning",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
