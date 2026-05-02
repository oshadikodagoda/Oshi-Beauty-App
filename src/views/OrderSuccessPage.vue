<template>
  <div class="bg-surface text-on-surface">
    <!-- Success Hero Section -->
    <main class="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
      <section class="flex flex-col md:flex-row gap-16 items-start">
        <!-- Left Column: Message & Details -->
        <div class="w-full md:w-7/12">
          <div class="mb-12">
            <div class="inline-flex items-center gap-2 text-primary mb-4">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span>
              <span class="text-sm font-bold tracking-widest uppercase">Order Confirmed</span>
            </div>
            <h1 class="text-5xl font-headline tracking-tight text-primary mb-6">
              Your beauty ritual is on its way.
            </h1>
            <p class="text-secondary text-lg leading-relaxed max-w-lg">
              Thank you for choosing Oshi Beauty. We've received your order and our artisans are currently preparing your curated selection with care.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 mb-8">
            <div class="grid grid-cols-2 gap-8">
              <div>
                <span class="block text-xs uppercase tracking-widest text-gray-400 mb-1">Order Number</span>
                <span class="font-bold text-primary">#{{ orderNumber }}</span>
              </div>
              <div>
                <span class="block text-xs uppercase tracking-widest text-gray-400 mb-1">Expected Delivery</span>
                <span class="font-bold text-primary italic font-headline">{{ expectedDelivery }}</span>
              </div>
              <div>
                <span class="block text-xs uppercase tracking-widest text-gray-400 mb-1">Shipping To</span>
                <span class="font-medium text-gray-800 leading-snug" v-html="shippingAddress"></span>
              </div>
              <div>
                <span class="block text-xs uppercase tracking-widest text-gray-400 mb-1">Payment Method</span>
                <span class="font-medium text-gray-800">{{ paymentMethod }}</span>
              </div>
            </div>
          </div>

          <div class="flex gap-4 flex-wrap">
            <button @click="trackOrder" class="bg-gradient-to-r from-primary to-blue-700 text-white px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Track Order Status
            </button>
            <button @click="downloadReceipt" class="text-primary px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest hover:underline transition-all">
              Download Receipt
            </button>
            <router-link to="/" class="text-primary px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest hover:underline transition-all">
              Continue Shopping
            </router-link>
          </div>
        </div>

        <!-- Right Column: Order Summary -->
        <div class="w-full md:w-5/12 sticky top-32">
          <div class="bg-white rounded-xl p-8 shadow-2xl shadow-primary/5 transform md:translate-y-8">
            <h3 class="font-headline text-2xl text-primary mb-8 italic">Order Summary</h3>
            
            <div class="space-y-6 mb-10 max-h-[400px] overflow-y-auto">
              <div v-for="item in orderItems" :key="item.id" class="flex gap-4 items-center">
                <div class="w-16 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                  <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
                </div>
                <div class="flex-grow">
                  <h4 class="font-medium text-primary leading-tight text-sm">{{ item.title }}</h4>
                  <span class="text-xs text-gray-400 block mb-1">Qty: {{ item.quantity || 1 }}</span>
                  <span class="text-sm font-bold">{{ item.price }}</span>
                </div>
              </div>
            </div>

            <div class="space-y-3 pt-6 border-t border-gray-200">
              <div class="flex justify-between text-sm">
                <span class="text-secondary">Subtotal</span>
                <span class="font-medium text-gray-800">{{ subtotal }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-secondary">Luxury Shipping</span>
                <span class="font-medium text-green-600">FREE</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-secondary">Tax (5%)</span>
                <span class="font-medium text-gray-800">LKR {{ taxAmount }}</span>
              </div>
              <div class="flex justify-between pt-4 border-t border-gray-200">
                <span class="text-xl font-headline italic text-primary">Total Amount</span>
                <span class="text-xl font-bold text-primary">{{ totalAmount }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Recommendations Section -->
      <section class="mt-32">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div class="md:col-span-8 bg-primary rounded-xl overflow-hidden relative group p-12 flex flex-col justify-end min-h-[400px]">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style="background-image: url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800')">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            <div class="relative z-10">
              <h2 class="text-4xl font-headline text-white mb-4">Complete the look.</h2>
              <p class="text-blue-100 mb-8 max-w-md">Our skincare specialists curated a few more essentials that pair perfectly with your recent order.</p>
              <router-link to="/" class="inline-block bg-white text-primary px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors">
                Explore Selection
              </router-link>
            </div>
          </div>

          <div class="md:col-span-4 bg-pink-50 rounded-xl p-10 flex flex-col justify-center">
            <span class="material-symbols-outlined text-4xl mb-6 text-primary">auto_awesome</span>
            <h3 class="font-headline text-2xl mb-4 italic text-primary">Join the Oshi Collective</h3>
            <p class="text-gray-600 mb-8 text-sm leading-relaxed">Early access to boutique launches, private masterclasses, and curated beauty news.</p>
            <div class="flex border-b border-gray-300 pb-2">
              <input 
                v-model="newsletterEmail"
                type="email" 
                placeholder="Your email address" 
                class="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-gray-400 outline-none"
              />
              <button @click="subscribeNewsletter" class="material-symbols-outlined text-primary">arrow_forward</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const newsletterEmail = ref('');

// Order data
const orderNumber = ref('');
const expectedDelivery = ref('');
const shippingAddress = ref('');
const paymentMethod = ref('');
const orderItems = ref<any[]>([]);
const shippingCost = ref(0);

const taxAmount = computed(() => {
  const itemsTotal = orderItems.value.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
    return sum + (price * (item.quantity || 1));
  }, 0);
  return Math.round(itemsTotal * 0.05).toLocaleString();
});

const subtotal = computed(() => {
  const itemsTotal = orderItems.value.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
    return sum + (price * (item.quantity || 1));
  }, 0);
  return `LKR ${itemsTotal.toLocaleString()}`;
});

const totalAmount = computed(() => {
  const itemsTotal = orderItems.value.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]/g, ''));
    return sum + (price * (item.quantity || 1));
  }, 0);
  const total = itemsTotal + shippingCost.value;
  return `LKR ${total.toLocaleString()}`;
});

const trackOrder = () => {
  alert(`Tracking order #${orderNumber.value}\nExpected delivery: ${expectedDelivery.value}`);
};

const downloadReceipt = () => {
  alert(`Receipt for order #${orderNumber.value} has been downloaded.`);
};

const subscribeNewsletter = () => {
  if (newsletterEmail.value) {
    alert(`Thanks for subscribing! We'll send updates to ${newsletterEmail.value}`);
    newsletterEmail.value = '';
  }
};

onMounted(() => {
  // Generate random order number
  orderNumber.value = `OB-${Math.floor(Math.random() * 9000000) + 1000000}`;
  
  // Calculate expected delivery date (3-5 days from now)
  const today = new Date();
  const deliveryStart = new Date(today);
  const deliveryEnd = new Date(today);
  deliveryStart.setDate(today.getDate() + 3);
  deliveryEnd.setDate(today.getDate() + 5);
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  expectedDelivery.value = `${months[deliveryStart.getMonth()]} ${deliveryStart.getDate()}th — ${months[deliveryEnd.getMonth()]} ${deliveryEnd.getDate()}th`;
  
  // Get shipping address from session storage
  const savedCheckout = sessionStorage.getItem('checkoutInfo');
  if (savedCheckout) {
    const checkoutInfo = JSON.parse(savedCheckout);
    shippingAddress.value = `${checkoutInfo.address}<br/>${checkoutInfo.city}, Sri Lanka`;
    paymentMethod.value = checkoutInfo.paymentMethod === 'card' ? 'Credit/Debit Card' : 'Cash on Delivery';
  } else {
    shippingAddress.value = '42/A Cinnamon Gardens<br/>Colombo 07, Sri Lanka';
    paymentMethod.value = 'Credit/Debit Card';
  }
  
  // Get order items from session storage
  const savedItems = sessionStorage.getItem('orderItems');
  if (savedItems) {
    orderItems.value = JSON.parse(savedItems);
  } else {
    // Fallback demo items
    orderItems.value = [
      {
        id: 1,
        title: 'Cellular Radiance Serum',
        quantity: 1,
        price: 'LKR 18,500',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP_6hKttRcz0E0JFYgVZdhxTNhWENBMs66yx6_t1CdEE4zA2fVF2nIoUPy8k1N57msEojG-tlHuqxF_rpb2MniLePEjsed73OchsrdOQ8SE1Rgrk6DlRRvA5SiVJgpgGA8aRMyD8fW5H1vV6qy5U9oKkj5_23CiDkEDlkaKpzxINWP5BxgmiSaXH6zM-SE5SGyUJw_DBRlEG0CVW7YeMdVqsfP2kuFXkpTIIT645TfWO7m8OvbNfw3YDZ40FPBamVm0TEGCQryjg5V'
      }
    ];
  }
  
  // Clear session storage after loading
  sessionStorage.removeItem('checkoutInfo');
  sessionStorage.removeItem('orderItems');
  sessionStorage.removeItem('orderTotal');
});
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
</style>