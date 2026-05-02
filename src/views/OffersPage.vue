<template>
  <main class="max-w-[1920px] mx-auto px-6 md:px-12 pt-16 pb-20">
    <!-- Hero Section -->
    <header class="mb-16">
      <h1 class="text-5xl md:text-7xl text-primary dark:text-blue-300 font-headline tracking-tighter leading-none mb-4">
        Limited Time <br/>
        <span class="italic">Treatments</span>
      </h1>
      <p class="text-lg text-secondary max-w-2xl font-body leading-relaxed mt-4">
        Exceptional luxury, accessible. Explore our seasonal selection of bundles and beauty essentials.
      </p>
    </header>

    <!-- Bundle Offers -->
    <section class="mb-16">
      <h2 class="text-3xl font-headline text-primary dark:text-blue-300 mb-8">Bundle Offers</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Offer 1: Skincare Bundle (2 items, 15% OFF) -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="skincareProducts[0]?.thumbnail" alt="Skincare Product" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Skincare Product</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="skincareProducts[1]?.thumbnail" alt="Skincare Product" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Skincare Product</p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-4xl font-bold text-primary mb-2">15% OFF</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 text-center">Buy any 2 Skincare products<br/>Get 15% off your purchase</div>
              <button @click="addSkincareBundle" class="mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <!-- Offer 2: Makeup Bundle (3 items, 25% OFF) -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="makeupProducts[0]?.thumbnail" alt="Makeup Product" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Makeup Product</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="makeupProducts[1]?.thumbnail" alt="Makeup Product" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Makeup Product</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="makeupProducts[2]?.thumbnail" alt="Makeup Product" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Makeup Product</p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-4xl font-bold text-primary mb-2">25% OFF</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 text-center">Buy any 3 Makeup products<br/>Get 25% off your purchase</div>
              <button @click="addMakeupBundle" class="mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <!-- Offer 3: Fragrance Bundle (2 items, 20% OFF) -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="fragranceProducts[0]?.thumbnail" alt="Fragrance" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Fragrance Product</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="fragranceProducts[1]?.thumbnail" alt="Fragrance" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Fragrance Product</p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-4xl font-bold text-primary mb-2">20% OFF</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 text-center">Buy any 2 Fragrance products<br/>Get 20% off your purchase</div>
              <button @click="addFragranceBundle" class="mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <!-- Offer 4: Complete Beauty Set (3 items, 32% OFF) -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="skincareProducts[0]?.thumbnail" alt="Skincare" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Skincare</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="makeupProducts[0]?.thumbnail" alt="Makeup" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Makeup</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img :src="fragranceProducts[0]?.thumbnail" alt="Fragrance" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Fragrance</p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-2xl font-bold text-primary mb-1">LKR 12,500</div>
              <div class="text-sm text-gray-400 line-through">LKR 18,500</div>
              <div class="text-sm text-green-600 dark:text-green-400 mt-1">Save 32%</div>
              <div class="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">Complete Beauty Set<br/>Skincare + Makeup + Fragrance</div>
              <button @click="addCompleteSet" class="mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition">
                Shop Bundle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

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
import { ref, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const email = ref('');
const skincareProducts = ref<any[]>([]);
const makeupProducts = ref<any[]>([]);
const fragranceProducts = ref<any[]>([]);

// Skincare Bundle - 15% OFF
const addSkincareBundle = () => {
  if (skincareProducts.value.length >= 2) {
    const confirmed = confirm(`Add Skincare Bundle (2 items) to cart?\n\nIncludes:\n• ${skincareProducts.value[0]?.title}\n• ${skincareProducts.value[1]?.title}\n\n15% discount will be applied.`);
    
    if (confirmed) {
      const bundleItems = [
        {
          id: skincareProducts.value[0].id,
          title: skincareProducts.value[0].title,
          price: `LKR ${(skincareProducts.value[0].price * 40).toLocaleString()}`,
          image: skincareProducts.value[0].thumbnail,
          brand: skincareProducts.value[0].brand || 'Oshi Beauty'
        },
        {
          id: skincareProducts.value[1].id,
          title: skincareProducts.value[1].title,
          price: `LKR ${(skincareProducts.value[1].price * 40).toLocaleString()}`,
          image: skincareProducts.value[1].thumbnail,
          brand: skincareProducts.value[1].brand || 'Oshi Beauty'
        }
      ];
      
      cartStore.addBundle({
        items: bundleItems,
        discountPercentage: 15,
        bundleName: 'Skincare Bundle (2 items)'
      });
      alert(`✓ Skincare Bundle added to cart!\n\n15% discount applied.`);
    }
  } else {
    alert('Skincare products loading. Please try again.');
  }
};

// Makeup Bundle - 25% OFF
const addMakeupBundle = () => {
  if (makeupProducts.value.length >= 3) {
    const confirmed = confirm(`Add Makeup Bundle (3 items) to cart?\n\nIncludes:\n• ${makeupProducts.value[0]?.title}\n• ${makeupProducts.value[1]?.title}\n• ${makeupProducts.value[2]?.title}\n\n25% discount will be applied.`);
    
    if (confirmed) {
      const bundleItems = [
        {
          id: makeupProducts.value[0].id,
          title: makeupProducts.value[0].title,
          price: `LKR ${(makeupProducts.value[0].price * 40).toLocaleString()}`,
          image: makeupProducts.value[0].thumbnail,
          brand: makeupProducts.value[0].brand || 'Oshi Beauty'
        },
        {
          id: makeupProducts.value[1].id,
          title: makeupProducts.value[1].title,
          price: `LKR ${(makeupProducts.value[1].price * 40).toLocaleString()}`,
          image: makeupProducts.value[1].thumbnail,
          brand: makeupProducts.value[1].brand || 'Oshi Beauty'
        },
        {
          id: makeupProducts.value[2].id,
          title: makeupProducts.value[2].title,
          price: `LKR ${(makeupProducts.value[2].price * 40).toLocaleString()}`,
          image: makeupProducts.value[2].thumbnail,
          brand: makeupProducts.value[2].brand || 'Oshi Beauty'
        }
      ];
      
      cartStore.addBundle({
        items: bundleItems,
        discountPercentage: 25,
        bundleName: 'Makeup Bundle (3 items)'
      });
      alert(`✓ Makeup Bundle added to cart!\n\n25% discount applied.`);
    }
  } else {
    alert('Makeup products loading. Please try again.');
  }
};

// Fragrance Bundle - 20% OFF
const addFragranceBundle = () => {
  if (fragranceProducts.value.length >= 2) {
    const confirmed = confirm(`Add Fragrance Bundle (2 items) to cart?\n\nIncludes:\n• ${fragranceProducts.value[0]?.title}\n• ${fragranceProducts.value[1]?.title}\n\n20% discount will be applied.`);
    
    if (confirmed) {
      const bundleItems = [
        {
          id: fragranceProducts.value[0].id,
          title: fragranceProducts.value[0].title,
          price: `LKR ${(fragranceProducts.value[0].price * 40).toLocaleString()}`,
          image: fragranceProducts.value[0].thumbnail,
          brand: fragranceProducts.value[0].brand || 'Oshi Beauty'
        },
        {
          id: fragranceProducts.value[1].id,
          title: fragranceProducts.value[1].title,
          price: `LKR ${(fragranceProducts.value[1].price * 40).toLocaleString()}`,
          image: fragranceProducts.value[1].thumbnail,
          brand: fragranceProducts.value[1].brand || 'Oshi Beauty'
        }
      ];
      
      cartStore.addBundle({
        items: bundleItems,
        discountPercentage: 20,
        bundleName: 'Fragrance Bundle (2 items)'
      });
      alert(`✓ Fragrance Bundle added to cart!\n\n20% discount applied.`);
    }
  } else {
    alert('Fragrance products loading. Please try again.');
  }
};

// Complete Beauty Set - 32% OFF
const addCompleteSet = () => {
  if (skincareProducts.value[0] && makeupProducts.value[0] && fragranceProducts.value[0]) {
    const confirmed = confirm(`Add Complete Beauty Set (3 items) to cart?\n\nIncludes:\n• Skincare: ${skincareProducts.value[0]?.title}\n• Makeup: ${makeupProducts.value[0]?.title}\n• Fragrance: ${fragranceProducts.value[0]?.title}\n\nOriginal Price: LKR 18,500\nBundle Price: LKR 12,500\nYou save 32%!`);
    
    if (confirmed) {
      const bundleItems = [
        {
          id: skincareProducts.value[0].id,
          title: skincareProducts.value[0].title,
          price: `LKR ${(skincareProducts.value[0].price * 40).toLocaleString()}`,
          image: skincareProducts.value[0].thumbnail,
          brand: skincareProducts.value[0].brand || 'Oshi Beauty'
        },
        {
          id: makeupProducts.value[0].id,
          title: makeupProducts.value[0].title,
          price: `LKR ${(makeupProducts.value[0].price * 40).toLocaleString()}`,
          image: makeupProducts.value[0].thumbnail,
          brand: makeupProducts.value[0].brand || 'Oshi Beauty'
        },
        {
          id: fragranceProducts.value[0].id,
          title: fragranceProducts.value[0].title,
          price: `LKR ${(fragranceProducts.value[0].price * 40).toLocaleString()}`,
          image: fragranceProducts.value[0].thumbnail,
          brand: fragranceProducts.value[0].brand || 'Oshi Beauty'
        }
      ];
      
      cartStore.addBundle({
        items: bundleItems,
        discountPercentage: 32,
        bundleName: 'Complete Beauty Set (3 items)'
      });
      alert(`✓ Complete Beauty Set added to cart!\n\nYou saved 32% on this bundle.`);
    }
  } else {
    alert('Products loading. Please try again.');
  }
};

const subscribe = () => {
  if (email.value) {
    alert(`Thanks for subscribing! We'll send updates to ${email.value}`);
    email.value = '';
  }
};

onMounted(async () => {
  try {
    const [skincareRes, makeupRes, fragranceRes] = await Promise.all([
      fetch('https://dummyjson.com/products/category/skin-care'),
      fetch('https://dummyjson.com/products/category/beauty'),
      fetch('https://dummyjson.com/products/category/fragrances')
    ]);
    
    const skincareData = await skincareRes.json();
    const makeupData = await makeupRes.json();
    const fragranceData = await fragranceRes.json();
    
    skincareProducts.value = skincareData.products || [];
    makeupProducts.value = makeupData.products || [];
    fragranceProducts.value = fragranceData.products || [];
  } catch (error) {
    console.error('Failed to load products:', error);
  }
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