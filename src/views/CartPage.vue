<template>
  <main class="max-w-[1920px] mx-auto px-6 md:px-12 pt-16 pb-20">
    <div class="mb-12">
      <h1 class="text-4xl md:text-5xl font-serif text-primary dark:text-blue-300 tracking-tight mb-2">Shopping Cart</h1>
      <p class="text-secondary font-body">Review your luxury selection before checkout.</p>
    </div>

    <div v-if="cartStore.items.length === 0" class="text-center py-20">
      <span class="material-symbols-outlined text-6xl text-gray-300 mb-4">shopping_bag</span>
      <h2 class="text-2xl font-serif text-primary dark:text-blue-300 mb-2">Your cart is empty</h2>
      <p class="text-gray-500 mb-6">Looks like you haven't added any items yet.</p>
      <router-link to="/" class="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition">
        Continue Shopping
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <!-- Items Section -->
      <div class="lg:col-span-8 space-y-8">
        <!-- Regular Items -->
        <div v-for="item in regularItems" :key="item.id" class="group flex flex-col md:flex-row gap-6 items-start pb-6 border-b border-gray-200 dark:border-gray-700">
          <div class="w-full md:w-32 aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shrink-0">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
          </div>
          <div class="flex-grow space-y-3">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-secondary mb-1">{{ item.brand }}</p>
                <h3 class="text-xl font-serif text-primary dark:text-blue-300">{{ item.title }}</h3>
              </div>
              <p class="text-xl font-serif text-primary dark:text-blue-300">{{ item.price }}</p>
            </div>
            <div class="flex items-center justify-between pt-2">
              <div class="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 gap-6">
                <button @click="updateQuantity(item.id, (item.quantity || 1) - 1)" class="hover:text-primary transition">-</button>
                <span class="font-bold text-sm dark:text-white">{{ item.quantity || 1 }}</span>
                <button @click="updateQuantity(item.id, (item.quantity || 1) + 1)" class="hover:text-primary transition">+</button>
              </div>
              <button @click="removeItem(item.id)" class="text-gray-400 hover:text-red-500 transition flex items-center gap-2 text-sm uppercase tracking-wider">
                <span class="material-symbols-outlined text-lg">delete</span>
                Remove
              </button>
            </div>
          </div>
        </div>

        <!-- Bundle Items -->
        <div v-for="bundle in bundleItems" :key="bundle.id" class="group bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex -space-x-2">
              <img v-for="(item, idx) in bundle.bundleItems?.slice(0, 3)" :key="idx" :src="item.image" class="w-16 h-16 rounded-full border-2 border-white dark:border-gray-800 object-cover" />
            </div>
            <div class="flex-grow">
              <div class="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Bundle Deal</p>
                  <h3 class="text-xl font-serif text-primary dark:text-blue-300">{{ bundle.title }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Includes {{ bundle.bundleItems?.length }} items • {{ bundle.discount }}% OFF</p>
                </div>
                <p class="text-xl font-bold text-green-600 dark:text-green-400">{{ bundle.price }}</p>
              </div>
              <div class="mt-4">
                <button @click="removeItem(bundle.id)" class="text-gray-400 hover:text-red-500 transition flex items-center gap-2 text-sm uppercase tracking-wider">
                  <span class="material-symbols-outlined text-lg">delete</span>
                  Remove Bundle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary Sidebar -->
      <div class="lg:col-span-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl sticky top-32 space-y-6">
          <h4 class="text-2xl font-serif text-primary dark:text-blue-300 border-b border-gray-200 dark:border-gray-700 pb-4">Order Summary</h4>
          
          <div class="space-y-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 dark:text-gray-400">Subtotal</span>
              <span class="text-gray-800 dark:text-gray-200 font-medium">LKR {{ cartStore.subtotal.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 dark:text-gray-400">Shipping</span>
              <span class="text-green-600 font-bold">FREE</span>
            </div>
            <div v-if="cartStore.bundleDiscount > 0" class="flex justify-between text-sm text-green-600">
              <span>Bundle Discount</span>
              <span>- LKR {{ cartStore.bundleDiscount.toLocaleString() }}</span>
            </div>
          </div>
          
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div class="flex justify-between items-end">
              <span class="text-xl font-serif text-primary dark:text-blue-300">Total</span>
              <span class="text-2xl font-bold text-primary dark:text-blue-300">{{ cartStore.totalPrice }}</span>
            </div>
          </div>
          
          <button @click="goToCheckout" class="w-full py-4 bg-gradient-to-r from-primary to-blue-700 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:opacity-90 transition">
            Proceed to Checkout
          </button>
          
          <p class="text-[10px] text-center text-gray-400 uppercase tracking-widest">
            Secure payment with SSL encryption
          </p>
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

const regularItems = computed(() => cartStore.items.filter(item => !item.isBundle));
const bundleItems = computed(() => cartStore.items.filter(item => item.isBundle));

const updateQuantity = (id: number, newQuantity: number) => {
  cartStore.updateQuantity(id, newQuantity);
};

const removeItem = (id: number) => {
  cartStore.removeItem(id);
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