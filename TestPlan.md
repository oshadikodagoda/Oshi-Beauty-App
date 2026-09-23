# Test Plan - Oshi Beauty Web Application

## 1. Introduction

This Test Plan describes the testing approach, scope, objectives, and schedule for the Oshi Beauty Single Page Application (SPA). The system was developed using Vue 3, TypeScript, and Tailwind CSS as part of the EC3404 GUI Programming module and is now being tested as part of EC4206 Software Testing and Quality Assurance.

---

## 2. Test Objectives

The main objectives of this testing effort are:

1. Verify that all core features work as intended.
2. Validate the shopping cart, bundle discount, and checkout flows.
3. Ensure the application is responsive and behaves well under different conditions.
4. Identify defects in functionality, usability, and reliability.
5. Measure code quality using SonarQube and test coverage tools.

---

## 3. Scope

### 3.1 In Scope

The following features will be tested:

| Feature | Description |
|---------|-------------|
| Homepage | Hero section, product grid, newsletter |
| Skincare Page | Product listing, sorting |
| Makeup Page | Product listing, sorting |
| Fragrance Page | Product listing, sorting |
| Search Page | Real-time search, suggestions |
| Product Detail | Product info, quantity selector, add to cart |
| Shopping Cart | Add, remove, update quantity |
| Bundle Offers | Discount calculation (15%, 20%, 25%, 32%) |
| Checkout | Form validation, payment selection |
| Dark Mode | Theme toggle and persistence |

### 3.2 Out of Scope

- Real payment gateway (currently simulated)
- Backend server (uses DummyJSON public API)
- User authentication backend
- Mobile native app versions

---

## 4. Quality Model (ISO 25010)

The following quality characteristics will be evaluated:

| Characteristic | What We Test |
|----------------|--------------|
| **Functional Suitability** | Do all features work as specified? |
| **Reliability** | Does the cart persist correctly after refresh? |
| **Usability** | Is the UI intuitive? Are buttons/links clear? |
| **Performance Efficiency** | How fast does the app load products? |
| **Security** | Any XSS or insecure data storage risks? |
| **Maintainability** | SonarQube code smells and complexity |
| **Compatibility** | Works on Chrome, Firefox, and mobile view |

---

## 5. Verification vs. Validation

| Type | Description | Example |
|------|-------------|---------|
| **Verification** | "Are we building the product right?" (static checks, code review, unit tests) | Cyclomatic complexity of `cart.ts`, unit tests for `addItem()` |
| **Validation** | "Are we building the right product?" (dynamic, user-focused) | Manual testing of checkout flow, usability review |

---

## 6. Test Environment

| Item | Details |
|------|---------|
| **Browser** | Chrome (latest), Firefox (latest) |
| **OS** | Windows 11 |
| **Node.js** | v24.x |
| **Dev Server** | Vite (`npm run dev`) on `http://localhost:5173` |
| **API** | DummyJSON (https://dummyjson.com) |
| **Test Data** | Products from DummyJSON categories: beauty, skin-care, fragrances |
| **Tools** | Vitest (unit), Playwright (E2E), SonarQube, GitHub Issues |

---

## 7. Test Schedule

| Phase | Activity | Duration |
|-------|----------|----------|
| Week 1 | Test planning, environment setup | 2 days |
| Week 1–2 | Test case design (black-box + white-box) | 3 days |
| Week 2 | Unit tests with Vitest | 2 days |
| Week 2–3 | E2E tests with Playwright | 3 days |
| Week 3 | CI/CD setup (GitHub Actions) | 1 day |
| Week 3 | Performance + security checks | 2 days |
| Week 4 | SonarQube analysis + bug reporting | 2 days |
| Week 4 | Final report and closure | 2 days |

---

## 8. Resources

| Role | Person | Responsibilities |
|------|--------|------------------|
| Test Lead | [Your name] | Test plan, coordination |
| Test Designer | [Your name] | Test cases, black-box/white-box design |
| Test Automator | [Your name] | Playwright, Vitest, GitHub Actions |
| Quality Analyst | [Your name] | SonarQube, defect tracking |

---

## 9. Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| DummyJSON API unavailable | Tests fail | Use mocks / local fallback |
| Time constraints | Incomplete testing | Prioritize core features |
| Missing test environment | Can't run CI | Use GitHub-hosted runners |
| No access to SonarQube server | No metrics | Use SonarCloud free tier |

---

## 10. Deliverables

- Test Plan (this document)
- Test Cases spreadsheet
- Unit tests (`tests/unit/`)
- E2E tests (`tests/e2e/`)
- GitHub Actions workflow (`.github/workflows/test.yml`)
- Bug reports (GitHub Issues)
- SonarQube report
- Final QA Report (PDF)

---

## 11. Exit Criteria

Testing is considered complete when:

- 90%+ of critical test cases pass.
- All high-severity defects are logged and resolved.
- CI pipeline runs successfully on push.
- SonarQube shows code coverage ≥ 60% and no critical issues.