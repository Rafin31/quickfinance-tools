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
    default: "QuickFinance Tools - Free Personal Finance Calculators",
    template: "%s | QuickFinance Tools",
  },
  description:
    "Free personal finance calculators for freelancers, gig workers, and everyday people. Debt payoff, emergency fund, compound interest, savings goals, and more.",
  keywords: [
    "personal finance calculator",
    "freelancer tax calculator",
    "debt snowball calculator",
    "emergency fund calculator",
    "compound interest calculator",
    "savings goal calculator",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
