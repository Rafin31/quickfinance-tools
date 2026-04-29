import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Finance Blog – Freelancer Tax, Debt & Savings Guides",
  description: "Practical personal finance guides for freelancers, gig workers, and independent earners in the US, UK, and Canada. Taxes, debt payoff, emergency fund, and savings guides.",
  keywords: [
    "freelancer personal finance blog",
    "self employed tax guide",
    "debt payoff guide",
    "emergency fund guide for freelancers",
    "1099 tax guide",
    "quarterly estimated tax guide",
    "debt snowball vs avalanche guide",
    "personal finance for gig workers",
    "freelancer finance tips UK",
    "self employed money tips Canada",
    "compound interest guide monthly contributions",
    "savings goal calculator guide",
    "self employment tax deductions 2026",
    "FIRE number calculator guide",
    "gig worker budget guide",
    "financial independence calculator",
  ],
  alternates: {
    canonical: "https://quickfinance.tools/blog",
  },
};

const posts = [
  {
    slug: "gig-worker-budget-guide",
    title: "How to Budget as a Gig Worker When Your Income Changes Every Month",
    description: "Standard budget advice was designed for paychecks. Here is a percentage-based system that works for gig workers and freelancers regardless of what your income is this month.",
    date: "May 20, 2026",
    readTime: "10 min read",
    tag: "Budgeting",
  },
  {
    slug: "fire-number-calculator-guide",
    title: "How to Calculate Your FIRE Number (And What It Actually Means)",
    description: "The FIRE number is your annual expenses times 25. Here is where that formula comes from, when it breaks down, and how freelancers should approach financial independence.",
    date: "May 13, 2026",
    readTime: "9 min read",
    tag: "Investing",
  },
  {
    slug: "self-employment-tax-deduction-guide",
    title: "Self-Employment Tax Deductions: Every Write-Off Available in 2026",
    description: "Every legitimate deduction a freelancer or 1099 contractor can claim in 2026, including home office, mileage, SEP-IRA, and health insurance, with the IRS rules for each.",
    date: "May 6, 2026",
    readTime: "11 min read",
    tag: "Taxes",
  },
  {
    slug: "savings-goal-calculator-guide",
    title: "How to Use a Savings Goal Calculator to Hit Any Financial Target",
    description: "A savings goal calculator gives you a precise monthly number instead of a vague intention. Here is how to use it correctly for short, medium, and long-term goals.",
    date: "April 29, 2026",
    readTime: "8 min read",
    tag: "Savings",
  },
  {
    slug: "compound-interest-monthly-contributions",
    title: "How Compound Interest With Monthly Contributions Actually Builds Wealth",
    description: "Monthly contributions dramatically accelerate compound growth. Here is the math, the rule of 72, and why starting early beats contributing more.",
    date: "April 29, 2026",
    readTime: "8 min read",
    tag: "Investing",
  },
  {
    slug: "freelancer-quarterly-taxes-guide",
    title: "The Complete Guide to Quarterly Estimated Taxes for Freelancers",
    description: "Everything a 1099 contractor needs to know about self-employment tax, quarterly due dates, and how to avoid IRS penalties.",
    date: "April 10, 2026",
    readTime: "9 min read",
    tag: "Taxes",
  },
  {
    slug: "debt-snowball-vs-avalanche",
    title: "Debt Snowball vs Avalanche: Which Method Actually Works?",
    description: "A data-driven comparison of the two main debt payoff strategies. When to use each, and why the right method depends on your psychology.",
    date: "April 8, 2026",
    readTime: "8 min read",
    tag: "Debt",
  },
  {
    slug: "how-much-emergency-fund-freelancer",
    title: "How Much Emergency Fund Does a Freelancer Actually Need?",
    description: "The 3-6 month rule was designed for salaried workers. Here is how to calculate the right emergency fund size for variable income.",
    date: "April 5, 2026",
    readTime: "7 min read",
    tag: "Savings",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Finance Blog</h1>
        <p className="text-slate-500 text-lg">Practical money guides for freelancers and independent earners.</p>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="block bg-white rounded-2xl border border-slate-200 p-6 hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-1 rounded-full">{post.tag}</span>
              <span className="text-xs text-slate-400">{post.date}</span>
              <span className="text-xs text-slate-400">{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">{post.title}</h2>
            <p className="text-slate-500 text-sm leading-relaxed">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
