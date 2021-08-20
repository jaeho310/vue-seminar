import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import api from './utils/api'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$api = api

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// vue인스턴스를 생성, App.vue를 랜더링하고 #app에 동적으로 마운트