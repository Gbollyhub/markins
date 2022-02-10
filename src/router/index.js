import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/webstore/Home.vue'
import Login from '../views/webstore/Login.vue'
import Register from '../views/webstore/Register.vue'
import Cart from '../views/webstore/Cart.vue'
import Checkout from '../views/webstore/Checkout.vue'
import ProductPage from '../views/webstore/ProductPage.vue'
import Category from '../views/webstore/Category.vue'
import Search from '../views/webstore/SearchResult.vue'
import Status from '../views/webstore/TransactionStatus.vue'

import Profile from '../views/dashboard/Profile.vue'
import Orders from '../views/dashboard/Orders.vue'
import SavedItems from '../views/dashboard/SavedItems.vue'
import Notifications from '../views/dashboard/Notifications.vue'
import Settings from '../views/dashboard/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/create-account',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/transaction-status',
    name: 'Status',
    component: Status
  },

////////////////User Dashbord Route/////////////////////////////////////


  {
    path: '/user/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/user/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/user/saved-items',
    name: 'SavedItems',
    component: SavedItems
  },
  {
    path: '/user/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/user/settings',
    name: 'Settings',
    component: Settings
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
