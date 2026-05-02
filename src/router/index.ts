import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import SearchPage from '@/views/SearchPage.vue';
import SkincarePage from '@/views/SkincarePage.vue';
import MakeupPage from '@/views/MakeupPage.vue';
import FragrancePage from '@/views/FragrancePage.vue';
import GiftsPage from '@/views/GiftsPage.vue';
import OffersPage from '@/views/OffersPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import CartPage from '@/views/CartPage.vue';
import CheckoutPage from '@/views/CheckoutPage.vue';
import CardPaymentPage from '@/views/CardPaymentPage.vue';
import OrderSuccessPage from '@/views/OrderSuccessPage.vue';
import LogoutPage from '@/views/LogoutPage.vue';
import ProductDetail from '@/views/ProductDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/signup', name: 'signup', component: SignUpPage },
    { path: '/search', name: 'search', component: SearchPage },
    { path: '/skincare', name: 'skincare', component: SkincarePage },
    { path: '/makeup', name: 'makeup', component: MakeupPage },
    { path: '/fragrance', name: 'fragrance', component: FragrancePage },
    { path: '/gifts', name: 'gifts', component: GiftsPage },
    { path: '/offers', name: 'offers', component: OffersPage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/cart', name: 'cart', component: CartPage },
    { path: '/checkout', name: 'checkout', component: CheckoutPage },
    { path: '/payment', name: 'payment', component: CardPaymentPage },
    { path: '/order-success', name: 'order-success', component: OrderSuccessPage },
    { path: '/logout', name: 'logout', component: LogoutPage },
    { path: '/product/:id', name: 'product', component: ProductDetail },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;