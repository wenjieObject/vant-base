import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/user/Login.vue')
  },
  {
    path: '/itemdetail/:id',
    name: 'itemdetail',
    component: () => import('../views/item/Itemdetail.vue')
  }, {
    path: '/itemlist',
    name: 'itemlist',
    component: () => import('../views/item/Itemlist.vue'),
    children: [{
      path: '/itemlist/cate1',
      name: 'cate1',
      component: () => import('../views/item/Itemdetail.vue'),
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router