import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VCharts from 'v-charts'
import store from './store'
import axios from 'axios'

Vue.use(VCharts)
const instance = axios.create({
  baseURL: 'https://luffy.ee.ncku.edu.tw:3000',
  timeout: 5000,
});

Vue.prototype.$ajax = instance
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
