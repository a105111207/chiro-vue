import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
    },
    {
      path: '/Slide',
      name: 'slide',
      component: () => import('@/views/Slide.vue'),
    },
    {
      path: '/Video',
      name: 'video',
      component: () => import('@/views/Video.vue'),
    },
    {
      path: '/Tecinfo',
      name: 'tecinfo',
      component: () => import('@/views/Tecinfo.vue'),
    },
  ],
})

export default router
