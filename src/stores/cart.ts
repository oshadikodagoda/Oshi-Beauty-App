import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as any[],
  }),
  
  getters: {
    totalItems: (state) => {
      return state.items.reduce((sum, item) => sum + (item.quantity || 1), 0);
    },
    
    totalPrice: (state) => {
      const total = state.items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
        return sum + (price * (item.quantity || 1));
      }, 0);
      return `LKR ${total.toLocaleString()}`;
    },
    
    subtotal: (state) => {
      const total = state.items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
        return sum + (price * (item.quantity || 1));
      }, 0);
      return total;
    },
  },
  
  actions: {
    addItem(product: any) {
      const existing = this.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
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