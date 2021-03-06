import Vue from 'vue'
import App from './App.vue'
import Counter from './counter.vue'

Vue.config.productionTip = false
Vue.component('app-counter', Counter)

new Vue({
  render: h => h(App),
}).$mount('#app')
