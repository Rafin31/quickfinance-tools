import type { Metadata } from "next";
import DebtSnowballCalc from "@/components/calculators/DebtSnowballCalc";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Debt Snowball Calculator – Free Debt Payoff Planner (Snowball & Avalanche)",
  description:
    "Free debt snowball calculator. Compare snowball vs avalanche payoff, see your exact debt-free date, and total interest saved. Works with any number of debts.",
  keywords: [
    "debt snowball calculator",
    "debt avalanche calculator",
    "debt payoff calculator",
    "how long to pay off debt calculator",
    "debt free date calculator",
    "debt snowball vs avalanche calculator",
    "debt payoff planner",
    "credit card payoff calculator",
  ],
  openGraph: {
    title: "Debt Snowball Calculator – Free Debt Payoff Planner (Snowball & Avalanche)",
    description: "Compare snowball vs avalanche debt payoff. See your exact debt-free date and total interest paid.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Debt Snowball vs Avalanche Calculator",
  url: "https://quickfinance.tools/calculators/debt-snowball",
  description: "Calculate debt payoff using the snowball or avalanche method. Compare both strategies side by side.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  {
    q: "What is the debt snowball method?",
    a: "The debt snowball method means paying off your smallest balance first while making minimums on everything else. Once the smallest is gone, you roll its payment into the next smallest. The quick wins help maintain motivation.",
  },
  {
    q: "What is the debt avalanche method?",
    a: "The debt avalanche method targets your highest interest rate debt first. This saves the most money mathematically, since high-interest debt costs you the most per dollar owed.",
  },
  {
    q: "Which method is better?",
    a: "It depends on your personality. If you need early wins to stay motivated, snowball is better. If you want to pay the absolute minimum in interest and can stay disciplined, avalanche wins. The best method is whichever one you will actually stick to.",
  },
  {
    q: "How does extra payment help?",
    a: "Extra payment is the most powerful lever in debt payoff. Even an extra $100-200/month can shave years off your timeline and save thousands in interest. Try increasing the extra payment slider to see the impact.",
  },
  {
    q: "Should I pay off debt or invest?",
    a: "If your debt carries an interest rate higher than 7-8%, paying it off typically beats investing. If it is lower (like a mortgage at 3-4%), you may come out ahead investing instead. High-interest credit card debt should almost always be paid first.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://quickfinance.tools" },
    { "@type": "ListItem", position: 2, name: "Calculators", item: "https://quickfinance.tools/#calculators" },
    { "@type": "ListItem", position: 3, name: "Debt Snowball Calculator", item: "https://quickfinance.tools/calculators/debt-snowball" },
  ],
};

export default function DebtSnowballPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-emerald-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#calculators" className="hover:text-emerald-500">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">Debt Snowball</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">❄️</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Debt Snowball Calculator</h1>
              <p className="text-slate-500 mt-1">Compare snowball vs avalanche and find your debt-free date</p>
            </div>
          </div>
        </div>

        <DebtSnowballCalc />

        <div className="my-10 bg-slate-100 border border-dashed border-slate-300 rounded-xl h-24 flex items-center justify-center text-slate-400 text-sm">
          Advertisement
        </div>

        <article className="prose prose-slate max-w-none mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Snowball vs Avalanche: Which Strategy Is Right for You?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The debt snowball and debt avalanche are the two most well-known debt payoff strategies. Both work. The difference is in psychology versus pure math.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">The Debt Snowball</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Popularized by Dave Ramsey, the snowball method has you list your debts from smallest to largest balance. You attack the smallest one with every extra dollar you can find, while paying minimums on everything else. When the smallest is gone, you roll that entire payment into the next one.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The logic is behavioral: paying off a debt completely gives you a psychological win that keeps you motivated. Research backs this up. People who see tangible progress are more likely to continue.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">The Debt Avalanche</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            The avalanche method ignores balance size entirely and targets your highest interest rate first. Mathematically, this is optimal. You are paying down the debt that is costing you the most per dollar, which minimizes total interest paid.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The catch: your highest-interest debt might also have a large balance, meaning it could take a long time before you see a debt fully cleared. That wait can erode motivation.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">The Extra Payment Is Everything</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Regardless of strategy, the variable that matters most is how much extra you can put toward debt each month beyond the minimums. Even $50-100/month extra compounds dramatically over a multi-year payoff period. Cut one subscription, redirect it to debt, and watch the payoff date move forward significantly.
          </p>
        </article>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/calculators/emergency-fund", emoji: "🛡️", title: "Emergency Fund Calculator", desc: "Build a buffer before aggressively paying debt" },
              { href: "/calculators/savings-goal", emoji: "🎯", title: "Savings Goal Calculator", desc: "Plan what to do after you are debt-free" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-emerald-300 transition-colors">
                <span className="text-2xl">{c.emoji}</span>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{c.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="space-y-3">
            {[
              { href: "/blog/debt-snowball-vs-avalanche", tag: "Debt", title: "Debt Snowball vs Avalanche: Which Method Actually Works?", desc: "The math says avalanche. The research says snowball. Here is how to decide." },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-emerald-300 transition-colors group">
                <div>
                  <span className="text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-full">{a.tag}</span>
                  <p className="font-semibold text-slate-900 text-sm mt-1.5 group-hover:text-emerald-600 transition-colors">{a.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
