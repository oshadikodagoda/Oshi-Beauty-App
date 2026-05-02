<template>
  <div class="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
    <div class="text-center max-w-2xl mx-auto">
      <!-- Decorative Icon -->
      <div class="mb-8">
        <span class="material-symbols-outlined text-primary text-8xl">card_giftcard</span>
      </div>
      
      <!-- Coming Soon Title -->
      <h1 class="text-5xl md:text-7xl font-headline text-primary dark:text-blue-300 mb-6">
        Coming Soon
      </h1>
      
      <!-- Description -->
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        We're curating something special just for you. Our gift collection is being prepared with the utmost care and will be available shortly.
      </p>
      
      <!-- Decorative Line -->
      <div class="w-24 h-0.5 bg-primary mx-auto mb-8"></div>
      
      <!-- Subtext -->
      <p class="text-gray-500 dark:text-gray-500">
        Stay tuned for exclusive gift sets and limited edition bundles.
      </p>
      
      <!-- Back to Home Button -->
      <div class="mt-12">
        <router-link 
          to="/" 
          class="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Return to Home
        </router-link>
      </div>
      
      <!-- Newsletter Signup -->
      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p class="text-gray-600 dark:text-gray-400 mb-4">Get notified when we launch</p>
        <form @submit.prevent="notifyMe" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            v-model="email" 
            type="email" 
            placeholder="Your email address" 
            class="flex-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 focus:ring-2 focus:ring-primary outline-none"
            required
          />
          <button 
            type="submit" 
            class="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

const notifyMe = () => {
  if (email.value) {
    alert(`Thanks! We'll notify you at ${email.value} when gifts are available.`);
    email.value = '';
  }
};
</script>

<style scoped>
.font-headline {
  font-family: 'Noto Serif', serif;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48;
}
</style>