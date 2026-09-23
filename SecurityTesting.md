# Security Testing - OWASP Top 10

## Overview

This document reports security testing performed on the Oshi Beauty web application following the OWASP Top 10 (2025) methodology.

## Scope

- Application: Oshi Beauty SPA
- Environment: Local development (http://localhost:5173)
- Testing: Manual (black-box + gray-box)
- Framework: Vue 3 + TypeScript + Vite

---

## Issue 1: Broken Access Control (A01:2025) — IDOR on Product Detail

### Description
The Product Detail page uses a predictable, sequential ID in the URL (`/product/:id`). Changing the ID in the URL allows access to any product without restriction.

### Test Steps
1. Navigate to `http://localhost:5173/product/1`
2. Note the displayed product
3. Change URL to `http://localhost:5173/product/2`
4. Observe the product changes
5. Change URL to `http://localhost:5173/product/9999`
6. Observe error/fallback behavior

### Expected Behavior
Product data should only be accessible for valid product IDs. Invalid IDs should return a 404-equivalent message.

### Actual Behavior
Any valid product ID (1–30) loads the corresponding product. Invalid IDs show a "Product not found" message (this part is handled correctly).

### Severity
**Low** — Products are intended to be public. However, the *pattern* (predictable ID in URL) would be **High** if applied to user profiles, orders, or invoices.

### Root Cause
The application uses `route.params.id` directly with DummyJSON API, with no ownership or authorization check.

### Fix Applied
For a public product catalog, this is acceptable. For private resources (orders, user profiles), the following would be required:
- Use unpredictable IDs (UUIDs) instead of sequential integers
- Verify the requesting user owns the resource on every request

### Status
✅ Tested | ⚠️ Accepted as design (public product catalog)

---

## Issue 2: Security Misconfiguration (A02:2025) — Sensitive Data in localStorage

### Description
The shopping cart data is stored in the browser's `localStorage` in plaintext. Any JavaScript running on the page can read it.

### Test Steps
1. Open `http://localhost:5173`
2. Open DevTools (`F12`) → **Application** tab
3. Navigate to **Local Storage** → `http://localhost:5173`
4. Observe the `cart` key with JSON data

### Expected Behavior
Sensitive data should be stored in `httpOnly` cookies (which JavaScript cannot read) to prevent XSS-based theft.

### Actual Behavior
Cart data is stored as plaintext JSON in localStorage:
```json
[{"id":1,"title":"Product","price":"LKR 2,000","quantity":1}]