import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'

import './common/scss/base.scss'

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    eventBus: new Vue()
  },
  render: h => h(App)
}).$mount('#app')
