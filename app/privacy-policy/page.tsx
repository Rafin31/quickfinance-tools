import type { Metadata } from "next";
import Link from "next/link";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://quickfinance.tools" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://quickfinance.tools/privacy-policy" },
  ],
};

export const metadata: Metadata = {
  title: "Privacy Policy | QuickFinance Tools",
  description:
    "QuickFinance Tools privacy policy. All calculations run client-side. No personal data is collected. Learn what Vercel Analytics tracks and your rights.",
  alternates: {
    canonical: "https://quickfinance.tools/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">Privacy Policy</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">Privacy Policy</h1>
          <p className="text-sm text-slate-400">Last updated: April 29, 2026</p>
        </div>

        <article className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="leading-relaxed mb-4">
              QuickFinance Tools provides free financial calculators for educational purposes. All calculations run entirely in your browser using client-side JavaScript. No financial data you enter into any calculator is transmitted to our servers or stored anywhere.
            </p>
            <p className="leading-relaxed">
              We do not require account creation, do not collect email addresses, and do not store any personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We collect anonymous, aggregated usage data through Vercel Analytics. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Page views and navigation paths</li>
              <li>Browser type and device category (desktop, mobile, tablet)</li>
              <li>Country-level location (not city or address level)</li>
              <li>Referral source (e.g., search engine, direct)</li>
            </ul>
            <p className="leading-relaxed">
              This data is aggregated and cannot be used to identify individual users. We use it solely to understand which calculators and articles are most useful so we can improve the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
            <p className="leading-relaxed mb-4">
              Vercel Analytics does not use cookies and does not track users across sessions or sites. No tracking cookies are set by our analytics system.
            </p>
            <p className="leading-relaxed">
              When Google AdSense advertising is activated on this site, Google will set advertising cookies to serve relevant ads based on your browsing history. You can opt out of personalized advertising through{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Google's ad settings</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Google AdSense and Advertising</h2>
            <p className="leading-relaxed mb-4">
              This site displays advertisements provided by Google AdSense. Google uses cookies and similar technologies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site and other sites on the Internet.
            </p>
            <p className="leading-relaxed mb-4">
              You may opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Google's Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies by visiting the{" "}
              <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Network Advertising Initiative opt-out page</a>.
            </p>
            <p className="leading-relaxed">
              For more information on how Google handles data, see{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Google's Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
            <p className="leading-relaxed mb-3">This site uses the following third-party services:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Vercel</strong> - Hosting and analytics.{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Vercel Privacy Policy</a>
              </li>
              <li>
                <strong>Google AdSense</strong> - Display advertising.{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Google Privacy Policy</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
            <p className="leading-relaxed mb-4">
              <strong>EU and UK users (GDPR):</strong> You have the right to access, correct, or delete any personal data we hold about you. Because we do not collect personally identifiable information, there is no personal data to request. For data held by third-party services (Google, Vercel), please contact those services directly using the links above.
            </p>
            <p className="leading-relaxed">
              <strong>California users (CCPA):</strong> We do not sell personal information. We do not share personal information with third parties for their direct marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
            <p className="leading-relaxed">
              Questions about this Privacy Policy? Contact us at{" "}
              <a href="mailto:asifhossain976@gmail.com" className="text-emerald-600 underline">asifhossain976@gmail.com</a>.
            </p>
          </section>
        </article>

        <div className="mt-12 text-sm text-slate-500">
          <Link href="/terms" className="text-emerald-600 hover:underline">Terms of Service</Link>
          <span className="mx-2">·</span>
          <Link href="/" className="text-emerald-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </>
  );
}
