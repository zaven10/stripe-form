import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home/index.vue'
// import CancelView from '../views/Cancel/index.vue'
// import SuccessView from '../views/Success/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cancel',
      name: 'cancel',
      component:  () => import('../views/Cancel/index.vue'),
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../views/Success/index.vue'),
    },
  ],
})

export default router
