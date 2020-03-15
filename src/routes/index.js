import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/'

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
    // work uncorrect
    // TODO: check it
    // only for an autologin check!!!
    async beforeEnter(to, from, next) {
      // TODO: do a regular autologin
      if (store.getters.isAuthenticated || process.env.NODE_ENV === 'development') {
        next()
      } else {
        next({
          name: 'login',
          query: { message: 'login_before' },
        })
      }
    },
  },
]
