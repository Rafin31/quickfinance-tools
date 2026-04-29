import type { Metadata } from "next";
import Link from "next/link";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Self-Employment Tax Deductions: The Complete 2026 List",
  description: "Every self-employment tax deduction available in 2026: home office, mileage, SEP-IRA, health insurance, and more, with the IRS rules that govern each.",
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: { "@type": "Organization", name: "QuickFinance Tools", url: "https://quickfinance.tools" },
  publisher: { "@type": "Organization", name: "QuickFinance Tools", url: "https://quickfinance.tools" },
  url: "https://quickfinance.tools/blog/self-employment-tax-deduction-guide",
  mainEntityOfPage: "https://quickfinance.tools/blog/self-employment-tax-deduction-guide",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://quickfinance.tools" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://quickfinance.tools/blog" },
    { "@type": "ListItem", position: 3, name: "SE Tax Deductions Guide", item: "https://quickfinance.tools/blog/self-employment-tax-deduction-guide" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need receipts for every business deduction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The IRS requires documentation for all business deductions. Keep receipts, bank statements, and invoices. For mileage, keep a log. For home office, document the square footage. Digital records are acceptable.",
      },
    },
    {
      "@type": "Question",
      name: "Can I deduct home office expenses if I rent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both renters and homeowners can deduct the home office. If you rent, apply your office square footage percentage to your monthly rent and utilities. The simplified method allows $5 per square foot up to 300 square feet.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take the standard deduction AND deduct business expenses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Business expenses like home office, mileage, health insurance premiums, and SEP-IRA contributions are above-the-line deductions that reduce your adjusted gross income. They are completely separate from the standard vs itemized deduction decision.",
      },
    },
    {
      "@type": "Question",
      name: "What if I mix personal and business use for my phone or car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deduct the business-use percentage. If you use your phone 60% for business, deduct 60% of your phone bill. Be conservative and consistent — the IRS may ask about your methodology.",
      },
    },
    {
      "@type": "Question",
      name: "What is the self-employment tax deduction for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SE tax rate is 15.3% on net self-employment income. You can automatically deduct 50% of your total SE tax as an above-the-line deduction on Schedule 1. This deduction applies regardless of whether you itemize.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Self-Employment Tax Deductions: The Complete 2026 List",
  description:
    "Every self-employment tax deduction available in 2026: home office, mileage, SEP-IRA, health insurance, and more, with the IRS rules that govern each.",
  keywords: [
    "self employment tax deduction",
    "freelancer tax deductions 2026",
    "home office deduction self employed",
    "mileage deduction 2026 self employed",
    "SEP IRA contribution limits 2026",
    "self employed health insurance deduction",
    "1099 contractor tax write-offs",
    "freelancer business expenses",
    "self employed business deductions",
    "solo 401k vs SEP IRA freelancer",
  ],
  alternates: {
    canonical: "https://quickfinance.tools/blog/self-employment-tax-deduction-guide",
  },
  openGraph: {
    title: "Self-Employment Tax Deductions: The Complete 2026 List",
    description: "Every write-off a freelancer or 1099 contractor can claim in 2026, including home office, mileage, SEP-IRA, and health insurance, with the IRS rules for each.",
  },
};

export default function SelfEmploymentTaxDeductionPage() {
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
          <span className="text-slate-600">SE Tax Deductions Guide</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-1 rounded-full">Taxes</span>
            <span className="text-sm text-slate-400">May 6, 2026 · 11 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Self-Employment Tax Deductions: Every Write-Off Available to Freelancers in 2026
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every deduction reduces both your self-employment tax (15.3%) and your income tax. A $1,000 deduction saves you $373 in total tax if you are in the 22% bracket — not just $220.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-emerald-800 font-medium">Use our <Link href="/calculators/freelancer-tax" className="underline">Freelancer Tax Calculator</Link> to see how your deductions change your quarterly estimated payment.</p>
        </div>

        <article className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How Self-Employment Deductions Work (The Mechanism)</h2>
            <p className="leading-relaxed mb-4">
              As a freelancer, you pay the full 15.3% self-employment tax yourself on your net self-employment income. Every dollar you deduct as a business expense reduces your net SE income, which flows in two directions: lower SE tax (15.3% of the deducted amount) and lower income tax (your marginal rate applied to the deducted amount).
            </p>
            <p className="leading-relaxed">
              If you are in the 22% income tax bracket, a $1,000 deduction saves you $153 in SE tax plus $220 in income tax — $373 total, or more than a third of the deduction amount.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The 50% Self-Employment Tax Deduction</h2>
            <p className="leading-relaxed mb-4">
              Before anything else: the IRS lets you deduct half of your total SE tax as an above-the-line deduction on Schedule 1 of Form 1040. This is automatic — you do not need to itemize or take any special action.
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Example:</p>
              <p className="text-sm leading-relaxed">
                If your SE tax is $9,180, you automatically deduct $4,590 — reducing your adjusted gross income before calculating your income tax bracket. This deduction exists because employees only pay half of FICA taxes; their employer pays the other half.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Home Office Deduction: The Rules That Actually Apply</h2>
            <p className="leading-relaxed mb-4">
              The home office deduction requires your workspace to meet the <strong>exclusive use test</strong>: the space must be used regularly and exclusively for business. A desk in your living room that you also use to watch TV does not qualify. A separate room used only for work does.
            </p>
            <p className="leading-relaxed mb-4"><strong>Two methods:</strong></p>
            <ul className="list-disc list-inside space-y-3 mb-4">
              <li><strong>Simplified:</strong> $5 per square foot of your home office, up to 300 square feet. Maximum deduction: $1,500. Minimal paperwork required.</li>
              <li><strong>Actual expenses:</strong> Apply your office-to-home square footage percentage to total home costs (rent or mortgage interest, utilities, insurance, repairs). More paperwork, potentially larger deduction.</li>
            </ul>
            <p className="leading-relaxed">
              Both renters and homeowners can claim this deduction. If you rent, apply your office percentage to your monthly rent and utilities. See <a href="https://www.irs.gov/publications/p587" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">IRS Publication 587</a> for the complete rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Vehicle and Mileage Deductions</h2>
            <p className="leading-relaxed mb-4">
              The 2026 IRS standard mileage rate is 67 cents per mile for business driving. This covers client meetings, supply runs, the post office for business mailings — any drive with a clear business purpose.
            </p>
            <p className="leading-relaxed mb-4">
              Commuting from home to a regular office location is not deductible. Since most freelancers work from home, this rarely applies.
            </p>
            <p className="leading-relaxed">
              Keep a mileage log with the date, destination, business purpose, and miles for each trip. A simple spreadsheet or a free app works. The IRS requires this documentation if questioned.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Health Insurance Deduction for Self-Employed Workers</h2>
            <p className="leading-relaxed mb-4">
              Self-employed individuals can deduct 100% of health insurance premiums for themselves, their spouse, and dependents. This is an above-the-line deduction on Schedule 1 — it reduces your AGI regardless of whether you itemize.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Eligibility rule:</strong> You cannot claim this deduction for any month in which you were eligible for employer-sponsored coverage through a spouse's employer plan.
            </p>
            <p className="leading-relaxed">
              Covers medical, dental, and vision premiums. Also covers premiums for children under age 27 even if they are not your dependents. See <a href="https://www.irs.gov/publications/p535" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">IRS Publication 535</a> for details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Retirement Contributions: SEP-IRA, Solo 401(k), and SIMPLE IRA</h2>
            <p className="leading-relaxed mb-4">
              Every dollar contributed to a retirement plan reduces your taxable income dollar for dollar. For high earners, retirement contributions are the single largest deduction available.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">2026 Limit</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Deadline</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Complexity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { plan: "SEP-IRA", limit: "25% of net SE income, max $69,000", deadline: "Tax filing date (+ extensions)", complexity: "Very low" },
                    { plan: "Solo 401(k)", limit: "$23,500 employee + 25% employer, max $69,000", deadline: "December 31 to open new plan", complexity: "Medium" },
                    { plan: "SIMPLE IRA", limit: "$16,500 employee + 3% match", deadline: "October 1 to open for current year", complexity: "Low" },
                  ].map((row) => (
                    <tr key={row.plan} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-700">{row.plan}</td>
                      <td className="px-4 py-3 text-slate-600">{row.limit}</td>
                      <td className="px-4 py-3 text-slate-600">{row.deadline}</td>
                      <td className="px-4 py-3 text-slate-600">{row.complexity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4">
              Plan your monthly SEP-IRA contributions throughout the year using our <Link href="/calculators/savings-goal" className="text-emerald-600 underline">savings goal calculator</Link> rather than scrambling to fund it before the tax deadline.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Business Expense Deductions: What Qualifies and What Doesn&apos;t</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-emerald-700">Deductible</th>
                    <th className="text-left px-4 py-3 font-semibold text-red-700">Not Deductible</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { yes: "Software subscriptions (Adobe, Figma, Notion)", no: "Personal clothing (even if worn to client meetings)" },
                    { yes: "Professional development (courses, books, conferences)", no: "Gym memberships (unless fitness is your business)" },
                    { yes: "Equipment (computer, desk, camera, microphone)", no: "Personal meals at your desk" },
                    { yes: "Professional services (accountant, attorney fees)", no: "Pet care" },
                    { yes: "50% of business meals with clients", no: "Commuting costs" },
                    { yes: "Phone and internet (business-use percentage)", no: "Personal entertainment" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-700">{row.yes}</td>
                      <td className="px-4 py-3 text-slate-500">{row.no}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How Deductions Change Your Quarterly Tax Payment</h2>
            <p className="leading-relaxed mb-4">
              Deductions directly reduce the income you report to the IRS, which lowers both your SE tax and income tax — and therefore your quarterly estimated payments.
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Example: $80,000 income with $15,000 in deductions</p>
              <p className="text-sm leading-relaxed">
                Net SE income after deductions: $65,000<br />
                SE tax reduction: approximately $2,295 less per year<br />
                Income tax reduction (22% bracket on $15K): approximately $3,300 less<br />
                <strong>Total savings: approximately $5,595/year or $1,399 per quarter</strong>
              </p>
            </div>
            <p className="leading-relaxed mt-4">
              For a complete walkthrough of how quarterly estimated taxes are calculated and paid, see our <Link href="/blog/freelancer-quarterly-taxes-guide" className="text-emerald-600 underline">quarterly estimated tax guide for freelancers</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: "Do I need receipts for every deduction?",
                  a: "Yes. The IRS requires documentation for all business deductions. Keep receipts, bank statements, and invoices. For mileage, keep a log. For home office, document the square footage. Digital records are acceptable — a folder of PDF receipts and bank export files is sufficient for most audits.",
                },
                {
                  q: "What if I mix personal and business use for my phone or internet?",
                  a: "Deduct the business-use percentage. If you use your phone 60% for business, deduct 60% of your phone bill. Be conservative and consistent — the IRS may ask about your methodology if questioned.",
                },
                {
                  q: "Can I deduct my phone as a business expense?",
                  a: "Yes, the business-use percentage of your phone bill is deductible. This includes both the service plan and, if purchased for business use, the device cost (which may need to be depreciated or taken as a Section 179 deduction in the year of purchase).",
                },
                {
                  q: "Can I take the standard deduction AND deduct business expenses?",
                  a: "Yes. Business expenses are above-the-line deductions that reduce your AGI. They are completely separate from the standard vs itemized deduction decision. You can claim the standard deduction and still deduct all your business expenses.",
                },
                {
                  q: "What is the self-employment tax rate in 2026?",
                  a: "15.3% on net self-employment income up to the Social Security wage base ($176,100 in 2026). Income above that threshold is still subject to the 2.9% Medicare portion. You can automatically deduct 50% of your total SE tax on Schedule 1.",
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
          <h3 className="font-bold text-slate-900 mb-2">See your tax after deductions</h3>
          <p className="text-sm text-slate-600 mb-4">Enter your income and estimated deductions to see your quarterly tax payment drop in real time.</p>
          <Link href="/calculators/freelancer-tax" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
            Open Freelancer Tax Calculator
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: "/calculators/freelancer-tax", emoji: "🧾", title: "Freelancer Tax Calculator", desc: "Estimate your quarterly payments after all deductions" },
            { href: "/calculators/savings-goal", emoji: "🎯", title: "Savings Goal Calculator", desc: "Plan monthly SEP-IRA contributions throughout the year" },
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
