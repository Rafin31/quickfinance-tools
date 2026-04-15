import type { Metadata } from "next";
import EmergencyFundCalc from "@/components/calculators/EmergencyFundCalc";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Fund Calculator – How Much Do I Need? (Personalized)",
  description:
    "Free emergency fund calculator. Find your exact savings target based on real monthly expenses and income stability. Works for US, UK, and Canadian freelancers, gig workers, and employees.",
  keywords: [
    // US core
    "emergency fund calculator",
    "how much emergency fund should I have",
    "emergency savings calculator",
    "3 months expenses calculator",
    "emergency fund for freelancers",
    "how much to save for emergency fund",
    "emergency fund size calculator",
    "6 months emergency fund calculator",
    "how much should I have in emergency fund",
    "emergency fund calculator by expenses",
    // UK
    "emergency fund calculator UK",
    "emergency savings calculator UK",
    "rainy day fund calculator UK",
    "how much emergency savings UK",
    "emergency fund self employed UK",
    // Canada
    "emergency fund calculator Canada",
    "emergency savings Canada",
    "how much emergency fund Canada",
    "emergency fund freelancer Canada",
    // Long-tail
    "3 6 months expenses calculator",
    "emergency fund variable income calculator",
    "how many months expenses emergency fund",
  ],
  openGraph: {
    title: "Emergency Fund Calculator – How Much Do I Need? (Personalized)",
    description: "Get your personalized emergency fund target based on your actual expenses and job stability.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Emergency Fund Calculator",
  url: "https://quickfinance.tools/calculators/emergency-fund",
  description: "Calculate how much you need in your emergency fund based on monthly expenses and income stability.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  { q: "How many months of expenses should I save?", a: "It depends on your income stability. The standard advice is 3-6 months. Stable government or tenured jobs can get by with 3 months. Variable freelance or gig income warrants 6-9 months. Self-employed business owners should aim for 9-12 months." },
  { q: "Should I count all expenses or just essentials?", a: "Essentials only. Your emergency fund needs to cover housing, food, utilities, transport, insurance, and minimum debt payments - not Netflix or dining out. The goal is to survive a job loss or major unexpected expense, not maintain your full lifestyle." },
  { q: "Where should I keep my emergency fund?", a: "A high-yield savings account (HYSA) is the right call. You want the money accessible immediately but separate from your checking account so you do not accidentally spend it. Current HYSA rates are 4-5% APY, so your money earns something while it waits." },
  { q: "Should I build an emergency fund before paying off debt?", a: "Most financial planners recommend a small starter emergency fund ($1,000-2,000) before aggressively paying debt. Without any buffer, one car repair or medical bill sends you right back into debt. Build a small buffer first, then focus on debt payoff." },
  { q: "Can I invest my emergency fund for better returns?", a: "No. Emergency funds should not be in stocks or anything with market risk. If the market drops 30% right when you get laid off, you are in a very bad position. Keep it in an FDIC-insured savings account (US), FSCS-protected account (UK), or CDIC-insured account (Canada). The peace of mind is worth more than the extra return." },
  { q: "How does emergency fund advice differ for UK residents?", a: "The 3–6 month framework is universal. UK employees on PAYE receive Statutory Sick Pay (£116.75/week as of 2026) for up to 28 weeks during illness, which partially offsets income loss. Self-employed UK residents have no access to SSP, making a larger fund — closer to 6 months — especially important. Universal Credit also provides a safety net, but takes 5 weeks to begin paying. Given this delay, even UK employees benefit from having at least 1–2 months of expenses in liquid savings regardless of any state support they might receive." },
  { q: "Should Canadian freelancers factor Employment Insurance into their emergency fund calculation?", a: "Partially. Self-employed Canadians can voluntarily opt in to EI (Employment Insurance), but this requires at least 12 months of premium contributions before any claim is possible, and benefits cover only 55% of average insurable earnings for up to 45 weeks. EI is a useful supplement but not a substitute for a liquid emergency fund. Standard advice for Canadian freelancers remains 6 months of essential expenses — EI can serve as a secondary buffer but should not replace dedicated savings, especially before your first year of contributions." },
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
    { "@type": "ListItem", position: 3, name: "Emergency Fund Calculator", item: "https://quickfinance.tools/calculators/emergency-fund" },
  ],
};

export default function EmergencyFundPage() {
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
          <span className="text-slate-600">Emergency Fund</span>
        </nav>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🛡️</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Emergency Fund Calculator</h1>
              <p className="text-slate-500 mt-1">Find your exact target based on your real expenses</p>
            </div>
          </div>
        </div>
        <EmergencyFundCalc />
        <div className="my-10 bg-slate-100 border border-dashed border-slate-300 rounded-xl h-24 flex items-center justify-center text-slate-400 text-sm">Advertisement</div>
        <article className="prose prose-slate max-w-none mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Your Emergency Fund Size Depends on Your Income Type</h2>
          <p className="text-slate-600 leading-relaxed mb-4">The standard advice to save 3-6 months of expenses is a starting point, not a one-size-fits-all rule. How much you actually need depends heavily on how predictable your income is.</p>
          <p className="text-slate-600 leading-relaxed mb-4">A tenured teacher with a union contract and defined benefits faces different risks than a freelance web designer whose income fluctuates month to month. Both need emergency funds, but the freelancer needs more runway.</p>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">For Freelancers and Gig Workers</h3>
          <p className="text-slate-600 leading-relaxed mb-4">If you earn variable income, your emergency fund serves two purposes: covering actual emergencies and smoothing out slow months. A client disappearing, a contract not renewing, or a slow Q1 can all hit your income without warning. Six to nine months of expenses gives you real breathing room to find new work without panic.</p>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">What Counts as an Essential Expense?</h3>
          <p className="text-slate-600 leading-relaxed mb-6">Only the expenses you truly cannot cut: housing, food, utilities, transportation to work, insurance, and minimum debt payments. Your emergency fund is not there to maintain your lifestyle - it is there to keep you housed, fed, and functional while you recover from whatever hit you.</p>
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
              { href: "/calculators/savings-goal", emoji: "🎯", title: "Savings Goal Calculator", desc: "Plan how long it takes to build your fund" },
              { href: "/calculators/debt-snowball", emoji: "❄️", title: "Debt Snowball Calculator", desc: "Tackle debt after your fund is in place" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-emerald-300 transition-colors">
                <span className="text-2xl">{c.emoji}</span>
                <div><p className="font-semibold text-slate-900 text-sm">{c.title}</p><p className="text-xs text-slate-500 mt-0.5">{c.desc}</p></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="space-y-3">
            {[
              { href: "/blog/how-much-emergency-fund-freelancer", tag: "Savings", title: "How Much Emergency Fund Does a Freelancer Actually Need?", desc: "Why the 3-6 month rule undershoots for variable income earners — and the right framework." },
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
