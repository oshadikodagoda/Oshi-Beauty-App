import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCartStore } from '../cart';

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  // ==================== addItem ====================

  it('adds a single item to the cart', () => {
    const cart = useCartStore();
    cart.addItem({
      id: 1,
      title: 'Serum',
      price: 'LKR 2,000',
      image: 'serum.png',
      brand: 'Oshi Beauty'
    });
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].title).toBe('Serum');
    expect(cart.items[0].quantity).toBe(1);
  });

  it('increases quantity if the same item is added twice', () => {
    const cart = useCartStore();
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].quantity).toBe(2);
  });

  // ==================== addBundle ====================

  it('adds a bundle with discount applied', () => {
    const cart = useCartStore();
    cart.addBundle({
      items: [
        { id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' },
        { id: 2, title: 'Cream', price: 'LKR 3,000', image: 'b.png', brand: 'Oshi' }
      ],
      discountPercentage: 15,
      bundleName: 'Skincare Bundle'
    });
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].isBundle).toBe(true);
    expect(cart.items[0].discount).toBe(15);
  });

  it('uses fallback empty image when bundle item has no image', () => {
    const cart = useCartStore();
    cart.addBundle({
      items: [{ id: 1, title: 'Item', price: 'LKR 1,000', image: '', brand: 'Oshi' }],
      discountPercentage: 20,
      bundleName: 'Test Bundle'
    });
    expect(cart.items[0].image).toBe('');
  });

  // ==================== updateQuantity ====================

  it('updates the quantity of an item', () => {
    const cart = useCartStore();
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    cart.updateQuantity(1, 5);
    expect(cart.items[0].quantity).toBe(5);
  });

  it('removes item when quantity is set to 0', () => {
    const cart = useCartStore();
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    cart.updateQuantity(1, 0);
    expect(cart.items.length).toBe(0);
  });

  // ==================== removeItem ====================

  it('removes an item from the cart', () => {
    const cart = useCartStore();
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    cart.addItem({ id: 2, title: 'Cream', price: 'LKR 3,000', image: 'b.png', brand: 'Oshi' });
    cart.removeItem(1);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].id).toBe(2);
  });

  // ==================== clearCart ====================

  it('clears the entire cart', () => {
    const cart = useCartStore();
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    cart.addItem({ id: 2, title: 'Cream', price: 'LKR 3,000', image: 'b.png', brand: 'Oshi' });
    cart.clearCart();
    expect(cart.items.length).toBe(0);
  });

  // ==================== Getters ====================

  it('totalItems returns correct count', () => {
    const cart = useCartStore();
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    cart.addItem({ id: 2, title: 'Cream', price: 'LKR 3,000', image: 'b.png', brand: 'Oshi' });
    expect(cart.totalItems).toBe(3);
  });

  it('subtotal calculates correctly', () => {
    const cart = useCartStore();
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    cart.addItem({ id: 2, title: 'Cream', price: 'LKR 3,000', image: 'b.png', brand: 'Oshi' });
    expect(cart.subtotal).toBe(5000);
  });

  // ==================== LocalStorage ====================

  it('saves cart to localStorage', () => {
    const cart = useCartStore();
    cart.addItem({ id: 1, title: 'Serum', price: 'LKR 2,000', image: 'a.png', brand: 'Oshi' });
    const stored = localStorage.getItem('cart');
    expect(stored).not.toBeNull();
    const parsed = JSON.parse(stored!);
    expect(parsed.length).toBe(1);
  });
});