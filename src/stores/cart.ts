import { defineStore } from 'pinia';

export interface CartItem {
  id: number;
  title: string;
  price: string;
  image: string;
  brand: string;
  quantity: number;
  isBundle?: boolean;
  bundleItems?: any[];
  discount?: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  
  getters: {
    totalItems: (state) => {
      return state.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
    },
    
    subtotal: (state) => {
      return state.items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
        return sum + (price * (item.quantity || 1));
      }, 0);
    },
    
    bundleDiscount: (state) => {
      let discount = 0;
      state.items.forEach(item => {
        if (item.isBundle && item.bundleItems && item.discount) {
          const originalTotal = item.bundleItems.reduce((sum, bundleItem) => {
            const price = parseFloat(bundleItem.price.replace(/[^0-9.-]/g, ''));
            return sum + price;
          }, 0);
          discount += originalTotal * (item.discount / 100);
        }
      });
      return discount;
    },
    
    totalPrice: (state) => {
      const total = state.items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
        return sum + (price * (item.quantity || 1));
      }, 0);
      const discount = state.items.reduce((sum, item) => {
        if (item.isBundle && item.bundleItems && item.discount) {
          const originalTotal = item.bundleItems.reduce((s, bundleItem) => {
            const price = parseFloat(bundleItem.price.replace(/[^0-9.-]/g, ''));
            return s + price;
          }, 0);
          return sum + (originalTotal * (item.discount / 100));
        }
        return sum;
      }, 0);
      const finalTotal = total - discount;
      return `LKR ${Math.max(0, finalTotal).toLocaleString()}`;
    },
  },
  
  actions: {
    addItem(product: any) {
      const existing = this.items.find(item => item.id === product.id && !item.isBundle);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        this.items.push({ ...product, quantity: 1, isBundle: false });
      }
      this.saveToLocalStorage();
    },
    
    addBundle(bundle: { items: any[], discountPercentage: number, bundleName: string }) {
      const bundleId = Date.now();
      const originalTotal = bundle.items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
        return sum + price;
      }, 0);
      const discountAmount = originalTotal * (bundle.discountPercentage / 100);
      const finalPrice = originalTotal - discountAmount;
      
      const bundleItem: CartItem = {
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
    },
    
    updateQuantity(id: number, quantity: number) {
      const item = this.items.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      } else if (quantity === 0) {
        this.removeItem(id);
      }
      this.saveToLocalStorage();
    },
    
    removeItem(id: number) {
      this.items = this.items.filter(item => item.id !== id);
      this.saveToLocalStorage();
    },
    
    clearCart() {
      this.items = [];
      this.saveToLocalStorage();
    },
    
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },
    
    loadCart() {
      const saved = localStorage.getItem('cart');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    },
  },
});