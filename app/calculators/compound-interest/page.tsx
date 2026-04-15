import type { Metadata } from "next";
import CompoundInterestCalc from "@/components/calculators/CompoundInterestCalc";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compound Interest Calculator – Monthly Contributions & Year-by-Year Growth",
  description:
    "Free compound interest calculator with monthly contributions. See year-by-year investment growth with a visual chart. Works for ISA (UK), TFSA (Canada), and US retirement accounts.",
  keywords: [
    // US core
    "compound interest calculator",
    "compound interest calculator with monthly contributions",
    "investment growth calculator",
    "compound interest monthly deposits",
    "compound interest calculator with monthly deposits",
    "investment calculator",
    "how much will my investment grow",
    "compound interest over 30 years",
    "savings compound interest calculator",
    // UK
    "compound interest calculator UK",
    "ISA compound interest calculator",
    "stocks and shares ISA calculator",
    "cash ISA interest calculator",
    "investment growth calculator UK",
    "savings calculator UK",
    // Canada
    "compound interest calculator Canada",
    "TFSA compound interest calculator",
    "RRSP compound interest calculator",
    "investment calculator Canada",
    "TFSA growth calculator",
    // Long-tail
    "compound interest daily calculator",
    "how long to double money calculator",
    "rule of 72 calculator",
    "monthly investment calculator",
  ],
  openGraph: {
    title: "Compound Interest Calculator – Monthly Contributions & Year-by-Year Growth",
    description: "See exactly how compound interest grows your money over time with monthly contributions. Visual growth chart included.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Compound Interest Calculator",
  url: "https://quickfinance.tools/calculators/compound-interest",
  description: "Calculate compound interest growth with regular monthly contributions. Visual year-by-year breakdown.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  { q: "What is compound interest?", a: "Compound interest means you earn interest on your interest. Unlike simple interest (which only applies to your principal), compound interest builds on itself. A $10,000 investment at 7% earns $700 in year one, then 7% of $10,700 in year two, and so on. The longer the time period, the more dramatic the effect." },
  { q: "How often does compound interest compound?", a: "It depends on the account or investment. Most savings accounts compound daily or monthly. Index funds and ETFs effectively compound continuously as dividends are reinvested. For practical planning purposes, monthly compounding is a reasonable assumption for most savings vehicles." },
  { q: "What interest rate should I use?", a: "For the S&P 500, the historical average is around 10% nominal or 7% inflation-adjusted. For a high-yield savings account, use current rates (4-5% as of 2026). For bonds, 3-4% is reasonable. Be conservative in your projections - it is better to be pleasantly surprised than to count on aggressive returns." },
  { q: "Why does monthly contribution matter so much?", a: "Monthly contributions dramatically accelerate growth, especially over long time periods. This is because you are not just adding money - you are adding money that then also compounds. Try doubling the monthly contribution in the calculator and watch the final balance change. The impact is non-linear." },
  { q: "Does this account for inflation?", a: "No. Use an inflation-adjusted rate (typically 2-3% below the nominal rate) if you want to see your results in today's purchasing power. For a historically average S&P 500 return of 10%, use 7% to account for ~3% inflation." },
  { q: "Can UK users model their ISA with this calculator?", a: "Yes. The compound interest math is identical regardless of account type or currency. For a Stocks and Shares ISA, a reasonable long-term rate is 6–8% annually (after platform fees). For a Cash ISA, use current market rates (around 4–5% as of 2026). Since ISA returns are completely tax-free, no rate adjustment is needed — what you see is what you keep. Enter your monthly contribution in GBP and the results will be in the same currency." },
  { q: "Can Canadian users model their TFSA with this calculator?", a: "Yes. The TFSA (Tax-Free Savings Account) is Canada's equivalent of the UK ISA — returns grow completely tax-free. The 2026 TFSA annual contribution limit is $7,000 CAD (roughly $583/month). Enter your expected monthly TFSA contribution and your investment's expected rate of return. For equity-heavy TFSA portfolios, 6–8% is a reasonable long-term estimate; for GIC or HISA-style TFSAs, use current rates of 3–5%. Enter amounts in CAD for CAD results." },
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
    { "@type": "ListItem", position: 3, name: "Compound Interest Calculator", item: "https://quickfinance.tools/calculators/compound-interest" },
  ],
};

export default function CompoundInterestPage() {
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
          <span className="text-slate-600">Compound Interest</span>
        </nav>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">📈</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Compound Interest Calculator</h1>
              <p className="text-slate-500 mt-1">With monthly contributions and year-by-year growth chart</p>
            </div>
          </div>
        </div>
        <CompoundInterestCalc />
        <div className="my-10 bg-slate-100 border border-dashed border-slate-300 rounded-xl h-24 flex items-center justify-center text-slate-400 text-sm">Advertisement</div>
        <article className="prose prose-slate max-w-none mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Mechanics of Compound Interest</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Albert Einstein reportedly called compound interest the eighth wonder of the world. Whether or not he said it, the math is genuinely remarkable. What makes compound interest so powerful is not the rate - it is time.</p>
          <p className="text-slate-600 leading-relaxed mb-4">Consider two people. Person A starts investing $300/month at age 22 and stops at 32 - just 10 years of contributions. Person B starts at 32 and contributes $300/month until 62 - 30 years of contributions. At 7% growth, Person A ends up with more money at 62. Starting early beats contributing more.</p>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">The Rule of 72</h3>
          <p className="text-slate-600 leading-relaxed mb-4">A quick mental math trick: divide 72 by your interest rate to find roughly how many years it takes to double your money. At 7%, money doubles every 10.3 years. At 10%, every 7.2 years. At 4% (HYSA), every 18 years.</p>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Monthly Contributions Are the Real Accelerator</h3>
          <p className="text-slate-600 leading-relaxed mb-6">Lump-sum investing is great, but most people build wealth by contributing regularly over time. This calculator models exactly that. When you add $200/month consistently, you are essentially buying in at many different market prices, and each new contribution starts compounding immediately. Over 20-30 years, the monthly contributions often exceed the starting principal in total value.</p>
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
              { href: "/calculators/savings-goal", emoji: "🎯", title: "Savings Goal Calculator", desc: "Plan a specific savings target with a deadline" },
              { href: "/calculators/freelancer-tax", emoji: "🧾", title: "Freelancer Tax Calculator", desc: "Know what you owe so you can invest the rest" },
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
