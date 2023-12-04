import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import CartVue from '@/views/CartVue.vue';
import SignUp from '@/views/SignUp.vue';
import ProductView from '@/views/ProductView.vue';
import SignIn from '@/views/SignIn.vue';
import ProfileView from '@/views/ProfileView.vue';
import PaymentView from '@/views/PaymentView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartVue
    },

    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },

    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/product',
      name: 'ProductView',
      component: ProductView

    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView

    },

    {
      path: '/payment',
      name: 'PaymentView',
      component: PaymentView

    },
    
  ]
})

export default router
