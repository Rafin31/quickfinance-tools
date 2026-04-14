"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

interface YearData {
  year: number;
  balance: number;
  contributions: number;
  interest: number;
}

export default function CompoundInterestCalc() {
  const [principal, setPrincipal] = useState("5000");
  const [monthlyContribution, setMonthlyContribution] = useState("200");
  const [annualRate, setAnnualRate] = useState("7");
  const [years, setYears] = useState("20");
  const [compoundFreq, setCompoundFreq] = useState("12");

  const results = useMemo(() => {
    const P = parseFloat(principal) || 0;
    const pmt = parseFloat(monthlyContribution) || 0;
    const r = (parseFloat(annualRate) || 0) / 100;
    const t = parseFloat(years) || 0;
    const n = parseFloat(compoundFreq) || 12;

    if (t <= 0) return null;

    const yearData: YearData[] = [];
    let balance = P;
    let totalContributions = P;

    for (let y = 1; y <= t; y++) {
      const startBalance = balance;
      // Apply compound interest and monthly contributions month by month
      for (let m = 0; m < 12; m++) {
        balance = balance * (1 + r / n) + pmt;
      }
      totalContributions += pmt * 12;
      yearData.push({
        year: y,
        balance: balance,
        contributions: totalContributions,
        interest: balance - totalContributions,
      });
    }

    const finalBalance = balance;
    const totalContrib = P + pmt * 12 * t;
    const totalInterestEarned = finalBalance - totalContrib;

    return { finalBalance, totalContrib, totalInterestEarned, yearData };
  }, [principal, monthlyContribution, annualRate, years, compoundFreq]);

  const maxBalance = results ? Math.max(...results.yearData.map((d) => d.balance)) : 1;

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Investment Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Starting Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="5000"
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900" min="0" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Contribution</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="200"
                className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900" min="0" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Annual Interest Rate</label>
            <div className="relative">
              <input type="number" value={annualRate} onChange={(e) => setAnnualRate(e.target.value)} placeholder="7"
                className="w-full pl-4 pr-8 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900" min="0" max="100" step="0.1" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">S&P 500 historical average: ~10% nominal, ~7% inflation-adjusted</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Time Period</label>
            <div className="relative">
              <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="20"
                className="w-full pl-4 pr-16 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900" min="1" max="50" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">years</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Compounding Frequency</label>
            <select value={compoundFreq} onChange={(e) => setCompoundFreq(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-900 bg-white">
              <option value="365">Daily</option>
              <option value="12">Monthly</option>
              <option value="4">Quarterly</option>
              <option value="1">Annually</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {results ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-emerald-500 text-white rounded-2xl p-6 text-center">
              <p className="text-emerald-100 text-sm font-medium mb-1">Final Balance</p>
              <p className="text-3xl font-bold">{fmt(results.finalBalance)}</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Total Contributions</p>
              <p className="text-3xl font-bold text-slate-900">{fmt(results.totalContrib)}</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-slate-500 text-sm font-medium mb-1">Interest Earned</p>
              <p className="text-3xl font-bold text-emerald-600">{fmt(results.totalInterestEarned)}</p>
            </div>
          </div>

          {/* Growth chart (visual bar chart) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Balance Growth Over Time</h3>
            <div className="space-y-2">
              {results.yearData
                .filter((_, i) => i % Math.max(1, Math.floor(results.yearData.length / 10)) === 0 || i === results.yearData.length - 1)
                .map((d) => (
                  <div key={d.year} className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-12 shrink-0">Yr {d.year}</span>
                    <div className="flex-1 flex h-7 rounded-lg overflow-hidden bg-slate-100">
                      <div
                        className="bg-slate-300 h-full transition-all"
                        style={{ width: `${(d.contributions / maxBalance) * 100}%` }}
                      ></div>
                      <div
                        className="bg-emerald-400 h-full transition-all"
                        style={{ width: `${(Math.max(0, d.interest) / maxBalance) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-semibold text-slate-700 w-24 text-right shrink-0">{fmt(d.balance)}</span>
                  </div>
                ))}
            </div>
            <div className="flex gap-4 mt-4 text-xs text-slate-500">
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-slate-300 rounded"></span>Contributions</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-emerald-400 rounded"></span>Interest earned</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-400">
          <div className="text-4xl mb-3">📈</div>
          <p className="font-medium">Enter your details above to see the power of compound interest</p>
        </div>
      )}
    </div>
  );
}
