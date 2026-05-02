<template>
  <header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
    <nav class="flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto">
      <!-- Logo - Left -->
      <router-link to="/" class="text-3xl font-serif italic text-primary dark:text-blue-300">
        Oshi Beauty
      </router-link>
      
      <!-- Navigation Links - Center -->
      <div class="hidden lg:flex items-center space-x-8">
        <router-link 
          to="/skincare" 
          class="nav-link" 
          :class="{ active: isActive('/skincare') }"
        >
          Skincare
        </router-link>
        <router-link 
          to="/makeup" 
          class="nav-link" 
          :class="{ active: isActive('/makeup') }"
        >
          Makeup
        </router-link>
        <router-link 
          to="/fragrance" 
          class="nav-link" 
          :class="{ active: isActive('/fragrance') }"
        >
          Fragrance
        </router-link>
        <router-link 
          to="/gifts" 
          class="nav-link" 
          :class="{ active: isActive('/gifts') }"
        >
          Gifts
        </router-link>
        <router-link 
          to="/offers" 
          class="nav-link" 
          :class="{ active: isActive('/offers') }"
        >
          Offers
        </router-link>
        <router-link 
          to="/about" 
          class="nav-link" 
          :class="{ active: isActive('/about') }"
        >
          About Us
        </router-link>
      </div>
      
      <!-- Icons - Right -->
      <div class="flex items-center gap-6">
        <!-- Search Icon -->
        <button @click="goToSearch" class="text-primary dark:text-blue-300 hover:opacity-80 transition">
          <span class="material-symbols-outlined text-2xl">search</span>
        </button>
        
        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="text-primary dark:text-blue-300 hover:opacity-80 transition">
          <span class="material-symbols-outlined text-2xl">{{ isDark ? 'light_mode' : 'dark_mode' }}</span>
        </button>
        
        <!-- Profile / Login -->
        <router-link to="/login" class="text-primary dark:text-blue-300 hover:opacity-80 transition">
          <span class="material-symbols-outlined text-2xl">person</span>
        </router-link>
        
        <!-- Shopping Cart -->
        <router-link to="/cart" class="text-primary dark:text-blue-300 hover:opacity-80 transition relative">
          <span class="material-symbols-outlined text-2xl">shopping_bag</span>
          <span 
            v-if="cartCount > 0" 
            class="absolute -top-2 -right-2 bg-primary dark:bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            {{ cartCount }}
          </span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useRouter, useRoute } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();
const route = useRoute();
const cartCount = computed(() => cartStore.totalItems);
const isDark = ref(false);

// Check if the current route matches the given path
const isActive = (path: string) => {
  return route.path === path;
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const goToSearch = () => {
  router.push('/search');
};

onMounted(() => {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
  
  // Load cart
  cartStore.loadCart();
});
</script>

<style scoped>
.nav-link {
  @apply text-slate-600 dark:text-gray-300 font-medium hover:text-primary dark:hover:text-blue-300 transition-colors pb-1;
}

.nav-link.active {
  @apply text-primary dark:text-blue-300 font-semibold border-b-2 border-primary dark:border-blue-300;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>