<template>
  <div class="bg-gray-50 min-h-screen pb-32">
    <!-- TopAppBar -->
    <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-sm">
      <button @click="goBack" class="hover:opacity-70 transition-opacity active:scale-95 duration-150 text-primary">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 class="text-xl font-bold tracking-[0.1em] text-primary">
        <router-link to="/" class="text-2xl font-serif italic text-primary leading-none">Oshi Beauty</router-link>
      </h1>
      <div class="w-6"></div>
    </header>

    <main class="max-w-4xl mx-auto px-6 pt-12">
      <!-- Header -->
      <section class="mb-8 text-center">
        <span class="text-primary font-label text-[10px] uppercase tracking-widest block mb-2">Secure Payment</span>
        <h2 class="text-3xl md:text-4xl font-headline leading-tight text-primary">Card Payment</h2>
        <p class="text-gray-500 mt-2 text-sm">Enter your card details to complete your purchase</p>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Payment Form - Left Column -->
        <div class="lg:col-span-7">
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 class="text-lg font-serif text-primary mb-6">Card Information</h3>
            
            <form @submit.prevent="processPayment" class="space-y-6">
              <!-- Card Number -->
              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2">Card Number</label>
                <div class="relative">
                  <input 
                    v-model="card.number"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    maxlength="19"
                    @input="formatCardNumber"
                    required
                  />
                  <span class="absolute right-4 top-1/2 -translate-y-1/2">
                    <span class="material-symbols-outlined text-gray-400">credit_card</span>
                  </span>
                </div>
              </div>

              <!-- Card Name -->
              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2">Cardholder Name</label>
                <input 
                  v-model="card.name"
                  type="text"
                  placeholder="JOHN DOE"
                  class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition uppercase"
                  required
                />
              </div>

              <!-- Expiry & CVV -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2">Expiry Date</label>
                  <input 
                    v-model="card.expiry"
                    type="text"
                    placeholder="MM/YY"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    maxlength="5"
                    @input="formatExpiry"
                    required
                  />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2">CVV</label>
                  <input 
                    v-model="card.cvv"
                    type="password"
                    placeholder="123"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    maxlength="4"
                    @input="limitCVV"
                    required
                  />
                </div>
              </div>

              <!-- Save Card Option -->
              <div class="flex items-center gap-3">
                <input 
                  v-model="saveCard"
                  type="checkbox" 
                  id="saveCard" 
                  class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label for="saveCard" class="text-sm text-gray-600">Save my card details for future purchases</label>
              </div>

              <!-- Pay Button -->
              <button 
                type="submit" 
                :disabled="isProcessing"
                class="w-full py-4 rounded-full bg-gradient-to-r from-primary to-blue-700 text-white font-bold uppercase tracking-widest text-sm shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isProcessing">Pay {{ finalTotal }}</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              </button>

              <!-- Security Notice -->
              <div class="flex items-center justify-center gap-2 text-center text-xs text-gray-400 pt-4">
                <span class="material-symbols-outlined text-sm">lock</span>
                <span>Your payment is secure and encrypted</span>
              </div>
            </form>
          </div>

          <!-- Accepted Cards -->
          <div class="mt-6 flex items-center justify-center gap-4">
            <span class="text-xs text-gray-400">We accept:</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" class="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" class="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/American_Express_logo_%282018%29.svg/1280px-American_Express_logo_%282018%29.svg.png" alt="Amex" class="h-6" />
          </div>
        </div>

        <!-- Order Summary - Right Column -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-sm sticky top-24">
            <h3 class="text-lg font-serif text-primary mb-6">Order Summary</h3>
            
            <!-- Cart Items -->
            <div class="space-y-4 max-h-[300px] overflow-y-auto">
              <div v-for="item in cartStore.items" :key="item.id" class="flex items-center gap-3 pb-3 border-b border-gray-100">
                <div class="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden">
                  <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-800">{{ item.title }}</p>
                  <p class="text-xs text-gray-400">Qty: {{ item.quantity || 1 }}</p>
                </div>
                <p class="text-sm font-bold text-primary">{{ item.price }}</p>
              </div>
            </div>

            <!-- Totals -->
            <div class="mt-6 pt-4 border-t border-gray-200 space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Subtotal</span>
                <span class="text-gray-800">{{ cartStore.totalPrice }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Shipping</span>
                <span class="text-green-600">FREE</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Tax (5%)</span>
                <span class="text-gray-800">LKR {{ taxAmount }}</span>
              </div>
              <div class="flex justify-between pt-3 border-t border-gray-200">
                <span class="text-lg font-serif text-primary">Total</span>
                <span class="text-xl font-serif text-primary font-bold">{{ finalTotal }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Success Modal -->
      <div v-if="showSuccess" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click="closeSuccess">
        <div class="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-scale-up" @click.stop>
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
          </div>
          <h3 class="text-2xl font-serif text-primary mb-2">Payment Successful!</h3>
          <p class="text-gray-500 mb-6">Thank you for your purchase. Your order has been confirmed.</p>
          <button @click="closeSuccess" class="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition">
            View Order
          </button>
        </div>
      </div>
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
const showSuccess = ref(false);
const saveCard = ref(false);

const card = ref({
  number: '',
  name: '',
  expiry: '',
  cvv: ''
});

const taxAmount = computed(() => {
  const subtotal = cartStore.subtotal;
  return Math.round(subtotal * 0.05).toLocaleString();
});

const finalTotal = computed(() => {
  return cartStore.totalPrice;
});

const formatCardNumber = (e: any) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 16) value = value.slice(0, 16);
  value = value.replace(/(\d{4})/g, '$1 ').trim();
  card.value.number = value;
};

const formatExpiry = (e: any) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 4) value = value.slice(0, 4);
  if (value.length >= 2) {
    value = value.slice(0, 2) + '/' + value.slice(2);
  }
  card.value.expiry = value;
};

const limitCVV = (e: any) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 4) value = value.slice(0, 4);
  card.value.cvv = value;
};

const validateCard = () => {
  const cardNumber = card.value.number.replace(/\s/g, '');
  if (cardNumber.length !== 16) {
    alert('Please enter a valid 16-digit card number');
    return false;
  }
  if (!card.value.name.trim()) {
    alert('Please enter cardholder name');
    return false;
  }
  if (card.value.expiry.length !== 5) {
    alert('Please enter valid expiry date (MM/YY)');
    return false;
  }
  if (card.value.cvv.length < 3) {
    alert('Please enter valid CVV');
    return false;
  }
  return true;
};

const processPayment = async () => {
  if (!validateCard()) return;
  
  isProcessing.value = true;
  
  // Simulate payment processing
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  isProcessing.value = false;
  showSuccess.value = true;
};

const closeSuccess = () => {
  showSuccess.value = false;
  // Clear cart after successful payment
  cartStore.clearCart();
  router.push('/order-success');
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
@keyframes scale-up {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-up {
  animation: scale-up 0.3s ease-out;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>