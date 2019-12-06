import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Vendors from '../views/Vendors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: Products
  },
  {
    path: '/vendors',
    name: 'vendors',
    component: Vendors
  },
]

const router = new VueRouter({
  routes
})

export default router
