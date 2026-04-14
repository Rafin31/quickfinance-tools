"use client";

import { useState, useMemo } from "react";

const TAX_BRACKETS_2026 = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

const STANDARD_DEDUCTION_2026 = 14600;
const SE_TAX_RATE = 0.153;
const SE_TAX_DEDUCTION_RATE = 0.5;

function calcFederalIncomeTax(taxableIncome: number): number {
  let tax = 0;
  for (const bracket of TAX_BRACKETS_2026) {
    if (taxableIncome <= bracket.min) break;
    const taxable = Math.min(taxableIncome, bracket.max) - bracket.min;
    tax += taxable * bracket.rate;
  }
  return tax;
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function pct(n: number): string {
  return (n * 100).toFixed(1) + "%";
}

export default function FreelancerTaxCalc() {
  const [grossIncome, setGrossIncome] = useState("");
  const [businessExpenses, setBusinessExpenses] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");

  const results = useMemo(() => {
    const gross = parseFloat(grossIncome) || 0;
    const expenses = parseFloat(businessExpenses) || 0;
    const other = parseFloat(otherIncome) || 0;

    if (gross <= 0) return null;

    const netSelfEmploymentIncome = Math.max(0, gross - expenses);
    const seTax = netSelfEmploymentIncome * SE_TAX_RATE;
    const seDeduction = seTax * SE_TAX_DEDUCTION_RATE;

    const standardDeduction = filingStatus === "married" ? 29200 : STANDARD_DEDUCTION_2026;
    const taxableIncome = Math.max(0, netSelfEmploymentIncome + other - seDeduction - standardDeduction);
    const federalIncomeTax = calcFederalIncomeTax(taxableIncome);
    const totalTax = seTax + federalIncomeTax;
    const effectiveRate = totalTax / (gross + other);
    const quarterlyPayment = totalTax / 4;
    const monthlySetAside = totalTax / 12;

    return {
      netSelfEmploymentIncome,
      seTax,
      seDeduction,
      taxableIncome,
      federalIncomeTax,
      totalTax,
      effectiveRate,
      quarterlyPayment,
      monthlySetAside,
      takeHome: gross + other - totalTax - expenses,
    };
  }, [grossIncome, businessExpenses, otherIncome, filingStatus]);

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Enter Your Income Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Annual Freelance / Self-Employment Income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input
                type="number"
                value={grossIncome}
                onChange={(e) => setGrossIncome(e.target.value)}
                placeholder="60000"
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900"
                min="0"
              />
            </div>
            <p className="mt-1 text-xs text-slate-400">Your gross 1099 / freelance income before any deductions</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Business Expenses
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input
                type="number"
                value={businessExpenses}
                onChange={(e) => setBusinessExpenses(e.target.value)}
                placeholder="5000"
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900"
                min="0"
              />
            </div>
            <p className="mt-1 text-xs text-slate-400">Software, equipment, home office, mileage, etc.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Other Income (W-2, interest, etc.)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input
                type="number"
                value={otherIncome}
                onChange={(e) => setOtherIncome(e.target.value)}
                placeholder="0"
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900"
                min="0"
              />
            </div>
            <p className="mt-1 text-xs text-slate-400">Leave blank if freelancing is your only income</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Filing Status
            </label>
            <select
              value={filingStatus}
              onChange={(e) => setFilingStatus(e.target.value as "single" | "married")}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="single">Single</option>
              <option value="married">Married Filing Jointly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {results ? (
        <div className="space-y-6">
          {/* Key numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-emerald-500 text-white rounded-2xl p-6 text-center">
              <p className="text-emerald-100 text-sm font-medium mb-1">Estimated Annual Tax</p>
              <p className="text-3xl font-bold">{fmt(results.totalTax)}</p>
              <p className="text-emerald-200 text-sm mt-1">Effective rate: {pct(results.effectiveRate)}</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Quarterly Payment</p>
              <p className="text-3xl font-bold text-slate-900">{fmt(results.quarterlyPayment)}</p>
              <p className="text-slate-400 text-sm mt-1">Due: Apr, Jun, Sep, Jan</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Set Aside Monthly</p>
              <p className="text-3xl font-bold text-slate-900">{fmt(results.monthlySetAside)}</p>
              <p className="text-slate-400 text-sm mt-1">To stay ahead of taxes</p>
            </div>
          </div>

          {/* Tax breakdown */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Tax Breakdown</h3>
            <div className="space-y-3">
              {[
                { label: "Gross freelance income", value: fmt(parseFloat(grossIncome) || 0), highlight: false },
                { label: "Business expenses deducted", value: `- ${fmt(parseFloat(businessExpenses) || 0)}`, highlight: false },
                { label: "Net self-employment income", value: fmt(results.netSelfEmploymentIncome), highlight: false },
                { label: "Self-employment tax (15.3%)", value: fmt(results.seTax), highlight: true },
                { label: "SE tax deduction (50%)", value: `- ${fmt(results.seDeduction)}`, highlight: false },
                { label: "Standard deduction", value: `- ${fmt(filingStatus === "married" ? 29200 : STANDARD_DEDUCTION_2026)}`, highlight: false },
                { label: "Federal taxable income", value: fmt(results.taxableIncome), highlight: false },
                { label: "Federal income tax", value: fmt(results.federalIncomeTax), highlight: true },
                { label: "Total estimated tax", value: fmt(results.totalTax), highlight: true },
                { label: "Estimated take-home (after tax + expenses)", value: fmt(results.takeHome), highlight: false },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`flex justify-between items-center py-2.5 px-3 rounded-lg ${row.highlight ? "bg-red-50" : "hover:bg-slate-50"}`}
                >
                  <span className="text-sm text-slate-600">{row.label}</span>
                  <span className={`text-sm font-semibold ${row.highlight ? "text-red-600" : "text-slate-900"}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>Note:</strong> This calculator uses 2026 federal tax rates and the standard deduction. It does not include state taxes, retirement contributions (SEP-IRA, Solo 401k), or health insurance deductions that could lower your bill. Consult a tax professional for your actual return.
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400">
          <div className="text-4xl mb-3">🧾</div>
          <p className="font-medium">Enter your income above to see your tax estimate</p>
        </div>
      )}
    </div>
  );
}
