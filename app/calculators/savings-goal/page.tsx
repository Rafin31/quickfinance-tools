import type { Metadata } from "next";
import SavingsGoalCalc from "@/components/calculators/SavingsGoalCalc";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Savings Goal Calculator – Monthly Amount & Timeline Planner (Free)",
  description:
    "Free savings goal calculator. Find how much to save per month to hit any goal by a deadline, or see when you'll reach your target with a set monthly amount.",
  keywords: [
    "savings goal calculator",
    "how much to save per month calculator",
    "savings calculator",
    "monthly savings calculator",
    "savings target calculator",
    "how long to save money calculator",
    "savings plan calculator",
    "goal savings calculator with interest",
  ],
  openGraph: {
    title: "Savings Goal Calculator – Monthly Amount & Timeline Planner (Free)",
    description: "Enter your goal and deadline, get your exact monthly savings number. Or enter your monthly amount and see when you will hit your goal.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Savings Goal Calculator",
  url: "https://quickfinance.tools/calculators/savings-goal",
  description: "Calculate monthly savings needed to reach a goal, or find out when you will reach a savings target.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  { q: "Should I include interest in my savings goal calculation?", a: "Yes, especially for goals longer than 6 months. A high-yield savings account currently pays 4-5% APY, which meaningfully reduces how much you need to contribute monthly. A $10,000 goal in 2 years requires less monthly saving at 4.5% than at 0%." },
  { q: "What counts as a savings goal?", a: "Common savings goals include: emergency fund, vacation, car down payment, home down payment, wedding, new device or equipment, tax payments (for freelancers), or a business investment. Use this calculator for any fixed-amount target with a timeline." },
  { q: "What if I miss a month of contributions?", a: "Missing one month pushes your target date back slightly or means you need to increase contributions later. The calculator assumes consistent monthly contributions. In practice, build in a small buffer and consider automating transfers so you do not have to remember." },
  { q: "How is this different from the compound interest calculator?", a: "The savings goal calculator is for short-to-medium-term goals with a fixed target amount. The compound interest calculator is better for long-term wealth building where you want to see how a sum grows indefinitely. Use savings goal for 'I want $20,000 in 3 years.' Use compound interest for 'What will my investments be worth in 30 years?'" },
  { q: "Where should I keep money I am saving toward a goal?", a: "For goals under 1 year, a high-yield savings account is perfect. For 1-3 year goals, consider a high-yield savings account or short-term CDs. For goals over 3 years where you can tolerate some risk, a brokerage account with conservative allocations might make sense." },
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
    { "@type": "ListItem", position: 3, name: "Savings Goal Calculator", item: "https://quickfinance.tools/calculators/savings-goal" },
  ],
};

export default function SavingsGoalPage() {
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
          <span className="text-slate-600">Savings Goal</span>
        </nav>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🎯</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Savings Goal Calculator</h1>
              <p className="text-slate-500 mt-1">Find your monthly savings number or your target date</p>
            </div>
          </div>
        </div>
        <SavingsGoalCalc />
        <div className="my-10 bg-slate-100 border border-dashed border-slate-300 rounded-xl h-24 flex items-center justify-center text-slate-400 text-sm">Advertisement</div>
        <article className="prose prose-slate max-w-none mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Actually Hit Your Savings Goals</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Most people set savings goals and fail to hit them - not because they lack discipline, but because they lack a specific number. Vague intentions like "save more" do not work. "Save $450 per month for 18 months to hit $8,500 for a car down payment" actually works.</p>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">The Power of Automation</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Once you know your monthly number, automate the transfer. Set it to move the day after your paycheck arrives. What you never see in your checking account, you never spend. This one behavioral trick is responsible for more savings success stories than any other advice.</p>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Use High-Yield Savings Accounts</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Current HYSA rates of 4-5% APY meaningfully reduce how much you need to save each month. On a $10,000 goal over 2 years, earning 4.5% interest saves you roughly $400-500 in required contributions compared to a 0% account. It is free money for doing nothing different.</p>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Separate Accounts for Separate Goals</h3>
          <p className="text-slate-600 leading-relaxed mb-6">Do not mix your emergency fund, vacation fund, and car down payment in one savings account. Open separate accounts for each goal. Seeing dedicated progress in each account is motivating, and it prevents you from accidentally raiding one goal to fund another.</p>
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
              { href: "/calculators/compound-interest", emoji: "📈", title: "Compound Interest Calculator", desc: "See how savings grow over the long term" },
              { href: "/calculators/emergency-fund", emoji: "🛡️", title: "Emergency Fund Calculator", desc: "Calculate your first savings priority" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-emerald-300 transition-colors">
                <span className="text-2xl">{c.emoji}</span>
                <div><p className="font-semibold text-slate-900 text-sm">{c.title}</p><p className="text-xs text-slate-500 mt-0.5">{c.desc}</p></div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
