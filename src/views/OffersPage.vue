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

    <!-- Bundle Offers with Images -->
    <section class="mb-16">
      <h2 class="text-3xl font-headline text-primary dark:text-blue-300 mb-8">Bundle Offers</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Offer 1: Buy 2 Get 15% Off -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=150" alt="Serum" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2">Any Serum</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150" alt="Moisturizer" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2">Any Moisturizer</p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-4xl font-bold text-primary mb-2">15% OFF</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 text-center">Buy any 2 products<br/>Get 15% off your purchase</div>
              <button class="mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <!-- Offer 2: Buy 3 Get 25% Off -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=150" alt="Serum" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2">Serum</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150" alt="Moisturizer" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2">Moisturizer</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=150" alt="Toner" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2">Toner</p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-4xl font-bold text-primary mb-2">25% OFF</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 text-center">Buy any 3 products<br/>Get 25% off your purchase</div>
              <button class="mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <!-- Offer 3: Skincare Essentials Bundle -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=150" alt="Midnight Serum" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2">Midnight Serum</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150" alt="Ceramide Cream" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2">Ceramide Cream</p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-2xl font-bold text-primary mb-1">LKR 8,500</div>
              <div class="text-sm text-gray-400 line-through">LKR 12,500</div>
              <div class="text-sm text-green-600 dark:text-green-400 mt-1">Save 32%</div>
              <div class="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">Skincare Essentials Kit<br/>Serum + Moisturizer</div>
              <button class="mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition">
                Shop Bundle
              </button>
            </div>
          </div>
        </div>

        <!-- Offer 4: Free Gift on LKR 5,000+ -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="grid grid-cols-2 gap-4 p-6">
            <div class="space-y-2">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                <img src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=150" alt="Lipstick" class="w-full h-32 object-contain" />
                <p class="text-xs text-center mt-2">Any Lipstick</p>
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 relative">
                <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=150" alt="Free Gift" class="w-full h-32 object-contain opacity-70" />
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="bg-primary text-white text-xs px-2 py-1 rounded-full">FREE</span>
                </div>
                <p class="text-xs text-center mt-2">Deluxe Mini</p>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-2xl font-bold text-primary mb-1">LKR 5,000+</div>
              <div class="text-sm text-green-600 dark:text-green-400">FREE GIFT</div>
              <div class="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">Spend LKR 5,000 or more<br/>Get a free deluxe mini</div>
              <button class="mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Empty State (no individual products section anymore) -->
    <div class="text-center py-12">
      <p class="text-gray-500 text-sm">More exciting offers coming soon!</p>
    </div>
  </main>
</template>

<script setup lang="ts">
// No API calls needed since we're only showing bundle offers
// This page is now completely independent of DummyJSON
</script>

<style scoped>
.font-headline {
  font-family: 'Noto Serif', serif;
}
</style>