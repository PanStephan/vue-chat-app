import Vue from 'vue'
import VueRouter from 'vue-router'

// pages imports
import Login from '../pages/Login.vue'
import Index from '../pages/Index.vue'

Vue.use(VueRouter)

export default [
  { path: '/', component: Login },
  { path: '/me', component: Index },
]
