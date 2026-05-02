<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
    <TopNavBar />
    <main class="flex-grow">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import TopNavBar from '@/components/TopNavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { useCartStore } from './stores/cart';

const router = useRouter();
const cartStore = useCartStore();

// Scroll to top on every route change
router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

onMounted(() => {
  cartStore.loadCart();
});
</script>