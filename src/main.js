import Vue from 'vue'
import App from './components/App'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import routes from './routes'
import store from './store'
import './assets/styles/styles.css'

Vue.use(Vuelidate)

const router = new VueRouter({
  routes,
})

Vue.config.devtools = true

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
