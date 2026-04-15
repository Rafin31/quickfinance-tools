import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuickFinance Tools – Free Personal Finance Calculators for Freelancers & Gig Workers",
  description:
    "Free personal finance calculators for freelancers, gig workers, and independent earners in the US, UK, and Canada. Freelancer tax, debt payoff, compound interest, emergency fund. No sign-up.",
  keywords: [
    // High-volume US
    "freelancer tax calculator",
    "debt snowball calculator",
    "compound interest calculator",
    "emergency fund calculator",
    "savings goal calculator",
    "1099 tax calculator",
    "self employment tax calculator",
    "debt avalanche calculator",
    "quarterly estimated tax calculator",
    "debt payoff calculator",
    // UK
    "self employed tax calculator UK",
    "compound interest calculator UK",
    "savings calculator UK",
    "debt payoff calculator UK",
    "emergency fund calculator UK",
    // Canada
    "compound interest calculator Canada",
    "self employed tax calculator Canada",
    "savings calculator Canada",
    "TFSA compound interest calculator",
    // Long-tail
    "how much emergency fund should I have",
    "debt snowball vs avalanche calculator",
    "compound interest with monthly contributions",
    "how much to save per month calculator",
    "freelance quarterly tax estimate",
    "free financial calculators online",
  ],
  alternates: {
    canonical: "https://quickfinance.tools",
    languages: {
      "en-US": "https://quickfinance.tools",
      "en-GB": "https://quickfinance.tools",
      "en-CA": "https://quickfinance.tools",
      "x-default": "https://quickfinance.tools",
    },
  },
};

const calculators = [
  {
    href: "/calculators/freelancer-tax",
    emoji: "🧾",
    title: "Freelancer Tax Calculator",
    description:
      "Estimate your quarterly tax payments as a 1099 contractor or self-employed freelancer. Know what to set aside before tax season hits.",
    tags: ["Self-Employed", "1099", "Quarterly Taxes"],
    badge: "Popular",
  },
  {
    href: "/calculators/debt-snowball",
    emoji: "❄️",
    title: "Debt Snowball Calculator",
    description:
      "See exactly when you will be debt-free using the snowball or avalanche method. Compare both strategies side by side.",
    tags: ["Debt Payoff", "Snowball", "Avalanche"],
    badge: null,
  },
  {
    href: "/calculators/emergency-fund",
    emoji: "🛡️",
    title: "Emergency Fund Calculator",
    description:
      "Calculate how much you actually need in your emergency fund based on your real monthly expenses and job stability.",
    tags: ["Emergency Fund", "Safety Net", "Savings"],
    badge: null,
  },
  {
    href: "/calculators/compound-interest",
    emoji: "📈",
    title: "Compound Interest Calculator",
    description:
      "See the long-term impact of regular monthly contributions with compound interest. Great for investment and savings planning.",
    tags: ["Compound Interest", "Investing", "Growth"],
    badge: null,
  },
  {
    href: "/calculators/savings-goal",
    emoji: "🎯",
    title: "Savings Goal Calculator",
    description:
      "Figure out how much to save each month to hit a specific goal by a specific date - with or without interest.",
    tags: ["Savings", "Goal Planning", "Monthly Budget"],
    badge: null,
  },
];

const stats = [
  { value: "5+", label: "Free Calculators" },
  { value: "$0", label: "No sign-up required" },
  { value: "100%", label: "Client-side, private" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Free finance tools, no account needed
          </div>
          <h1 className="animate-fade-up delay-75 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Finance calculators built for{" "}
            <span className="text-emerald-400">real life</span>
          </h1>
          <p className="animate-fade-up delay-150 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you freelance, drive for apps, or just want to know when you can retire — get clear numbers without the jargon. Free for US, UK, and Canadian users.
          </p>
          <div className="animate-fade-up delay-225 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#calculators"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 text-lg"
            >
              Browse Calculators
            </Link>
            <Link
              href="/calculators/freelancer-tax"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 text-lg border border-white/20"
            >
              Freelancer Tax Calculator
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row justify-center gap-8 mt-14 pt-10 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{s.value}</div>
                <div className="text-sm text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section id="calculators" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">All Calculators</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Every calculator runs entirely in your browser. Nothing is sent to a server.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc, i) => (
            <Link
              key={calc.href}
              href={calc.href}
              className={`animate-fade-up group bg-white rounded-2xl border border-slate-200 p-6 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-200 ${
                i === 0 ? "" : i === 1 ? "delay-75" : i === 2 ? "delay-150" : i === 3 ? "delay-225" : i === 4 ? "delay-300" : "delay-375"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl transition-transform duration-200 group-hover:scale-110">{calc.emoji}</span>
                {calc.badge && (
                  <span className="text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-1 rounded-full">
                    {calc.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                {calc.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{calc.description}</p>
              <div className="flex flex-wrap gap-2">
                {calc.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why QuickFinance */}
      <section className="bg-white border-t border-slate-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Why QuickFinance Tools?</h2>
            <p className="text-slate-500">Built for the tens of millions of freelancers and independent earners in the US, UK, and Canada who want clearer answers about their money.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "No fluff",
                desc: "Type your numbers, get your answer. No sign-up, no email capture, no upsell.",
                delay: "",
              },
              {
                icon: "🔒",
                title: "Private by design",
                desc: "All calculations happen in your browser. Your financial data never leaves your device.",
                delay: "delay-150",
              },
              {
                icon: "🌍",
                title: "Built for independent earners",
                desc: "Most calculator sites were built for salaried employees (W-2, PAYE, T4). We cover freelancers, 1099s, sole traders, and contractors in the US, UK, and Canada.",
                delay: "delay-300",
              },
            ].map((f) => (
              <div key={f.title} className={`animate-fade-up ${f.delay} text-center`}>
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense placeholder - top banner */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="bg-slate-100 border border-dashed border-slate-300 rounded-xl h-24 flex items-center justify-center text-slate-400 text-sm">
          Advertisement
        </div>
      </div>

      {/* CTA */}
      <section className="bg-emerald-50 border-t border-emerald-100 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Start with the most popular calculator</h2>
          <p className="text-slate-500 mb-8">
            The freelancer tax calculator is the most-used tool on this site. If you earn income outside a regular paycheck — W-2, PAYE, or T4 — start here.
          </p>
          <Link
            href="/calculators/freelancer-tax"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Calculate My Freelance Taxes
          </Link>
        </div>
      </section>
    </>
  );
}
