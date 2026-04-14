"use client";

import Link from "next/link";
import { useState } from "react";

const calculators = [
  { label: "Freelancer Tax", href: "/calculators/freelancer-tax" },
  { label: "Debt Snowball", href: "/calculators/debt-snowball" },
  { label: "Emergency Fund", href: "/calculators/emergency-fund" },
  { label: "Compound Interest", href: "/calculators/compound-interest" },
  { label: "Savings Goal", href: "/calculators/savings-goal" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <span className="text-emerald-500">$</span>
            <span>QuickFinance</span>
            <span className="text-emerald-500 font-normal text-sm bg-emerald-50 px-2 py-0.5 rounded-full">Tools</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setCalcOpen(!calcOpen)}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Calculators
                <svg className={`w-4 h-4 transition-transform ${calcOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {calcOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-2">
                  {calculators.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setCalcOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/blog" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Blog
            </Link>
            <Link
              href="/calculators/freelancer-tax"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Try a Calculator
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-1">
            <p className="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">Calculators</p>
            {calculators.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {c.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 mt-2">
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
