import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'

import './common/scss/base.scss'

Vue.config.productionTip = false

new Vue({
  router,
<<<<<<< HEAD
  data: {
    eventBus: new Vue()
  },
=======
>>>>>>> fa3efc97221b4b79b646ce609c5c463929183dca
  render: h => h(App)
}).$mount('#app')
