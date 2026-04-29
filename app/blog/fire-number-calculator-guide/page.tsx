import type { Metadata } from "next";
import Link from "next/link";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "FIRE Number Calculator: How to Find Your Retirement Target",
  description: "Calculate your FIRE number using the 25x rule. Covers lean FIRE, fat FIRE, coast FIRE, and what the 4% withdrawal rate actually means for your retirement.",
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  author: { "@type": "Organization", name: "QuickFinance Tools", url: "https://quickfinance.tools" },
  publisher: { "@type": "Organization", name: "QuickFinance Tools", url: "https://quickfinance.tools" },
  url: "https://quickfinance.tools/blog/fire-number-calculator-guide",
  mainEntityOfPage: "https://quickfinance.tools/blog/fire-number-calculator-guide",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://quickfinance.tools" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://quickfinance.tools/blog" },
    { "@type": "ListItem", position: 3, name: "FIRE Number Guide", item: "https://quickfinance.tools/blog/fire-number-calculator-guide" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a FIRE number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A FIRE number is the total investment portfolio value needed to retire early and sustain your lifestyle indefinitely. It is calculated by multiplying your annual living expenses by 25. At this portfolio size, you can withdraw 4% per year, based on historical market returns studied in the Trinity Study (1998).",
      },
    },
    {
      "@type": "Question",
      name: "What if the 4% rule fails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Historical failure rates are under 5% over 30 years. Mitigations include using a more conservative 3.5% withdrawal rate, maintaining a 1-2 year cash buffer, and keeping flexible income options open. Freelancers can reduce client load during down market years rather than selling investments.",
      },
    },
    {
      "@type": "Question",
      name: "Does the FIRE number include Social Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The FIRE number is designed to be self-sufficient without Social Security. Any Social Security benefits you eventually receive reduce how much you need to withdraw from your portfolio, acting as a safety margin. Self-employed individuals pay into Social Security and are eligible for benefits.",
      },
    },
    {
      "@type": "Question",
      name: "How does inflation affect my FIRE number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 4% rule already accounts for inflation by assuming you increase withdrawals annually to keep pace with rising costs. The 7% real return rate is already inflation-adjusted, so your FIRE number calculation does not need additional inflation adjustment.",
      },
    },
    {
      "@type": "Question",
      name: "What is coast FIRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coast FIRE means you have invested enough that compound growth alone will reach your full FIRE number by traditional retirement age, without any additional contributions. You only need to earn enough to cover current living expenses. For example, $131,000 invested at age 35 at 7% real return grows to approximately $1,000,000 by age 65.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "FIRE Number Calculator: How to Find Your Retirement Target",
  description:
    "Calculate your FIRE number using the 25x rule. Covers lean FIRE, fat FIRE, coast FIRE, and what the 4% withdrawal rate actually means for your retirement.",
  keywords: [
    "FIRE number calculator",
    "how to calculate FIRE number",
    "financial independence retire early calculator",
    "4 percent rule retirement",
    "coast FIRE calculator",
    "lean FIRE vs fat FIRE",
    "FIRE number for freelancers",
    "25x rule retirement",
    "financial independence self employed",
    "coast FIRE number by age",
  ],
  alternates: {
    canonical: "https://quickfinance.tools/blog/fire-number-calculator-guide",
  },
  openGraph: {
    title: "FIRE Number Calculator: How to Find Your Retirement Target",
    description: "The FIRE number is your annual expenses times 25. Here is where the formula comes from, when it breaks down, and how freelancers should approach financial independence.",
  },
};

export default function FireNumberGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-emerald-500">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">FIRE Number Guide</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-1 rounded-full">Investing</span>
            <span className="text-sm text-slate-400">May 13, 2026 · 9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            How to Calculate Your FIRE Number (And What It Actually Means)
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            The FIRE number is your annual expenses times 25. Here is where that formula comes from, when it breaks down, and how freelancers should approach financial independence.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-emerald-800 font-medium">Use our <Link href="/calculators/compound-interest" className="underline">Compound Interest Calculator</Link> to model how long it takes to reach your FIRE number with monthly contributions.</p>
        </div>

        <article className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is a FIRE Number?</h2>
            <p className="leading-relaxed mb-4">
              A FIRE number is the total investment portfolio value needed to retire early and sustain your lifestyle indefinitely — calculated by multiplying your annual living expenses by 25. If you spend $40,000 per year, your FIRE number is $1,000,000. At that portfolio size, you can withdraw 4% per year indefinitely, based on historical market returns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The 4% Rule: Where the 25x Formula Comes From</h2>
            <p className="leading-relaxed mb-4">
              The 4% rule originates from research by financial planner William Bengen, published in the Journal of Financial Planning in 1994, and validated by the Trinity Study in 1998. The research analyzed historical stock and bond returns and found that a retiree withdrawing 4% of their portfolio annually, adjusting for inflation, had a success rate exceeding 95% over 30-year retirement periods.
            </p>
            <p className="leading-relaxed mb-4">
              The 25x rule is simply the inverse: 1 divided by 0.04 = 25.
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Important caveat:</p>
              <p className="text-sm leading-relaxed">
                The original research modeled a 30-year retirement. If you retire at 35, you face a 50+ year horizon. Some researchers recommend a more conservative 3.5% withdrawal rate (28.6x multiplier) for early retirees to account for the extended timeline and sequence-of-returns risk.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Lean FIRE, Fat FIRE, and Barista FIRE</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Annual Spend</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">FIRE Number</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Who It Suits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { type: "Lean FIRE", spend: "Under $40,000", number: "Under $1,000,000", suits: "Frugal minimalists, low cost-of-living areas" },
                    { type: "Regular FIRE", spend: "$50,000-$80,000", number: "$1.25M-$2M", suits: "Median-income lifestyle in retirement" },
                    { type: "Fat FIRE", spend: "$100,000+", number: "$2,500,000+", suits: "Maintaining current lifestyle without compromise" },
                    { type: "Barista FIRE", spend: "$30,000-$50,000", number: "$750K-$1.25M", suits: "Partial retirement + part-time work" },
                  ].map((row) => (
                    <tr key={row.type} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-700">{row.type}</td>
                      <td className="px-4 py-3 text-slate-600">{row.spend}</td>
                      <td className="px-4 py-3 text-slate-600">{row.number}</td>
                      <td className="px-4 py-3 text-slate-600">{row.suits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4">
              Barista FIRE is particularly relevant for freelancers who want to reduce their client load rather than stop working entirely. A smaller FIRE number plus occasional project work is a realistic and lower-stress path.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Coast FIRE: The Alternative for Freelancers</h2>
            <p className="leading-relaxed mb-4">
              Coast FIRE means you have invested enough that compound growth alone will reach your full FIRE number by traditional retirement age — without any further contributions. You only need to earn enough to cover current living expenses, not to invest anything more.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Current Age</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Coast FIRE Amount (for $1M at age 65)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { age: "25", amount: "~$66,000" },
                    { age: "30", amount: "~$93,000" },
                    { age: "35", amount: "~$131,000" },
                    { age: "40", amount: "~$184,000" },
                    { age: "45", amount: "~$258,000" },
                  ].map((row) => (
                    <tr key={row.age} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-700">{row.age}</td>
                      <td className="px-4 py-3 font-medium text-slate-700">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4">
              Use our <Link href="/calculators/savings-goal" className="text-emerald-600 underline">savings goal calculator</Link> to find how long it takes to reach your coast FIRE number at your current monthly contribution rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How Freelancers Should Approach FIRE Differently</h2>
            <p className="leading-relaxed mb-4">
              Freelancers already have a key FIRE advantage: income flexibility. Most FIRE strategies assume a binary choice between full employment and full retirement. Freelancers can reduce client load, raise rates, or shift to lower-effort project types — a natural glide path.
            </p>
            <ul className="list-disc list-inside space-y-3 text-slate-700">
              <li><strong>Sequence of returns risk:</strong> Variable income plus variable portfolio returns is the highest-risk FIRE scenario. Build a 2-year cash buffer before declaring yourself financially independent.</li>
              <li><strong>Healthcare before 65:</strong> Without employer coverage, budget $600-$1,200 per month for US healthcare premiums before Medicare. This can add $150,000-$360,000 to your effective FIRE number.</li>
              <li><strong>Social Security:</strong> Self-employed individuals pay into Social Security and are eligible for benefits. Factor in a conservative estimate (50-70% of your ssa.gov projection) to reduce the portfolio you actually need.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Using the Compound Interest Calculator to Model Your FIRE Journey</h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li>Enter your current investment portfolio balance</li>
              <li>Enter your monthly investment contribution</li>
              <li>Use 7% as your real rate of return (inflation-adjusted historical average)</li>
              <li>Set the time period to your target retirement age minus your current age</li>
              <li>Compare the projected balance to your FIRE number</li>
            </ol>
            <p className="leading-relaxed mt-4">
              If the projected balance falls short, adjust the monthly contribution or the timeline until the numbers work. Our <Link href="/calculators/compound-interest" className="text-emerald-600 underline">compound interest calculator</Link> makes this iteration fast.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common FIRE Calculation Mistakes</h2>
            <ul className="list-disc list-inside space-y-3 text-slate-700">
              <li><strong>Using nominal instead of real returns:</strong> 10% nominal sounds better than 7% real, but inflation erodes 3% annually. Using nominal returns produces an overoptimistic FIRE date.</li>
              <li><strong>Ignoring sequence of returns risk:</strong> Historical averages are averages. You might retire into a decade-long bear market. Consider a 3.5% withdrawal rate if retiring before 45.</li>
              <li><strong>Not budgeting healthcare pre-65:</strong> Missing a $1,000/month healthcare budget adds $300,000 to your effective FIRE number. This is the most common calculation error for US FIRE planners.</li>
              <li><strong>Forgetting lifestyle inflation:</strong> Base your FIRE number on your target retirement spending, not your current income. The two are often very different numbers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: "What if the 4% rule fails?",
                  a: "Historical failure rates are under 5% over 30 years. Mitigations: use a more conservative 3.5% withdrawal rate, maintain a 1-2 year cash buffer so you are not selling investments during down years, and keep flexible income options open. Freelancers can reduce client load in bad market years rather than drawing down the portfolio.",
                },
                {
                  q: "Is FIRE realistic on an average income?",
                  a: "Yes for lean or barista FIRE, especially in lower cost-of-living areas. The math works on any income — the variable is the timeline, not the feasibility. A median-income earner saving aggressively can reach financial independence within 15-20 years.",
                },
                {
                  q: "Does the FIRE number include Social Security?",
                  a: "No. The FIRE number is designed to be self-sufficient without Social Security. Any Social Security benefits you receive reduce portfolio withdrawals and act as a safety margin. Self-employed individuals do pay into and are eligible for Social Security.",
                },
                {
                  q: "How does inflation affect my FIRE number?",
                  a: "The 4% rule already accounts for inflation by assuming you increase withdrawals annually. The 7% real return rate is already inflation-adjusted, so your FIRE number calculation does not need an additional inflation adjustment on top.",
                },
                {
                  q: "What is coast FIRE?",
                  a: "Coast FIRE means you have invested enough that compound growth alone will reach your full FIRE number by traditional retirement age without additional contributions. At 35 with $131,000 invested at 7% real return, your money grows to approximately $1,000,000 by age 65 with no further investment needed.",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-slate-100 pb-5 last:border-0">
                  <p className="font-semibold text-slate-900 mb-2">{item.q}</p>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-2">Model your path to financial independence</h3>
          <p className="text-sm text-slate-600 mb-4">Enter your current portfolio, monthly contribution, and rate to see when you reach your FIRE number.</p>
          <Link href="/calculators/compound-interest" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
            Open Compound Interest Calculator
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: "/calculators/savings-goal", emoji: "🎯", title: "Savings Goal Calculator", desc: "Find how long to reach your coast FIRE number" },
            { href: "/calculators/emergency-fund", emoji: "🛡️", title: "Emergency Fund Calculator", desc: "Build your 2-year buffer before declaring FIRE" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="flex items-start gap-3 bg-white rounded-xl border border-slate-200 p-4 hover:border-emerald-300 transition-colors">
              <span className="text-xl">{c.emoji}</span>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{c.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
