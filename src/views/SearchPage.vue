<template>
  <div class="fixed inset-0 z-50 glass-overlay flex flex-col items-start pt-24 px-6 md:px-12 lg:px-24 overflow-y-auto dark:bg-gray-900 dark:backdrop-blur-lg">
    <!-- Close Button -->
    <button @click="closeSearch" class="fixed top-8 right-8 lg:right-24 text-primary hover:opacity-70 transition-opacity z-50 dark:text-blue-300">
      <span class="material-symbols-outlined !text-4xl">close</span>
    </button>
    
    <div class="w-full max-w-5xl mx-auto pb-20">
      <!-- Header/Search Field Area -->
      <div class="flex flex-col gap-6 mb-16">
        <div class="flex items-center gap-4 text-primary mb-2 dark:text-blue-300">
          <svg class="size-6 lg:size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
            <path clip-rule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fill-rule="evenodd"></path>
          </svg>
          <span class="font-headline text-2xl font-bold tracking-tight"><i>Oshi Beauty</i></span>
        </div>
        <div class="relative w-full">
          <input 
            v-model="searchQuery"
            @input="handleSearch"
            @keyup.enter="performSearch"
            autofocus 
            class="w-full bg-transparent border-none focus:ring-0 text-3xl md:text-5xl lg:text-6xl font-headline italic text-primary dark:text-blue-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-0 leading-tight outline-none" 
            placeholder="Search for radiance..." 
            type="text"
          />
          <div class="search-underline mt-4"></div>
        </div>
      </div>
      
      <!-- Search Results -->
      <div v-if="searchQuery && searchResults.length > 0" class="mb-12">
        <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-6">Search Results for "{{ searchQuery }}"</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="product in searchResults" 
            :key="product.id"
            @click="goToProduct(product.id)"
            class="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <div class="aspect-square overflow-hidden">
              <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-4">
              <h4 class="font-semibold text-primary dark:text-blue-300">{{ product.title }}</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ product.brand || 'Oshi Beauty' }}</p>
              <p class="text-primary dark:text-blue-300 font-bold mt-2">LKR {{ (product.price * 40).toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else-if="searchQuery && searchResults.length === 0 && !loading" class="text-center py-12">
        <p class="text-gray-500 dark:text-gray-400">No products found for "{{ searchQuery }}"</p>
      </div>
      
      <!-- Content Grid: Suggested & Trending -->
      <div v-if="!searchQuery" class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4">
          <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-6">Suggested Searches</h3>
          <div class="flex flex-col gap-4">
            <a 
              v-for="suggestion in suggestions" 
              :key="suggestion" 
              @click.prevent="searchSuggestion(suggestion)" 
              class="group flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-all cursor-pointer"
            >
              <span class="font-headline text-xl text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">{{ suggestion }}</span>
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors">north_east</span>
            </a>
          </div>
          
          <div class="mt-12">
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-4">Shop by Need</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="category in categories" 
                :key="category"
                @click="searchCategory(category)"
                class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {{ category }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="lg:col-span-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Trending Products</h3>
          </div>
          
          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
          
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            <div v-for="product in trendingProducts" :key="product.id" @click="goToProduct(product.id)" class="group cursor-pointer">
              <div class="aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 relative">
                <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute top-3 left-3 px-2 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-primary dark:text-blue-300 rounded-sm">
                  Trending
                </div>
              </div>
              <h4 class="font-headline text-lg text-gray-800 dark:text-gray-200 mb-1 group-hover:text-primary transition-colors">{{ product.title }}</h4>
              <p class="text-gray-500 dark:text-gray-400 text-sm mb-2">{{ product.brand || 'Oshi Beauty' }}</p>
              <p class="font-bold text-primary dark:text-blue-300">LKR {{ (product.price * 40).toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="py-12 w-full flex justify-center text-gray-400 dark:text-gray-500 text-xs tracking-widest uppercase border-t border-gray-200 dark:border-gray-800 mt-8">
      <span>Press <kbd class="px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 font-sans mx-1 dark:text-gray-400">ESC</kbd> to return</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchQuery = ref('');
const searchResults = ref<any[]>([]);
const trendingProducts = ref<any[]>([]);
const loading = ref(true);

const suggestions = ['Lipstick', 'Foundation', 'Serum', 'Moisturizer', 'Perfume', 'Gift Set'];
const categories = ['Makeup', 'Skincare', 'Fragrance', 'Gifts'];

const goToProduct = (id: number) => {
  router.push(`/product/${id}`);
};

const closeSearch = () => {
  router.push('/');
};

const handleSearch = async () => {
  if (searchQuery.value.length > 0) {
    loading.value = true;
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery.value}`);
      const data = await response.json();
      searchResults.value = data.products || [];
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      loading.value = false;
    }
  } else {
    searchResults.value = [];
  }
};

const performSearch = () => {
  if (searchQuery.value) {
    handleSearch();
  }
};

const searchSuggestion = (suggestion: string) => {
  searchQuery.value = suggestion;
  handleSearch();
};

const searchCategory = (category: string) => {
  searchQuery.value = category;
  handleSearch();
};

const handleEscKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeSearch();
  }
};

onMounted(async () => {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=4');
    const data = await response.json();
    trendingProducts.value = data.products || [];
  } catch (error) {
    console.error('Failed to load products:', error);
  } finally {
    loading.value = false;
  }
  window.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscKey);
});
</script>

<style scoped>
.glass-overlay {
  background: rgba(248, 249, 250, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.search-underline {
  background: linear-gradient(to right, #0f426f, #2e5a88);
  height: 1px;
  width: 100%;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
</style>