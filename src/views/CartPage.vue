<template>
  <main class="max-w-[1920px] mx-auto px-6 md:px-12 py-12">
    <div class="mb-12">
      <h1 class="text-4xl md:text-5xl font-serif text-primary tracking-tight mb-2">Shopping Cart</h1>
      <p class="text-secondary font-body">Review your luxury selection before checkout.</p>
    </div>

    <div v-if="cartStore.items.length === 0" class="text-center py-20">
      <span class="material-symbols-outlined text-6xl text-gray-300 mb-4">shopping_bag</span>
      <h2 class="text-2xl font-serif text-primary mb-2">Your cart is empty</h2>
      <p class="text-gray-500 mb-6">Looks like you haven't added any items yet.</p>
      <router-link to="/" class="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition">
        Continue Shopping
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <!-- Items Section -->
      <div class="lg:col-span-8 space-y-12">
        <div v-for="item in cartStore.items" :key="item.id" class="group flex flex-col md:flex-row gap-8 items-start pb-8 border-b border-gray-200">
          <div class="w-full md:w-48 aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shrink-0">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div class="flex-grow space-y-4">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-secondary mb-1">{{ item.category || 'Product' }}</p>
                <h3 class="text-2xl font-serif text-primary">{{ item.title }}</h3>
                <p class="text-sm text-slate-500 mt-1">Size: 50ml</p>
              </div>
              <p class="text-xl font-serif text-primary">{{ item.price }}</p>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div class="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-6">
                <button @click="updateQuantity(item.id, (item.quantity || 1) - 1)" class="hover:text-primary transition-colors">
                  <span class="material-symbols-outlined text-sm">remove</span>
                </button>
                <span class="font-bold text-sm">{{ item.quantity || 1 }}</span>
                <button @click="updateQuantity(item.id, (item.quantity || 1) + 1)" class="hover:text-primary transition-colors">
                  <span class="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <button @click="removeItem(item.id)" class="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-lg">delete</span>
                Remove
              </button>
            </div>
          </div>
        </div>

        <!-- Free Delivery Message for Sets -->
        <div v-if="hasQualifyingItem" class="bg-green-50 p-4 rounded-xl flex items-start gap-3">
          <span class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">local_shipping</span>
          <p class="text-sm text-green-800">Your cart includes a <strong>Complimentary Luxury Delivery</strong> eligible item. No additional shipping costs will be applied.</p>
        </div>

        <!-- Upsell Recommendations -->
        <div class="pt-8">
          <h4 class="text-xl font-serif text-primary mb-6">Complete the Experience</h4>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="recommendation in recommendations" :key="recommendation.id" class="bg-gray-50 p-6 rounded-xl space-y-4 flex flex-col justify-between">
              <div class="aspect-square bg-white rounded-lg overflow-hidden">
                <img :src="recommendation.image" :alt="recommendation.title" class="w-full h-full object-cover" />
              </div>
              <div>
                <h5 class="font-serif text-lg">{{ recommendation.title }}</h5>
                <p class="text-primary font-bold">{{ recommendation.price }}</p>
              </div>
              <button @click="addToCart(recommendation)" class="w-full py-2 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary Sidebar -->
      <div class="lg:col-span-4">
        <div class="bg-gray-50 p-8 rounded-xl sticky top-32 space-y-8">
          <h4 class="text-2xl font-serif text-primary border-b border-gray-200 pb-4">Order Summary</h4>
          <div class="space-y-4">
            <div class="flex justify-between text-secondary">
              <span>Subtotal</span>
              <span class="text-gray-800 font-medium">{{ cartStore.totalPrice }}</span>
            </div>
            <div class="flex justify-between text-secondary">
              <span>Delivery</span>
              <span class="text-green-600 font-bold">FREE</span>
            </div>
            <div class="flex justify-between text-secondary">
              <span>Tax (Included)</span>
              <span class="text-gray-800 font-medium">LKR {{ Math.round(cartStore.subtotal * 0.05).toLocaleString() }}</span>
            </div>
          </div>
          <div class="border-t border-gray-200 pt-6">
            <div class="flex justify-between items-end mb-8">
              <span class="text-xl font-serif text-primary">Total</span>
              <span class="text-3xl font-serif text-primary">{{ cartStore.totalPrice }}</span>
            </div>
            <div class="space-y-4">
              <button @click="goToCheckout" class="w-full py-5 bg-gradient-to-r from-primary to-blue-700 text-white rounded-full font-bold uppercase tracking-[0.1em] text-sm shadow-xl shadow-primary/10 hover:opacity-95 transition-opacity">
                Proceed to Checkout
              </button>
              <p class="text-[11px] text-center text-gray-500 uppercase tracking-widest leading-relaxed px-4">
                Secure Payment with SSL encryption. <br/> We accept all major cards and Koko.
              </p>
            </div>
          </div>
          <div class="space-y-4 pt-4">
            <div class="flex items-center gap-4 text-primary">
              <span class="material-symbols-outlined">auto_awesome</span>
              <p class="text-sm">Enjoy 3 complimentary samples with this order.</p>
            </div>
            <div class="flex items-center gap-4 text-primary">
              <span class="material-symbols-outlined">card_giftcard</span>
              <p class="text-sm">Gift wrapping available at checkout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const router = useRouter();
const cartStore = useCartStore();

const hasQualifyingItem = computed(() => {
  return cartStore.items.some(item => 
    item.title?.includes('Set') || 
    item.title?.includes('Collection') ||
    item.title?.includes('Kit')
  );
});

const recommendations = [
  {
    id: 100,
    title: 'Bergamot & Silk Candle',
    price: 'LKR 4,200',
    image: 'https://images.unsplash.com/photo-1602874801007-bd36b0b71f1a?w=200'
  },
  {
    id: 101,
    title: 'Mulberry Silk Scrunchie',
    price: 'LKR 2,800',
    image: 'https://images.unsplash.com/photo-1615391710228-2fc7b5c7c5d7?w=200'
  },
  {
    id: 102,
    title: 'Luxury Sleep Mask',
    price: 'LKR 3,500',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200'
  }
];

const updateQuantity = (id: number, newQuantity: number) => {
  cartStore.updateQuantity(id, newQuantity);
};

const removeItem = (id: number) => {
  cartStore.removeItem(id);
};

const addToCart = (product: any) => {
  cartStore.addItem({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    category: 'Accessories'
  });
  alert(`Added ${product.title} to cart!`);
};

const goToCheckout = () => {
  router.push('/checkout');
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
</style>