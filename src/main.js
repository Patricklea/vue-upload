import Vue from 'vue'
import App from './App.vue'
import upload from './index.js'
Vue.use(upload)

new Vue({
  el: '#app',
  render: h => h(App)
})
