import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <span className="text-emerald-400">$</span>
              <span>QuickFinance</span>
              <span className="text-emerald-400 font-normal text-sm">Tools</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Free personal finance calculators built for freelancers, gig workers, and anyone who wants straight answers about their money.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-white font-semibold mb-4">Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/calculators/freelancer-tax" className="hover:text-emerald-400 transition-colors">Freelancer Tax Calculator</Link></li>
              <li><Link href="/calculators/debt-snowball" className="hover:text-emerald-400 transition-colors">Debt Snowball Calculator</Link></li>
              <li><Link href="/calculators/emergency-fund" className="hover:text-emerald-400 transition-colors">Emergency Fund Calculator</Link></li>
              <li><Link href="/calculators/compound-interest" className="hover:text-emerald-400 transition-colors">Compound Interest Calculator</Link></li>
              <li><Link href="/calculators/savings-goal" className="hover:text-emerald-400 transition-colors">Savings Goal Calculator</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li>
                <a
                  href="https://www.irs.gov/self-employed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  IRS Self-Employed Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {year} QuickFinance Tools. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>Calculators are for educational purposes only.</p>
            <div className="flex gap-3">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
