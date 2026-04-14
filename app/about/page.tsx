import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About QuickFinance Tools",
  description: "Free personal finance calculators built for freelancers, gig workers, and anyone who wants clear answers about their money.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">About QuickFinance Tools</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
        <p className="leading-relaxed">
          QuickFinance Tools is a collection of free personal finance calculators built for people whose financial situations do not fit the standard mold.
        </p>
        <p className="leading-relaxed">
          Most personal finance tools were designed for W-2 employees with stable paychecks and employer benefits. They handle mortgages and 401k contributions well. They handle freelance tax estimation, variable-income emergency funds, and gig-economy-specific calculations poorly or not at all.
        </p>
        <p className="leading-relaxed">
          This site fills that gap. Every calculator here was built to answer a specific question that comes up repeatedly for freelancers, contractors, and independent earners:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>How much do I owe in quarterly taxes this year?</li>
          <li>How large should my emergency fund actually be given my variable income?</li>
          <li>When will I be debt-free if I attack my highest-interest debt first?</li>
          <li>If I invest $300/month for 20 years, what will I end up with?</li>
        </ul>
        <p className="leading-relaxed">
          All calculations run entirely in your browser. Nothing is sent to any server. Your financial data stays on your device.
        </p>
        <p className="leading-relaxed">
          The tools here are for educational and planning purposes. They give you solid estimates for making informed decisions, but they are not a substitute for a qualified tax professional or financial advisor.
        </p>
        <div className="pt-4">
          <Link href="/#calculators" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Browse the Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}
