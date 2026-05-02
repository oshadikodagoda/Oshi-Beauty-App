<template>
  <div class="bg-background text-on-background min-h-screen flex flex-col">
    <!-- Main Content: Login Screen Editorial Layout -->
    <main class="flex-grow flex items-center justify-center px-6 py-12 md:py-24">
      <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Left Side: Editorial Image/Branding -->
        <div class="hidden md:block relative h-[700px] overflow-hidden rounded-2xl shadow-2xl">
          <img 
            alt="Editorial Beauty" 
            class="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB01nBlqMZX0wfvC_2VnQhUy4b2mJJQ4e-XV8Yy3RxZgBiRhTl0xtBnMV9u2m_PiZXe_Hi2QYPdNfPQbFe2Ai3AUi20DG2M_jTtf1KEqpfwR0MqDyNR0yjDPXSLaSSEUCUaYk8_rSaLHlrBqEvKTeHJipuN7VOsVW60hJlrMNHeU70UGJPpumt2LO_CwJcwe666q59M5wioywlzxxHQdJkGkCvuKZqdh5O6iunXx5wF_ye1vILsqJ6WORgReJBv9US4hlObJqS4uRzU"
          />
          <div class="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <div class="absolute bottom-12 left-12 right-12 text-white">
            <p class="font-serif text-3xl leading-tight">
              Curating your timeless <br>glow with precision.
            </p>
          </div>
        </div>
        
        <!-- Right Side: Login Form Content -->
        <div class="flex flex-col space-y-10 md:pl-12">
          <header class="space-y-4">
            <div class="md:hidden text-center mb-8">
              <h2 class="text-2xl font-serif tracking-tighter text-primary">Oshi Beauty</h2>
            </div>
            <h1 class="text-5xl md:text-6xl font-serif text-primary tracking-tight leading-none">
              Welcome to the <br>Oshi Beauty
            </h1>
            <p class="text-secondary font-body tracking-wide text-sm max-w-sm">
              Access your curated beauty profile and discover the season's most refined collections.
            </p>
          </header>
          
          <form @submit.prevent="handleLogin" class="space-y-8 max-w-md">
            <!-- Input Email -->
            <div class="space-y-1">
              <label class="text-[10px] uppercase tracking-widest text-secondary font-bold" for="email">
                Email Address
              </label>
              <input 
                v-model="email"
                class="w-full bg-gray-100 focus:ring-0 focus:bg-gray-200 py-4 px-0 border-b border-gray-300 transition-all duration-300 placeholder:text-gray-400 outline-none" 
                id="email" 
                placeholder="name@example.com" 
                type="email"
                required
              />
            </div>
            
            <!-- Input Password -->
            <div class="space-y-1">
              <label class="text-[10px] uppercase tracking-widest text-secondary font-bold" for="password">
                Password
              </label>
              <input 
                v-model="password"
                class="w-full bg-gray-100 focus:ring-0 focus:bg-gray-200 py-4 px-0 border-b border-gray-300 transition-all duration-300 placeholder:text-gray-400 outline-none" 
                id="password" 
                placeholder="••••••••" 
                type="password"
                required
              />
            </div>
            
            <!-- Options -->
            <div class="flex items-center justify-between text-xs tracking-wide">
              <label class="flex items-center gap-2 cursor-pointer group">
                <input v-model="rememberMe" type="checkbox" class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-0" />
                <span class="text-secondary group-hover:text-primary transition-colors">Remember Me</span>
              </label>
              <a href="#" class="text-primary font-medium hover:underline decoration-primary underline-offset-4">
                Forgot Password?
              </a>
            </div>
            
            <!-- Sign In Button -->
            <button 
              type="submit"
              class="w-full bg-gradient-to-r from-primary to-blue-700 text-white py-5 rounded-lg uppercase tracking-[0.1em] font-bold shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.01] transition-all duration-300"
            >
              Sign In
            </button>
          </form>
          
          <!-- Social & Create Account -->
          <div class="max-w-md space-y-8">
            <div class="relative flex items-center">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="flex-shrink mx-4 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Or continue with
              </span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            
            <div class="flex gap-4">
              <button class="flex-1 flex items-center justify-center py-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <span class="text-xs font-semibold tracking-wide text-secondary">Google</span>
              </button>
              <button class="flex-1 flex items-center justify-center py-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <span class="text-xs font-semibold tracking-wide text-secondary">Apple</span>
              </button>
            </div>
            
            <div class="text-center pt-4">
              <p class="text-sm text-secondary">
                New to the Atelier? 
                <router-link to="/signup" class="text-primary font-bold hover:underline underline-offset-4 ml-1">
                  Create an Account
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- Footer -->
    <footer class="mt-auto py-10 px-10 border-t border-gray-200">
      <div class="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] text-gray-400 uppercase tracking-widest">
          © 2024 Oshi Beauty. All Rights Reserved.
        </p>
        <div class="flex gap-8">
          <a href="#" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleLogin = () => {
  if (email.value && password.value) {
    alert(`Welcome back! You've successfully logged in.`);
    router.push('/');
  } else {
    alert('Please enter both email and password');
  }
};
</script>