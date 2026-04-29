# Technical SEO Checklist: QuickFinance Tools

Last updated: 2026-04-29

---

## Per-Post Checklist Template

Use this checklist for every new post before marking as published.

### Content Quality
- [ ] Title tag is 50-60 characters and contains primary keyword (front-loaded if possible)
- [ ] Meta description is 150-155 characters with primary keyword and a clear value proposition
- [ ] URL slug is short, keyword-rich, no stop words
- [ ] H1 is unique, contains primary keyword naturally
- [ ] Only one H1 on the page
- [ ] H2s follow logical hierarchy, each targets a secondary keyword or searcher question
- [ ] Primary keyword appears in first 100 words of body copy
- [ ] No keyword stuffing (read aloud - sounds natural)
- [ ] Every sentence answers a question or provides evidence
- [ ] No "In this article we will discuss..." openers
- [ ] No em dashes anywhere in the content
- [ ] No filler paragraphs

### E-E-A-T
- [ ] At least one specific data point with cited source
- [ ] 2-4 external links to authoritative sources (IRS, academic, gov.uk, etc.)
- [ ] Author attributed in frontmatter (QuickFinance Tools organization)
- [ ] datePublished and dateModified in JSON-LD match actual dates

### Internal Linking
- [ ] Minimum 3 internal links with keyword-rich anchor text
- [ ] Most important internal link appears in first 200 words
- [ ] Anchor text is descriptive (not "click here" or "read more")
- [ ] CTA block links to primary calculator with clear action text

### Schema Markup
- [ ] Article JSON-LD present with headline, description, datePublished, dateModified, author, publisher, url, mainEntityOfPage
- [ ] Breadcrumb JSON-LD present with correct 3-level hierarchy (Home > Blog > Post)
- [ ] FAQ JSON-LD present if page contains FAQ section
- [ ] HowTo JSON-LD present if page contains numbered step instructions

### Technical
- [ ] Canonical URL correct and matches the page URL exactly
- [ ] Open Graph tags present (title, description)
- [ ] Page added to app/sitemap.ts with correct lastModified date
- [ ] Post added to app/blog/page.tsx posts array with correct slug, title, description, date, readTime, tag
- [ ] No broken internal links

### Post-Publication
- [ ] URL submitted to Google Search Console for indexing
- [ ] Internal links from relevant existing posts updated to point to this new post
- [ ] Content cluster map updated with status "Published"
- [ ] Performance notes column added after 30 days

---

## Audit Status: New Blog Posts (2026-04-29)

| Post | Title OK | Meta OK | H2s OK | Internal Links | Schema | Sitemap | Blog Index |
|------|----------|---------|--------|----------------|--------|---------|------------|
| compound-interest-monthly-contributions | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| savings-goal-calculator-guide | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| self-employment-tax-deduction-guide | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| fire-number-calculator-guide | [x] | [x] | [x] | [x] | [x] | [x] | [x] |
| gig-worker-budget-guide | [x] | [x] | [x] | [x] | [x] | [x] | [x] |

## Audit Status: Existing Pages

| Page | Last Reviewed | Backfill Needed |
|------|--------------|-----------------|
| /blog/freelancer-quarterly-taxes-guide | 2026-04-29 | Add link to self-employment-tax-deduction-guide [DONE] |
| /blog/debt-snowball-vs-avalanche | 2026-04-29 | Add link to gig-worker-budget-guide [DONE] |
| /blog/how-much-emergency-fund-freelancer | 2026-04-29 | Add link to gig-worker-budget-guide [DONE] |
| /calculators/compound-interest | 2026-04-15 | Consider adding blog link to fire-number-calculator-guide |
| /calculators/freelancer-tax | 2026-04-15 | Consider adding blog link to self-employment-tax-deduction-guide |

---

## Title Tag Length Reference

| Post | Title | Chars |
|------|-------|-------|
| compound-interest-monthly-contributions | Compound Interest With Monthly Contributions: How It Works | 57 |
| savings-goal-calculator-guide | Savings Goal Calculator: How to Hit Any Target (Guide) | 53 |
| self-employment-tax-deduction-guide | Self-Employment Tax Deductions: The Complete 2026 List | 54 |
| fire-number-calculator-guide | FIRE Number Calculator: How to Find Your Retirement Target | 57 |
| gig-worker-budget-guide | Gig Worker Budget Guide: How to Manage Variable Income | 53 |
