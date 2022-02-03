import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Bagel from '@bageldb/bagel-db';

Vue.prototype.$db = new Bagel(process.env.VUE_APP_BAGEL_TOKEN)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
console.log(window.location.href)