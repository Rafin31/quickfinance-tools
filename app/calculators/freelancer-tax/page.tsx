import type { Metadata } from "next";
import FreelancerTaxCalc from "@/components/calculators/FreelancerTaxCalc";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelancer Tax Calculator – Free 1099 & Self-Employment Tax Estimator",
  description:
    "Free freelancer tax calculator for US 1099 workers. Estimate self-employment tax (15.3%), federal income tax, and quarterly estimated payments. Instant, no sign-up. UK and Canada notes included.",
  keywords: [
    // US core
    "freelancer tax calculator",
    "1099 tax calculator",
    "self employment tax calculator",
    "quarterly estimated tax calculator",
    "independent contractor tax calculator",
    "self employed tax calculator 2026",
    "how much tax do freelancers pay",
    "1099 quarterly tax estimator",
    "side hustle tax calculator",
    "freelance income tax estimator",
    // UK
    "self employed tax calculator UK",
    "sole trader tax calculator UK",
    "freelancer tax calculator UK",
    "HMRC self assessment calculator",
    "self employed national insurance calculator UK",
    // Canada
    "freelancer tax calculator Canada",
    "self employed tax calculator Canada",
    "self employment income tax Canada",
    "CPP self employment calculator",
    // Long-tail
    "how much should I set aside for taxes freelancer",
    "quarterly tax payment calculator 1099",
  ],
  openGraph: {
    title: "Freelancer Tax Calculator – Free 1099 & Self-Employment Tax Estimator",
    description:
      "Know exactly what you owe in self-employment tax and quarterly payments. Built for freelancers and 1099 contractors.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Freelancer Tax Calculator",
  url: "https://quickfinance.tools/calculators/freelancer-tax",
  description:
    "Calculate self-employment tax, federal income tax, and quarterly estimated tax payments for freelancers and 1099 contractors.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqs = [
  {
    q: "What is self-employment tax?",
    a: "Self-employment tax is 15.3% of your net self-employment income. It covers Social Security (12.4%) and Medicare (2.9%). As a freelancer, you pay both the employee and employer share, unlike W-2 workers who split it with their employer.",
  },
  {
    q: "When are quarterly estimated taxes due?",
    a: "For 2026, the due dates are April 15, June 15, September 15, and January 15, 2027. If you expect to owe more than $1,000 in taxes for the year, you should be making quarterly payments to avoid IRS penalties.",
  },
  {
    q: "What business expenses can I deduct?",
    a: "Common deductions include home office costs (if used exclusively for business), equipment, software subscriptions, professional development, health insurance premiums, mileage for business travel, and half of your self-employment tax.",
  },
  {
    q: "Does this calculator include state taxes?",
    a: "No. This tool only estimates federal taxes. Most states also tax income, so your actual total tax bill will be higher. Check your state's department of revenue for state-specific rates.",
  },
  {
    q: "How much should I set aside from each payment?",
    a: "A safe rule of thumb is 25-30% of each payment you receive. This typically covers federal income tax plus self-employment tax for most freelancers earning under $100,000. Use this calculator for a more precise estimate based on your actual situation.",
  },
  {
    q: "Does this freelancer tax calculator work for UK self-employed workers or sole traders?",
    a: "This calculator estimates US federal taxes only. UK self-employed workers and sole traders pay Income Tax through HMRC Self Assessment (annual return due January 31) and Class 2 and Class 4 National Insurance contributions. UK tax rates and allowances differ significantly — notably, the UK Personal Allowance (£12,570 as of 2026) works differently from the US standard deduction. That said, the general principle of setting aside 25–30% of each payment is a reasonable rule of thumb for UK freelancers too, pending a more precise estimate from an accountant.",
  },
  {
    q: "Can Canadian freelancers use this tax calculator?",
    a: "This tool calculates US federal taxes only. Canadian self-employed workers pay federal and provincial income tax on net business income, plus CPP (Canada Pension Plan) contributions of 11.9% on net self-employment earnings. Canadian freelancers file a T2125 (Statement of Business Activities) with their T1 personal return. The annual filing deadline is June 15 for self-employed individuals, though any balance owing is due April 30. As in the US, setting aside 25–30% of gross client payments is a practical starting point for Canadian freelancers.",
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
    { "@type": "ListItem", position: 3, name: "Freelancer Tax Calculator", item: "https://quickfinance.tools/calculators/freelancer-tax" },
  ],
};

export default function FreelancerTaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-emerald-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#calculators" className="hover:text-emerald-500">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">Freelancer Tax</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🧾</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Freelancer Tax Calculator</h1>
              <p className="text-slate-500 mt-1">Estimate your 1099 taxes and quarterly payments</p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <FreelancerTaxCalc />

        {/* AdSense slot */}
        <div className="my-10 bg-slate-100 border border-dashed border-slate-300 rounded-xl h-24 flex items-center justify-center text-slate-400 text-sm">
          Advertisement
        </div>

        {/* Content */}
        <article className="prose prose-slate max-w-none mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How Freelancer Taxes Work</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            When you work as a freelancer or independent contractor, you receive 1099 income instead of a W-2. This changes how you pay taxes significantly. No employer is withholding anything from your checks, so you are responsible for sending money to the IRS yourself - four times per year.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            There are two main components to your federal tax bill as a freelancer:
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Self-Employment Tax (15.3%)</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            This is the big one most new freelancers miss. When you work for a company, your employer pays half of your Social Security and Medicare taxes. As a freelancer, you pay both halves. That is 12.4% for Social Security and 2.9% for Medicare, adding up to 15.3% of your net self-employment income.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The good news: you can deduct 50% of your self-employment tax from your gross income before calculating income tax, which reduces your overall burden somewhat.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Federal Income Tax</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            On top of self-employment tax, you owe regular federal income tax on your net profit (income minus business expenses). This is calculated using the standard 2026 tax brackets, and you get to subtract the standard deduction first - $14,600 for single filers, $29,200 for married filing jointly.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Quarterly Estimated Tax Payments</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            If you expect to owe $1,000 or more in taxes for the year, the IRS requires you to make quarterly estimated payments. The 2026 due dates are April 15, June 15, September 15, and January 15, 2027. Missing these payments can result in an underpayment penalty even if you pay everything by April 15.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Use the quarterly payment figure from this calculator as a guide. Set aside that amount in a separate savings account every quarter so you are never caught short.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Business Deductions That Lower Your Bill</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
            <li>Home office (exclusive use test applies)</li>
            <li>Software and subscriptions used for work</li>
            <li>Equipment: computer, desk, monitor, phone (business portion)</li>
            <li>Professional development and courses</li>
            <li>Health insurance premiums (if self-employed)</li>
            <li>Business mileage at the IRS standard rate</li>
            <li>Professional services: accountant, lawyer fees</li>
            <li>Marketing and advertising costs</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            This calculator gives you a solid estimate for planning purposes. For your actual tax return, working with a CPA who specializes in self-employed clients is worth every dollar, especially once you start earning over $50,000 per year.
          </p>
        </article>

        {/* FAQ */}
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

        {/* Related calculators */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/calculators/savings-goal", emoji: "🎯", title: "Savings Goal Calculator", desc: "Set aside your tax money with a goal" },
              { href: "/calculators/emergency-fund", emoji: "🛡️", title: "Emergency Fund Calculator", desc: "Build a buffer for slow freelance months" },
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

        {/* Related articles */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Articles</h2>
          <div className="space-y-3">
            {[
              { href: "/blog/freelancer-quarterly-taxes-guide", tag: "Taxes", title: "The Complete Guide to Quarterly Estimated Taxes for Freelancers", desc: "Safe harbor rules, due dates, IRS payment methods, and a practical set-aside system." },
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
