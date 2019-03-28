import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './components/Admin.vue'
import Homepage from './components/Homepage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Homepage',
      name: 'homepage',
      component: Homepage
    }
  ]
})
