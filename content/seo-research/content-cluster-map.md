# Content Cluster Map: QuickFinance Tools

Last updated: 2026-04-29

---

## Cluster Architecture

Hub-and-spoke content model:
- **Pillar pages** = calculator pages (high-converting, transactional intent)
- **Cluster posts** = blog articles (informational intent, funnel visitors to calculators)
- Internal links flow from cluster posts INTO pillar calculator pages

---

## Pillar Pages (Calculator URLs)

| Pillar Page | URL | Primary Keyword | Status |
|-------------|-----|-----------------|--------|
| Freelancer Tax Calculator | /calculators/freelancer-tax | freelancer tax calculator | Published |
| Debt Snowball Calculator | /calculators/debt-snowball | debt snowball calculator | Published |
| Emergency Fund Calculator | /calculators/emergency-fund | emergency fund calculator | Published |
| Compound Interest Calculator | /calculators/compound-interest | compound interest calculator with monthly contributions | Published |
| Savings Goal Calculator | /calculators/savings-goal | savings goal calculator | Published |

---

## Cluster Posts (Blog Articles)

### Tax Cluster (linked to /calculators/freelancer-tax)

| Post | URL | Primary Keyword | Status | Links To |
|------|-----|-----------------|--------|----------|
| Quarterly Taxes Guide | /blog/freelancer-quarterly-taxes-guide | quarterly estimated taxes freelancer | Published | freelancer-tax, emergency-fund, savings-goal |
| Self-Employment Tax Deductions | /blog/self-employment-tax-deduction-guide | self employment tax deduction | Published | freelancer-tax, savings-goal, freelancer-quarterly-taxes-guide |

### Debt Cluster (linked to /calculators/debt-snowball)

| Post | URL | Primary Keyword | Status | Links To |
|------|-----|-----------------|--------|----------|
| Snowball vs Avalanche | /blog/debt-snowball-vs-avalanche | debt snowball vs avalanche | Published | debt-snowball, emergency-fund, savings-goal |

### Savings / Investment Cluster

| Post | URL | Primary Keyword | Status | Links To |
|------|-----|-----------------|--------|----------|
| Emergency Fund Freelancer | /blog/how-much-emergency-fund-freelancer | emergency fund freelancer | Published | emergency-fund, savings-goal, freelancer-tax |
| Compound Interest Guide | /blog/compound-interest-monthly-contributions | compound interest with monthly contributions | Published | compound-interest, savings-goal, how-much-emergency-fund-freelancer |
| Savings Goal Guide | /blog/savings-goal-calculator-guide | savings goal calculator guide | Published | savings-goal, compound-interest, how-much-emergency-fund-freelancer |
| FIRE Number Guide | /blog/fire-number-calculator-guide | FIRE number calculator | Published | compound-interest, savings-goal, emergency-fund |

### Gig Economy Cluster (hub post linking to all calculators)

| Post | URL | Primary Keyword | Status | Links To |
|------|-----|-----------------|--------|----------|
| Gig Worker Budget Guide | /blog/gig-worker-budget-guide | gig worker budget | Published | freelancer-tax, emergency-fund, savings-goal, debt-snowball, self-employment-tax-deduction-guide, how-much-emergency-fund-freelancer |

---

## Internal Link Map

### Which posts link to which calculators

```
/blog/freelancer-quarterly-taxes-guide
  -> /calculators/freelancer-tax (primary CTA)
  -> /calculators/emergency-fund
  -> /calculators/savings-goal
  -> /blog/self-employment-tax-deduction-guide [BACKFILL]

/blog/debt-snowball-vs-avalanche
  -> /calculators/debt-snowball (primary CTA)
  -> /calculators/emergency-fund
  -> /calculators/savings-goal
  -> /blog/gig-worker-budget-guide [BACKFILL]

/blog/how-much-emergency-fund-freelancer
  -> /calculators/emergency-fund (primary CTA)
  -> /calculators/savings-goal
  -> /calculators/freelancer-tax
  -> /blog/gig-worker-budget-guide [BACKFILL]

/blog/compound-interest-monthly-contributions
  -> /calculators/compound-interest (primary CTA)
  -> /calculators/savings-goal
  -> /blog/how-much-emergency-fund-freelancer

/blog/savings-goal-calculator-guide
  -> /calculators/savings-goal (primary CTA)
  -> /calculators/compound-interest
  -> /blog/how-much-emergency-fund-freelancer

/blog/self-employment-tax-deduction-guide
  -> /calculators/freelancer-tax (primary CTA)
  -> /calculators/savings-goal
  -> /blog/freelancer-quarterly-taxes-guide

/blog/fire-number-calculator-guide
  -> /calculators/compound-interest (primary CTA)
  -> /calculators/savings-goal
  -> /calculators/emergency-fund

/blog/gig-worker-budget-guide
  -> /calculators/freelancer-tax
  -> /calculators/emergency-fund
  -> /calculators/savings-goal
  -> /calculators/debt-snowball
  -> /blog/self-employment-tax-deduction-guide
  -> /blog/how-much-emergency-fund-freelancer
```

### Reverse map: which posts should link TO each article

```
-> /blog/compound-interest-monthly-contributions
   From: fire-number-calculator-guide, gig-worker-budget-guide (via calculator links), savings-goal-calculator-guide

-> /blog/savings-goal-calculator-guide
   From: compound-interest-monthly-contributions, fire-number-calculator-guide

-> /blog/self-employment-tax-deduction-guide
   From: freelancer-quarterly-taxes-guide [BACKFILL], gig-worker-budget-guide

-> /blog/fire-number-calculator-guide
   From: compound-interest-monthly-contributions, savings-goal-calculator-guide

-> /blog/gig-worker-budget-guide
   From: how-much-emergency-fund-freelancer [BACKFILL], debt-snowball-vs-avalanche [BACKFILL]
```

---

## Publication Status Tracker

| Content Item | Status | Priority | Notes |
|--------------|--------|----------|-------|
| compound-interest-monthly-contributions | Published | 1 | 2026-04-29 |
| savings-goal-calculator-guide | Published | 2 | 2026-04-29 |
| self-employment-tax-deduction-guide | Published | 3 | 2026-05-06 |
| fire-number-calculator-guide | Published | 4 | 2026-05-13 |
| gig-worker-budget-guide | Published | 5 | 2026-05-20 |
| privacy-policy page | Published | AdSense blocker | 2026-04-29 |
| terms page | Published | AdSense blocker | 2026-04-29 |

---

## Next Content Expansion (Phase 5)

| Post idea | Target keyword | Priority |
|-----------|---------------|----------|
| 1099 vs W2 calculator | 1099 vs W2 calculator | High |
| FIRE number calculator tool | fire number calculator tool | High |
| Net worth tracker | net worth calculator | Medium |
| Student loan payoff calculator | student loan payoff calculator | Medium |
| Budget percentage calculator | budget percentage calculator | Low |
