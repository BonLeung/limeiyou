import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home/Home.vue'
Router.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/home.vue')
    },
    {
      path: '/mall',
      name: 'mall',
      component: () => import('./views/mall/mall.vue')
    },
    {
      path: '/shops',
      name: 'shops',
      component: () => import('./views/shops/shops.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/me/me.vue')
    },
    {
      path: '/my-orders',
      name: 'myOrders',
      component: () => import('./views/my-orders/my-orders.vue')
    }
  ]
})
