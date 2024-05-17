import { createRouter, createWebHistory } from 'vue-router'
import ViewItems from '../components/ViewItems.vue'
// import AddItem from '../components/AddItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewItems
    },
  ]
})

export default router
