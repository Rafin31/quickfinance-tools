import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/finance-calculators/interest-calculator",
        destination: "/calculators/compound-interest",
        permanent: true,
      },
      {
        source: "/finance-calculators/tax-calculator",
        destination: "/calculators/freelancer-tax",
        permanent: true,
      },
      {
        source: "/finance-calculators/loan-eligibility-calculator",
        destination: "/calculators/debt-snowball",
        permanent: true,
      },
      {
        source: "/finance-calculators/ppf-calculator",
        destination: "/",
        permanent: true,
      },
      {
        source: "/finance-calculators/stp-calculator",
        destination: "/",
        permanent: true,
      },
      {
        source: "/finance-calculators/equity-scheme-calculator",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
