import type { Metadata } from "next";
import Link from "next/link";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://quickfinance.tools" },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://quickfinance.tools/terms" },
  ],
};

export const metadata: Metadata = {
  title: "Terms of Service | QuickFinance Tools",
  description:
    "QuickFinance Tools terms of service. Calculators are for educational purposes only. Read our disclaimer, acceptable use policy, and limitation of liability.",
  alternates: {
    canonical: "https://quickfinance.tools/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">Terms of Service</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">Terms of Service</h1>
          <p className="text-sm text-slate-400">Last updated: April 29, 2026</p>
        </div>

        <article className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using QuickFinance Tools (quickfinance.tools), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Educational Purpose Disclaimer</h2>
            <p className="leading-relaxed mb-4">
              All calculators, articles, and content on QuickFinance Tools are provided for educational and informational purposes only. Nothing on this site constitutes financial advice, tax advice, legal advice, or investment advice.
            </p>
            <p className="leading-relaxed mb-4">
              Calculator outputs are estimates based on standard financial formulas and publicly available tax rates. They do not account for your full financial situation, state or local taxes, or jurisdiction-specific rules outside the United States.
            </p>
            <p className="leading-relaxed">
              Always consult a qualified financial advisor, tax professional, or attorney for advice specific to your situation. Tax laws change; always verify current rates with the IRS or a licensed tax professional before making financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Accuracy of Information</h2>
            <p className="leading-relaxed mb-4">
              We strive to keep all information accurate and up to date. Tax rates, contribution limits, and financial figures used in calculators reflect 2026 US federal rates unless explicitly stated otherwise.
            </p>
            <p className="leading-relaxed mb-4">
              References to UK and Canadian tax rules are informational only and do not constitute professional tax guidance for those jurisdictions.
            </p>
            <p className="leading-relaxed">
              QuickFinance Tools makes no guarantee of accuracy for any specific individual's tax situation. We are not responsible for errors in user input or for changes in law that may affect calculator outputs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
            <p className="leading-relaxed mb-4">
              All content on this site, including calculator logic, article text, and design, is the property of QuickFinance Tools. You may use this site for personal, non-commercial purposes.
            </p>
            <p className="leading-relaxed">
              You may not reproduce, distribute, or republish any content from this site without prior written permission, except for brief quotations with attribution and a link back to the original page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed mb-4">
              QuickFinance Tools is not liable for any financial decisions made based on information or calculator outputs from this site. Use of this site is at your own risk.
            </p>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, QuickFinance Tools disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceptable Use</h2>
            <p className="leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Scrape, crawl, or use automated tools to access the site at high volume</li>
              <li>Attempt to interfere with the site's operation or security</li>
              <li>Use the site for any unlawful purpose</li>
              <li>Reproduce calculator outputs for commercial resale without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Links to External Sites</h2>
            <p className="leading-relaxed">
              This site contains links to external resources including the IRS, HMRC, Canada Revenue Agency, and other authoritative sources. These links are provided for reference only. QuickFinance Tools is not responsible for the content, accuracy, or availability of external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
            <p className="leading-relaxed">
              These Terms of Service are governed by and construed in accordance with applicable law. Any disputes arising from use of this site will be resolved in accordance with applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to These Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes take effect when posted to this page. The "Last updated" date at the top reflects when changes were last made. Continued use of the site after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
            <p className="leading-relaxed">
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:asifhossain976@gmail.com" className="text-emerald-600 underline">asifhossain976@gmail.com</a>.
            </p>
          </section>
        </article>

        <div className="mt-12 text-sm text-slate-500">
          <Link href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</Link>
          <span className="mx-2">·</span>
          <Link href="/" className="text-emerald-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </>
  );
}
