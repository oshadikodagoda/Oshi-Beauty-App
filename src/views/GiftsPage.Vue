<template>
  <main class="max-w-[1920px] mx-auto px-6 md:px-12 pt-16 pb-20">
    <!-- Hero Section -->
    <header class="mb-16">
      <h1 class="text-7xl md:text-8xl text-primary dark:text-blue-300 font-headline tracking-tighter leading-none mb-6">
        Signature <br/>
        <span class="italic">Sets</span>
      </h1>
      <p class="text-lg text-secondary max-w-xl font-body leading-relaxed">
        Thoughtful pairings for skin and soul. Explore our essential beauty bundles designed for simple daily rituals.
      </p>
    </header>

    <!-- Sort Bar Only - NO FILTERS -->
    <div class="flex flex-wrap justify-end items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
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
const sortBy = ref('default');

// Gift products
const products = ref([
  {
    id: 1,
    title: 'The Luminous Starter Kit',
    brand: 'Oshi Beauty',
    price: 'LKR 4,900',
    originalPrice: 'LKR 6,200',
    discount: '21% OFF',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=300',
    description: 'Limited edition kit with our most coveted formulas.'
  },
  {
    id: 2,
    title: 'The Radiance Ritual',
    brand: 'Oshi Beauty',
    price: 'LKR 15,800',
    originalPrice: 'LKR 19,500',
    discount: '19% OFF',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300',
    description: 'Full-size serum & moisturizer set.'
  },
  {
    id: 3,
    title: 'Signature Discovery Set',
    brand: 'Oshi Beauty',
    price: 'LKR 8,500',
    originalPrice: 'LKR 11,000',
    discount: '23% OFF',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=300',
    description: 'Three mini fragrances.'
  },
  {
    id: 4,
    title: 'Colour Wardrobe',
    brand: 'Oshi Beauty',
    price: 'LKR 12,900',
    originalPrice: 'LKR 16,800',
    discount: '23% OFF',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300',
    description: '6 lipsticks + 3 glosses.'
  },
  {
    id: 5,
    title: 'The Atelier Box',
    brand: 'Oshi Beauty',
    price: 'LKR 22,500',
    originalPrice: 'LKR 28,000',
    discount: '20% OFF',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=300',
    description: 'Curated bestsellers box.'
  },
  {
    id: 6,
    title: 'Holiday Beauty Bundle',
    brand: 'Oshi Beauty',
    price: 'LKR 18,500',
    originalPrice: 'LKR 24,000',
    discount: '23% OFF',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1549465220-1a8f3e3a3a3a?w=300',
    description: 'Festive beauty bundle.'
  },
  {
    id: 7,
    title: 'Mini Makeup Kit',
    brand: 'Oshi Beauty',
    price: 'LKR 4,800',
    originalPrice: 'LKR 6,500',
    discount: '26% OFF',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300',
    description: 'Travel-friendly makeup essentials.'
  },
  {
    id: 8,
    title: 'Fragrance Mini Trio',
    brand: 'Oshi Beauty',
    price: 'LKR 5,200',
    originalPrice: 'LKR 7,200',
    discount: '28% OFF',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=300',
    description: 'Three signature scents.'
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

const sortProducts = () => {};

const filteredAndSortedProducts = computed(() => {
  let productsList = [...products.value];
  
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