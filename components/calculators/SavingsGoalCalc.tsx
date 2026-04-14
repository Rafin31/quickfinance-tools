"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function SavingsGoalCalc() {
  const [goalAmount, setGoalAmount] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthsToGoal, setMonthsToGoal] = useState("");
  const [annualRate, setAnnualRate] = useState("4.5");
  const [mode, setMode] = useState<"howMuch" | "howLong">("howMuch");

  const results = useMemo(() => {
    const goal = parseFloat(goalAmount) || 0;
    const current = parseFloat(currentSavings) || 0;
    const rate = (parseFloat(annualRate) || 0) / 100 / 12;
    const months = parseFloat(monthsToGoal) || 0;

    if (goal <= 0 || goal <= current) return null;
    const needed = goal - current;

    if (mode === "howMuch") {
      // How much per month to hit goal in X months
      if (months <= 0) return null;
      let monthly: number;
      if (rate === 0) {
        monthly = needed / months;
      } else {
        monthly = (needed * rate) / (Math.pow(1 + rate, months) - 1);
      }
      const totalContributions = monthly * months;
      const interestEarned = goal - current - totalContributions;
      return { monthly, totalContributions, interestEarned, months };
    } else {
      // How long to hit goal with a fixed monthly amount
      const monthly = parseFloat(monthsToGoal) || 0;
      if (monthly <= 0) return null;
      let calcMonths: number;
      if (rate === 0) {
        calcMonths = Math.ceil(needed / monthly);
      } else {
        calcMonths = Math.ceil(Math.log(1 + (needed * rate) / monthly) / Math.log(1 + rate));
      }
      const totalContributions = monthly * calcMonths;
      const interestEarned = goal - current - totalContributions;
      const targetDate = new Date();
      targetDate.setMonth(targetDate.getMonth() + calcMonths);
      const dateStr = targetDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      return { monthly, totalContributions, interestEarned, months: calcMonths, targetDate: dateStr };
    }
  }, [goalAmount, currentSavings, monthsToGoal, annualRate, mode]);

  return (
    <div className="space-y-8">
      {/* Mode toggle */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What do you want to know?</h2>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => setMode("howMuch")}
            className={`p-4 rounded-xl border-2 text-left transition-all ${mode === "howMuch" ? "border-emerald-500 bg-emerald-50" : "border-slate-200 hover:border-slate-300"}`}>
            <div className="font-semibold text-slate-900 mb-1">How much per month?</div>
            <div className="text-xs text-slate-500">I have a deadline. Tell me how much to save monthly.</div>
          </button>
          <button onClick={() => { setMode("howLong"); setMonthsToGoal(""); }}
            className={`p-4 rounded-xl border-2 text-left transition-all ${mode === "howLong" ? "border-emerald-500 bg-emerald-50" : "border-slate-200 hover:border-slate-300"}`}>
            <div className="font-semibold text-slate-900 mb-1">How long will it take?</div>
            <div className="text-xs text-slate-500">I know my monthly amount. Tell me when I will hit my goal.</div>
          </button>
        </div>
      </div>

      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Your Goal Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Savings Goal</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input type="number" value={goalAmount} onChange={(e) => setGoalAmount(e.target.value)} placeholder="10000"
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900" min="0" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Current Savings</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} placeholder="0"
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900" min="0" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              {mode === "howMuch" ? "Months Until Deadline" : "Monthly Savings Amount"}
            </label>
            <div className="relative">
              {mode === "howLong" && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>}
              <input type="number" value={monthsToGoal} onChange={(e) => setMonthsToGoal(e.target.value)}
                placeholder={mode === "howMuch" ? "12" : "300"}
                className={`w-full ${mode === "howLong" ? "pl-8" : "pl-4"} pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900`}
                min="0" />
            </div>
            <p className="mt-1 text-xs text-slate-400">
              {mode === "howMuch" ? "e.g. 12 months = 1 year" : "Amount you can save each month"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Annual Interest Rate (HYSA / savings)</label>
            <div className="relative">
              <input type="number" value={annualRate} onChange={(e) => setAnnualRate(e.target.value)} placeholder="4.5"
                className="w-full pl-4 pr-8 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900" min="0" max="100" step="0.1" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">Current HYSA rates are around 4-5%. Use 0% if keeping in checking.</p>
          </div>
        </div>
      </div>

      {/* Results */}
      {results ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-emerald-500 text-white rounded-2xl p-6 text-center">
              {mode === "howMuch" ? (
                <>
                  <p className="text-emerald-100 text-sm font-medium mb-1">Save Per Month</p>
                  <p className="text-3xl font-bold">{fmt(results.monthly)}</p>
                  <p className="text-emerald-200 text-sm mt-1">for {results.months} months</p>
                </>
              ) : (
                <>
                  <p className="text-emerald-100 text-sm font-medium mb-1">Goal Reached</p>
                  <p className="text-2xl font-bold">{results.targetDate}</p>
                  <p className="text-emerald-200 text-sm mt-1">{results.months} months away</p>
                </>
              )}
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Total Contributions</p>
              <p className="text-3xl font-bold text-slate-900">{fmt(results.totalContributions)}</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Interest Earned</p>
              <p className="text-3xl font-bold text-emerald-600">{fmt(Math.max(0, results.interestEarned))}</p>
            </div>
          </div>

          {/* Progress visual */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-700">Your savings goal: {fmt(parseFloat(goalAmount))}</span>
              <span className="text-slate-500">Starting: {fmt(parseFloat(currentSavings) || 0)}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-4">
              <div className="bg-emerald-500 h-4 rounded-full" style={{ width: `${Math.min(100, ((parseFloat(currentSavings) || 0) / parseFloat(goalAmount)) * 100)}%` }}></div>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              You need {fmt((parseFloat(goalAmount) || 0) - (parseFloat(currentSavings) || 0))} more to reach your goal.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400">
          <div className="text-4xl mb-3">🎯</div>
          <p className="font-medium">Enter your goal details above to get your savings plan</p>
        </div>
      )}
    </div>
  );
}
