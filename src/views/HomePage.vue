<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[921px] w-full overflow-hidden flex items-center">
      <div class="absolute inset-0 z-0">
        <img 
          alt="Luxury makeup collection" 
          class="w-full h-full object-cover object-center" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAToKRLQJD_x8lonh3nEHhn56PJQcTuwgMA3QgdcV2L9rfU7RZAZrCtZ7O3YGF6uNk9IRnU9UbIlUaRJrdac0Kmp2xNoPmnV9fTMFIKQm6wbvnquaqKPHU1z5xATIwBk_GimxnhEN5TGqEK26IJjhr4PDgpSdHxuiifRKMNcvEMbX5QrL71UFX5TMLhfu2qfvE2IiFwbWHCZdrxQ4xvBYQNP5xIxODqWetkwrw_OO5Dl0ktK4EpNlPUVfk0M3PjaD8OmVt7RIGHZ-WM"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-gray-900 dark:via-gray-900/70"></div>
      </div>
      <div class="relative z-10 px-12 md:px-24 max-w-4xl">
        <span class="uppercase tracking-widest text-primary dark:text-blue-300 font-semibold text-sm mb-4 block">New Collection</span>
        <h1 class="font-serif text-6xl md:text-8xl text-primary dark:text-blue-300 leading-tight mb-8">
          The Essence of <br/><span class="italic font-normal">Pure Radiance.</span>
        </h1>
        <p class="text-lg text-gray-700 dark:text-gray-300 max-w-lg mb-10 leading-relaxed">
          Discover our curated selection of high-performance formulas designed to celebrate your natural luminosity.
        </p>
        <div class="flex gap-4">
          <button class="bg-primary dark:bg-blue-600 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-primary/90 transition shadow-lg">
            EXPLORE
          </button>
          <button class="text-primary dark:text-blue-300 font-semibold uppercase tracking-wider py-4 hover:underline transition">
            View Lookbook
          </button>
        </div>
      </div>
    </section>

    <!-- Promotional Bar -->
    <div class="bg-primary dark:bg-blue-600 text-white py-4 text-center overflow-hidden whitespace-nowrap">
      <div class="inline-block animate-marquee">
        <span class="mx-10 text-sm uppercase tracking-wider">Free delivery on all gift sets</span>
        <span class="mx-10 text-sm uppercase tracking-wider">Complimentary Samples with every order</span>
        <span class="mx-10 text-sm uppercase tracking-wider">Exclusive Store Launch in Colombo</span>
      </div>
    </div>

    <!-- The Art of Luminous Skin -->
    <section class="py-32 px-12 max-w-[1920px] mx-auto bg-gray-50 dark:bg-gray-800">
      <div class="flex flex-col md:flex-row gap-20 items-center">
        <div class="w-full md:w-1/2">
          <div class="aspect-[4/5] bg-white dark:bg-gray-700 overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5inqb4F6nGog2Uy9q_MwQVs24YSjEt1pdUSHbAJ6W8ly9HAfEOEf5AkFUUGHxbyd7hJmU54M2u5LfTSekaXtSbxUdiWq13ILbNVW0AkZgfXXNSyRw9s72WaAeSaME0DfoEnxRjI-zGy-bfulRlnOhJkRnU-RkISb0uVfUAigAaFKNRn_lnHotCmxONicDQBP4yKn96PuUunYTluHeu3iKrRhJFp9McnGYH8rkILSzNodfy6qiCeJ70Y5F-VcfJjXC8cUiwzks1Gup" 
              alt="Skincare"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 space-y-8">
          <h2 class="font-serif text-5xl text-primary dark:text-blue-300 leading-tight">The Art of <br/>Luminous Skin</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
            We believe skincare is a ritual of self-appreciation. Our Luminous collection blends rare botanical extracts with modern molecular science.
          </p>
          <div class="pt-6">
            <a href="#" class="text-primary dark:text-blue-300 font-semibold uppercase tracking-wider text-sm border-b border-primary dark:border-blue-300 pb-1 hover:opacity-80 transition">
              Discover the Ritual
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Curated Essentials - FROM DUMMYJSON API -->
    <section class="py-32 px-12 bg-white dark:bg-gray-900">
      <div class="max-w-[1920px] mx-auto">
        <div class="flex justify-between items-end mb-16">
          <div>
            <h2 class="font-serif text-4xl text-primary dark:text-blue-300 mb-4">Curated Essentials</h2>
            <p class="text-gray-500 dark:text-gray-400">Everyday luxuries for your vanity, all under 5,000 LKR.</p>
          </div>
          <a href="#" class="text-primary dark:text-blue-300 font-semibold border-b border-primary dark:border-blue-300 pb-1 hover:opacity-80 transition">Shop All Essentials</a>
        </div>
        
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-20">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary dark:border-blue-300"></div>
          <p class="mt-4 text-gray-500">Loading products from DummyJSON...</p>
        </div>
        
        <!-- Error State -->
        <div v-else-if="error" class="text-center py-20">
          <p class="text-red-500 mb-4">{{ error }}</p>
          <button @click="loadProducts" class="bg-primary text-white px-6 py-2 rounded-full">Try Again</button>
        </div>
        
        <!-- Products Grid - Data from DummyJSON -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="product in products" :key="product.id" class="group cursor-pointer" @click="goToProduct(product.id)">
            <div class="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 overflow-hidden relative">
              <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <button @click.stop="addToCart(product)" class="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg">
                <span class="material-symbols-outlined text-primary dark:text-blue-300">add</span>
              </button>
            </div>
            <h3 class="font-semibold text-primary dark:text-blue-300 mb-1">{{ product.title }}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm mb-2">{{ product.brand || 'Oshi Beauty' }}</p>
            <p class="text-primary dark:text-blue-300 font-medium italic">LKR {{ (product.price * 40).toLocaleString() }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ethereal Beginnings -->
    <section class="py-32 px-12 bg-gray-50 dark:bg-gray-800 text-primary dark:text-blue-300 overflow-hidden">
      <div class="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 order-2 lg:order-1">
          <span class="font-semibold tracking-widest uppercase text-xs mb-6 block text-primary dark:text-blue-300">Our Heritage</span>
          <h2 class="font-serif text-5xl md:text-6xl mb-8 leading-[1.1] text-primary dark:text-blue-300">Ethereal <br/>Beginnings</h2>
          <div class="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>Oshi Beauty began as a small apothecary in the hills, founded on the belief that luxury should be synonymous with purity. We meticulously source ingredients that honor the earth and your skin alike.</p>
            <p>Our artisans blend traditional wisdom with innovative science to create products that don't just sit on the skin, but transform it from within.</p>
          </div>
          <button class="mt-10 border border-primary dark:border-blue-300 px-8 py-3 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition-all">
            Read Our Story
          </button>
        </div>
        <div class="lg:col-span-7 order-1 lg:order-2 flex justify-end">
          <div class="w-full h-[600px] bg-slate-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-2xl relative rotate-2 hover:rotate-0 transition-transform duration-1000">
            <img 
              alt="Botanical illustration" 
              class="w-full h-full object-cover scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjh3NpnC5z7zgHmPIx7YZsIpGxBFjJeidY9rcseaGIjo4m2zcvTbbsLRgMVPEhkjmH396y9pu_34ew6vaPGVe9hnhXb0Fvogtu3yWTJTkvIQd30xqlrpWQNb7QUvMsZgdT3-gnWgACj8SQhTkmkWI0-7sNq-Nxyor1DxwUTU7v2Wwl-UxNjzKVJoHQPXyMwvFLqER3tT4qW4wg8X-geFtUYOca-EATb9vmHQAMqivkPja81-IlKQwcmcDBzfwI0eh87HmTMLaikQzx"
            />
            <div class="absolute inset-0 bg-primary/10 dark:bg-blue-900/20"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-24 px-12 bg-pink-50/30 dark:bg-pink-900/20 text-center">
      <div class="max-w-2xl mx-auto space-y-8">
        <span class="material-symbols-outlined text-primary dark:text-blue-300 text-5xl">auto_awesome</span>
        <h2 class="font-serif text-4xl text-primary dark:text-blue-300">Join the Inner Circle</h2>
        <p class="text-gray-600 dark:text-gray-400">Be the first to experience our seasonal drops, editorial lookbooks, and private shopping events.</p>
        <form @submit.prevent="handleSubscribe" class="flex flex-col md:flex-row gap-4 justify-center">
          <input v-model="email" type="email" placeholder="Email Address" class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-8 py-4 w-full md:w-80 shadow-sm focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:outline-none dark:text-white" required />
          <button type="submit" class="bg-primary dark:bg-blue-600 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-primary/90 dark:hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const router = useRouter();
const cartStore = useCartStore();
const products = ref<any[]>([]);
const loading = ref(true);
const error = ref('');
const email = ref('');

// Beauty-related categories to filter
const beautyCategories = ['beauty', 'skin-care', 'fragrances'];

const addToCart = (product: any) => {
  cartStore.addItem({
    id: product.id,
    title: product.title,
    price: `LKR ${(product.price * 40).toLocaleString()}`,
    image: product.thumbnail,
    brand: product.brand || 'Oshi Beauty'
  });
  alert(`Added ${product.title} to cart!`);
};

const goToProduct = (id: number) => {
  router.push(`/product/${id}`);
};

const handleSubscribe = () => {
  if (email.value) {
    alert(`Thanks for subscribing! We'll send updates to ${email.value}`);
    email.value = '';
  }
};

const loadProducts = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    // Fetch from DummyJSON API
    const response = await fetch('https://dummyjson.com/products?limit=30');
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    
    // Filter to only beauty-related products
    const beautyProducts = data.products.filter((p: any) => 
      beautyCategories.includes(p.category)
    );
    
    products.value = beautyProducts.slice(0, 4);
    console.log('Products loaded from DummyJSON:', products.value.length);
    
  } catch (err: any) {
    console.error('API Error:', err);
    error.value = 'Unable to load products. Please check your internet connection.';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadProducts();
});
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: inline-block;
  animation: marquee 25s linear infinite;
  white-space: nowrap;
}
</style>