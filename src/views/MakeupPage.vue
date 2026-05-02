<template>
  <main class="max-w-[1920px] mx-auto px-6 md:px-12 pt-16 pb-20">
    <header class="mb-16">
      <h1 class="text-7xl md:text-8xl text-primary dark:text-blue-300 font-headline tracking-tighter leading-none mb-6">
        The Color <br/>
        <span class="italic font-normal">Edit</span>
      </h1>
      <p class="text-lg text-secondary max-w-xl font-body leading-relaxed dark:text-gray-300">
        Discover textures that melt into the skin. High-performance formulas designed for the modern Sri Lankan complexion.
      </p>
    </header>

    <!-- Sort Bar - Fixed Dark Mode -->
    <div class="flex flex-wrap justify-end items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
      <select 
        v-model="sortBy"
        class="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium bg-white dark:bg-gray-800 cursor-pointer focus:outline-none text-gray-700 dark:text-gray-300"
      >
        <option value="default" class="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">Sort By</option>
        <option value="price-asc" class="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">Price: Low to High</option>
        <option value="price-desc" class="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">Price: High to Low</option>
        <option value="name-asc" class="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">Name: A to Z</option>
        <option value="rating" class="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">Best Rating</option>
      </select>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-20">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <p class="mt-4 text-gray-500">Loading makeup products...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-500 mb-4">{{ error }}</p>
      <button @click="loadProducts" class="bg-primary text-white px-6 py-2 rounded-full">Try Again</button>
    </div>

    <!-- Product Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      <div v-for="product in sortedProducts" :key="product.id" class="group cursor-pointer" @click="goToProduct(product.id)">
        <div class="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-4 relative">
          <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <button @click.stop="addToCart(product)" class="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md">
            <span class="material-symbols-outlined text-primary dark:text-blue-300 text-xl">add</span>
          </button>
          <span v-if="product.discountPercentage" class="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
            {{ Math.round(product.discountPercentage) }}% OFF
          </span>
        </div>
        <h3 class="font-headline text-lg text-primary dark:text-blue-300 mb-1">{{ product.title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ product.brand || 'Oshi Beauty' }}</p>
        <div class="flex items-center gap-2">
          <p class="font-bold text-primary dark:text-blue-300">LKR {{ (product.price * 40).toLocaleString() }}</p>
          <p v-if="product.discountPercentage" class="text-xs text-gray-400 line-through">LKR {{ (Math.round(product.price * 1.3) * 40).toLocaleString() }}</p>
        </div>
        <div class="flex items-center gap-1 mt-1">
          <span class="material-symbols-outlined text-yellow-500 text-sm">star</span>
          <span class="text-xs text-gray-500">{{ product.rating }}</span>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <section class="mt-32 bg-primary dark:bg-blue-600 py-16 px-12 rounded-2xl text-center text-white">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-headline mb-4">Join the Inner Circle</h2>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input v-model="email" type="email" placeholder="Your email address" class="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 py-3 flex-grow focus:ring-1 focus:ring-white outline-none" />
          <button @click="subscribe" class="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Subscribe</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const router = useRouter();
const cartStore = useCartStore();
const allProducts = ref<any[]>([]);
const loading = ref(true);
const error = ref('');
const email = ref('');
const sortBy = ref('default');

const sortedProducts = computed(() => {
  let list = [...allProducts.value];
  if (sortBy.value === 'price-asc') list.sort((a, b) => a.price - b.price);
  if (sortBy.value === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (sortBy.value === 'name-asc') list.sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy.value === 'rating') list.sort((a, b) => b.rating - a.rating);
  return list;
});

const addToCart = (product: any) => {
  const confirmed = confirm(`Add ${product.title} to cart?`);
  if (confirmed) {
    cartStore.addItem({
      id: product.id,
      title: product.title,
      price: `LKR ${(product.price * 40).toLocaleString()}`,
      image: product.thumbnail,
      brand: product.brand || 'Oshi Beauty'
    });
    alert(`${product.title} added to cart!`);
  }
};

const goToProduct = (id: number) => {
  router.push(`/product/${id}`);
};

const subscribe = () => {
  if (email.value) {
    alert(`Thanks for subscribing! We'll send updates to ${email.value}`);
    email.value = '';
  }
};

const loadProducts = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    const response = await fetch('https://dummyjson.com/products/category/beauty');
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    allProducts.value = data.products || [];
  } catch (err: any) {
    console.error('API Error:', err);
    error.value = 'Unable to load makeup products.';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadProducts();
});
</script>

<style scoped>
.font-headline {
  font-family: 'Noto Serif', serif;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20;
}
</style>