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
    default: "QuickFinance Tools – Free Personal Finance Calculators for Freelancers",
    template: "%s | QuickFinance Tools",
  },
  description:
    "Free personal finance calculators for freelancers, 1099 contractors, and gig workers. Estimate self-employment tax, debt payoff, emergency fund, compound interest, and savings goals.",
  keywords: [
    "personal finance calculator",
    "freelancer tax calculator",
    "self employment tax calculator",
    "1099 tax calculator",
    "debt snowball calculator",
    "debt payoff calculator",
    "emergency fund calculator",
    "compound interest calculator",
    "savings goal calculator",
    "free finance tools",
    "gig worker finance",
    "quarterly estimated tax calculator",
  ],
  authors: [{ name: "QuickFinance Tools" }],
  creator: "QuickFinance Tools",
  metadataBase: new URL("https://quickfinance.tools"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quickfinance.tools",
    siteName: "QuickFinance Tools",
    title: "QuickFinance Tools - Free Personal Finance Calculators",
    description:
      "Free personal finance calculators built for freelancers, gig workers, and people who want straight answers about their money.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickFinance Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickFinance Tools - Free Personal Finance Calculators",
    description:
      "Free personal finance calculators built for freelancers, gig workers, and people who want straight answers about their money.",
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
  description: "Free personal finance calculators for freelancers, 1099 contractors, and gig workers.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://quickfinance.tools/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
