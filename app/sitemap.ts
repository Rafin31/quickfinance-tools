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
    // Static pages
    {
      url: `${BASE_URL}/about`,
      lastModified: CALC_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
