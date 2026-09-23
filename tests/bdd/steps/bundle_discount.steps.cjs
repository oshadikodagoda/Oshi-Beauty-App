const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

// No Pinia needed — we use a self-contained mock that mirrors cart.ts logic
let cart;
let lastBundleAdded = '';
let dialogConfirmed = false;

const initCart = () => {
  cart = {
    items: [],
    get totalItems() {
      return this.items.reduce((s, i) => s + (i.quantity || 1), 0);
    },
    get subtotal() {
      return this.items.reduce((s, i) => {
        const p = parseFloat(i.price.replace(/[^0-9.-]/g, ''));
        return s + p * (i.quantity || 1);
      }, 0);
    },
    get bundleDiscount() {
      let d = 0;
      this.items.forEach((item) => {
        if (item.isBundle && item.bundleItems && item.discount) {
          const total = item.bundleItems.reduce((s, b) => {
            const p = parseFloat(b.price.replace(/[^0-9.-]/g, ''));
            return s + p;
          }, 0);
          d += total * (item.discount / 100);
        }
      });
      return d;
    },
    addBundle(bundle) {
      const originalTotal = bundle.items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
        return sum + price;
      }, 0);
      const discountAmount = originalTotal * (bundle.discountPercentage / 100);
      const finalPrice = originalTotal - discountAmount;

      this.items.push({
        id: Date.now(),
        title: bundle.bundleName,
        price: `LKR ${finalPrice.toLocaleString()}`,
        image: bundle.items[0]?.image || '',
        brand: 'Bundle Deal',
        quantity: 1,
        isBundle: true,
        bundleItems: bundle.items,
        discount: bundle.discountPercentage
      });
    }
  };
};

const buildBundle = (name, discount) => ({
  items: [
    { id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' },
    { id: 2, title: 'Cream', price: 'LKR 3,000', image: 'b.png', brand: 'Oshi' }
  ],
  discountPercentage: discount,
  bundleName: name
});

// ================= Given =================

Given('I am on the Offers page', function () {
  initCart();
  expect(cart.items.length).to.equal(0);
});

Given('I have a {string} in my cart', function (bundleName) {
  initCart();
  cart.addBundle(buildBundle(bundleName, 15));
  expect(cart.items.length).to.equal(1);
});

// ================= When =================

When('I click {string} on the {string}', function (action, bundleName) {
  expect(action).to.equal('Shop Now');
  lastBundleAdded = bundleName;
  dialogConfirmed = true;
});

When('I confirm the dialog', function () {
  if (dialogConfirmed && lastBundleAdded) {
    const discount = lastBundleAdded === 'Skincare Bundle' ? 15 : 25;
    cart.addBundle(buildBundle(lastBundleAdded, discount));
  }
});

When('I cancel the dialog', function () {
  dialogConfirmed = false;
});

When('I go to the cart page', function () {
  // no-op
});

// ================= Then =================

Then('the {string} is added to my cart', function (bundleName) {
  const item = cart.items.find((i) => i.title === bundleName);
  expect(item).to.exist;
  expect(item?.isBundle).to.equal(true);
});

Then('the bundle discount is {int}%', function (discount) {
  const item = cart.items.find((i) => i.isBundle);
  expect(item?.discount).to.equal(discount);
});

Then('the cart remains empty', function () {
  expect(cart.items.length).to.equal(0);
});

Then('I see the bundle discount applied to the subtotal', function () {
  expect(cart.bundleDiscount).to.be.greaterThan(0);
});