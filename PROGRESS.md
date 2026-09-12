# PROGRESS

## Phase 1: Market Research

**Status: COMPLETE - Awaiting approval to proceed to Phase 2**

**Completed:**
- Researched top 20 trending web tools and niches (USA + Europe, 2024-2025)
- Filtered to top 5 niches by AdSense RPM, keyword difficulty, build time, and search volume trend
- Produced full report at `research/market-analysis.md`
- Identified single tool recommendation with keyword strategy and competitor gap analysis

**Recommendation:** Personal Finance Calculator Hub
- Niche calculators targeting freelancers, gig workers, and Gen Z financial scenarios
- Target keywords: freelancer tax calculator, debt snowball calculator, emergency fund calculator, savings goal calculator, compound interest calculator with monthly contributions
- 20 long-tail keywords mapped with estimated search volumes
- Competitor gaps identified vs. Calculator.net, NerdWallet, Bankrate, and others

**Monthly cost so far: $0**

---

## Phase 2: Build the Tool

**Status: COMPLETE**

- Built with Next.js: 5 calculators (freelancer-tax, debt-snowball, emergency-fund, compound-interest, savings-goal)
- 8 blog posts published under `app/blog/*`
- Legal pages: privacy-policy, terms, about

---

## Phase 3: Deploy

**Status: COMPLETE**

- Live at `www.quickfinance.tools` on Vercel
- Domain purchased directly through Vercel
- Google AdSense script + meta verification tag added

---

## Phase 4: SEO and Ranking

**Status: IN PROGRESS**

**Fixed (2026-09-12):**
- Domain conflict: `www.quickfinance.tools` was squatted by an unrelated Vercel project ("EMI Calculator" site) — resolved via TXT domain verification, now correctly attached to this project
- Canonical domain decided: **www** (not apex) — updated `metadataBase`/`canonical` in [app/layout.tsx](app/layout.tsx), `BASE_URL` in [app/sitemap.ts](app/sitemap.ts), and [app/robots.ts](app/robots.ts) to `https://www.quickfinance.tools`; Vercel apex now 308-redirects to www
- Added 301 redirects in [next.config.ts](next.config.ts) for 6 dead legacy URLs (`/finance-calculators/*` from the old squatted site) and `/contact-us` (never existed)
- GSC snapshot before fix: 6/18 sitemap pages indexed, 23 not indexed (5 reasons: 404s, redirect pages, duplicate/canonical conflicts, 14 "crawled — not indexed")

**Next steps:**
- [ ] Confirm deploy live, spot-check old dead URLs now 301 correctly
- [ ] GSC: click "Validate Fix" on the 404 / redirect / duplicate-canonical issue groups
- [ ] GSC: resubmit `sitemap.xml` under Indexing → Sitemaps
- [ ] Tackle the 14 "crawled — currently not indexed" pages — this is a domain-trust/quality gate, not a bug. Needs:
  - [ ] Backlinks (guest posts, relevant directories, forum/Reddit mentions in finance/freelancer communities)
  - [ ] Denser internal linking — every calculator/blog page should link to 3+ others, no orphans
  - [ ] More original content depth per page (avoid thin-content flags, esp. `/about`)
- [ ] Re-check GSC indexing coverage after ~2-4 weeks

---

## Phase 5: Monetization

**Status: LIVE, awaiting traffic**

- AdSense script installed, meta verification tag added
- Revenue blocked on indexing/traffic (see Phase 4 next steps) — no traffic yet since most pages aren't indexed

---

## Services and Monthly Costs

| Service | Purpose | Monthly Cost |
|---|---|---|
| Vercel (free tier) | Hosting | $0 |
| Domain (TBD) | Custom domain | ~$1/mo amortized |
| Google Analytics 4 | Analytics | $0 |
| Google Search Console | SEO tracking | $0 |
| Google AdSense | Monetization | $0 (revenue share) |

**Total monthly running cost: ~$1/mo (domain amortized)**
