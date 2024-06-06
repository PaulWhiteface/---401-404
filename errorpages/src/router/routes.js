import { createRouter, createWebHistory } from 'vue-router';

import NoAuth from '../pages/NoAuth.vue';
import NotFound from '../pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: NoAuth,
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    }
  ]
})

export default router;