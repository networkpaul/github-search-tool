import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import moment from 'moment'
import router from './router'

Vue.prototype.moment = moment

window.axios = axios
window.Bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

