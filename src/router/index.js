import { createRouter, createWebHistory } from 'vue-router'
import Almaty from "@/views/Almaty.vue";
import AboutUs from "@/views/AboutUs.vue";

const routes = [
  {
    path: '/',
    redirect: '/almaty',
    name: 'Redirect'
  },
  {
    path: '/almaty',
    name: 'Almaty',
    component: Almaty
  },
  {
    path: '/about',
    name: 'About us',
    component: AboutUs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router
