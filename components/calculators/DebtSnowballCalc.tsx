"use client";

import { useState, useMemo } from "react";

interface Debt {
  id: string;
  name: string;
  balance: string;
  rate: string;
  minPayment: string;
}

interface PayoffResult {
  name: string;
  months: number;
  totalInterest: number;
  payoffDate: string;
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function addMonths(date: Date, months: number): string {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function simulatePayoff(
  debts: { name: string; balance: number; rate: number; minPayment: number }[],
  extraPayment: number,
  method: "snowball" | "avalanche"
): { results: PayoffResult[]; totalInterest: number; totalMonths: number } {
  const today = new Date();
  const working = debts.map((d) => ({ ...d, remaining: d.balance }));
  const results: PayoffResult[] = debts.map((d) => ({ name: d.name, months: 0, totalInterest: 0, payoffDate: "" }));
  let month = 0;
  const MAX_MONTHS = 600;

  while (working.some((d) => d.remaining > 0) && month < MAX_MONTHS) {
    month++;
    // Sort active debts
    const active = working.filter((d) => d.remaining > 0);
    if (method === "snowball") {
      active.sort((a, b) => a.remaining - b.remaining);
    } else {
      active.sort((a, b) => b.rate - a.rate);
    }

    // Accrue interest and apply minimum payments
    for (const debt of working) {
      if (debt.remaining <= 0) continue;
      const interest = (debt.remaining * (debt.rate / 100)) / 12;
      results[debts.findIndex((d) => d.name === debt.name)].totalInterest += interest;
      debt.remaining = Math.max(0, debt.remaining + interest - debt.minPayment);
    }

    // Apply extra payment to target debt
    let extra = extraPayment;
    for (const target of active) {
      if (extra <= 0) break;
      const applied = Math.min(target.remaining, extra);
      target.remaining = Math.max(0, target.remaining - applied);
      extra -= applied;
    }

    // Check for payoffs
    for (let i = 0; i < working.length; i++) {
      if (working[i].remaining <= 0 && results[i].months === 0) {
        results[i].months = month;
        results[i].payoffDate = addMonths(today, month);
      }
    }
  }

  const totalInterest = results.reduce((s, r) => s + r.totalInterest, 0);
  const totalMonths = Math.max(...results.map((r) => r.months));
  return { results, totalInterest, totalMonths };
}

const emptyDebt = (): Debt => ({ id: crypto.randomUUID(), name: "", balance: "", rate: "", minPayment: "" });

export default function DebtSnowballCalc() {
  const [debts, setDebts] = useState<Debt[]>([
    { id: "1", name: "Credit Card", balance: "5000", rate: "24", minPayment: "100" },
    { id: "2", name: "Car Loan", balance: "12000", rate: "6.5", minPayment: "250" },
  ]);
  const [extraPayment, setExtraPayment] = useState("200");
  const [method, setMethod] = useState<"snowball" | "avalanche">("snowball");

  const addDebt = () => setDebts((prev) => [...prev, emptyDebt()]);
  const removeDebt = (id: string) => setDebts((prev) => prev.filter((d) => d.id !== id));
  const updateDebt = (id: string, field: keyof Debt, value: string) => {
    setDebts((prev) => prev.map((d) => (d.id === id ? { ...d, [field]: value } : d)));
  };

  const validDebts = useMemo(
    () =>
      debts
        .map((d) => ({
          name: d.name || "Unnamed Debt",
          balance: parseFloat(d.balance) || 0,
          rate: parseFloat(d.rate) || 0,
          minPayment: parseFloat(d.minPayment) || 0,
        }))
        .filter((d) => d.balance > 0 && d.minPayment > 0),
    [debts]
  );

  const snowballResult = useMemo(
    () => (validDebts.length > 0 ? simulatePayoff(validDebts, parseFloat(extraPayment) || 0, "snowball") : null),
    [validDebts, extraPayment]
  );

  const avalancheResult = useMemo(
    () => (validDebts.length > 0 ? simulatePayoff(validDebts, parseFloat(extraPayment) || 0, "avalanche") : null),
    [validDebts, extraPayment]
  );

  const activeResult = method === "snowball" ? snowballResult : avalancheResult;
  const otherResult = method === "snowball" ? avalancheResult : snowballResult;
  const savings = otherResult && activeResult ? activeResult.totalInterest - otherResult.totalInterest : 0;
  const monthDiff = otherResult && activeResult ? activeResult.totalMonths - otherResult.totalMonths : 0;

  return (
    <div className="space-y-8">
      {/* Method toggle */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Choose Your Strategy</h2>
        <div className="grid grid-cols-2 gap-3">
          {(["snowball", "avalanche"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                method === m
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="font-semibold text-slate-900 capitalize mb-1">{m}</div>
              <div className="text-xs text-slate-500">
                {m === "snowball"
                  ? "Pay smallest balance first. Faster wins, better motivation."
                  : "Pay highest interest first. Saves the most money overall."}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Debt inputs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Your Debts</h2>
          <button
            onClick={addDebt}
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Debt
          </button>
        </div>

        <div className="space-y-4">
          {/* Column headers */}
          <div className="hidden sm:grid sm:grid-cols-4 gap-3 text-xs font-medium text-slate-400 uppercase tracking-wider px-1">
            <span>Name</span><span>Balance</span><span>Interest Rate</span><span>Min Payment</span>
          </div>
          {debts.map((debt) => (
            <div key={debt.id} className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
              <input
                type="text"
                placeholder="Credit Card"
                value={debt.name}
                onChange={(e) => updateDebt(debt.id, "name", e.target.value)}
                className="px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                <input
                  type="number"
                  placeholder="5000"
                  value={debt.balance}
                  onChange={(e) => updateDebt(debt.id, "balance", e.target.value)}
                  className="w-full pl-7 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="24"
                  value={debt.rate}
                  onChange={(e) => updateDebt(debt.id, "rate", e.target.value)}
                  className="w-full pr-8 pl-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">%</span>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                  <input
                    type="number"
                    placeholder="100"
                    value={debt.minPayment}
                    onChange={(e) => updateDebt(debt.id, "minPayment", e.target.value)}
                    className="w-full pl-7 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                </div>
                {debts.length > 1 && (
                  <button
                    onClick={() => removeDebt(debt.id)}
                    className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <label className="block text-sm font-medium text-slate-700 mb-2">Extra Monthly Payment</label>
          <div className="relative max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
            <input
              type="number"
              value={extraPayment}
              onChange={(e) => setExtraPayment(e.target.value)}
              placeholder="200"
              className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900"
            />
          </div>
          <p className="mt-1 text-xs text-slate-400">Amount above minimums you can put toward debt each month</p>
        </div>
      </div>

      {/* Results */}
      {activeResult && validDebts.length > 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-emerald-500 text-white rounded-2xl p-6 text-center">
              <p className="text-emerald-100 text-sm font-medium mb-1">Debt-Free Date</p>
              <p className="text-2xl font-bold">{addMonths(new Date(), activeResult.totalMonths)}</p>
              <p className="text-emerald-200 text-sm mt-1">{activeResult.totalMonths} months</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Total Interest Paid</p>
              <p className="text-2xl font-bold text-red-600">{fmt(activeResult.totalInterest)}</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Total Debt</p>
              <p className="text-2xl font-bold text-slate-900">{fmt(validDebts.reduce((s, d) => s + d.balance, 0))}</p>
            </div>
          </div>

          {/* Per-debt payoff order */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Payoff Order ({method})</h3>
            <div className="space-y-3">
              {activeResult.results
                .slice()
                .sort((a, b) => a.months - b.months)
                .map((r, i) => (
                  <div key={r.name} className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="font-medium text-slate-900">{r.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">{r.payoffDate}</p>
                      <p className="text-xs text-slate-400">{r.months} months - {fmt(r.totalInterest)} interest</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Strategy comparison */}
          {savings !== 0 && (
            <div className={`rounded-xl p-4 text-sm ${savings < 0 ? "bg-emerald-50 border border-emerald-200 text-emerald-800" : "bg-blue-50 border border-blue-200 text-blue-800"}`}>
              {savings < 0 ? (
                <>The <strong>avalanche</strong> method saves you <strong>{fmt(Math.abs(savings))}</strong> in interest and gets you debt-free <strong>{Math.abs(monthDiff)} month{Math.abs(monthDiff) !== 1 ? "s" : ""} faster</strong> than the snowball method.</>
              ) : (
                <>The <strong>snowball</strong> method gives you faster early wins but costs <strong>{fmt(savings)}</strong> more in interest vs. the avalanche method.</>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400">
          <div className="text-4xl mb-3">❄️</div>
          <p className="font-medium">Add your debts above to see your payoff plan</p>
        </div>
      )}
    </div>
  );
}
