import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home/Home.vue'
Router.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
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
      path: '/shopcart',
      name: 'shopcart',
      component: () => import('./views/shopcart/shopcart.vue')
    },
    {
      path: '/confirm-order',
      name: 'confirm-order',
      component: () => import('./views/confirm-order/confirm-order.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/address/address.vue')
    },
    {
      path: '/add-address',
      name: 'add-address',
      component: () => import('./views/add-address/add-address.vue')
    },
    {
      path: '/pay-success',
      name: 'pay-success',
      component: () => import('./views/pay-success/pay-success.vue')
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
      path: '/article-detail',
      name: 'article-detail',
      component: () => import('./views/article-detail/article-detail.vue')
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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/login.vue')
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import('./views/regist/regist.vue')
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: () => import('./views/resetpassword/resetpassword.vue')
    },
    {
      path: '/owner',
      name: 'owner',
      component: () => import('./views/applicant/owner.vue')
    },
    {
      path: '/application',
      name: 'application',
      component: () => import('./views/applicant/application.vue')
    },
    {
      path: '/applicantsucess',
      name: 'applicantsucess',
      component: () => import('./views/applicant/applicantsucess.vue')
    },
    {
      path: '/housemaster',
      name: 'housemaster',
      component: () => import('./views/applicant/housemaster/housemaster.vue')
    },
    {
      path: '/hmapplication',
      name: 'hmapplication',
      component: () => import('./views/applicant/housemaster/hmapplication.vue')
    },
    {
      path: '/hmsuccess',
      name: 'hmsuccess',
      component: () => import('./views/applicant/housemaster/hmsuccess.vue')
    },
    {
      path: '/warden',
      name: 'warden',
      component: () => import('./views/applicant/warden/warden.vue')
    },
    {
      path: '/wdapplication',
      name: 'wdapplication',
      component: () => import('./views/applicant/warden/wdapplication.vue')
    },
    {
      path: '/wdsuccess',
      name: 'wdsuccess',
      component: () => import('./views/applicant/warden/wdsuccess.vue')
    },
    {
      path: '/mycommunity',
      name: 'mycommunity',
      component: () => import('./views/applicant/warden/mycommunity.vue')
    },
    {
      path: '/communitysuccess',
      name: 'communitysuccess',
      component: () => import('./views/applicant/warden/communitysuccess.vue')
    },
    {
      path: '/shopkeeper',
      name: 'shopkeeper',
      component: () => import('./views/applicant/shopkeeper/shopkeeper.vue')
    },
    {
      path: '/applyshopkeeper',
      name: 'applyshopkeeper',
      component: () => import('./views/applicant/shopkeeper/applyshopkeeper.vue')
    },
    {
      path: '/applysuccess',
      name: 'applysuccess',
      component: () => import('./views/applicant/shopkeeper/applysuccess.vue')
    },
    {
      path: '/shopentry',
      name: 'shopentry',
      component: () => import('./views/applicant/shopentry/shopentry.vue')
    },
    {
      path: '/shopentryform',
      name: 'shopentryform',
      component: () => import('./views/applicant/shopentry/shopentryform.vue')
    },
    {
      path: '/tips',
      name: 'tips',
      component: () => import('./views/applicant/shopentry/tips.vue')
    },
    {
      path: '/checkorder',
      name: 'checkorder',
      component: () => import('./views/order-detail/checkorder.vue')
    },
    {
      path: '/pay-success',
      name: 'pay-success',
      component: () => import('./views/pay-success/pay-success.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/address/address.vue')
    },
    {
      path: '/add-address',
      name: 'add-address',
      component: () => import('./views/add-address/add-address.vue')
    },
    {
      path: '/balance-detail',
      name: 'balance-detail',
      component: () => import('./views/balance-detail/balance-detail.vue')
    },
    {
      path: '/charge-login',
      name: 'charge-login',
      component: () => import('./views/charge-login/charge-login.vue')
    },
    {
      path: '/charge-password',
      name: 'charge-password',
      component: () => import('./views/charge-password/charge-password.vue')
    },
    {
      path: '/chargePhone',
      name: 'chargePhone',
      component: () => import('./views/chargePhone/chargePhone.vue')
    },
    {
      path: '/consume-detail',
      name: 'consume-detail',
      component: () => import('./views/consume-detail/consume-detail.vue')
    },
    {
      path: '/install',
      name: 'install',
      component: () => import('./views/install/install.vue')
    },
    {
      path: '/install-security',
      name: 'install-security',
      component: () => import('./views/install-security/install-security.vue')
    },
    {
      path: '/my-address',
      name: 'my-address',
      component: () => import('./views/my-address/my-address.vue')
    },
    {
      path: '/my-qrcode',
      name: 'my-qrcode',
      component: () => import('./views/my-qrcode/my-qrcode.vue')
    },
    {
      path: '/my-wallet',
      name: 'my-wallet',
      component: () => import('./views/my-wallet/my-wallet.vue')
    },
    {
      path: '/my-welfare',
      name: 'my-welfare',
      component: () => import('./views/my-welfare/my-welfare.vue')
    },
    {
      path: '/myWomen',
      name: 'myWomen',
      component: () => import('./views/myWomen/myWomen.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/news/news.vue')
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: () => import('./views/personalInfo/personalInfo.vue')
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: () => import('./views/recharge/recharge.vue')
    },
    {
      path: '/recharge-explain',
      name: 'recharge-explain',
      component: () => import('./views/recharge-explain/recharge-explain.vue')
    },
    {
      path: '/waitfor-detail',
      name: 'waitfor-detail',
      component: () => import('./views/waitfor-detail/waitfor-detail.vue')
    },
    {
      path: '/welfare-detail',
      name: 'welfare-detail',
      component: () => import('./views/welfare-detail/welfare-detail.vue')
    },
    {
      path: '/welfareRules',
      name: 'welfareRules',
      component: () => import('./views/welfareRules/welfareRules.vue')
    },
    {
      path: '/withdrawal',
      name: 'withdrawal',
      component: () => import('./views/withdrawal/withdrawal.vue')
    },
    {
      path: '/withdrawal-explain',
      name: 'withdrawal-explain',
      component: () => import('./views/withdrawal-explain/withdrawal-explain.vue')
    },
    {
      path: '/after-sales',
      name: 'after-sales',
      component: () => import('./views/after-sales/after-sales.vue')
    },
    {
      path: '/check-courier',
      name: 'check-courier',
      component: () => import('./views/check-courier/check-courier.vue')
    },
    {
      path: '/choose-refund',
      name: 'choose-refund',
      component: () => import('./views/choose-refund/choose-refund.vue')
    },
    {
      path: '/logistics-mes',
      name: 'logistics-mes',
      component: () => import('./views/logistics-mes/logistics-mes.vue')
    },
    {
      path: '/refund',
      name: 'refund',
      component: () => import('./views/refund/refund.vue')
    },
    {
      path: '/refund_way',
      name: 'refund_way',
      component: () => import('./views/refund_way/refund_way.vue')
    },
    {
      path: '/select_address',
      name: 'select_address',
      component: () => import('./views/select_address/select_address.vue')
    },
    {
      path: '/order-detail',
      name: 'order-detail',
      component: () => import('./views/order-detail/order-detail.vue')
    }
  ]
})
