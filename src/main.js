// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import Vuex from 'vuex'
import store from './store/index'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import Loading from './components/loading'
import filters from './filters'
Vue.use(MintUI)
Vue.use(Loading)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

require('./assets/js/jquery-1.7.2.js')
require('./assets/js/font')
require('./assets/css/base.css')
require('./assets/js/swipe.js')
Vue.config.productionTip = false

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function(config) { //配置发送请求的信息
  store.dispatch('showLoading')
  return config;
}, function(error) {
  return Promise.reject(error);
})
axios.interceptors.response.use(function(response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function(error) {
  return Promise.reject(error);
})
Vue.prototype.$http = axios //其他页面在使用axios的时候直接  this.$http就可以了

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
