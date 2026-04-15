import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About QuickFinance Tools – Free Personal Finance Calculators",
  description:
    "QuickFinance Tools provides free, accurate personal finance calculators for freelancers, gig workers, and independent earners in the US, UK, Canada, and Australia. No sign-up. No data collection.",
  keywords: [
    "about quickfinance tools",
    "free finance calculators",
    "personal finance tools for freelancers",
    "self employed finance calculators",
    "finance calculator privacy",
    "free online financial tools US UK Canada",
  ],
  alternates: {
    canonical: "https://quickfinance.tools/about",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://quickfinance.tools" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://quickfinance.tools/about" },
  ],
};

const tools = [
  { href: "/calculators/freelancer-tax", emoji: "🧾", name: "Freelancer Tax Calculator", note: "US 1099 & self-employment tax" },
  { href: "/calculators/debt-snowball", emoji: "❄️", name: "Debt Snowball Calculator", note: "Works in USD, GBP, CAD, AUD" },
  { href: "/calculators/emergency-fund", emoji: "🛡️", name: "Emergency Fund Calculator", note: "US, UK, Canada guidance" },
  { href: "/calculators/compound-interest", emoji: "📈", name: "Compound Interest Calculator", note: "ISA, TFSA, 401k, IRA compatible" },
  { href: "/calculators/savings-goal", emoji: "🎯", name: "Savings Goal Calculator", note: "Currency-neutral" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">About</span>
        </nav>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">About QuickFinance Tools</h1>
        <p className="text-slate-500 text-lg mb-10">Free, accurate personal finance calculators for independent earners in the US, UK, and Canada.</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">What This Site Is</h2>
            <p className="leading-relaxed">
              QuickFinance Tools is a collection of free personal finance calculators built for people whose financial situations do not fit the standard mold. Every tool was designed to answer a specific, practical question that freelancers, gig workers, and independent contractors actually ask — not the generic questions that have been covered a thousand times by big financial sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Who These Tools Are For</h2>
            <p className="leading-relaxed mb-3">
              Most personal finance tools were designed for salaried employees — W-2 workers in the US, PAYE workers in the UK, T4 employees in Canada — with stable paychecks and employer-managed tax withholding. These tools handle mortgages and 401k contributions well. They handle variable income, self-employment tax, and gig-economy-specific calculations poorly, or not at all.
            </p>
            <p className="leading-relaxed">
              QuickFinance Tools fills that gap. The calculators here were built for:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>US freelancers and 1099 contractors estimating self-employment tax and quarterly payments</li>
              <li>UK self-employed workers and sole traders planning their finances outside PAYE</li>
              <li>Canadian self-employed individuals navigating CPP contributions and T2125 filing</li>
              <li>Gig workers, side hustlers, and anyone with variable or mixed income</li>
              <li>Salaried employees in any country who want clearer answers about debt, savings, and investing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">The Calculators</h2>
            <div className="space-y-3 not-prose">
              {tools.map((t) => (
                <Link key={t.href} href={t.href}
                  className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-emerald-300 transition-colors">
                  <span className="text-2xl">{t.emoji}</span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{t.note}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Methodology and Accuracy</h2>
            <p className="leading-relaxed mb-3">
              All calculations are implemented based on publicly available tax rates, IRS publications, and standard personal finance formulas. US tax figures are based on 2026 federal tax brackets and the 2026 standard deduction. Self-employment tax calculations follow IRS Schedule SE methodology.
            </p>
            <p className="leading-relaxed mb-3">
              For UK and Canadian users, the FAQ sections on each calculator explain the equivalent local rules and confirm which calculations are currency-neutral versus US-specific.
            </p>
            <p className="leading-relaxed">
              Compound interest, debt payoff, emergency fund, and savings goal calculations use standard financial mathematics that applies universally regardless of currency or country.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Privacy: Your Data Never Leaves Your Device</h2>
            <p className="leading-relaxed">
              All calculations run entirely in your browser using JavaScript. No financial data is transmitted to any server. No account is required. No email is collected. There are no cookies beyond what Vercel Analytics uses for anonymous, aggregated page-view counting. Your numbers are yours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Disclaimer</h2>
            <p className="leading-relaxed">
              The tools on this site are for educational and planning purposes only. They provide solid estimates to help you make informed decisions, but they are not a substitute for a qualified tax professional, certified financial planner, or accountant. Tax laws change; for your actual tax return, consult a CPA or tax advisor familiar with the laws in your country.
            </p>
          </section>

        </div>

        <div className="mt-10">
          <Link href="/#calculators" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Browse All Calculators
          </Link>
        </div>
      </div>
    </>
  );
}
