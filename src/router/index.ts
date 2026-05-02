import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import SkincarePage from '@/views/SkincarePage.vue';
import MakeupPage from '@/views/MakeupPage.vue';
import FragrancePage from '@/views/FragrancePage.vue';
import GiftsPage from '@/views/GiftsPage.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import CartPage from '@/views/CartPage.vue';
import OffersPage from '@/views/OffersPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SearchPage from '@/views/SearchPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/skincare', name: 'skincare', component: SkincarePage },
    { path: '/makeup', name: 'makeup', component: MakeupPage },
    { path: '/fragrance', name: 'fragrance', component: FragrancePage },
    { path: '/gifts', name: 'gifts', component: GiftsPage },
    { path: '/cart', name: 'cart', component: CartPage },
    { path: '/offers', name: 'offers', component: OffersPage },   
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/search', name: 'search', component: SearchPage },
    { path: '/product/:slug', name: 'product', component: ProductDetail },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

export default router;