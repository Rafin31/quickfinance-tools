"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const STABILITY_LABELS: Record<string, string> = {
  stable: "Stable (government, tenured, low layoff risk)",
  moderate: "Moderate (most private sector jobs)",
  variable: "Variable (freelance, commission, seasonal)",
  entrepreneur: "Business owner / self-employed",
};

const STABILITY_MONTHS: Record<string, number> = {
  stable: 3,
  moderate: 4,
  variable: 6,
  entrepreneur: 9,
};

export default function EmergencyFundCalc() {
  const [housing, setHousing] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [utilities, setUtilities] = useState("");
  const [insurance, setInsurance] = useState("");
  const [debtPayments, setDebtPayments] = useState("");
  const [otherEssentials, setOtherEssentials] = useState("");
  const [stability, setStability] = useState("moderate");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlySaving, setMonthlySaving] = useState("");

  const results = useMemo(() => {
    const monthly =
      (parseFloat(housing) || 0) +
      (parseFloat(food) || 0) +
      (parseFloat(transport) || 0) +
      (parseFloat(utilities) || 0) +
      (parseFloat(insurance) || 0) +
      (parseFloat(debtPayments) || 0) +
      (parseFloat(otherEssentials) || 0);

    if (monthly <= 0) return null;

    const months = STABILITY_MONTHS[stability];
    const target = monthly * months;
    const current = parseFloat(currentSavings) || 0;
    const gap = Math.max(0, target - current);
    const saving = parseFloat(monthlySaving) || 0;
    const monthsToGoal = saving > 0 ? Math.ceil(gap / saving) : null;

    return { monthly, months, target, current, gap, monthsToGoal };
  }, [housing, food, transport, utilities, insurance, debtPayments, otherEssentials, stability, currentSavings, monthlySaving]);

  const inputs = [
    { label: "Housing (rent/mortgage)", value: housing, setter: setHousing, placeholder: "1500" },
    { label: "Food & groceries", value: food, setter: setFood, placeholder: "400" },
    { label: "Transportation", value: transport, setter: setTransport, placeholder: "300" },
    { label: "Utilities & phone", value: utilities, setter: setUtilities, placeholder: "200" },
    { label: "Insurance (health, car, etc.)", value: insurance, setter: setInsurance, placeholder: "300" },
    { label: "Minimum debt payments", value: debtPayments, setter: setDebtPayments, placeholder: "200" },
    { label: "Other essentials", value: otherEssentials, setter: setOtherEssentials, placeholder: "100" },
  ];

  return (
    <div className="space-y-8">
      {/* Expenses */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Monthly Essential Expenses</h2>
        <p className="text-sm text-slate-500 mb-6">Only include expenses you must pay to function - not subscriptions, dining out, or discretionary spending.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {inputs.map(({ label, value, setter, placeholder }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  placeholder={placeholder}
                  className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900"
                  min="0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job stability */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Income Stability</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(STABILITY_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setStability(key)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                stability === key ? "border-emerald-500 bg-emerald-50" : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="text-sm text-slate-700">{label}</span>
                <span className="text-xs font-bold text-emerald-600 ml-2 shrink-0">{STABILITY_MONTHS[key]}mo</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Current savings + plan */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Your Progress</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Current emergency fund savings</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} placeholder="1000"
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900" min="0" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">How much can you save per month?</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input type="number" value={monthlySaving} onChange={(e) => setMonthlySaving(e.target.value)} placeholder="300"
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900" min="0" />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {results ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-emerald-500 text-white rounded-2xl p-6 text-center">
              <p className="text-emerald-100 text-sm font-medium mb-1">Your Target Fund</p>
              <p className="text-3xl font-bold">{fmt(results.target)}</p>
              <p className="text-emerald-200 text-sm mt-1">{results.months} months of expenses</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Monthly Essentials</p>
              <p className="text-3xl font-bold text-slate-900">{fmt(results.monthly)}</p>
            </div>
            <div className={`rounded-2xl p-6 text-center ${results.gap === 0 ? "bg-emerald-50 border border-emerald-200" : "bg-white border border-slate-200"}`}>
              <p className="text-slate-500 text-sm font-medium mb-1">Still Needed</p>
              <p className={`text-3xl font-bold ${results.gap === 0 ? "text-emerald-600" : "text-slate-900"}`}>
                {results.gap === 0 ? "You're covered!" : fmt(results.gap)}
              </p>
              {results.monthsToGoal && results.gap > 0 && (
                <p className="text-slate-400 text-sm mt-1">{results.monthsToGoal} months to goal</p>
              )}
            </div>
          </div>

          {/* Progress bar */}
          {results.current > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-700">Progress to goal</span>
                <span className="text-slate-500">{fmt(results.current)} of {fmt(results.target)}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-4">
                <div
                  className="bg-emerald-500 h-4 rounded-full transition-all"
                  style={{ width: `${Math.min(100, (results.current / results.target) * 100).toFixed(1)}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-right">
                {Math.min(100, (results.current / results.target) * 100).toFixed(0)}% funded
              </p>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
            <strong>Where to keep it:</strong> High-yield savings accounts (HYSA) currently pay 4-5% APY. Your emergency fund should be instantly accessible but separated from your checking account so you do not accidentally spend it.
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400">
          <div className="text-4xl mb-3">🛡️</div>
          <p className="font-medium">Enter your monthly expenses above to calculate your target</p>
        </div>
      )}
    </div>
  );
}
