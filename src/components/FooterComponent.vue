<template>
  <footer class="bg-gray-900 text-white py-16 px-12 mt-20">
    <div class="max-w-[1920px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <!-- Brand Column - No icons -->
        <div class="space-y-4">
          <router-link to="/" class="text-2xl font-serif italic hover:opacity-80 transition">
            Oshi Beauty
          </router-link>
          <p class="text-gray-400 text-sm leading-relaxed">
            Curating the finest in luxury beauty for the modern atelier. Every product is a promise of quality and elegance.
          </p>
        </div>

        <!-- Shop Column -->
        <div>
          <h4 class="font-bold text-white mb-6 uppercase tracking-widest text-xs">Shop</h4>
          <ul class="space-y-3">
            <li><router-link to="/skincare" class="text-gray-400 hover:text-white text-sm transition">Skincare</router-link></li>
            <li><router-link to="/makeup" class="text-gray-400 hover:text-white text-sm transition">Makeup</router-link></li>
            <li><router-link to="/fragrance" class="text-gray-400 hover:text-white text-sm transition">Fragrance</router-link></li>
            <li><router-link to="/gifts" class="text-gray-400 hover:text-white text-sm transition">Gifts</router-link></li>
            <li><router-link to="/offers" class="text-gray-400 hover:text-white text-sm transition">Offers</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-white text-sm transition">About Us</router-link></li>
          </ul>
        </div>

        <!-- Contact Details Column -->
        <div>
          <h4 class="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact Details</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-gray-400 text-xl">location_on</span>
              <span class="text-gray-400 text-sm">42/A Cinnamon Gardens, Colombo 07, Sri Lanka</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-gray-400 text-xl">call</span>
              <span class="text-gray-400 text-sm">+94 11 234 5678</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-gray-400 text-xl">email</span>
              <span class="text-gray-400 text-sm">hello@oshibeauty.com</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-gray-400 text-xl">schedule</span>
              <span class="text-gray-400 text-sm">Mon - Sat: 10:00 AM - 7:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-xs tracking-wide">
          © 2024 Oshi Beauty. Curated Luxury Skincare & Makeup. All prices in LKR.
        </p>
        <div class="flex gap-4">
          <span class="material-symbols-outlined text-gray-500 text-xl">credit_card</span>
          <span class="material-symbols-outlined text-gray-500 text-xl">payments</span>
          <span class="material-symbols-outlined text-gray-500 text-xl">account_balance</span>
        </div>
      </div>
    </div>
  </footer>
</template>