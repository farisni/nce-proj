import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('../views/Article.vue'),
    },
  ],
})

export default router
