import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Top from '../views/Top.vue'
import Register from '../views/Register.vue'
import Edit from '../views/Edit.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/edit/:id',
    component: Edit
  },
  {
    path: '*',
    component: NotFound
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
