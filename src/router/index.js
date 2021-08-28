import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BusinessDetail from '../views/BusinessDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Business Detail',
    component: BusinessDetail
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
