<template>
  <div class="text-on-surface antialiased pb-32">
    <!-- TopAppBar -->
    <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-none">
      <button @click="goBack" class="hover:opacity-70 transition-opacity active:scale-95 duration-150 text-blue-900">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 class="text-xl font-bold tracking-[0.1em] text-blue-900">
        <router-link to="/" class="text-3xl font-serif italic text-blue-900 leading-none">Oshi Beauty</router-link>
      </h1>
      <div class="w-6"></div>
    </header>

    <main class="max-w-7xl mx-auto px-6 pt-12">
      <!-- Editorial Header -->
      <section class="mb-12">
        <span class="text-primary font-label text-[10px] uppercase tracking-widest block mb-2">Secure Checkout</span>
        <h2 class="text-4xl font-headline leading-tight text-primary">Finalizing Your Ritual</h2>
        <p class="text-secondary body-md mt-4 leading-relaxed italic">Crafting a bespoke beauty experience from our atelier to your door.</p>
      </section>

      <!-- Two-Column Checkout Form Container -->
      <form @submit.prevent="handleSubmit" class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Left Column: Information & Payment -->
        <div class="lg:col-span-7 space-y-12">
          <!-- 1. Contact Information -->
          <section class="space-y-6">
            <div class="flex items-baseline justify-between">
              <h3 class="text-xl font-headline text-primary">Contact Information</h3>
              <span class="text-[10px] text-outline uppercase tracking-tighter">Step 01</span>
            </div>
            <div class="space-y-4">
              <div class="relative">
                <input 
                  v-model="form.fullName"
                  class="w-full border-none bg-gray-100 rounded-xl px-4 py-4 focus:ring-0 focus:bg-gray-200 transition-colors placeholder:text-gray-400 text-gray-800 outline-none" 
                  placeholder="Full Name" 
                  type="text"
                  required
                />
              </div>
              <div class="relative">
                <input 
                  v-model="form.email"
                  class="w-full border-none bg-gray-100 rounded-xl px-4 py-4 focus:ring-0 focus:bg-gray-200 transition-colors placeholder:text-gray-400 text-gray-800 outline-none" 
                  placeholder="Email Address" 
                  type="email"
                  required
                />
              </div>
              <div class="relative">
                <input 
                  v-model="form.phone"
                  class="w-full border-none bg-gray-100 rounded-xl px-4 py-4 focus:ring-0 focus:bg-gray-200 transition-colors placeholder:text-gray-400 text-gray-800 outline-none" 
                  placeholder="Phone Number" 
                  type="tel"
                  required
                />
              </div>
            </div>
          </section>

          <!-- 2. Shipping Address -->
          <section class="space-y-6">
            <div class="flex items-baseline justify-between">
              <h3 class="text-xl font-headline text-primary">Shipping Address</h3>
              <span class="text-[10px] text-outline uppercase tracking-tighter">Step 02</span>
            </div>
            <div class="space-y-4">
              <div class="relative">
                <input 
                  v-model="form.address"
                  class="w-full border-none bg-gray-100 rounded-xl px-4 py-4 focus:ring-0 focus:bg-gray-200 transition-colors placeholder:text-gray-400 text-gray-800 outline-none" 
                  placeholder="Street Address" 
                  type="text"
                  required
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <input 
                  v-model="form.city"
                  class="w-full border-none bg-gray-100 rounded-xl px-4 py-4 focus:ring-0 focus:bg-gray-200 transition-colors placeholder:text-gray-400 text-gray-800 outline-none" 
                  placeholder="City" 
                  type="text"
                  required
                />
                <input 
                  v-model="form.district"
                  class="w-full border-none bg-gray-100 rounded-xl px-4 py-4 focus:ring-0 focus:bg-gray-200 transition-colors placeholder:text-gray-400 text-gray-800 outline-none" 
                  placeholder="District" 
                  type="text"
                  required
                />
              </div>
              <div class="relative">
                <input 
                  v-model="form.postalCode"
                  class="w-full border-none bg-gray-100 rounded-xl px-4 py-4 focus:ring-0 focus:bg-gray-200 transition-colors placeholder:text-gray-400 text-gray-800 outline-none" 
                  placeholder="Postal Code" 
                  type="text"
                />
              </div>
            </div>
          </section>

          <!-- 3. Payment Method -->
          <section class="space-y-6">
            <div class="flex items-baseline justify-between">
              <h3 class="text-xl font-headline text-primary">Payment Method</h3>
              <span class="text-[10px] text-outline uppercase tracking-tighter">Step 03</span>
            </div>
            <div class="space-y-3">
              <label class="flex items-center p-4 rounded-xl bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 transition-all">
                <input 
                  v-model="form.paymentMethod"
                  class="w-5 h-5 text-primary border-gray-300 focus:ring-primary/20" 
                  name="payment" 
                  type="radio" 
                  value="card"
                />
                <div class="ml-4">
                  <span class="block font-medium text-gray-800">Credit/Debit Card</span>
                  <span class="text-xs text-gray-500">Visa, Mastercard, AMEX</span>
                </div>
                <div class="ml-auto flex gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" class="h-5" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" class="h-5" />
                </div>
              </label>
              <label class="flex items-center p-4 rounded-xl bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 transition-all">
                <input 
                  v-model="form.paymentMethod"
                  class="w-5 h-5 text-primary border-gray-300 focus:ring-primary/20" 
                  name="payment" 
                  type="radio" 
                  value="cod"
                />
                <div class="ml-4">
                  <span class="block font-medium text-gray-800">Cash on Delivery</span>
                  <span class="text-xs text-gray-500">Pay upon arrival of your parcel</span>
                </div>
              </label>
            </div>
          </section>
        </div>

        <!-- Right Column: Order Summary -->
        <div class="lg:col-span-5 lg:sticky lg:top-24">
          <section class="bg-white rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] space-y-6">
            <h3 class="text-lg font-headline text-primary text-center">Order Summary</h3>
            
            <!-- Cart Items -->
            <div v-if="cartStore.items.length === 0" class="text-center py-8">
              <p class="text-gray-500">Your cart is empty</p>
              <router-link to="/" class="text-primary hover:underline mt-2 inline-block text-sm">Continue Shopping</router-link>
            </div>
            
            <div v-else class="space-y-4 max-h-[400px] overflow-y-auto">
              <div v-for="item in cartStore.items" :key="item.id" class="flex items-center gap-4 pb-3 border-b border-gray-100">
                <div class="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden">
                  <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <p class="text-sm font-semibold text-gray-800">{{ item.title }}</p>
                  <p class="text-xs text-gray-500">Qty: {{ item.quantity || 1 }}</p>
                </div>
                <p class="text-sm font-bold text-primary">{{ item.price }}</p>
              </div>
            </div>
            
            <div class="pt-4 border-t border-gray-200 space-y-2">
              <div class="flex justify-between text-xs text-gray-500 uppercase tracking-widest">
                <span>Subtotal</span>
                <span>{{ cartStore.totalPrice }}</span>
              </div>
              <div class="flex justify-between text-xs text-gray-500 uppercase tracking-widest">
                <span>Shipping</span>
                <span class="text-green-600">FREE</span>
              </div>
              <div class="flex justify-between text-xs text-gray-500 uppercase tracking-widest">
                <span>Tax (5%)</span>
                <span>LKR {{ taxAmount }}</span>
              </div>
              <div class="flex justify-between pt-4 text-xl font-headline text-primary">
                <span>Total</span>
                <span>{{ finalTotal }}</span>
              </div>
            </div>
            
            <button 
              type="submit" 
              :disabled="cartStore.items.length === 0 || isProcessing"
              class="w-full py-5 rounded-full bg-gradient-to-r from-primary to-blue-700 text-white font-label text-sm uppercase tracking-widest shadow-xl active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isProcessing">{{ form.paymentMethod === 'card' ? 'Proceed to Payment' : 'Place Order' }}</span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            </button>
            
            <p class="text-[10px] text-center text-gray-400 uppercase tracking-widest">
              Secure payment with SSL encryption
            </p>
          </section>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const router = useRouter();
const cartStore = useCartStore();

const isProcessing = ref(false);

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  district: '',
  postalCode: '',
  paymentMethod: 'card'
});

const taxAmount = computed(() => {
  const subtotal = cartStore.subtotal;
  return Math.round(subtotal * 0.05).toLocaleString();
});

const finalTotal = computed(() => {
  return cartStore.totalPrice;
});

const validateForm = () => {
  if (!form.value.fullName.trim()) {
    alert('Please enter your full name');
    return false;
  }
  if (!form.value.email.trim()) {
    alert('Please enter your email address');
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.value.email)) {
    alert('Please enter a valid email address');
    return false;
  }
  if (!form.value.phone.trim()) {
    alert('Please enter your phone number');
    return false;
  }
  if (!form.value.address.trim()) {
    alert('Please enter your shipping address');
    return false;
  }
  if (!form.value.city.trim()) {
    alert('Please enter your city');
    return false;
  }
  if (!form.value.district.trim()) {
    alert('Please enter your district');
    return false;
  }
  return true;
};

const handleSubmit = async () => {
  if (cartStore.items.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  if (!validateForm()) {
    return;
  }
  
  // Save checkout info to session storage
  sessionStorage.setItem('checkoutInfo', JSON.stringify(form.value));
  sessionStorage.setItem('orderItems', JSON.stringify(cartStore.items));
  sessionStorage.setItem('orderTotal', cartStore.totalPrice);
  
  if (form.value.paymentMethod === 'card') {
    // Navigate to card payment page
    router.push('/payment');
  } else {
    // Cash on Delivery - direct order placement
    isProcessing.value = true;
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    isProcessing.value = false;
    
    // Clear cart
    cartStore.clearCart();
    
    // Navigate to order success page
    router.push('/order-success');
  }
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>