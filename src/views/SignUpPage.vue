<template>
  <div class="bg-background text-on-background min-h-screen flex flex-col">
    <main class="flex-grow flex items-center justify-center px-6 py-12 md:py-24">
      <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Left Side: Editorial Image -->
        <div class="hidden md:block relative h-[700px] overflow-hidden rounded-full">
          <img 
            alt="Editorial Beauty" 
            class="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700" 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
          />
          <div class="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          <div class="absolute bottom-12 left-12 right-12 text-white">
            <p class="font-serif text-3xl leading-tight">
              Begin your beauty <br>journey with us.
            </p>
          </div>
        </div>
        
        <!-- Right Side: Sign Up Form -->
        <div class="flex flex-col space-y-10 md:pl-12">
          <header class="space-y-4">
            <h1 class="text-5xl md:text-6xl font-serif text-primary tracking-tight leading-none">
              Create Account
            </h1>
            <p class="text-secondary font-body tracking-wide text-sm max-w-sm">
              Join the Oshi Beauty community and discover curated luxury.
            </p>
          </header>
          
          <form @submit.prevent="handleSignUp" class="space-y-6 max-w-md">
            <div class="space-y-1">
              <label class="text-[10px] uppercase tracking-widest text-secondary font-bold">Full Name</label>
              <input v-model="name" type="text" class="w-full bg-gray-100 py-4 px-0 border-b border-gray-300 outline-none" required />
            </div>
            
            <div class="space-y-1">
              <label class="text-[10px] uppercase tracking-widest text-secondary font-bold">Email Address</label>
              <input v-model="email" type="email" class="w-full bg-gray-100 py-4 px-0 border-b border-gray-300 outline-none" required />
            </div>
            
            <div class="space-y-1">
              <label class="text-[10px] uppercase tracking-widest text-secondary font-bold">Password</label>
              <input v-model="password" type="password" class="w-full bg-gray-100 py-4 px-0 border-b border-gray-300 outline-none" required />
            </div>
            
            <div class="space-y-1">
              <label class="text-[10px] uppercase tracking-widest text-secondary font-bold">Confirm Password</label>
              <input v-model="confirmPassword" type="password" class="w-full bg-gray-100 py-4 px-0 border-b border-gray-300 outline-none" required />
            </div>
            
            <button type="submit" class="w-full bg-gradient-to-r from-primary to-blue-700 text-white py-5 rounded-lg uppercase tracking-[0.1em] font-bold shadow-lg hover:scale-[1.01] transition-all duration-300">
              Create Account
            </button>
          </form>
          
          <div class="text-center pt-4">
            <p class="text-sm text-secondary">
              Already have an account? 
              <router-link to="/login" class="text-primary font-bold hover:underline underline-offset-4 ml-1">
                Sign In
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </main>
    
    <footer class="mt-auto py-10 px-10 border-t border-gray-200">
      <div class="max-w-screen-2xl mx-auto text-center">
        <p class="text-[10px] text-gray-400 uppercase tracking-widest">
          © 2024 Oshi Beauty. All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleSignUp = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!');
    return;
  }
  if (name.value && email.value && password.value) {
    alert(`Welcome ${name.value}! Your account has been created.`);
    router.push('/login');
  } else {
    alert('Please fill in all fields');
  }
};
</script>