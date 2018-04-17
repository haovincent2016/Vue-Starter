// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import MintUI from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import 'mint-ui/lib/style.css'

Vue.use(Vuelidate)
Vue.use(VueLazyload, {
  preload: 1.3,
  error: '/static/error.png',
  loading: '/static/loading.gif',
  attempt: 2
})
Vue.use(MintUI)

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
