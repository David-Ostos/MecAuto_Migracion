import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/old',
      name: 'oldTemplate',
      component: () => import('../views/oldModel/oldMOdel.vue')
    },
    {
      path: '/nav',
      name: 'navBar',
      component: () => import('../views/components/navBar.vue')
    },
    {
      path: '/product',
      name: 'reciente',
      component: () => import('../views/container/products.vue')
    },
    {
      path: '/products',
      name: 'products slider',
      component: () => import('../views/components/productSlider.vue')
    },
    {
      path: '/pruebaS',
      name: 'pruebaS',
      component: () => import('../views/container/pruebaSlider.vue')
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('../views/components/header.vue')
    },
    {
      path: '/banner',
      name: 'banner',
      component: () => import('../views/components/bannerPrincipal.vue')
    },
    {
      path: '/filtro',
      name: 'filtro',
      component: () => import('../views/components/filtro.vue')
    },
    {
    path: '/navTipo',
    name: 'navTipo',
    component: () => import('../views/components/navTipo.vue')
    }
  
  ]
});

export default router;
