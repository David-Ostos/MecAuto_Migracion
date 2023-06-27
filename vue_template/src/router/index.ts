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
      component: () => import('../views/oldModel/container/navBar.vue')
    },
    {
      path: '/loader',
      name: 'loader',
      component: () => import('../views/oldModel/components/loaderAll.vue')
    },
    {
      path: '/products',
      name: 'reciente',
      component: () => import('../views/oldModel/container/reciente/products.vue')
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: () => import('../views/oldModel/container/reciente/prueba.vue')
    },
    {
      path: '/pruebaS',
      name: 'pruebaS',
      component: () => import('../views/oldModel/container/reciente/pruebaSlider.vue')
    }
  ]
});

export default router;