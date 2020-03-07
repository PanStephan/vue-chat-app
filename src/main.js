// load global styles before vue styles
import './assets/styles/styles.css'

import Vue from 'vue'
import App from './components/App'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueSocketIO from 'vue-socket.io'

import routes from './routes'
import store from './store'

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_',
    },
  }),
)

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
