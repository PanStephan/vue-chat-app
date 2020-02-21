import Vue from 'vue'
import VueRouter from 'vue-router'

// pages imports
import Entrance from '../pages/Entrance.vue'
import Index from '../pages/Index.vue'

Vue.use(VueRouter)

export default [
  { path: '/', component: Entrance },
  { path: '/me', component: Index },
]
