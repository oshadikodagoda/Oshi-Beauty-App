<template>
  <main class="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <button @click="goBack" class="text-primary hover:underline mb-8 inline-flex items-center gap-1">
      <span class="material-symbols-outlined text-sm">arrow_back</span>
      Back
    </button>
    
    <div v-if="!product" class="text-center py-20">
      <p class="text-gray-500">Product not found</p>
      <router-link to="/" class="text-primary hover:underline mt-4 inline-block">Return to Shop</router-link>
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="rounded-2xl overflow-hidden bg-gray-100">
        <img :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
      </div>
      
      <div>
        <span class="text-primary text-sm uppercase tracking-wider">{{ product.category }}</span>
        <h1 class="text-4xl md:text-5xl font-serif text-primary mt-2">{{ product.title }}</h1>
        <p class="text-gray-500 text-sm mt-1">{{ product.subtitle }}</p>
        
        <div class="mt-4">
          <span class="text-3xl font-bold text-primary">{{ product.price }}</span>
        </div>
        
        <p class="text-gray-600 mt-6 leading-relaxed">{{ product.description || 'A premium product from Oshi Beauty.' }}</p>
        
        <button @click="addToCart" class="w-full bg-primary text-white py-4 rounded-full font-semibold mt-8 hover:bg-primary/90 transition">
          Add to Cart
        </button>
        
        <div class="mt-8 pt-8 border-t border-gray-200">
          <div class="flex gap-4 items-center text-sm text-gray-500">
            <span class="material-symbols-outlined text-primary">local_shipping</span>
            <span>Free shipping on orders over LKR 4,500</span>
          </div>
        </div>
      </div>
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

const products: Record<string, any> = {
  'midnight-regeneration-serum': {
    id: 1,
    title: 'Midnight Regeneration Serum',
    category: 'Treatment',
    subtitle: 'Overnight repair complex',
    price: 'LKR 4,950',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoUghOv-Vz0ey6Ya_zxpf7CXM_0L2sELs7v9VmqtCWH_64ngAYYeNInPrUMkpw-67WnJ_QwgPCZC_GVj6NktCfXq5yA57dDBsma0-Bin8JBhGcPPdlFLuPlnbBXAgZuhHGUFnpV06vIW8CgcY7xU-LIgMc82mRK276P7FkPtaCOPFVcAaMJjgguVTryw4mHugzSt7dowrQiR89KUv3jBVV0EJvatv_QocHoTWjjcaD_uOfxPb0mj5sceAU76IDye6Tlhg1Fs5nYLtG',
    description: 'A concentrated overnight elixir designed to harmonize with your skin\'s nocturnal rhythm.'
  },
  'ceramide-rich-cream': {
    id: 2,
    title: 'Ceramide Rich Cream',
    category: 'Moisturizer',
    subtitle: 'Soothing and protective',
    price: 'LKR 3,850',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500',
    description: 'A deeply nourishing cream that restores the skin\'s natural barrier.'
  },
  'radiance-glow-oil': {
    id: 3,
    title: 'Radiance Glow Oil',
    category: 'Treatment',
    subtitle: 'Natural botanical extracts',
    price: 'LKR 4,900',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500',
    description: 'A lightweight, fast-absorbing facial oil that instantly boosts radiance.'
  }
};

const addToCart = () => {
  if (product.value) {
    cartStore.addItem({
      id: product.value.id,
      title: product.value.title,
      price: product.value.price,
      image: product.value.image
    });
    alert(`Added ${product.value.title} to cart!`);
  }
};

const goBack = () => {
  router.back();
};

onMounted(() => {
  const slug = route.params.slug as string;
  product.value = products[slug];
});
</script>