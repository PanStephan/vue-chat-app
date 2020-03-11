import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/'

// pages imports
import Entrance from '../pages/Entrance.vue'
import Profile from '../pages/Profile.vue'

Vue.use(VueRouter)

export default [
  {
    path: '/',
    component: Entrance,
    name: 'login',
  },
  {
    path: '/profile/:id',
    component: Profile,
    name: 'profile',
    async beforeEnter(to, from, next) {
      if (store.getters.getIsLogin) {
        next()
        store.dispatch('removeIsLogin')
      } else {
        next({
          name: 'login',
          query: { message: 'login_before' },
        })
      }
    },
  },
]
