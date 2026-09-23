# Test Cases - Oshi Beauty Web Application

## 1. STLC Phases Mapped to Oshi Beauty

| Phase | Activity in Oshi Beauty |
|-------|------------------------|
| **Requirement Analysis** | Review the assignment features: product listing, cart, checkout, dark mode |
| **Test Planning** | Written in `TestPlan.md` — scope, schedule, quality model |
| **Test Case Design** | This document |
| **Test Execution** | Manual + Vitest + Playwright runs |
| **Defect Reporting** | Bugs logged in GitHub Issues |
| **Test Closure** | Final QA Report + SonarQube summary |

---

## 2. Test Cases

### TC-01: Homepage loads correctly

| Field | Value |
|-------|-------|
| **ID** | TC-01 |
| **Description** | Verify homepage loads with hero and product grid |
| **Preconditions** | Dev server running at http://localhost:5173 |
| **Steps** | 1. Open http://localhost:5173 <br> 2. Wait for load |
| **Expected Result** | Hero text "The Essence of Pure Radiance", products visible |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-02: Skincare page loads products from DummyJSON

| Field | Value |
|-------|-------|
| **ID** | TC-02 |
| **Description** | Verify skincare products load |
| **Preconditions** | Internet available |
| **Steps** | 1. Navigate to /skincare <br> 2. Observe product grid |
| **Expected Result** | Products shown with image, name, price, rating |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-03: Click product to view details

| Field | Value |
|-------|-------|
| **ID** | TC-03 |
| **Description** | Product detail page opens on click |
| **Preconditions** | On skincare page |
| **Steps** | 1. Click any product card |
| **Expected Result** | URL becomes /product/:id and correct product info shown |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-04: Add to cart from product detail

| Field | Value |
|-------|-------|
| **ID** | TC-04 |
| **Description** | Adding a product shows confirmation |
| **Preconditions** | On product detail page |
| **Steps** | 1. Click "Add to Cart" |
| **Expected Result** | Confirm dialog appears; on OK, cart badge increments |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-05: Cart persists after page refresh

| Field | Value |
|-------|-------|
| **ID** | TC-05 |
| **Description** | Cart data persists via localStorage |
| **Preconditions** | At least 1 item in cart |
| **Steps** | 1. Add item <br> 2. Refresh page |
| **Expected Result** | Cart still shows the item |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-06: Quantity update in cart

| Field | Value |
|-------|-------|
| **ID** | TC-06 |
| **Description** | + / - buttons update item quantity |
| **Preconditions** | Item in cart |
| **Steps** | 1. Click + twice <br> 2. Click - once |
| **Expected Result** | Quantity goes 1 → 2 → 3 → 2; totals update |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-07: Remove item from cart

| Field | Value |
|-------|-------|
| **ID** | TC-07 |
| **Description** | Remove button deletes the item |
| **Preconditions** | Item in cart |
| **Steps** | 1. Click "Remove" |
| **Expected Result** | Item removed; subtotal recalculated |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-08: Bundle discount applied

| Field | Value |
|-------|-------|
| **ID** | TC-08 |
| **Description** | Skincare bundle applies 15% discount |
| **Preconditions** | On Offers page |
| **Steps** | 1. Click "Shop Now" on Skincare Bundle <br> 2. Confirm dialog |
| **Expected Result** | Bundle added as one item with 15% discount applied |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-09: Dark mode toggle

| Field | Value |
|-------|-------|
| **ID** | TC-09 |
| **Description** | Toggle switches theme and persists |
| **Preconditions** | Homepage loaded |
| **Steps** | 1. Click moon/sun icon <br> 2. Refresh page |
| **Expected Result** | Dark theme active and stays after refresh |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-10: Search returns relevant products

| Field | Value |
|-------|-------|
| **ID** | TC-10 |
| **Description** | Search filters products from DummyJSON |
| **Preconditions** | Search page opened |
| **Steps** | 1. Type "lipstick" |
| **Expected Result** | Only matching beauty products shown |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-11: Checkout form validation

| Field | Value |
|-------|-------|
| **ID** | TC-11 |
| **Description** | Empty form is rejected |
| **Preconditions** | On checkout page with items in cart |
| **Steps** | 1. Click "Proceed to Payment" without filling |
| **Expected Result** | Alert appears asking to fill in required fields |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

### TC-12: Card payment page navigation

| Field | Value |
|-------|-------|
| **ID** | TC-12 |
| **Description** | Payment page shows after card selection |
| **Preconditions** | Checkout filled with card payment selected |
| **Steps** | 1. Click "Proceed to Payment" |
| **Expected Result** | Card payment page appears |
| **Actual Result** | Pass |
| **Status** | ✅ Pass |

---

## 3. Equivalence Partitioning

### Field 1: Search Input

| Partition | Input | Expected |
|-----------|-------|----------|
| Valid | "lipstick" | Matching products returned |
| Valid | "serum" | Matching products returned |
| Invalid | "@@@@@" | No results, "No products found" message |
| Invalid | "" (empty) | Suggestions shown |

---

### Field 2: Quantity Selector

| Partition | Input | Expected |
|-----------|-------|----------|
| Valid | 1–99 | Accepted |
| Invalid | 0 | Not allowed (min is 1) |
| Invalid | Negative | Not allowed |
| Invalid | 100+ | Limit reached |

---

### Field 3: Checkout Email

| Partition | Input | Expected |
|-----------|-------|----------|
| Valid | "user@example.com" | Accepted |
| Valid | "a@b.co" | Accepted |
| Invalid | "user.com" | Rejected |
| Invalid | "" (empty) | Rejected |

---

## 4. Boundary Value Analysis

### Field: Quantity Selector (1–99)

| Test | Value | Expected |
|------|-------|----------|
| Min-1 | 0 | Rejected |
| Min | 1 | Accepted |
| Min+1 | 2 | Accepted |
| Max-1 | 98 | Accepted |
| Max | 99 | Accepted |
| Max+1 | 100 | Rejected |

---

## 5. Decision Table: Bundle Discount Logic

### Conditions:
- C1: Is the user on the Offers page?
- C2: Did the user click "Shop Now" on a bundle?
- C3: Did the user confirm the dialog?

### Actions:
- A1: Add bundle to cart
- A2: Apply discount
- A3: No action

| Rule | C1 | C2 | C3 | A1 | A2 | A3 |
|------|----|----|----|----|----|----|
| 1 | Y | Y | Y | ✅ | ✅ | — |
| 2 | Y | Y | N | — | — | ✅ |
| 3 | Y | N | — | — | — | ✅ |
| 4 | N | — | — | — | — | ✅ |

**Conclusion:** Bundle is only added and discount applied when all three conditions are true.