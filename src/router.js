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
      path: '/select-area',
      name: 'select-area',
      component: () => import('./views/select-area/select-area.vue')
    },
    {
      path: '/select-city',
      name: 'select-city',
      component: () => import('./views/select-city/select-city.vue')
    },
    {
      path: '/mall',
      name: 'mall',
      component: () => import('./views/mall/mall.vue')
    },
    {
      path: '/classification',
      name: 'classification',
      component: () => import('./views/classification/classification.vue')
    },
    {
      path: '/goods-list',
      name: 'goods-list',
      component: () => import('./views/goods-list/goods-list.vue')
    },
    {
      path: '/goods-detail',
      name: 'goods-detail',
      component: () => import('./views/goods-detail/goods-detail.vue')
    },
    {
      path: '/goods-comments',
      name: 'goods-comments',
      component: () => import('./views/goods-comments/goods-comments.vue')
    },
    {
      path: '/shops',
      name: 'shops',
      component: () => import('./views/shops/shops.vue')
    },
    {
      path: '/shop-detail',
      name: 'shop-detail',
      component: () => import('./views/shop-detail/shop-detail.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/community/community.vue')
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
