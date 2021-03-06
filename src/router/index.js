import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
