<template>
  <div class="bg-surface text-on-surface flex flex-col min-h-screen">
    <!-- Main Content Canvas -->
    <main class="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
      <div class="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
        <!-- Editorial Imagery Side -->
        <div class="hidden md:block md:col-span-5 h-[600px] relative overflow-hidden rounded-xl">
          <img 
            class="absolute inset-0 w-full h-full object-cover" 
            alt="Premium cosmetic texture" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvWQgQclLUt6wySATkR8TALpVVn4ZDKfTME18vAlmQgKb7q_uqmYV-i0aUwzvRrTtSA5Wq0lOLyafKA7VSY_DfhPgKnLtRtnLcpG9zU7b9bv1iACPcNu91L2eqMuw_0upWUkmJlJAd-rMDzZzLKdIaXrXjGjYTA9eih43IezW5CLo1epfNtMX70KwDHIUuUJw1ffsoXacjRJVcE3CgunS9_HNacMCFC7bkvBuigcQ48wpZyd8uaG1jawdmpCjVxE9t4obOuEujCR-X"
          />
          <div class="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>
        
        <!-- Content Side -->
        <div class="md:col-span-7 md:-ml-12 z-10">
          <div class="bg-white p-10 md:p-16 shadow-2xl shadow-black/5 rounded-xl border border-gray-200">
            <header class="mb-12">
              <span class="text-primary font-body text-xs tracking-[0.2em] uppercase mb-4 block">Order Confirmed</span>
              <h1 class="text-5xl md:text-6xl font-headline text-primary tracking-tight leading-tight mb-6">
                Thank you for <br/><i class="font-serif">your ritual</i>
              </h1>
              <p class="text-secondary font-body text-lg leading-relaxed max-w-md">
                Your selections are being prepared in our digital atelier with the utmost care. We hope they bring light to your daily practice.
              </p>
            </header>
            
            <div class="space-y-10">
              <div class="h-[1px] bg-gray-300 w-12"></div>
              <div class="space-y-6">
                <h2 class="text-gray-800 font-body font-medium text-sm tracking-wide">Would you like to sign out of the Atelier?</h2>
                <div class="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <button 
                    @click="handleLogout"
                    class="bg-gradient-to-r from-primary to-blue-700 text-white px-10 py-4 rounded-full font-label text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                  >
                    Logout
                  </button>
                  <router-link 
                    to="/" 
                    class="text-primary font-label text-xs uppercase tracking-widest hover:underline underline-offset-8 transition-all"
                  >
                    Return to Home
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Detail Decoration -->
          <div class="mt-8 text-right pr-4">
            <span class="text-blue-900/30 font-serif italic text-sm">Oshi Beauty • Dedicated to Essence</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const router = useRouter();
const cartStore = useCartStore();

const handleLogout = () => {
  // Clear user session (if you have user authentication)
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  
  // Clear cart
  cartStore.clearCart();
  
  // Show logout message
  alert('You have been successfully logged out.');
  
  // Redirect to home page
  router.push('/');
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
</style>