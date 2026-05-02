<template>
  <main class="max-w-[1920px] mx-auto px-6 md:px-12 pt-16 pb-20">
    <!-- Hero Section -->
    <header class="mb-16">
      <h1 class="text-7xl md:text-8xl text-primary dark:text-blue-300 font-headline tracking-tighter leading-none mb-6">
        The Color <br/>
        <span class="italic font-normal">Edit</span>
      </h1>
      <p class="text-lg text-secondary max-w-xl font-body leading-relaxed">
        Discover textures that melt into the skin. High-performance formulas designed for the modern Sri Lankan complexion.
      </p>
    </header>

    <!-- Filter and Sort Bar -->
    <div class="flex flex-wrap justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
      <h2 class="text-3xl font-headline text-primary dark:text-blue-300">The Collection</h2>
      <div class="flex gap-3">
        <button 
          @click="showFilters = !showFilters"
          class="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
        >
          <span class="material-symbols-outlined text-lg">tune</span>
          Filters
        </button>
        <select 
          v-model="sortBy"
          @change="sortProducts"
          class="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium bg-transparent cursor-pointer focus:outline-none"
        >
          <option value="default">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="rating">Best Rating</option>
        </select>
      </div>
    </div>

    <!-- Filter Chips -->
    <div v-if="showFilters" class="flex flex-wrap gap-3 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
      <button 
        v-for="filter in filterOptions" 
        :key="filter"
        @click="selectedFilter = filter"
        :class="[
          'px-4 py-1.5 rounded-full text-sm transition-all',
          selectedFilter === filter 
            ? 'bg-primary text-white' 
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
        ]"
      >
        {{ filter }}
      </button>
      <button 
        v-if="selectedFilter !== 'All'"
        @click="selectedFilter = 'All'"
        class="px-4 py-1.5 rounded-full text-sm text-primary hover:underline"
      >
        Clear All
      </button>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      <div v-for="product in filteredAndSortedProducts" :key="product.id" class="group cursor-pointer" @click="goToProduct(product.id)">
        <div class="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-4 relative">
          <img :src="product.image" :alt="product.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <button @click.stop="addToCart(product)" class="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md">
            <span class="material-symbols-outlined text-primary dark:text-blue-300 text-xl">add</span>
          </button>
          <span v-if="product.discount" class="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
            {{ product.discount }}
          </span>
        </div>
        <h3 class="font-headline text-lg text-primary dark:text-blue-300 mb-1">{{ product.title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ product.brand }}</p>
        <div class="flex items-center gap-2">
          <p class="font-bold text-primary dark:text-blue-300">{{ product.price }}</p>
          <p v-if="product.originalPrice" class="text-xs text-gray-400 line-through">{{ product.originalPrice }}</p>
        </div>
        <div class="flex items-center gap-1 mt-1">
          <span class="material-symbols-outlined text-yellow-500 text-sm">star</span>
          <span class="text-xs text-gray-500">{{ product.rating }}</span>
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <section class="mt-32 bg-primary dark:bg-blue-600 py-16 px-12 rounded-2xl text-center text-white">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-headline mb-4">Join the Inner Circle</h2>
        <p class="text-blue-100 mb-6">Be the first to experience our seasonal drops and exclusive offers.</p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input v-model="email" type="email" placeholder="Your email address" class="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 py-3 flex-grow focus:ring-1 focus:ring-white outline-none" />
          <button @click="subscribe" class="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Subscribe</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const router = useRouter();
const cartStore = useCartStore();
const email = ref('');
const showFilters = ref(false);
const selectedFilter = ref('All');
const sortBy = ref('default');

// Filter options for makeup
const filterOptions = ['All', 'Lipstick', 'Foundation', 'Eyeshadow', 'Mascara', 'Blush'];

// Makeup products
const products = ref([
  {
    id: 1,
    title: 'Velvet Matte Lipstick - Crimson',
    category: 'Lipstick',
    brand: 'Oshi Beauty',
    price: 'LKR 3,250',
    originalPrice: 'LKR 4,500',
    discount: '28% OFF',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300',
    description: 'Long-wearing matte lipstick with intense color payoff.'
  },
  {
    id: 2,
    title: 'Silk Veil Foundation',
    category: 'Foundation',
    brand: 'Oshi Beauty',
    price: 'LKR 4,800',
    originalPrice: 'LKR 6,500',
    discount: '26% OFF',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=300',
    description: 'Lightweight, medium-to-full coverage foundation.'
  },
  {
    id: 3,
    title: 'Moonlight Shimmer Palette',
    category: 'Eyeshadow',
    brand: 'Oshi Beauty',
    price: 'LKR 5,400',
    originalPrice: 'LKR 7,200',
    discount: '25% OFF',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512496015851-a90ab38aba96?w=300',
    description: '10 versatile shades for endless eye looks.'
  },
  {
    id: 4,
    title: 'Lash Princess Mascara',
    category: 'Mascara',
    brand: 'Essence',
    price: 'LKR 1,850',
    originalPrice: 'LKR 2,500',
    discount: '26% OFF',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=300',
    description: 'Volumizing and lengthening mascara.'
  },
  {
    id: 5,
    title: 'Rose Petal Blush',
    category: 'Blush',
    brand: 'Oshi Beauty',
    price: 'LKR 2,200',
    originalPrice: 'LKR 3,000',
    discount: '27% OFF',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300',
    description: 'Natural flush with buildable color.'
  },
  {
    id: 6,
    title: 'Glass Glaze Lip Gloss',
    category: 'Lipstick',
    brand: 'Oshi Beauty',
    price: 'LKR 2,400',
    originalPrice: 'LKR 3,200',
    discount: '25% OFF',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=300',
    description: 'Non-sticky, ultra-shiny lip gloss.'
  },
  {
    id: 7,
    title: 'BB Cream SPF 30',
    category: 'Foundation',
    brand: 'Oshi Beauty',
    price: 'LKR 3,500',
    originalPrice: 'LKR 4,800',
    discount: '27% OFF',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=300',
    description: 'Tinted moisturizer with sun protection.'
  },
  {
    id: 8,
    title: 'Smokey Eye Palette',
    category: 'Eyeshadow',
    brand: 'Oshi Beauty',
    price: 'LKR 4,200',
    originalPrice: 'LKR 5,800',
    discount: '28% OFF',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512496015851-a90ab38aba96?w=300',
    description: 'Neutral to dark shades for smokey eyes.'
  }
]);

const addToCart = (product: any) => {
  cartStore.addItem({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    brand: product.brand
  });
  alert(`Added ${product.title} to cart!`);
};

const goToProduct = (id: number) => {
  router.push(`/product/${id}`);
};

const sortProducts = () => {
  // Sorting logic handled by computed property
};

// Filter products based on selected filter
const filteredProducts = computed(() => {
  let filtered = [...products.value];
  
  if (selectedFilter.value !== 'All') {
    filtered = filtered.filter(product => product.category === selectedFilter.value);
  }
  
  return filtered;
});

// Sort products
const filteredAndSortedProducts = computed(() => {
  let productsList = [...filteredProducts.value];
  
  switch (sortBy.value) {
    case 'price-asc':
      productsList.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
      break;
    case 'price-desc':
      productsList.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceB - priceA;
      });
      break;
    case 'name-asc':
      productsList.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'rating':
      productsList.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    default:
      break;
  }
  
  return productsList;
});

const subscribe = () => {
  if (email.value) {
    alert(`Thanks for subscribing! We'll send updates to ${email.value}`);
    email.value = '';
  }
};
</script>

<style scoped>
.font-headline {
  font-family: 'Noto Serif', serif;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20;
}
</style>