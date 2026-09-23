# White-Box Testing - Oshi Beauty Web Application

## 1. Target Function

The core function selected for white-box analysis is `addBundle()` in `src/stores/cart.ts`. This function handles adding a bundle of products to the shopping cart with a discount.

---

## 2. Cyclomatic Complexity Calculation

### Method: McCabe's Cyclomatic Complexity

**Formula:** V(G) = E − N + 2P
- E = Number of edges
- N = Number of nodes
- P = Number of connected components (usually 1)

**Alternative Formula (Decision-based):**
V(G) = D + 1
- D = Number of decision points (if, else, loops, switch cases)

---

### Function: `addBundle()`

```typescript
addBundle(bundle: { items: any[], discountPercentage: number, bundleName: string }) {
  const bundleId = Date.now();
  const originalTotal = bundle.items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
    return sum + price;
  }, 0);
  const discountAmount = originalTotal * (bundle.discountPercentage / 100);
  const finalPrice = originalTotal - discountAmount;

  const bundleItem = {
    id: bundleId,
    title: bundle.bundleName,
    price: `LKR ${finalPrice.toLocaleString()}`,
    image: bundle.items[0]?.image || '',
    brand: 'Bundle Deal',
    quantity: 1,
    isBundle: true,
    bundleItems: bundle.items,
    discount: bundle.discountPercentage
  };

  this.items.push(bundleItem);
  this.saveToLocalStorage();
}

## 3. Statement Coverage

Statement coverage aims to execute every line of the function at least once.

### Test Cases for Statement Coverage

| Test ID | Input | Statements Covered |
|---------|-------|--------------------|
| ST-01 | Valid bundle with 2 items | All statements executed |
| ST-02 | Bundle with empty image URL | Fallback `|| ''` executed |
| ST-03 | Bundle with 0 items | `reduce` returns 0, but push still executes |

**Target:** 100% statement coverage achieved by running ST-01, ST-02, and ST-03.

## 4. Branch Coverage

| Test ID | Branch | Condition | Expected Outcome |
|---------|--------|-----------|------------------|
| BR-01 | image truthy | Item has image | Uses first item's image |
| BR-02 | image falsy | No image | Uses fallback `''` |
| BR-03 | reduce runs 0 times | Empty items | originalTotal = 0 |
| BR-04 | reduce runs multiple times | 2+ items | originalTotal = sum |

**Target:** 100% branch coverage.

## 5. Path Coverage

- Path 1: Items array with image
- Path 2: Items array without image
- Path 3: Empty items
- Path 4: Multiple items

**Total paths:** 4

## 6. Summary Table

| Metric | Value |
|--------|-------|
| Function | `addBundle()` |
| Cyclomatic Complexity | 3 |
| Decision Points | 2 |
| Statement Coverage Target | 100% |
| Branch Coverage Target | 100% |
| Path Coverage Target | 100% |

## 7. Proposed Unit Tests

See `src/stores/__tests__/cart.spec.ts`

## 8. Conclusion

`addBundle()` has a Cyclomatic Complexity of 3, which is low and easily testable. Statement, branch, and path coverage can all be achieved with 3–4 unit tests.