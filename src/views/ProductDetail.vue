<template>
  <main class="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <button @click="goBack" class="text-primary hover:underline mb-8 inline-flex items-center gap-1">
      <span class="material-symbols-outlined text-sm">arrow_back</span>
      Back
    </button>
    
    <div v-if="loading" class="text-center py-20">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <p class="mt-4 text-gray-500">Loading product from DummyJSON...</p>
    </div>

    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-500 mb-4">{{ error }}</p>
      <button @click="loadProduct" class="bg-primary text-white px-6 py-2 rounded-full">Try Again</button>
    </div>

    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Product Image -->
      <div class="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover" />
      </div>
      
      <!-- Product Info -->
      <div class="space-y-6">
        <div>
          <span class="text-primary text-sm uppercase tracking-wider">{{ product.category || 'Beauty' }}</span>
          <h1 class="text-4xl md:text-5xl font-serif text-primary dark:text-blue-300 mt-2">{{ product.title }}</h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">{{ product.brand || 'Oshi Beauty' }}</p>
        </div>
        
        <div class="flex items-baseline gap-3">
          <p class="text-3xl font-bold text-primary dark:text-blue-300">LKR {{ (product.price * 40).toLocaleString() }}</p>
          <p v-if="product.discountPercentage" class="text-sm text-gray-400 line-through">LKR {{ (Math.round(product.price * 1.3) * 40).toLocaleString() }}</p>
          <span v-if="product.discountPercentage" class="bg-primary text-white text-xs px-2 py-1 rounded-full">{{ Math.round(product.discountPercentage) }}% OFF</span>
        </div>
        
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ product.description }}</p>

        <!-- Quantity Selector -->
        <div class="flex items-center gap-4">
          <span class="text-gray-600 dark:text-gray-400">Quantity:</span>
          <div class="flex items-center border dark:border-gray-700 rounded-full">
            <button @click="decreaseQuantity" class="px-4 py-2 hover:text-primary transition">-</button>
            <span class="px-4 py-2 min-w-[50px] text-center dark:text-white">{{ quantity }}</span>
            <button @click="increaseQuantity" class="px-4 py-2 hover:text-primary transition">+</button>
          </div>
        </div>
        
        <!-- Add to Cart Button -->
        <button @click="addToCart" class="w-full bg-primary dark:bg-blue-600 text-white py-4 rounded-full font-semibold mt-6 hover:bg-primary/90 transition">
          Add to Cart - LKR {{ (product.price * 40).toLocaleString() }}
        </button>
        
        <!-- Benefits -->
        <div class="pt-6 space-y-3 border-t border-gray-200 dark:border-gray-700">
          <div class="flex gap-3 items-center text-sm text-gray-500 dark:text-gray-400">
            <span class="material-symbols-outlined text-primary">local_shipping</span>
            <span>Free shipping on orders over LKR 4,500</span>
          </div>
          <div class="flex gap-3 items-center text-sm text-gray-500 dark:text-gray-400">
            <span class="material-symbols-outlined text-primary">eco</span>
            <span>Vegan & Cruelty-free</span>
          </div>
          <div class="flex gap-3 items-center text-sm text-gray-500 dark:text-gray-400">
            <span class="material-symbols-outlined text-primary">verified</span>
            <span>100% Authentic Products</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <p class="text-gray-500">Product not found.</p>
      <router-link to="/" class="text-primary hover:underline mt-4 inline-block">Return to Shop</router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const product = ref<any>(null);
const loading = ref(true);
const error = ref('');
const quantity = ref(1);

const increaseQuantity = () => { quantity.value++; };
const decreaseQuantity = () => { if (quantity.value > 1) quantity.value--; };

const addToCart = () => {
  if (product.value) {
    const confirmed = confirm(`Add ${quantity.value} × ${product.value.title} to cart?`);
    if (confirmed) {
      for (let i = 0; i < quantity.value; i++) {
        cartStore.addItem({
          id: product.value.id,
          title: product.value.title,
          price: `LKR ${(product.value.price * 40).toLocaleString()}`,
          image: product.value.thumbnail,
          brand: product.value.brand || 'Oshi Beauty'
        });
      }
      alert(`Added ${quantity.value} × ${product.value.title} to cart!`);
    }
  }
};

const goBack = () => {
  router.back();
};

const loadProduct = async () => {
  loading.value = true;
  error.value = '';
  const id = route.params.id as string;
  
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    
    if (!response.ok) {
      throw new Error('Product not found');
    }
    
    const data = await response.json();
    product.value = data;
    console.log('Product loaded:', data.title);
    
  } catch (err: any) {
    console.error('API Error:', err);
    error.value = err.message;
    product.value = null;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadProduct();
});
</script>

<style scoped>
.material-symbols-outlined { 
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; 
}
</style>