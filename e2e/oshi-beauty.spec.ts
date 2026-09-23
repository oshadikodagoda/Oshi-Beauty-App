import { test, expect } from '@playwright/test';

test.describe('Oshi Beauty E2E Tests', () => {

  test('Homepage loads with hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('The Essence of');
  });

  test('Skincare page loads products from DummyJSON', async ({ page }) => {
    await page.goto('/skincare');
    await page.waitForSelector('h3', { timeout: 60000 });
    const products = page.locator('h3');
    const count = await products.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Clicking a product opens detail page', async ({ page }) => {
    await page.goto('/skincare');
    await page.waitForSelector('h3', { timeout: 60000 });
    await page.locator('h3').first().click();
    await expect(page).toHaveURL(/\/product\/\d+/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Search page has input field', async ({ page }) => {
    await page.goto('/search');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
  });

  test('Offers page shows Bundle Offers heading', async ({ page }) => {
    await page.goto('/offers');
    await expect(page.locator('h2').first()).toContainText('Bundle Offers');
  });

  test('Cart page loads', async ({ page }) => {
    await page.goto('/cart');
    await expect(page.locator('h1')).toContainText('Shopping Cart');
  });

  test('About Us page loads', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Checkout page shows form fields', async ({ page }) => {
    await page.goto('/checkout');
    await expect(page.locator('input[placeholder="Full Name"]')).toBeVisible();
  });
});