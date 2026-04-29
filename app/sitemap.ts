import { MetadataRoute } from "next";

const BASE_URL = "https://quickfinance.tools";

// Dates pinned to last content update — update when page content changes
const CALC_UPDATED = new Date("2026-04-15");
const BLOG_UPDATED = new Date("2026-04-15");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: CALC_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Calculators
    {
      url: `${BASE_URL}/calculators/freelancer-tax`,
      lastModified: CALC_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/calculators/debt-snowball`,
      lastModified: CALC_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/calculators/emergency-fund`,
      lastModified: CALC_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/calculators/compound-interest`,
      lastModified: CALC_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/calculators/savings-goal`,
      lastModified: CALC_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Blog index
    {
      url: `${BASE_URL}/blog`,
      lastModified: BLOG_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Blog articles
    {
      url: `${BASE_URL}/blog/freelancer-quarterly-taxes-guide`,
      lastModified: new Date("2026-04-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/debt-snowball-vs-avalanche`,
      lastModified: new Date("2026-04-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/how-much-emergency-fund-freelancer`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // New blog articles
    {
      url: `${BASE_URL}/blog/compound-interest-monthly-contributions`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/savings-goal-calculator-guide`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/self-employment-tax-deduction-guide`,
      lastModified: new Date("2026-05-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/fire-number-calculator-guide`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/gig-worker-budget-guide`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Static pages
    {
      url: `${BASE_URL}/about`,
      lastModified: CALC_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Legal pages
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
